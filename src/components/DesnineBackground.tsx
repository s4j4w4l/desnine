// "use client";

// import React from "react";
// import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

// export default function DesnineBackground() {
//   return (
//     <div className="fixed inset-0 -z-10">
//       <ShaderGradientCanvas
//         style={{
//           width: "100%",
//           height: "100%",
//         }}
//         pixelDensity={1}
//         pointerEvents="none"
//       >
//         <ShaderGradient
//           /* Animation */
//           animate="on"
//           uSpeed={0.25}
//           uStrength={0.35}
//           uDensity={0.9}
//           uFrequency={5.2}
//           uAmplitude={3}

//           /* Shape */
//           type="sphere"
//           shader="defaults"
//           wireframe={false}

//           /* Position & rotation */
//           positionX={-0.15}
//           positionY={0}
//           positionZ={0}
//           rotationX={0}
//           rotationY={140}
//           rotationZ={60}

//           /* Desnine color palette */
//           color1="#7A0000"   // Desnine deep red
//           color2="#B42B25"   // warm accent red
//           color3="#F2F2F2"   // soft neutral light

//           /* Lighting & camera */
//           reflection={0.35}
//           lightType="env"
//           brightness={0.75}
//           envPreset="city"
//           cameraZoom={14.5}
//           cAzimuthAngle={260}
//           cPolarAngle={180}
//           cDistance={0.6}

//           /* Texture */
//           grain="on"

//           /* UX */
//           toggleAxis={false}
//           zoomOut={false}
//           enableTransition={false}
//         />
//       </ShaderGradientCanvas>
//     </div>
//   );
// }


"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";

type Desnine3DRotatingLogoProps = {
  logoSrc?: string;
  size?: number; // px
  speedSeconds?: number; // rotation duration
  className?: string;
};

export default function Desnine3DRotatingLogo({
  logoSrc = "/d.png",
  size = 220,
  speedSeconds = 12,
  className = "",
}: Desnine3DRotatingLogoProps) {
  return (
    <div
      className={`relative grid place-items-center ${className}`}
      style={{ width: size, height: size }}
      aria-label="Desnine rotating logo"
    >
      {/* optional soft glow behind logo (NOT a box) */}
      <div
        className="absolute inset-0 rounded-full blur-2xl opacity-50"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, rgba(180,43,37,0.45), transparent 60%)",
        }}
      />

      {/* 3D stage */}
      <div className="stage">
        <div className="spinner" style={{ ["--dur" as any]: `${speedSeconds}s` }}>
          <img src={logoSrc} alt="Desnine" className="logo" />
          {/* faint “thickness” ghost to sell depth */}
          <img src={logoSrc} alt="" aria-hidden="true" className="logo back" />
        </div>
      </div>

      <style jsx>{`
        .stage {
          width: 100%;
          height: 100%;
          perspective: 1200px;
          transform-style: preserve-3d;
          display: grid;
          place-items: center;
        }

        .spinner {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: spin var(--dur) linear infinite;
          display: grid;
          place-items: center;
        }

        .logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transform: translateZ(24px) rotateZ(-6deg);
          filter: drop-shadow(0 18px 30px rgba(0, 0, 0, 0.55));
          backface-visibility: hidden;
          user-select: none;
          pointer-events: none;
        }

        /* “Back” copy gives a subtle 3D thickness feel */
        .logo.back {
          position: absolute;
          inset: 0;
          transform: rotateY(180deg) translateZ(20px) rotateZ(-6deg);
          opacity: 0.15;
          filter: blur(0.4px) drop-shadow(0 10px 18px rgba(0, 0, 0, 0.35));
        }

        @keyframes spin {
          0% {
            transform: rotateY(0deg) rotateX(10deg);
          }
          100% {
            transform: rotateY(360deg) rotateX(10deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .spinner {
            animation: none;
            transform: rotateY(18deg) rotateX(10deg);
          }
        }
      `}</style>
    </div>
  );
}

