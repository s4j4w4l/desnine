"use client";

type TerminalLoaderProps = {
  title?: string;
  text?: string;
  widthEm?: number;      // terminal width in "em"
  fontSize?: number;     // 1 = default
  red?: string;          // Desnine red
};

export default function TerminalLoader({
  title = "Status",
  text = "Loading...",
  widthEm = 12,
  fontSize = 1,
  red = "#7A0000",
}: TerminalLoaderProps) {
  // For the typing width (roughly matches characters)
  const typeWidthEm = Math.max(3, text.length * 0.62);

  return (
    <>
      <style jsx>{`
        @keyframes blinkCursor {
          50% {
            border-right-color: transparent;
          }
        }

        @keyframes typeAndDelete {
          0%,
          10% {
            width: 0;
          }
          45%,
          55% {
            width: ${typeWidthEm}em;
          }
          90%,
          100% {
            width: 0;
          }
        }

        .terminal-loader {
          border: 0.1em solid rgba(255, 255, 255, 0.12);
          background: linear-gradient(180deg, #141414 0%, #0f0f0f 100%);
          color: ${red};
          font-family: "Courier New", Courier, monospace;
          font-size: ${fontSize}em;
          padding: 1.5em 1em;
          width: ${widthEm}em;
          box-shadow:
            0 10px 24px rgba(0, 0, 0, 0.45),
            0 0 18px rgba(122, 0, 0, 0.22);
          border-radius: 10px;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }

        .terminal-header {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1.7em;
          background: rgba(255, 255, 255, 0.06);
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          padding: 0 0.6em;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .terminal-title {
          line-height: 1.7em;
          color: rgba(255, 255, 255, 0.82);
          font-weight: 600;
          font-size: 0.95em;
          letter-spacing: 0.2px;
        }

        .terminal-controls {
          display: flex;
          gap: 0.4em;
        }

        .control {
          width: 0.65em;
          height: 0.65em;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.22);
        }

        /* keep mac-style dots but slightly desnine toned */
        .control.close {
          background-color: rgba(255, 70, 70, 0.9);
        }

        .control.minimize {
          background-color: rgba(255, 200, 60, 0.95);
        }

        .control.maximize {
          background-color: rgba(70, 220, 120, 0.95);
        }

        .text {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          border-right: 0.2em solid ${red}; /* Cursor */
          animation:
            typeAndDelete 4s steps(${Math.max(6, text.length)}) infinite,
            blinkCursor 0.5s step-end infinite alternate;
          margin-top: 1.9em;
          text-shadow: 0 0 10px rgba(122, 0, 0, 0.35);
        }
      `}</style>

      <div className="terminal-loader" aria-label="Loading">
        <div className="terminal-header">
          <div className="terminal-title">{title}</div>
          <div className="terminal-controls">
            <div className="control close" />
            <div className="control minimize" />
            <div className="control maximize" />
          </div>
        </div>

        <div className="text">{text}</div>
      </div>
    </>
  );
}
