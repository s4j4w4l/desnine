"use client";

import * as React from "react";
import Image from "next/image";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  avatar: string; // put in /public (recommended) OR remote
  rating: number; // 0-5
};

const BLUE = "#19A7FF";

const DATA: Testimonial[] = [
  {
    name: "Jane Doe",
    role: "CEO",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus elementum magna ut duis pulvinar tincidunt vivamus adipiscing quam. Eget dui quis etiam sed eget sed est.",
    avatar: "/avatar-1.jpg",
    rating: 4,
  },
  {
    name: "Jane Doe",
    role: "CEO",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus elementum magna ut duis pulvinar tincidunt vivamus adipiscing quam. Eget dui quis etiam sed eget sed est.",
    avatar: "/avatar-2.jpg",
    rating: 4,
  },
  {
    name: "Jane Doe",
    role: "CEO",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus elementum magna ut duis pulvinar tincidunt vivamus adipiscing quam. Eget dui quis etiam sed eget sed est.",
    avatar: "/avatar-3.jpg",
    rating: 4,
  },
  {
    name: "Jane Doe",
    role: "CEO",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus elementum magna ut duis pulvinar tincidunt vivamus adipiscing quam. Eget dui quis etiam sed eget sed est.",
    avatar: "/avatar-4.jpg",
    rating: 4,
  },
];

function wrap(i: number, len: number) {
  return ((i % len) + len) % len;
}

function ArrowIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={dir === "left" ? "M15 18l-6-6 6-6" : "M9 6l6 6-6 6"}
        stroke={BLUE}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Stars({ n, faded }: { n: number; faded: boolean }) {
  const on = faded ? "rgba(25,167,255,0.30)" : BLUE;
  const off = faded ? "rgba(25,167,255,0.12)" : "rgba(25,167,255,0.22)";
  return (
    <div className="stars" aria-label={`${n} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < n ? on : off }}>
          ★
        </span>
      ))}
    </div>
  );
}

function Card({
  t,
  active,
}: {
  t: Testimonial;
  active: boolean;
}) {
  return (
    <div className={`t-card ${active ? "is-active" : "is-faded"}`}>
      <div className={`quote ${active ? "q-active" : ""}`}>“</div>

      <div className="avatarWrap">
        <div className="avatarRing" />
        <div className="avatar">
          <Image src={t.avatar} alt={t.name} fill className="avatarImg" sizes="72px" />
        </div>
      </div>

      <p className="t-text">{t.text}</p>

      <Stars n={t.rating} faded={!active} />

      <div className="t-name">{t.name}</div>
      <div className="t-role">{t.role}</div>
    </div>
  );
}

export default function TestimonialsExactLikeImage() {
  const [idx, setIdx] = React.useState(1);
  const len = DATA.length;

  const left = wrap(idx - 1, len);
  const right = wrap(idx + 1, len);

  const prev = () => setIdx((v) => wrap(v - 1, len));
  const next = () => setIdx((v) => wrap(v + 1, len));

  return (
    <>
      <section className="wrap">
        <div className="inner">
          <h2 className="title">Testimonials</h2>

          <div className="stage">
            {/* arrows */}
            <button className="nav navLeft" onClick={prev} aria-label="Previous">
              <ArrowIcon dir="left" />
            </button>
            <button className="nav navRight" onClick={next} aria-label="Next">
              <ArrowIcon dir="right" />
            </button>

            {/* 3 cards desktop */}
            <div className="grid3">
              <Card t={DATA[left]} active={false} />
              <Card t={DATA[idx]} active />
              <Card t={DATA[right]} active={false} />
            </div>

            {/* 1 card mobile */}
            <div className="grid1">
              <Card t={DATA[idx]} active />
            </div>

            {/* dots */}
            <div className="dots" role="tablist" aria-label="Testimonials pagination">
              {DATA.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === idx ? "dotOn" : ""}`}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === idx}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXACT LOOK CSS (single-file) */}
      <style jsx>{`
        .wrap {
          width: 100%;
          background: #ffffff;
          padding: 42px 16px;
        }
        .inner {
          max-width: 1220px;
          margin: 0 auto;
          background: #f5f7fb;
          border-radius: 3px;
          padding: 34px 18px 46px;
        }
        .title {
          text-align: center;
          font-size: 34px;
          line-height: 1.1;
          margin: 0;
          font-weight: 800;
          color: #111827;
        }

        .stage {
          position: relative;
          margin-top: 26px;
          padding: 20px 10px 0;
        }

        .nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 42px;
          height: 42px;
          border-radius: 999px;
          border: 1px solid rgba(25, 167, 255, 0.25);
          background: #ffffff;
          display: grid;
          place-items: center;
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);
          cursor: pointer;
          z-index: 3;
        }
        .navLeft {
          left: 10px;
        }
        .navRight {
          right: 10px;
        }

        .grid3 {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 34px;
          align-items: stretch;
          justify-content: center;
          max-width: 1080px;
          margin: 0 auto;
          padding: 16px 60px 0; /* makes arrows sit outside cards like screenshot */
        }

        .grid1 {
          display: none;
          max-width: 460px;
          margin: 0 auto;
          padding-top: 16px;
        }

        .t-card {
          position: relative;
          background: #ffffff;
          border-radius: 2px;
          box-shadow: 0 14px 40px rgba(15, 23, 42, 0.08);
          padding: 44px 28px 28px;
          text-align: center;
          min-height: 420px;
        }
        .is-faded {
          opacity: 0.22;
        }
        .is-active {
          opacity: 1;
        }

        .quote {
          position: absolute;
          left: 22px;
          top: 18px;
          font-size: 86px;
          line-height: 1;
          font-weight: 900;
          color: rgba(17, 24, 39, 0.28);
          user-select: none;
        }
        .q-active {
          color: ${BLUE};
        }

        .avatarWrap {
          position: relative;
          width: 76px;
          height: 76px;
          margin: 10px auto 0;
        }
        .avatarRing {
          position: absolute;
          inset: 0;
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.06);
        }
        .avatar {
          position: absolute;
          inset: 9px;
          border-radius: 999px;
          overflow: hidden;
        }
        .avatarImg {
          object-fit: cover;
        }

        .t-text {
          margin: 18px auto 0;
          max-width: 320px;
          font-size: 13px;
          line-height: 1.7;
          color: rgba(17, 24, 39, 0.9);
        }
        .is-faded .t-text {
          color: rgba(17, 24, 39, 0.38);
        }

        .stars {
          margin-top: 18px;
          display: flex;
          justify-content: center;
          gap: 4px;
          font-size: 14px;
        }

        .t-name {
          margin-top: 10px;
          font-weight: 800;
          color: #111827;
          font-size: 16px;
        }
        .is-faded .t-name {
          color: rgba(17, 24, 39, 0.35);
        }
        .t-role {
          margin-top: 6px;
          font-size: 12px;
          letter-spacing: 0.06em;
          color: rgba(17, 24, 39, 0.8);
        }
        .is-faded .t-role {
          color: rgba(17, 24, 39, 0.28);
        }

        .dots {
          margin-top: 26px;
          display: flex;
          justify-content: center;
          gap: 7px;
        }
        .dot {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          border: 0;
          background: rgba(17, 24, 39, 0.25);
          cursor: pointer;
        }
        .dotOn {
          background: ${BLUE};
        }

        @media (max-width: 900px) {
          .grid3 {
            gap: 18px;
            padding: 16px 44px 0;
          }
          .t-card {
            padding: 42px 22px 24px;
          }
        }

        @media (max-width: 768px) {
          .grid3 {
            display: none;
          }
          .grid1 {
            display: block;
          }
          .navLeft {
            left: 6px;
          }
          .navRight {
            right: 6px;
          }
        }

        @media (max-width: 520px) {
          .inner {
            padding: 26px 12px 34px;
          }
          .title {
            font-size: 30px;
          }
          .nav {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </>
  );
}
