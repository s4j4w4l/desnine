import { NextResponse } from "next/server";

const MAX_JSON_BYTES = 16_384;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const globalRateLimits = globalThis as typeof globalThis & {
  __desnineRateLimits?: Map<string, RateLimitEntry>;
};

const rateLimits =
  globalRateLimits.__desnineRateLimits ??
  (globalRateLimits.__desnineRateLimits = new Map<string, RateLimitEntry>());

const errorResponse = (message: string, status: number, headers?: HeadersInit) =>
  NextResponse.json(
    { ok: false, message },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
        ...headers,
      },
    }
  );

const getClientIp = (request: Request) =>
  request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
  request.headers.get("x-real-ip")?.trim() ||
  "unknown";

const isAllowedBrowserOrigin = (request: Request) => {
  const fetchSite = request.headers.get("sec-fetch-site");
  if (fetchSite === "cross-site") return false;

  const origin = request.headers.get("origin");
  if (!origin) return true;

  try {
    const { hostname } = new URL(origin);
    if (hostname === "desnine.com" || hostname === "www.desnine.com") return true;
    return (
      process.env.NODE_ENV !== "production" &&
      (hostname === "localhost" || hostname === "127.0.0.1")
    );
  } catch {
    return false;
  }
};

export function protectPublicForm(
  request: Request,
  endpoint: string,
  limit = 5
): NextResponse | null {
  if (!isAllowedBrowserOrigin(request)) {
    return errorResponse("Request origin is not allowed.", 403);
  }

  const contentType = request.headers.get("content-type")?.toLowerCase() || "";
  if (!contentType.startsWith("application/json")) {
    return errorResponse("Content-Type must be application/json.", 415);
  }

  const contentLength = Number(request.headers.get("content-length") || "0");
  if (Number.isFinite(contentLength) && contentLength > MAX_JSON_BYTES) {
    return errorResponse("Request body is too large.", 413);
  }

  const now = Date.now();
  if (rateLimits.size > 10_000) {
    for (const [storedKey, entry] of rateLimits) {
      if (entry.resetAt <= now) rateLimits.delete(storedKey);
    }
    while (rateLimits.size > 10_000) {
      const oldestKey = rateLimits.keys().next().value as string | undefined;
      if (!oldestKey) break;
      rateLimits.delete(oldestKey);
    }
  }
  const key = `${endpoint}:${getClientIp(request)}`;
  const current = rateLimits.get(key);

  if (!current || current.resetAt <= now) {
    rateLimits.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return null;
  }

  if (current.count >= limit) {
    const retryAfter = Math.max(1, Math.ceil((current.resetAt - now) / 1000));
    return errorResponse("Too many requests. Please try again later.", 429, {
      "Retry-After": String(retryAfter),
    });
  }

  current.count += 1;
  return null;
}

export async function readJsonBody(request: Request): Promise<unknown> {
  if (!request.body) return {};

  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let received = 0;
  let text = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    received += value.byteLength;
    if (received > MAX_JSON_BYTES) {
      await reader.cancel();
      throw new Error("PAYLOAD_TOO_LARGE");
    }
    text += decoder.decode(value, { stream: true });
  }

  text += decoder.decode();
  return JSON.parse(text || "{}");
}

export const cleanText = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

export const isValidEmail = (value: string) =>
  value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export function safeApiError(message = "Unable to submit the form right now.") {
  return errorResponse(message, 500);
}

export function invalidPayload(message: string) {
  return errorResponse(message, 400);
}

export function payloadTooLarge() {
  return errorResponse("Request body is too large.", 413);
}
