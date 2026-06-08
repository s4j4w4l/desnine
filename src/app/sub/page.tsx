// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   ArrowDown,
//   ArrowUpRight,
//   Check,
//   ChevronDown,
//   Layers,
//   MonitorSmartphone,
//   Palette,
//   PenTool,
//   Sparkles,
//   Star,
//   Zap,
// } from "lucide-react";

// export default function SubscriptionPage() {
//   const services = [
//     {
//       number: "001",
//       title: "Brand Identity",
//       heading: "Identity systems that feel premium",
//       icon: Palette,
//       description:
//         "Logo direction, visual systems, color palettes, typography, brand rules, and creative art direction.",
//       items: ["Logo design", "Brand strategy", "Color system", "Guidelines"],
//     },
//     {
//       number: "002",
//       title: "Web Design",
//       heading: "Websites built to convert",
//       icon: MonitorSmartphone,
//       description:
//         "Landing pages, website sections, UI layouts, conversion-focused pages, and clean digital experiences.",
//       items: ["UI design", "Landing pages", "Web sections", "Design systems"],
//     },
//     {
//       number: "003",
//       title: "Digital Design",
//       heading: "Creative assets for growth",
//       icon: Layers,
//       description:
//         "Social graphics, ads, carousels, pitch decks, banners, campaign visuals, and content support.",
//       items: ["Social posts", "Ad creatives", "Decks", "Launch graphics"],
//     },
//   ];

//   const projects = ["Kynex", "Finchley", "Bolt", "Zerani", "Avelon"];

//   const process = [
//     ["01", "Subscribe", "Pick your plan and unlock monthly design support."],
//     ["02", "Request", "Send branding, web, or content design requests."],
//     ["03", "Design", "Desnine creates clean, strategic, high-quality visuals."],
//     ["04", "Refine", "Review, request revisions, and approve final files."],
//   ];

//   const plans = [
//     {
//       name: "Starter",
//       price: "$999",
//       desc: "For brands that need steady monthly creative support.",
//       features: [
//         "Unlimited requests",
//         "One active task",
//         "Social graphics",
//         "Basic web sections",
//         "Source files included",
//       ],
//     },
//     {
//       name: "Growth",
//       price: "$1,999",
//       desc: "For growing teams that need weekly design output.",
//       featured: true,
//       features: [
//         "Unlimited requests",
//         "Two active tasks",
//         "Brand + web design",
//         "Priority turnaround",
//         "Creative direction",
//       ],
//     },
//     {
//       name: "Scale",
//       price: "$3,499",
//       desc: "For high-volume brands with constant creative needs.",
//       features: [
//         "Unlimited requests",
//         "Multiple active tasks",
//         "Campaign design",
//         "Landing page systems",
//         "Premium support",
//       ],
//     },
//   ];

//   return (
//     <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
//       {/* NAV */}
//       <header className="fixed left-0 top-0 z-50 w-full border-b border-border/70 bg-background/80 backdrop-blur-xl">
//         <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">
//           <Link href="/" className="text-xl font-bold tracking-[-0.05em]">
//             Desnine<span className="text-[#B91C1C]">.</span>
//           </Link>

//           <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
//             <a href="#services" className="hover:text-foreground">Services</a>
//             <a href="#projects" className="hover:text-foreground">Projects</a>
//             <a href="#process" className="hover:text-foreground">Process</a>
//             <a href="#pricing" className="hover:text-foreground">Pricing</a>
//           </nav>

//           <Link
//             href="/contact"
//             className="rounded-full bg-[#B91C1C] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#991B1B]"
//           >
//             Get Started
//           </Link>
//         </div>
//       </header>

//       {/* HERO */}
//       <section
//         id="header"
//         className="relative flex min-h-screen w-full items-center justify-center overflow-hidden border-b border-border px-6 pb-20 pt-36 md:px-12"
//       >
//         <div className="absolute inset-x-0 top-0 -z-10 h-[850px] bg-[radial-gradient(125%_125%_at_50%_10%,var(--background)_35%,var(--secondary)_100%)]" />
//         <div className="absolute left-1/2 top-24 -z-10 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-[#B91C1C]/20 blur-[140px]" />

//         <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
//           <motion.div
//             className="mb-6 inline-flex h-10 items-center gap-2 rounded-full border border-border bg-accent px-4 text-sm font-medium text-muted-foreground"
//             initial={{ opacity: 0, y: 18, scale: 0.96 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//           >
//             <Sparkles className="h-4 w-4 text-[#B91C1C]" />
//             2 slots available this month
//           </motion.div>

