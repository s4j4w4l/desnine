"use client";

type RadarLoaderProps = {
  size?: number;
  red?: string;
  lightRed?: string;
  duration?: string;
  className?: string;
};

export default function RadarLoader({
  size = 150,
  red = "#7A0000",
  lightRed = "rgba(122, 0, 0, 0.35)",
  duration = "2s",
  className = "",
}: RadarLoaderProps) {
  const inner = Math.floor(size * 0.23);
  const inset = Math.floor(size * 0.15);

  return (
    <>
      <style jsx>{`
        /* MAIN RADAR */
        .loader {
          position: relative;
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;

          /* 🔴 Radar outer border */
          border: 2px solid ${red};

          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;

          /* subtle depth */
          box-shadow:
            0 0 0 1px rgba(122, 0, 0, 0.25),
            inset 0 0 30px rgba(122, 0, 0, 0.15);
        }

        /* Outer dashed ring */
        .loader::before {
          content: "";
          position: absolute;
          inset: ${inset}px;
          border: 1.5px dashed ${red};
          border-radius: 50%;
          opacity: 0.9;
        }

        /* Inner dashed ring */
        .loader::after {
          content: "";
          position: absolute;
          width: ${inner}px;
          height: ${inner}px;
          border-radius: 50%;
          border: 1.5px dashed ${red};
          opacity: 0.85;
        }

        /* Rotating radar arm */
        .loader span {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 50%;
          height: 100%;
          transform-origin: top left;
          animation: radar-spin ${duration} linear infinite;

          /* 🔴 Red dotted sweep line */
          border-top: 2px dashed ${red};
        }

        /* Radar sweep cone */
        .loader span::before {
          content: "";
          position: absolute;
          inset: 0;
          transform-origin: top left;
          transform: rotate(-55deg);

          /* 🌸 Light red radar sweep */
          background: radial-gradient(
            circle at top left,
            ${lightRed} 0%,
            rgba(122, 0, 0, 0.18) 45%,
            rgba(122, 0, 0, 0.08) 60%,
            transparent 75%
          );

          filter: blur(20px);
        }

        @keyframes radar-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <div className={`loader ${className}`} aria-label="Radar loading">
        <span />
      </div>
    </>
  );
}
