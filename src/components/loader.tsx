"use client";

export default function RedBlockLoader({
  size = 70,
  red = "#7A0000",
}) {
  const blocks = Array.from({ length: 6 });

  return (
    <>
      <style jsx>{`
        .loader {
          width: ${size}px;
          height: ${size}px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
        }

        .loader span {
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg,
            rgba(122, 0, 0, 0.9),
            rgba(122, 0, 0, 0.6)
          );
          box-shadow:
            0 4px 10px rgba(122, 0, 0, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          border-radius: 3px;
          animation: blink 0.6s alternate infinite ease-in-out;
        }

        .loader span:nth-child(1) { animation-delay: 0ms; }
        .loader span:nth-child(2) { animation-delay: 200ms; }
        .loader span:nth-child(3) { animation-delay: 300ms; }
        .loader span:nth-child(4) { animation-delay: 400ms; }
        .loader span:nth-child(5) { animation-delay: 500ms; }
        .loader span:nth-child(6) { animation-delay: 600ms; }

        @keyframes blink {
          0% {
            opacity: 0.35;
            transform: scale(0.55) rotate(4deg);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

      <div className="loader" aria-label="Loading">
        {blocks.map((_, i) => (
          <span key={i} />
        ))}
      </div>
    </>
  );
}
