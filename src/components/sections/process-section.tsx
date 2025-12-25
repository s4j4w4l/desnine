// "use client";

// import { SectionHeader } from "@/components/section-header";
// import { TerminalDemo } from "@/components/terminal";
// import { FileTreeDemo } from "@/components/file-tree";
// import { DiscoveryAnimation } from "@/components/discovery-animation";
// import { ChartRadarDefault } from "@/components/chart-radar";
// import { SafariDemo } from "@/components/safari";
// import { AnimatedListDemo } from "@/components/animated-noti";
// import { Iphone15ProDemo } from "@/components/iphone-zoom";
// import { FourthBentoAnimation } from "@/components/fourth-bento-animation";

// const processSteps = [
//   {
//     id: 1,
//     title: "Discovery",
//     description: "We start with a deep dive into your vision, goals, and brand identity.",
//     animation: <DiscoveryAnimation />,
//   },
//   {
//     id: 2,
//     title: "Strategy & Planning",
//     description: "We map out the project with clear milestones, timelines and creative direction.",
//     animation: <ChartRadarDefault />,
//   },
//   {
//     id: 3,
//     title: "Creative Proposal.",
//     description: "Our design team creates intuitive and visually appealing interfaces that enhance user experience. We focus on modern design principles while ensuring your brand identity shines through.",
//     animation: <SafariDemo />,
//   },
//   {
//     id: 4,
//     title: "Design & Development",
//     description: "From visual identity to website or content, we build assets with precision.",
//     animation: <TerminalDemo />,
//   },
//   {
//     id: 5,
//     title: "Delivery",
//     description: "Final files are delivered, optimized, and ready to elavate your brand across all platforms.",
//     animation: <FileTreeDemo />,
//   },
//   {
//     id: 6,
//     title: "Launch & Support",
//     description: "We stay by your side to ensure a smooth rollout and answer final questions.",
//     animation: <AnimatedListDemo />,
//   },
// ];

// export function ProcessSection() {
//   return (
//     <section
//       id="process"
//       className="flex flex-col items-center justify-center w-full relative bg-background"
//     >
//       <div className="border-x relative">
//         {/* Background decorations */}
//         <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
//         <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

//         {/* Section header */}
//         <div className="w-full h-full p-10 md:p-14">
//           <div className="max-w-xl mx-auto flex flex-col items-center justify-center gap-2">
//             <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
//               Process
//             </h2>
//             <p className="text-muted-foreground text-center text-balance font-medium">
//               We design with purpose, we build brands.
//             </p>
//           </div>
//         </div>

//         {/* Process Steps */}
//         <div className="space-y-16 md:space-y-24 px-10 md:px-14">
//           {processSteps.map((step, index) => (
//             <div
//               key={step.id}
//               className="flex flex-col items-center gap-8"
//             >
//               {/* Header - Title and Number Above (Left Aligned) */}
//               <div className="w-full flex items-center justify-start gap-3 mb-6">
//                 <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white text-lg font-semibold">
//                   {step.id}
//                 </div>
//                 <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
//                   {step.title}
//                 </h3>
//               </div>

//               {/* Animation and Description - Side by Side */}
//               <div className="w-full flex flex-col md:flex-row gap-8 items-center">
//                 {/* Animation Box */}
//                 <div className="w-full md:w-[400px] h-[300px] relative overflow-hidden">
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     {step.animation}
//                   </div>
//                 </div>

//                 {/* Content - Text */}
//                 <div className="w-full md:w-1/2 space-y-4 flex flex-col justify-center h-full text-center md:text-left">
//                   <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
//                     {step.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { TerminalDemo } from "@/components/terminal";
import { FileTreeDemo } from "@/components/file-tree";
import { DiscoveryAnimation } from "@/components/discovery-animation";
import { ChartRadarDefault } from "@/components/chart-radar";
import { SafariDemo } from "@/components/safari";
import { AnimatedListDemo } from "@/components/animated-noti";

const processSteps = [
  {
    id: 1,
    title: "Discovery",
    description: "We start with a deep dive into your vision, goals, and brand identity.",
    animation: <DiscoveryAnimation />,
  },
  {
    id: 2,
    title: "Strategy & Planning",
    description: "We map out the project with clear milestones, timelines and creative direction.",
    animation: <ChartRadarDefault />,
  },
  {
    id: 3,
    title: "Creative Proposal.",
    description:
      "Our design team creates intuitive and visually appealing interfaces that enhance user experience. We focus on modern design principles while ensuring your brand identity shines through.",
    animation: <SafariDemo />,
  },
  {
    id: 4,
    title: "Design & Development",
    description: "From visual identity to website or content, we build assets with precision.",
    animation: <TerminalDemo />,
  },
  {
    id: 5,
    title: "Delivery",
    description:
      "Final files are delivered, optimized, and ready to elavate your brand across all platforms.",
    animation: <FileTreeDemo />,
  },
  {
    id: 6,
    title: "Launch & Support",
    description: "We stay by your side to ensure a smooth rollout and answer final questions.",
    animation: <AnimatedListDemo />,
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative w-full bg-background overflow-x-hidden"
    >
      {/* Max width container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Frame (LOCKED to 2D, cannot “float”/3D-shift) */}
        <div
          className="
            relative border-x overflow-hidden isolate
            [perspective:none] [transform-style:flat]
            [backface-visibility:hidden]
          "
        >
          {/* HARD LOCK: prevent any 3D transforms inside this section */}
          <style jsx global>{`
            #process,
            #process * {
              transform-style: flat !important;
              perspective: none !important;
              transform: none;
            }
          `}</style>

          {/* Side decorations (contained, no negative offsets) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]" />

          {/* Section header */}
          <div className="w-full p-10 md:p-14">
            <div className="max-w-xl mx-auto flex flex-col items-center justify-center gap-2">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
                Process
              </h2>
              <p className="text-muted-foreground text-center text-balance font-medium">
                We design with purpose, we build brands.
              </p>
            </div>
          </div>

          {/* Process Steps */}
          <div className="space-y-16 md:space-y-24 px-6 md:px-14 pb-20">
            {processSteps.map((step) => (
              <div key={step.id} className="flex flex-col items-center gap-8">
                {/* Header */}
                <div className="w-full flex items-center justify-start gap-3 mb-2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white text-lg font-semibold">
                    {step.id}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>

                {/* Animation + Description */}
                <div className="w-full flex flex-col md:flex-row gap-8 items-center">
                  {/* Animation Box (clipped + locked) */}
                  <div className="w-full md:w-[400px] h-[300px] relative overflow-hidden rounded-xl [perspective:none] [transform-style:flat]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {step.animation}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="w-full md:w-1/2 space-y-4 flex flex-col justify-center h-full text-center md:text-left">
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