//           <motion.h1
//             className="text-[clamp(46px,8.6vw,128px)] font-bold leading-[0.88] tracking-[-0.08em]"
//             initial="hidden"
//             animate="show"
//           >
//             {[
//               ["All the design", "text-zinc-950 dark:text-white"],
//               ["you need.", "text-zinc-500 dark:text-zinc-400"],
//               ["One monthly", "text-zinc-950 dark:text-white"],
//               ["creative system.", "text-[#B91C1C] dark:text-[#EF4444]"],
//             ].map(([text, className], i) => (
//               <span key={text}>
//                 <motion.span
//                   className={`inline-block ${className}`}
//                   variants={{
//                     hidden: { opacity: 0, y: 48, filter: "blur(10px)" },
//                     show: { opacity: 1, y: 0, filter: "blur(0px)" },
//                   }}
//                   transition={{
//                     duration: 0.75,
//                     delay: i * 0.08,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                 >
//                   {text}
//                 </motion.span>
//                 {text === "you need." ? <br /> : "\u00A0"}
//               </span>
//             ))}
//           </motion.h1>

//           <motion.p
//             className="mt-8 max-w-2xl text-balance text-base font-medium leading-relaxed text-muted-foreground md:text-lg"
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.35 }}
//           >
//             A premium design subscription for brands that need consistent
//             branding, websites, content, and digital assets without slow
//             agencies, messy freelancers, or long contracts.
//           </motion.p>

//           <motion.div
//             className="mt-10 flex flex-col gap-4 sm:flex-row"
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//           >
//             <Link
//               href="/contact"
//               className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#B91C1C] px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(185,28,28,0.25)] transition hover:scale-105 hover:bg-[#991B1B]"
//             >
//               Book an Intro Call
//               <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//             </Link>

//             <a
//               href="#pricing"
//               className="group inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-7 py-3 text-sm font-semibold transition hover:scale-105 hover:bg-accent"
//             >
//               View Pricing
//               <ArrowDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
//             </a>
//           </motion.div>

//           <div className="mt-14 flex items-center gap-4">
//             <div className="flex -space-x-3">
//               {["DS", "KX", "FN"].map((a) => (
//                 <div
//                   key={a}
//                   className="flex h-11 w-11 items-center justify-center rounded-full border border-background bg-zinc-200 text-xs font-bold text-zinc-800"
//                 >
//                   {a}
//                 </div>
//               ))}
//             </div>
//             <div className="text-left">
//               <p className="font-semibold">Trusted by 100+ businesses</p>
//               <p className="text-sm text-muted-foreground">
//                 Clean design. Clear direction. Better results.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* PROOF */}
//       <section className="w-full border-b border-border">
//         <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-14 md:flex-row md:items-end md:justify-between md:px-12">
//           <div>
//             <div className="mb-4 flex gap-1 text-[#B91C1C]">
//               {[1, 2, 3, 4, 5].map((s) => (
//                 <Star key={s} className="h-5 w-5 fill-current" />
//               ))}
//             </div>
//             <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
//               4.9/5 stars from modern brands
//             </h2>
//             <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
//               They hit their targets — you’re next.
//             </p>
//           </div>

//           <button
//             onClick={() =>
//               window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
//             }
//             className="group flex items-center gap-5 self-start md:self-auto"
//           >
//             <span className="text-2xl font-medium tracking-[-0.04em] md:text-3xl">
//               Scroll to explore
//             </span>
//             <span className="flex h-12 w-12 items-center justify-center border border-border transition group-hover:border-[#B91C1C]">
//               <ArrowDown className="h-5 w-5 transition group-hover:translate-y-1" />
//             </span>
//           </button>
//         </div>

//         <div className="grid grid-cols-2 border-t border-border md:grid-cols-5">
//           {["DESNINE", "KYNEX", "FINCHLEY", "BOLT", "ZERANI"].map((logo) => (
//             <div
//               key={logo}
//               className="flex h-32 items-center justify-center border-r border-border text-2xl font-black tracking-[-0.08em] text-zinc-400 transition hover:bg-accent/40 hover:text-foreground md:h-40 md:text-4xl"
//             >
//               {logo}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* PROJECTS */}
//       <section id="projects" className="w-full border-b border-border px-6 py-24 md:px-12">
//         <div className="mx-auto max-w-7xl">
//           <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
//             <div>
//               <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#B91C1C]">
//                 / 001 / Projects
//               </p>
//               <h2 className="text-[clamp(38px,6vw,88px)] font-bold leading-[0.9] tracking-[-0.07em]">
//                 Design made for brands
//                 <br />
//                 that want to look serious.
//               </h2>
//             </div>

