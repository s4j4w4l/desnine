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
import Link from "next/link";

const DESNINE_RED = "#B42B25";

export function DesnineTrustBadge() {
  return (
    <div className="flex items-center gap-25">
      
      {/* CTA LINK (correct & future-proof) */}
      <Link href="/contact" className="inline-block">
        <motion.div
          className="inline-flex cursor-pointer items-center rounded-full border px-4 py-2 text-xs font-medium select-none"
          style={{
            color: DESNINE_RED,
            borderColor: DESNINE_RED,
          }}
          animate={{
            borderColor: [
              "rgba(180,43,37,0.4)",
              "rgba(180,43,37,1)",
              "rgba(180,43,37,0.4)",
            ],
            boxShadow: [
              "0 0 0px rgba(180,43,37,0)",
              "0 0 10px rgba(180,43,37,0.6)",
              "0 0 0px rgba(180,43,37,0)",
            ],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 18px rgba(180,43,37,0.9)",
          }}
          whileTap={{ scale: 0.96 }}
        >
          Get your free quote
        </motion.div>
      </Link>

      {/* Right: animated stars + label */}
      <div className="flex flex-col items-end gap-1">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.svg
              key={i}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill={DESNINE_RED}
              aria-hidden="true"
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
        </div>

        <p className="text-xs text-muted-foreground">
          Loved by Big Brands
        </p>
      </div>
    </div>
  );
}
