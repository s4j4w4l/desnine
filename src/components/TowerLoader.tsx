"use client";

type TowerLoaderProps = {
  scale?: number;
  duration?: string; // e.g. "4s"
  redLeft?: string;
  redRight?: string;
  redTop?: string;
  className?: string;
};

export default function TowerLoader({
  scale = 2.4,
  duration = "4s",
  redLeft = "#5f0000",
  redRight = "#7A0000",
  redTop = "#b10000",
  className = "",
}: TowerLoaderProps) {
  return (
    <>
      <style jsx>{`
        .loader {
          height: 50px;
          width: 40px;
          transform: scale(${scale});
          transform-origin: center;
        }

        .box {
          position: relative;
          opacity: 0;
          left: 10px;
        }

        .side-left {
          position: absolute;
          background-color: ${redLeft};
          width: 19px;
          height: 5px;
          transform: skew(0deg, -25deg);
          top: 14px;
          left: 10px;
        }

        .side-right {
          position: absolute;
          background-color: ${redRight};
          width: 19px;
          height: 5px;
          transform: skew(0deg, 25deg);
          top: 14px;
          left: -9px;
        }

        .side-top {
          position: absolute;
          background-color: ${redTop};
          width: 20px;
          height: 20px;
          rotate: 45deg;
          transform: skew(-20deg, -20deg);
        }

        .box-1 {
          animation: from-left ${duration} infinite;
        }

        .box-2 {
          animation: from-right ${duration} infinite;
          animation-delay: calc(${duration} / 4);
        }

        .box-3 {
          animation: from-left ${duration} infinite;
          animation-delay: calc(${duration} / 2);
        }

        .box-4 {
          animation: from-right ${duration} infinite;
          animation-delay: calc(${duration} * 0.75);
        }

        @keyframes from-left {
          0% {
            z-index: 20;
            opacity: 0;
            translate: -20px -6px;
          }
          20% {
            z-index: 10;
            opacity: 1;
            translate: 0px 0px;
          }
          40% {
            z-index: 9;
            translate: 0px 4px;
          }
          60% {
            z-index: 8;
            translate: 0px 8px;
          }
          80% {
            z-index: 7;
            opacity: 1;
            translate: 0px 12px;
          }
          100% {
            z-index: 5;
            translate: 0px 30px;
            opacity: 0;
          }
        }

        @keyframes from-right {
          0% {
            z-index: 20;
            opacity: 0;
            translate: 20px -6px;
          }
          20% {
            z-index: 10;
            opacity: 1;
            translate: 0px 0px;
          }
          40% {
            z-index: 9;
            translate: 0px 4px;
          }
          60% {
            z-index: 8;
            translate: 0px 8px;
          }
          80% {
            z-index: 7;
            opacity: 1;
            translate: 0px 12px;
          }
          100% {
            z-index: 5;
            translate: 0px 30px;
            opacity: 0;
          }
        }
      `}</style>

      <div className={`loader ${className}`} aria-label="Loading">
        <div className="box box-1">
          <div className="side-left" />
          <div className="side-right" />
          <div className="side-top" />
        </div>

        <div className="box box-2">
          <div className="side-left" />
          <div className="side-right" />
          <div className="side-top" />
        </div>

        <div className="box box-3">
          <div className="side-left" />
          <div className="side-right" />
          <div className="side-top" />
        </div>

        <div className="box box-4">
          <div className="side-left" />
          <div className="side-right" />
          <div className="side-top" />
        </div>
      </div>
    </>
  );
}