//             <Link
//               href="/work"
//               className="inline-flex items-center gap-2 text-sm font-semibold text-[#B91C1C]"
//             >
//               View all projects <ArrowUpRight className="h-4 w-4" />
//             </Link>
//           </div>

//           <div className="grid gap-4 md:grid-cols-5">
//             {projects.map((project, i) => (
//               <motion.div
//                 key={project}
//                 className={`group relative overflow-hidden border border-border bg-accent/30 p-6 ${
//                   i === 0 || i === 3 ? "md:col-span-2 h-[360px]" : "h-[360px]"
//                 }`}
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.05 }}
//               >
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(185,28,28,0.18),transparent_45%)] opacity-0 transition group-hover:opacity-100" />
//                 <div className="relative flex h-full flex-col justify-between">
//                   <p className="text-sm text-muted-foreground">0{i + 1}</p>
//                   <div>
//                     <h3 className="text-4xl font-bold tracking-[-0.06em]">
//                       {project}
//                     </h3>
//                     <p className="mt-2 text-sm text-muted-foreground">
//                       Branding / Website / Digital Design
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* WHY */}
//       <section className="w-full border-b border-border px-6 py-24 md:px-12">
//         <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr]">
//           <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B91C1C]">
//             / 002 / Why Desnine
//           </p>

//           <div>
//             <h2 className="text-[clamp(38px,6vw,88px)] font-bold leading-[0.9] tracking-[-0.07em]">
//               Hiring is slow.
//               <br />
//               Agencies are heavy.
//               <br />
//               Freelancers are risky.
//             </h2>

//             <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
//               Desnine gives your brand a reliable creative partner with premium
//               design quality, fast execution, and simple monthly pricing. No
//               endless calls. No confusing scope. Just clear design support built
//               for modern brands.
//             </p>

//             <Link
//               href="#process"
//               className="mt-8 inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-semibold transition hover:bg-accent"
//             >
//               See how it works <ArrowDown className="h-4 w-4" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* SERVICES */}
//       <section id="services" className="w-full border-b border-border px-6 py-24 md:px-12">
//         <div className="mx-auto max-w-7xl">
//           <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#B91C1C]">
//             / 003 / Services
//           </p>

//           <h2 className="max-w-5xl text-[clamp(38px,6vw,88px)] font-bold leading-[0.9] tracking-[-0.07em]">
//             One subscription,
//             <br />
//             every creative discipline.
//           </h2>

//           <p className="mt-6 max-w-2xl text-muted-foreground">
//             Strategy, speed, and premium execution across the design assets your
//             brand needs to launch, grow, and stay consistent.
//           </p>

//           <div className="mt-14 grid gap-4 lg:grid-cols-3">
//             {services.map((service, i) => {
//               const Icon = service.icon;
//               return (
//                 <motion.div
//                   key={service.title}
//                   className="group relative overflow-hidden border border-border bg-background p-8 transition hover:bg-accent/40"
//                   initial={{ opacity: 0, y: 24 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.08 }}
//                 >
//                   <div className="mb-16 flex items-center justify-between">
//                     <p className="text-sm text-[#B91C1C]">
//                       {service.number} / {service.title}
//                     </p>
//                     <Icon className="h-6 w-6 text-[#B91C1C]" />
//                   </div>

//                   <h3 className="text-4xl font-bold tracking-[-0.06em]">
//                     {service.heading}
//                   </h3>

//                   <p className="mt-4 text-muted-foreground">
//                     {service.description}
//                   </p>

//                   <div className="mt-8 border-t border-border pt-6">
//                     <p className="mb-4 text-sm font-semibold">
//                       What’s included
//                     </p>
//                     <div className="grid gap-3">
//                       {service.items.map((item) => (
//                         <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
//                           <Check className="h-4 w-4 text-[#B91C1C]" />
//                           {item}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* PROCESS */}
//       <section id="process" className="w-full border-b border-border px-6 py-24 md:px-12">
//         <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
//           <div>
//             <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#B91C1C]">
//               / 004 / Process
//             </p>

//             <h2 className="text-[clamp(38px,6vw,82px)] font-bold leading-[0.9] tracking-[-0.07em]">
//               Request.
//               <br />
//               Design.
//               <br />
//               Repeat.
//             </h2>
//           </div>

