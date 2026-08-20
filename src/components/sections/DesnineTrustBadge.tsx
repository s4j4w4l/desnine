// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// const DESNINE_RED = "#B42B25";

// export function DesnineTrustBadge() {
//   return (
//     <div className="flex items-center gap-35">
      
//       {/* Left: Desnine logo (vertical spin) */}
//       <motion.div
//         className="flex items-center"
//         style={{ perspective: 800 }}
//         animate={{ rotateY: 360 }}
//         transition={{
//           duration: 4,
//           ease: "linear",
//           repeat: Infinity,
//         }}
//       >
//         <Image
//           src="/Desnine-logo.png"
//           alt="Desnine"
//           width={28}
//           height={28}
//           className="h-7 w-7 object-contain"
//         />
//       </motion.div>

//       {/* Right: animated stars + label */}
//       <div className="flex flex-col items-end gap-1">
//         <div className="flex gap-1">
//           {Array.from({ length: 5 }).map((_, i) => (
//             <motion.svg
//               key={i}
//               width="14"
//               height="14"
//               viewBox="0 0 24 24"
//               fill={DESNINE_RED}
//               aria-hidden="true"
//               initial={{ opacity: 0.6, scale: 1 }}
//               animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.15, 1] }}
//               transition={{
//                 duration: 1.6,
//                 ease: "easeInOut",
//                 repeat: Infinity,
//                 delay: i * 0.15, // staggered stars
//               }}
//             >
//               <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//             </motion.svg>
//           ))}
//         </div>

//         <p className="text-xs text-muted-foreground">
//           Loved by Big Brands
//         </p>
//       </div>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useLang } from "@/contexts/LanguageContext";

const DESNINE_RED = "#B42B25";

function ArrowHoverButton({
  children,
  onClick,
  variant = "filled",
}: {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "filled" | "outline";
}) {
  const isFilled = variant === "filled";

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="group inline-flex cursor-pointer select-none items-center overflow-hidden whitespace-nowrap rounded-full px-3 py-1.5 text-[10px] font-medium pointer-events-auto sm:px-4 sm:py-2 sm:text-xs"
      style={{
        backgroundColor: isFilled ? DESNINE_RED : "transparent",
        color: isFilled ? "#ffffff" : DESNINE_RED,
        border: `1.5px solid ${DESNINE_RED}`,
      }}
      whileHover={{
        scale: 1.03,
        boxShadow: isFilled ? "0 0 8px rgba(180,43,37,0.25)" : "none",
      }}
      whileTap={{ scale: 0.96 }}
    >
      <span className="transition-transform duration-300 ease-out group-hover:-translate-x-1">
        {children}
      </span>

      <span className="ml-0 max-w-0 overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:ml-2 group-hover:max-w-5 group-hover:opacity-100">
        →
      </span>
    </motion.button>
  );
}

export function DesnineTrustBadge() {
  const router = useRouter();
  const { t } = useLang();

  const goContact = () => {
    router.push("/contact");

    setTimeout(() => {
      if (window.location.pathname !== "/contact") {
        window.location.href = "/contact";
      }
    }, 120);
  };

  return (
    <div className="relative z-10 flex origin-center scale-[0.86] transform-gpu items-start gap-12 sm:scale-100 sm:gap-20 md:gap-28 lg:gap-36 xl:gap-44">
      <div className="mr-24 flex shrink-0 flex-col items-start gap-3 sm:mr-32 md:mr-48 lg:mr-56">
        <ArrowHoverButton onClick={goContact} variant="filled">
          {t.trustBadge.freeQuote}
        </ArrowHoverButton>

        <ArrowHoverButton onClick={() => router.push("/work")} variant="outline">
          {t.trustBadge.seeWork}
        </ArrowHoverButton>
      </div>

      <div className="flex shrink-0 flex-col items-end gap-2">
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.svg
                key={i}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill={DESNINE_RED}
                aria-hidden="true"
                className="pointer-events-none h-3 w-3 sm:h-3.5 sm:w-3.5"
                animate={{
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 1.6,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              >
                <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </motion.svg>
            ))}

            <span
              className="text-[10px] font-medium leading-none sm:text-xs"
              style={{ color: DESNINE_RED }}
            >
              4.9/5.0
            </span>
          </div>

          <p className="whitespace-nowrap text-[10px] text-muted-foreground sm:text-xs">
            {t.trustBadge.lovedBy}
          </p>
        </div>

        <div className="flex items-center">
          {[
            "/clients/client4.jpg",
            "/clients/client2.jpg",
            "/clients/client3.jpg",
            "/clients/client1.jpg",
          ].map((src, i) => (
            <motion.div
              key={i}
              className="-ml-2 first:ml-0 h-6 w-6 overflow-hidden rounded-full border border-white shadow-sm sm:h-8 sm:w-8 sm:border-2"
              style={{ zIndex: 10 - i }}
              whileHover={{ y: -2 }}
            >
              <img
                src={src}
                alt={`Client ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}