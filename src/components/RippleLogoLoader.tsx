"use client";

export default function RippleLogoLoader({
  size = 180,
  duration = "2.2s",
  red = "#7A0000",
  logoSrc = "/d.png", // put your logo in /public
  alt = "Desnine Studio",
}) {
  return (
    <>
      <style jsx>{`
        .loader {
          --size: ${size}px;
          --duration: ${duration};
          --red: ${red};

          height: var(--size);
          aspect-ratio: 1;
          position: relative;
        }

        /* Red-tinted glass background */
        .box {
          position: absolute;
          border-radius: 50%;

          background: radial-gradient(
              120% 120% at 50% 25%,
              rgba(255, 255, 255, 0.18) 0%,
              rgba(255, 255, 255, 0.06) 35%,
              rgba(255, 255, 255, 0.02) 65%,
              rgba(255, 255, 255, 0) 100%
            ),
            linear-gradient(
              180deg,
              rgba(122, 0, 0, 0.22) 0%,
              rgba(122, 0, 0, 0.10) 55%,
              rgba(0, 0, 0, 0.10) 100%
            );

          /* red “edge” */
          border: 1px solid rgba(122, 0, 0, 0.35);
          border-top: 1px solid rgba(255, 255, 255, 0.18);

          box-shadow:
            0 12px 18px -10px rgba(0, 0, 0, 0.45),
            0 0 22px rgba(122, 0, 0, 0.18);

          backdrop-filter: blur(8px);
          animation: ripple var(--duration) infinite ease-in-out;
        }

        .box:nth-child(1) { inset: 40%; z-index: 99; }
        .box:nth-child(2) { inset: 30%; z-index: 98; animation-delay: 0.18s; opacity: 0.95; }
        .box:nth-child(3) { inset: 20%; z-index: 97; animation-delay: 0.36s; opacity: 0.85; }
        .box:nth-child(4) { inset: 10%; z-index: 96; animation-delay: 0.54s; opacity: 0.75; }
        .box:nth-child(5) { inset: 0%;  z-index: 95; animation-delay: 0.72s; opacity: 0.65; }

        .logo {
          position: absolute;
          inset: 0;
          display: grid;
          place-content: center;
          padding: 30%;
          z-index: 120;
          pointer-events: none;
        }

        /* Logo image */
        .logoImg {
          width: 100%;
          height: auto;
          display: block;
          filter: drop-shadow(0 8px 18px rgba(0, 0, 0, 0.35));
          animation: logoPulse var(--duration) infinite ease-in-out;
        }

        @keyframes ripple {
          0% {
            transform: scale(1);
            box-shadow:
              0 12px 18px -10px rgba(0, 0, 0, 0.45),
              0 0 18px rgba(122, 0, 0, 0.14);
          }
          50% {
            transform: scale(1.28);
            box-shadow:
              0 28px 24px -16px rgba(0, 0, 0, 0.50),
              0 0 34px rgba(122, 0, 0, 0.24);
          }
          100% {
            transform: scale(1);
            box-shadow:
              0 12px 18px -10px rgba(0, 0, 0, 0.45),
              0 0 18px rgba(122, 0, 0, 0.14);
          }
        }

        @keyframes logoPulse {
          0% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.04); opacity: 1; }
          100% { transform: scale(1); opacity: 0.9; }
        }
      `}</style>

      <div className="loader" aria-label="Loading">
        <div className="box">
          <div className="logo">
            <img className="logoImg" src={logoSrc} alt={alt} />
          </div>
        </div>

        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
      </div>
    </>
  );
}
