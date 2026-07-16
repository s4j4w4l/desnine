import { headers } from "next/headers";
import { ImageResponse } from "next/og";

// Configuration exports
export const runtime = "edge";
export const alt = "Desnine Studio - Independent, Multi-Disciplinary Design Studio | Brand Identity, Web Design, SEO & AI Automation";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  try {
    // Get the host from headers
    const headersList = await headers();
    const host = headersList.get("host") || "";
    const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
    const baseUrl = `${protocol}://${host}`;

    return new ImageResponse(
      (
        <div
          style={{
            background: '#050505',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              marginBottom: '20px',
              lineHeight: 1.2,
          }}
        >
            Desnine
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: 'rgba(255, 255, 255, 0.9)',
              textAlign: 'center',
              maxWidth: '800px',
              lineHeight: 1.4,
            }}
          >
            Independent, Multi-Disciplinary Design Studio
          </p>
          <p
            style={{
              fontSize: '24px',
              color: 'rgba(255, 255, 255, 0.6)',
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            Branding • Web Design • SEO • AI Automation
          </p>
        </div>
      ),
      {
        ...size,
      }
    )
  } catch (error) {
    console.error("Error generating OpenGraph image:", error);
    return new Response(`Failed to generate image`, { status: 500 });
  }
}