//           <div className="space-y-4">
//             {process.map(([num, title, desc]) => (
//               <div
//                 key={title}
//                 className="grid gap-6 border border-border p-7 transition hover:bg-accent/40 md:grid-cols-[100px_1fr]"
//               >
//                 <p className="text-sm font-semibold text-[#B91C1C]">/{num}</p>
//                 <div>
//                   <h3 className="text-3xl font-bold tracking-[-0.04em]">
//                     {title}
//                   </h3>
//                   <p className="mt-2 text-muted-foreground">{desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* MARQUEE */}
//       <section className="w-full overflow-hidden border-b border-border py-8">
//         <div className="flex whitespace-nowrap text-[clamp(42px,8vw,120px)] font-black uppercase leading-none tracking-[-0.09em] text-zinc-200 dark:text-zinc-900">
//           <div className="animate-[marquee_28s_linear_infinite]">
//             BRANDING — WEBSITES — CONTENT — AD DESIGN — SEO — AUTOMATION —
//           </div>
//           <div className="animate-[marquee_28s_linear_infinite]">
//             BRANDING — WEBSITES — CONTENT — AD DESIGN — SEO — AUTOMATION —
//           </div>
//         </div>

//         <style jsx>{`
//           @keyframes marquee {
//             from {
//               transform: translateX(0);
//             }
//             to {
//               transform: translateX(-100%);
//             }
//           }
//         `}</style>
//       </section>

//       {/* PRICING */}
//       <section id="pricing" className="w-full border-b border-border px-6 py-24 md:px-12">
//         <div className="mx-auto max-w-7xl">
//           <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#B91C1C]">
//             / 005 / Pricing
//           </p>

//           <h2 className="mb-14 text-[clamp(38px,6vw,88px)] font-bold leading-[0.9] tracking-[-0.07em]">
//             Simple plans.
//             <br />
//             Serious design.
//           </h2>

//           <div className="grid gap-4 lg:grid-cols-3">
//             {plans.map((plan) => (
//               <div
//                 key={plan.name}
//                 className={`relative border p-8 transition ${
//                   plan.featured
//                     ? "border-[#B91C1C] bg-[#B91C1C]/5 shadow-[0_30px_90px_rgba(185,28,28,0.14)]"
//                     : "border-border bg-background hover:bg-accent/40"
//                 }`}
//               >
//                 {plan.featured && (
//                   <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#B91C1C] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
//                     <Zap className="h-3 w-3" />
//                     Most Popular
//                   </div>
//                 )}

//                 <h3 className="text-3xl font-bold tracking-[-0.04em]">
//                   {plan.name}
//                 </h3>

//                 <p className="mt-4 min-h-14 text-muted-foreground">
//                   {plan.desc}
//                 </p>

//                 <div className="mt-10">
//                   <span className="text-6xl font-bold tracking-[-0.07em]">
//                     {plan.price}
//                   </span>
//                   <span className="text-muted-foreground"> /mo</span>
//                 </div>

//                 <ul className="mt-8 space-y-4">
//                   {plan.features.map((feature) => (
//                     <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
//                       <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#B91C1C]/10 text-[#B91C1C]">
//                         <Check className="h-3 w-3" />
//                       </span>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>

//                 <Link
//                   href="/contact"
//                   className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition ${
//                     plan.featured
//                       ? "bg-[#B91C1C] text-white hover:bg-[#991B1B]"
//                       : "border border-border hover:bg-accent"
//                   }`}
//                 >
//                   Get Started
//                   <ArrowUpRight className="h-4 w-4" />
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="w-full px-6 py-24 md:px-12">
//         <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
//           <div>
//             <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#B91C1C]">
//               / 006 / FAQ
//             </p>

//             <h2 className="text-[clamp(38px,6vw,82px)] font-bold leading-[0.9] tracking-[-0.07em]">
//               Questions?
//               <br />
//               Answers.
//             </h2>
//           </div>

//           <div className="grid gap-4">
//             {[
//               ["Can I cancel anytime?", "Yes. Desnine subscriptions are built to stay flexible without long contracts."],
//               ["What can I request?", "Branding, websites, ads, social content, decks, landing pages, and digital design assets."],
//               ["How fast is delivery?", "Delivery depends on request size, but the workflow is made for consistent weekly output."],
//               ["Do I own the final files?", "Yes. Approved final designs and source files belong to you."],
//             ].map(([q, a]) => (
//               <details key={q} className="group border border-border p-7">
//                 <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-bold tracking-[-0.03em]">
//                   {q}
//                   <ChevronDown className="h-5 w-5 transition group-open:rotate-180" />
//                 </summary>
//                 <p className="mt-4 text-muted-foreground">{a}</p>
//               </details>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }export default function SubPage() { return null; }
