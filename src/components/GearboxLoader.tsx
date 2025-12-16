"use client";

type GearboxLoaderProps = {
  width?: number;
  height?: number;
  red?: string;        // Desnine red
  gearColor?: string;  // main gear tone
  bg?: string;         // box background
  speed?: number;      // base seconds (3 = original)
  className?: string;
};

export default function GearboxLoader({
  width = 200,
  height = 150,
  red = "#7A0000",
  gearColor = "#3a0a0a",
  bg = "#111",
  speed = 3,
  className = "",
}: GearboxLoaderProps) {
  return (
    <>
      <style jsx>{`
        @keyframes clockwise {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes counter-clockwise {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }

        .gearbox {
          background: ${bg};
          height: ${height}px;
          width: ${width}px;
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.10);
        }

        .overlay {
          border-radius: 10px;
          position: absolute;
          inset: 0;
          z-index: 10;
          box-shadow: inset 0 0 22px rgba(0,0,0,0.9);
          background: transparent;
          pointer-events: none;
        }

        .gear {
          position: absolute;
          height: 60px;
          width: 60px;
          border-radius: 30px;
          box-shadow:
            0 -1px 0 0 rgba(255,255,255,0.10),
            0 1px 0 0 rgba(0,0,0,0.9);
        }

        .gear.large {
          height: 120px;
          width: 120px;
          border-radius: 60px;
        }

        .gear.large:after {
          height: 96px;
          width: 96px;
          border-radius: 48px;
          margin-left: -48px;
          margin-top: -48px;
        }

        .gear.one { top: 12px; left: 10px; }
        .gear.two { top: 61px; left: 60px; }
        .gear.three { top: 110px; left: 10px; }
        .gear.four { top: 13px; left: 128px; }

        .gear:after {
          content: "";
          position: absolute;
          height: 36px;
          width: 36px;
          border-radius: 36px;
          background: ${bg};
          top: 50%;
          left: 50%;
          margin-left: -18px;
          margin-top: -18px;
          z-index: 3;
          box-shadow:
            0 0 10px rgba(122,0,0,0.25),
            inset 0 0 10px rgba(0,0,0,0.25),
            inset 0 2px 0 0 rgba(0,0,0,0.7),
            inset 0 -1px 0 0 rgba(255,255,255,0.08);
        }

        .gear-inner {
          position: relative;
          height: 100%;
          width: 100%;

          /* 🔴 Gear body */
          background: radial-gradient(
            circle at 30% 30%,
            rgba(122,0,0,0.35),
            ${gearColor} 55%,
            rgba(0,0,0,0.35) 100%
          );

          border-radius: 30px;
          border: 1px solid rgba(255,255,255,0.10);
        }

        .large .gear-inner {
          border-radius: 60px;
        }

        .gear.one .gear-inner {
          animation: counter-clockwise ${speed}s infinite linear;
        }

        .gear.two .gear-inner {
          animation: clockwise ${speed}s infinite linear;
        }

        .gear.three .gear-inner {
          animation: counter-clockwise ${speed}s infinite linear;
        }

        .gear.four .gear-inner {
          animation: counter-clockwise ${speed * 2}s infinite linear;
        }

        .gear-inner .bar {
          /* 🔴 Gear teeth bars */
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.06),
            ${red},
            rgba(255,255,255,0.06)
          );
          height: 16px;
          width: 76px;
          position: absolute;
          left: 50%;
          margin-left: -38px;
          top: 50%;
          margin-top: -8px;
          border-radius: 2px;
          border-left: 1px solid rgba(255,255,255,0.12);
          border-right: 1px solid rgba(255,255,255,0.12);
          opacity: 0.9;
        }

        .large .gear-inner .bar {
          margin-left: -68px;
          width: 136px;
        }

        .gear-inner .bar:nth-child(2) { transform: rotate(60deg); }
        .gear-inner .bar:nth-child(3) { transform: rotate(120deg); }
        .gear-inner .bar:nth-child(4) { transform: rotate(90deg); }
        .gear-inner .bar:nth-child(5) { transform: rotate(30deg); }
        .gear-inner .bar:nth-child(6) { transform: rotate(150deg); }
      `}</style>

      <div className={`gearbox ${className}`} aria-label="Loading">
        <div className="overlay" />

        <div className="gear one">
          <div className="gear-inner">
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        </div>

        <div className="gear two">
          <div className="gear-inner">
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        </div>

        <div className="gear three">
          <div className="gear-inner">
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        </div>

        <div className="gear four large">
          <div className="gear-inner">
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        </div>
      </div>
    </>
  );
}
