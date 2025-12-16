// "use client";

// import { siteConfig } from "@/lib/config";
// import Link from "next/link";


// interface HowWeWorkBentoSectionProps {
//   count?: number;
// }

// export function HowWeWorkBentoSection({ count }: HowWeWorkBentoSectionProps) {
//   const { howWeWork } = siteConfig;

//   const items = howWeWork.items ?? [];
//   const displayItems = count ? items.slice(0, count) : items;

//   return (
//     <section
//       id="howWeWork"
//       className="flex flex-col items-center justify-center w-full relative px-5 md:px-10"
//     >
//       <div className="border-x mx-5 md:mx-10 relative w-full">
//         {/* Side decorations (kept) */}
//         <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]" />
//         <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]" />

//         {/* Header (no horizontal separator line) */}
//         <div className="pt-20 md:pt-24 pb-10 md:pb-12 px-5 md:px-10 text-center">
//           <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
//             {howWeWork.title}
//           </h2>
//           <p className="mt-3 text-muted-foreground max-w-2xl mx-auto font-medium">
//             {howWeWork.description}
//           </p>
//         </div>

//         {/* Items grid (bento style) */}
//         <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
//           {displayItems.map((item) => (
//             <div
//               key={item.id}
//               className="flex flex-col items-start justify-end min-h-[600px] md:min-h-[500px] p-0.5 relative
//                          before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-['']
//                          after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-['']
//                          group max-h-[400px]"
//             >
//               <div className="relative flex size-full items-center justify-center h-full overflow-hidden">
//                 <div className="w-full h-full p-8 md:p-10 flex flex-col">
//                   <div className="text-sm font-semibold tracking-tight text-muted-foreground">
//                     STEP {item.id}
//                     <span className="ml-0.5 text-[#7A0000]">.</span>
//                   </div>

//                   <h3 className="mt-10 text-2xl md:text-3xl font-bold tracking-tight">
//                     {item.title}
//                   </h3>

//                   <p className="mt-3 text-muted-foreground leading-relaxed max-w-md">
//                     {item.description}
//                   </p>

//                   <div className="flex-1" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom spacing */}
//         <div className="pb-16 md:pb-20" />
//       </div>
//     </section>
//   );
// }


"use client";

import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { SectionHeader } from "../section-header";


interface HowWeWorkBentoSectionProps {
  count?: number;
}

export function HowWeWorkBentoSection({ count }: HowWeWorkBentoSectionProps) {
  const { howWeWork } = siteConfig;

  const items = howWeWork.items ?? [];
  const displayItems = count ? items.slice(0, count) : items;

  return (
    <section
      id="bento"
      className="flex flex-col items-center justify-center w-full relative px-5 md:px-10"
    >
      <div className="border-x mx-5 md:mx-10 relative">
        {/* Background decorations */}
        <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
        <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>


        {/* Section header
        <SectionHeader>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
            {howWeWork.title}
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium">
            {howWeWork.description}
          </p>
        </SectionHeader> */}


        {/* Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {displayItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start justify-end min-h-[600px] md:min-h-[500px] p-0.5 relative before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-[''] group cursor-pointer max-h-[400px]"
            >
              <div className="relative flex size-full items-center justify-center h-full overflow-hidden">
                {item.content}
              </div>
              <div className="flex-1 flex-col gap-2 p-6">
                <h3 className="text-lg tracking-tighter font-semibold">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
