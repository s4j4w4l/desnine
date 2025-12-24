"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";

type Desnine3DRotatingBGProps = {
  /** Put your logo path here (use the image you uploaded) */
  logoSrc?: string;
  /** Portrait height (section). Use "h-screen" for full screen */
  className?: string;
  /** Rotation speed in seconds */
  speedSeconds?: number;
};

const DESNINE_RED = "#7A0000";
const DESNINE_RED_2 = "#B42B25";

export default function Desnine3DRotatingBG({
  logoSrc = "/images/desnine-mark.png",
  className = "h-screen",
  speedSeconds = 14,
}: Desnine3DRotatingBGProps) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Base gradient (background) */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 opacity-90 bg-[radial-gradient(1100px_circle_at_20%_20%,rgba(180,43,37,0.55),transparent_55%),radial-gradient(900px_circle_at_85%_30%,rgba(122,0,0,0.55),transparent_60%),radial-gradient(900px_circle_at_40%_85%,rgba(180,43,37,0.35),transparent_60%),linear-gradient(180deg,#070707,rgba(0,0,0,0.92))]" />

      {/* Soft vignette */}
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(80%_70%_at_50%_45%,black_55%,transparent_92%)] bg-black/60" />

      {/* 3D Stage */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="stage">
          {/* Rotating "tube" / card that sells the 3D rotation */}
          <div className="spinner" style={{ ["--dur" as any]: `${speedSeconds}s` }}>
            {/* Gradient face */}
            <div className="face faceFront" />
            {/* Back face */}
            <div className="face faceBack" />
            {/* Side glow */}
            <div className="edgeGlow" />

            {/* Logo (floats in front) */}
            <div className="logoWrap">
              <img src={logoSrc} alt="Desnine" className="logoImg" />
            </div>
          </div>

          {/* Floor reflection / haze */}
          <div className="floor" />
        </div>
      </div>

      <style jsx>{`
        .stage {
          width: min(520px, 86vw);
          aspect-ratio: 9 / 16; /* vertical */
          position: relative;
          perspective: 1200px;
          transform-style: preserve-3d;
        }

        .spinner {
          position: absolute;
          inset: 0;
          transform-style: preserve-3d;
          animation: spin var(--dur) linear infinite;
        }

        .face {
          position: absolute;
          inset: 0;
          border-radius: 26px;
          transform-style: preserve-3d;
          backface-visibility: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.55);
          overflow: hidden;
        }

        .faceFront {
          transform: translateZ(34px);
          background:
            radial-gradient(900px circle at 20% 15%, rgba(180, 43, 37, 0.85), transparent 55%),
            radial-gradient(700px circle at 80% 30%, rgba(122, 0, 0, 0.9), transparent 55%),
            radial-gradient(700px circle at 35% 85%, rgba(180, 43, 37, 0.55), transparent 60%),
            linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.85));
        }

        .faceFront::after {
          content: "";
          position: absolute;
          inset: -2px;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0.06),
            rgba(255, 255, 255, 0.0) 35%,
            rgba(255, 255, 255, 0.05) 70%,
            rgba(255, 255, 255, 0.0)
          );
          transform: translateZ(2px);
          pointer-events: none;
          mix-blend-mode: screen;
          opacity: 0.7;
        }

        .faceBack {
          transform: rotateY(180deg) translateZ(34px);
          background:
            radial-gradient(900px circle at 70% 25%, rgba(180, 43, 37, 0.65), transparent 55%),
            radial-gradient(800px circle at 30% 70%, rgba(122, 0, 0, 0.75), transparent 60%),
            linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.92));
          filter: saturate(1.05) contrast(1.05);
        }

        .edgeGlow {
          position: absolute;
          inset: 8px;
          border-radius: 22px;
          transform: translateZ(20px);
          pointer-events: none;
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.06) inset,
            0 0 70px rgba(180, 43, 37, 0.25),
            0 0 120px rgba(122, 0, 0, 0.22);
          opacity: 0.9;
        }

        .logoWrap {
          position: absolute;
          left: 50%;
          top: 40%;
          transform: translate(-50%, -50%) translateZ(70px);
          width: min(220px, 46%);
          aspect-ratio: 1 / 1;
          display: grid;
          place-items: center;
          filter: drop-shadow(0 16px 28px rgba(0,0,0,0.55));
          pointer-events: none;
        }

        .logoImg {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transform: rotateZ(-6deg);
        }

        .floor {
          position: absolute;
          left: 50%;
          bottom: -10%;
          transform: translateX(-50%) rotateX(72deg);
          width: 120%;
          height: 55%;
          border-radius: 40px;
          background:
            radial-gradient(closest-side, rgba(180, 43, 37, 0.26), transparent 70%),
            radial-gradient(closest-side, rgba(122, 0, 0, 0.22), transparent 75%),
            linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.9));
          filter: blur(2px);
          opacity: 0.9;
        }

        @keyframes spin {
          0% {
            transform: rotateY(0deg) rotateX(8deg);
          }
          100% {
            transform: rotateY(360deg) rotateX(8deg);
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .spinner {
            animation: none;
            transform: rotateY(18deg) rotateX(8deg);
          }
        }
      `}</style>
    </div>
  );
}
