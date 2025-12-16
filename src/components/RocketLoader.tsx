"use client";

type RocketLoaderProps = {
  scale?: number;
  red?: string;
  lightRed?: string;
  smoke?: string;
  className?: string;
};

export default function RocketLoader({
  scale = 1,
  red = "#7A0000",
  lightRed = "#b33a3a",
  smoke = "#9a9a9a", // ✅ mid-gray for light + dark mode
  className = "",
}: RocketLoaderProps) {
  return (
    <>
      <style jsx>{`
        .rocket {
          position: relative;
          width: 80px;
          transform: scale(${scale});
          margin: auto;
        }

        .rocket-body {
          width: 80px;
          animation: bounce 0.5s infinite;
          position: relative;
        }

        .rocket-body .body {
          background-color: #e6e6e6;
          height: 180px;
          border-top-right-radius: 100%;
          border-top-left-radius: 100%;
          border-bottom-left-radius: 50%;
          border-bottom-right-radius: 50%;
          border-top: 5px solid #f5f5f5;
        }

        .rocket-body::before {
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 48px;
          height: 13px;
          background-color: #3a3a3a;
          bottom: -13px;
          border-bottom-right-radius: 60%;
          border-bottom-left-radius: 60%;
        }

        .window {
          position: absolute;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: ${red};
          left: 50%;
          transform: translateX(-50%);
          top: 40px;
          border: 5px solid #b4b2b2;
        }

        .fin {
          position: absolute;
          z-index: -1;
          height: 55px;
          width: 50px;
          background-color: ${lightRed};
        }

        .fin-left {
          left: -30px;
          top: calc(100% - 55px);
          border-top-left-radius: 80%;
          border-bottom-left-radius: 20%;
        }

        .fin-right {
          right: -30px;
          top: calc(100% - 55px);
          border-top-right-radius: 80%;
          border-bottom-right-radius: 20%;
        }

        .exhaust-flame {
          position: absolute;
          top: 90%;
          width: 28px;
          height: 150px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(
            to bottom,
            transparent 10%,
            ${red} 100%
          );
          animation: exhaust 0.2s infinite;
          filter: blur(1px);
        }

        /* 🔥 Smoke (contrast-safe) */
        .exhaust-fumes li {
          list-style: none;
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            ${smoke} 0%,
            rgba(154, 154, 154, 0.55) 45%,
            rgba(154, 154, 154, 0.25) 70%,
            transparent 100%
          );
          border: 1px solid rgba(0, 0, 0, 0.15);
          opacity: 0.9;
          filter: blur(1px);
        }

        .exhaust-fumes li:nth-child(1) {
          width: 200px;
          height: 200px;
          bottom: -300px;
          animation: fumes 5s infinite;
        }

        .exhaust-fumes li:nth-child(2) {
          width: 150px;
          height: 150px;
          left: -120px;
          top: 260px;
          animation: fumes 3.2s infinite;
        }

        .exhaust-fumes li:nth-child(3) {
          width: 120px;
          height: 120px;
          left: -40px;
          top: 330px;
          animation: fumes 3s 1s infinite;
        }

        .exhaust-fumes li:nth-child(4) {
          width: 100px;
          height: 100px;
          left: -170px;
          top: 380px;
          animation: fumes 4s 2s infinite;
        }

        .exhaust-fumes li:nth-child(5) {
          width: 130px;
          height: 130px;
          left: -120px;
          top: 350px;
          animation: fumes 5s infinite;
        }

        .star li::before,
        .star li::after {
          background-color: ${smoke};
        }

        @keyframes bounce {
          0% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
          100% { transform: translateY(0); }
        }

        @keyframes exhaust {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }

        @keyframes fumes {
          50% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>

      <div className={`rocket ${className}`} aria-label="Loading">
        <div className="rocket-body">
          <div className="body" />
          <div className="fin fin-left" />
          <div className="fin fin-right" />
          <div className="window" />
        </div>

        <div className="exhaust-flame" />

        <ul className="exhaust-fumes">
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i} />
          ))}
        </ul>
      </div>
    </>
  );
}
