"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";

const COLORS = {
  orange: "#F4511E",
  dark: "#1F2529",
  white: "#FFFFFF",
  gray: "#8A8F94",
};

const logos = [
  "Gricon",
  "Earthworks",
  "Heavy Grade",
  "SiteCore",
  "TrenchPro",
  "Groundline",
  "Gricon",
  "Earthworks",
];

const cards = [
  ["01", "🚜", "Site Excavation", "Reliable excavation for residential and commercial sites."],
  ["02", "🏗️", "Grading & Prep", "Preparing land with precision, safety, and clean execution."],
  ["03", "🪨", "Land Clearing", "Clearing, trenching, and earthmoving for strong foundations."],
];

const cases = [
  {
    title: "North Ridge Site",
    type: "Excavation",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Oak Valley Lot",
    type: "Grading",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Maple Drainage",
    type: "Trenching",
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Urban Groundworks",
    type: "Site Prep",
    img: "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Rockfield Estate",
    type: "Land Clearing",
    img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function GriconPage() {
  useEffect(() => {
    const headers = document.querySelectorAll("header");
    const desnineHeader = Array.from(headers).find(
      (header) => header.getAttribute("data-gricon-header") !== "true"
    ) as HTMLElement | undefined;

    if (!desnineHeader) return;

    const prev = desnineHeader.style.display;
    desnineHeader.style.display = "none";

    return () => {
      desnineHeader.style.display = prev;
    };
  }, []);

  return (
    <main className="bg-white font-sans">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap");

        .gricon-heading {
          font-family: "Space Grotesk", sans-serif;
        }

        body {
          font-family: "Inter", sans-serif;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <header
        data-gricon-header="true"
        className="relative z-50 flex h-[72px] w-full items-center bg-[#1F2529]"
      >
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center bg-[#F4511E] text-[13px] font-bold text-white">
              G
            </div>

            <span className="gricon-heading text-[15px] font-bold tracking-[0.08em] text-white">
              GRI<span className="text-[#F4511E]">CON</span>
            </span>
          </div>

          <nav className="hidden items-center gap-8 text-[13px] font-medium text-white md:flex">
            <a>Home</a>
            <a>About Us</a>
            <a>Essential Pages⌄</a>
            <a>Blog</a>
          </nav>

          <button className="rounded-full bg-[#F4511E] px-6 py-2.5 text-[13px] font-semibold text-white">
            › Get Estimate
          </button>
        </div>
      </header>

      <HeroSection />

      <div className="h-[160px]" />

      <VisionMissionSection />
      <ExpertiseSection />
      <CaseStudySection />
      <TeamStatsSection />
      <WorkProcessSection />
      <TestimonialsSection />
      <AppointmentSection />
      <BlogSection />
      <FooterSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[560px] overflow-visible bg-[#1F2529] text-white">
      <div className="pointer-events-none absolute inset-0 grid grid-cols-4">
        <div className="border-r border-white/10" />
        <div className="border-r border-white/10" />
        <div className="border-r border-white/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-[760px] px-4 pt-[80px]">
        <div className="grid grid-cols-2 gap-14">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-5 bg-white/40" />
              <p className="text-xs font-semibold text-[#F4511E]">
                Excavation Company
              </p>
            </div>

            <h1 className="gricon-heading text-[45px] font-semibold leading-[1.05] tracking-[-0.04em]">
              Precision excavation built on trust
            </h1>
          </div>

          <div className="pt-4">
            <p className="max-w-[360px] text-sm leading-6 text-white/55">
              Gricon delivers excavation, grading, trenching, land clearing,
              and site preparation with safety, accuracy, and heavy-duty
              experience.
            </p>

            <a className="mt-9 inline-flex rounded-full bg-[#F4511E] px-5 py-3 text-xs font-semibold text-white">
              › Our Services
            </a>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 top-[285px] z-20 h-[468px] w-[868px] -translate-x-1/2 overflow-hidden rounded-md bg-black">
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80"
          alt="Excavation site"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}

function VisionMissionSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const missionY = useTransform(scrollYProgress, [0, 1], ["180px", "-180px"]);
  const visionY = useTransform(scrollYProgress, [0, 1], ["-180px", "180px"]);

  return (
    <section ref={ref} className="px-6 pb-[120px] pt-[80px]">
      <div className="mx-auto max-w-[900px] text-center">
        <div className="mb-6 mt-[40px] flex items-center justify-center gap-3 text-[11px]">
          <span className="h-px w-6 bg-black/40" />
          <span>Since 1990</span>
          <span className="h-px w-6 bg-black/40" />
        </div>

        <h2 className="gricon-heading mx-auto max-w-[480px] text-[34px] font-semibold leading-tight">
          We offer excavation services from site preparation to final grading.
        </h2>

        <div className="relative mx-auto mt-20 h-[420px] max-w-[650px]">
          <div className="absolute left-1/2 h-[380px] w-[320px] -translate-x-1/2 overflow-hidden rounded-md">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80"
              alt="Excavation project"
              className="h-full w-full object-cover"
            />
          </div>

          <motion.div
            style={{ y: missionY }}
            className="absolute left-0 top-[160px] w-[260px] rounded-md border bg-white p-6 text-left shadow-xl"
          >
            <h3 className="gricon-heading text-[15px] font-semibold">
              Our mission
            </h3>
            <p className="mt-3 text-[12px] text-black/60">
              Safe, accurate, and reliable groundwork for every project.
            </p>
          </motion.div>

          <motion.div
            style={{ y: visionY }}
            className="absolute right-0 top-[30px] w-[260px] rounded-md border bg-white p-6 text-left shadow-xl"
          >
            <h3 className="gricon-heading text-[15px] font-semibold">
              Our vision
            </h3>
            <p className="mt-3 text-[12px] text-black/60">
              Premium excavation experiences for every client.
            </p>

            <div className="mt-4 text-[#F4511E]">★★★★★</div>
            <p className="mt-2 text-[11px] text-black/60">
              1200+ completed projects
            </p>
          </motion.div>
        </div>

        <div className="mt-14 overflow-hidden">
          <div className="flex gap-12 animate-[scroll_18s_linear_infinite] whitespace-nowrap">
            {[...logos, ...logos].map((logo, i) => (
              <span key={i} className="font-semibold text-black/30">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  return (
    <section className="bg-[#eef0f4] px-6 py-[100px] text-black">
      <div className="mx-auto max-w-[900px]">
        <div className="mb-12 flex items-start justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3 text-[11px] font-medium">
              <span className="h-px w-6 bg-black/50" />
              <span>Our Expertise</span>
            </div>

            <h2 className="gricon-heading max-w-[520px] text-[34px] font-semibold leading-[1.08] tracking-[-0.04em]">
              Professional excavation practices built around your site needs
            </h2>
          </div>

          <button className="mt-8 rounded-full bg-[#F4511E] px-6 py-3 text-[12px] font-semibold text-white">
            › More Services
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {cards.map(([number, icon, title, text]) => (
            <motion.div
              key={number}
              initial={{ y: 35, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative min-h-[250px] rounded-md bg-[#1F2529] p-7 text-white shadow-[0_30px_70px_rgba(0,0,0,0.18)]"
            >
              <span className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-[#1F2529]">
                {number}
              </span>

              <div className="text-[44px] opacity-70">{icon}</div>

              <div className="mt-20">
                <h3 className="gricon-heading text-[17px] font-semibold text-[#F4511E]">
                  {title}
                </h3>
                <p className="mt-4 text-[13px] font-medium leading-5 text-white/75">
                  {text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-[12px] text-black/50">
          Save your precious time and effort spent finding the right excavation solution.{" "}
          <a className="font-semibold text-black underline">Get In Touch</a>
        </p>
      </div>
    </section>
  );
}

function CaseStudySection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const next = () =>
    setActive((prev) => (prev === cases.length - 1 ? 0 : prev + 1));

  const prev = () =>
    setActive((prev) => (prev === 0 ? cases.length - 1 : prev - 1));

  return (
    <section className="bg-white px-6 py-[110px] text-black">
      <div className="mx-auto max-w-[1100px] text-center">
        <div className="mb-3 flex items-center justify-center gap-3 text-[11px]">
          <span className="h-px w-6 bg-black/40" />
          <span>Case Study</span>
          <span className="h-px w-6 bg-black/40" />
        </div>

        <h2 className="gricon-heading text-[34px] font-semibold tracking-[-0.04em]">
          Explore our excavation projects
        </h2>

        <div className="relative mt-16 flex h-[340px] items-center justify-center overflow-hidden">
          <button
            onClick={prev}
            className="absolute left-[36%] z-30 flex h-9 w-9 items-center justify-center rounded-full bg-[#F4511E] text-white"
          >
            ←
          </button>

          <button
            onClick={next}
            className="absolute right-[36%] z-30 flex h-9 w-9 items-center justify-center rounded-full bg-[#F4511E] text-white"
          >
            →
          </button>

          {cases.map((item, index) => {
            let offset = index - active;

            if (offset > cases.length / 2) offset -= cases.length;
            if (offset < -cases.length / 2) offset += cases.length;

            const isActive = offset === 0;

            return (
              <motion.div
                key={item.title}
                animate={{
                  x: offset * 260,
                  scale: isActive ? 1 : 0.82,
                  opacity: Math.abs(offset) > 2 ? 0 : isActive ? 1 : 0.35,
                  zIndex: isActive ? 20 : 10,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute w-[250px]"
              >
                <div
                  className={`overflow-hidden rounded-md ${
                    isActive ? "h-[300px]" : "h-[250px]"
                  }`}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <p
                  className={`mt-4 text-[12px] ${
                    isActive ? "text-black" : "text-black/40"
                  }`}
                >
                  {item.title} / {item.type}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WorkProcessSection() {
  const steps = [
    {
      icon: "⌕",
      title: "Site assessment",
      text: "We begin by understanding your land, access points, soil, and project goals.",
    },
    {
      icon: "⚙",
      title: "Excavation planning",
      text: "We plan the equipment, schedule, safety steps, and excavation process.",
    },
    {
      icon: "▥",
      title: "Clean delivery",
      text: "We complete the groundwork with precision, cleanup, and final site readiness.",
    },
  ];

  return (
    <section className="bg-[#1F2529] text-white">
      <div className="mx-auto max-w-[900px] px-6 py-[100px]">
        <div className="mb-16 flex items-start justify-between gap-10">
          <div>
            <div className="mb-3 flex items-center gap-3 text-[11px] font-semibold text-[#F4511E]">
              <span className="h-px w-6 bg-[#F4511E]" />
              <span>Our Process</span>
            </div>

            <h2 className="gricon-heading max-w-[580px] text-[34px] font-semibold leading-[1.08] tracking-[-0.04em]">
              Expert excavation planning for every site condition
            </h2>
          </div>

          <button className="mt-8 rounded-full bg-[#F4511E] px-6 py-3 text-[12px] font-semibold text-white">
            › Get In Touch
          </button>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ y: 35, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.12 }}
              className="flex gap-5"
            >
              <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-white/5 text-[32px] text-[#F4511E]">
                {step.icon}
              </div>

              <div>
                <h3 className="gricon-heading text-[17px] font-semibold">
                  {step.title}
                </h3>
                <p className="mt-4 text-[13px] font-medium leading-5 text-white/55">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative h-[380px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1600&q=80"
          alt="Excavation planning"
          className="h-full w-full object-cover opacity-75"
        />

        <div className="absolute inset-0 bg-black/20" />

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="absolute left-1/2 top-0 w-[280px] -translate-x-[140%] rounded-md bg-white p-7 text-black shadow-xl"
        >
          <h3 className="gricon-heading text-[21px] font-semibold">
            Schedule hours
          </h3>

          <p className="mt-3 text-[13px] leading-5 text-black/60">
            Call Gricon for excavation emergencies, site visits, estimates, and
            project scheduling.
          </p>

          <div className="mt-6 space-y-4 text-[12px]">
            <div className="flex justify-between border-t border-black/10 pt-3">
              <span className="text-black/60">Monday – Thursday</span>
              <span>08:00 – 18:00</span>
            </div>

            <div className="flex justify-between border-t border-black/10 pt-3">
              <span className="text-black/60">Friday</span>
              <span>09:00 – 17:00</span>
            </div>

            <div className="flex justify-between border-t border-black/10 pt-3">
              <span className="text-black/60">Saturday & Sunday</span>
              <span>08:30 – 19:30</span>
            </div>
          </div>

          <button className="mt-7 rounded-full bg-[#F4511E] px-5 py-3 text-[12px] font-semibold text-white">
            › Get Estimate
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function TeamStatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    ["★", 1200, "+", "Completed Jobs"],
    ["▦", 30, "+", "Daily Projects"],
    ["👷", 23, "+", "Equipment Operators"],
    ["?", 24, "/7", "Emergency Support"],
  ];

  const team = [
    {
      role: "Founder",
      name: "James Albert",
      img: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1000&q=80",
    },
    {
      role: "Project Manager",
      name: "David Hower",
      img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=80",
    },
    {
      role: "Safety Officer",
      name: "Ann Vasser",
      img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <section ref={ref} className="bg-white px-6 py-[110px] text-black">
      <div className="mx-auto max-w-[900px]">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          {stats.map(([icon, number, suffix, label], index) => (
            <motion.div
              key={label}
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mb-5 text-[34px] text-[#F4511E]">{icon}</div>

              <h3 className="gricon-heading text-[34px] font-semibold tracking-[-0.04em]">
                {isInView ? (
                  <Counter end={Number(number)} suffix={String(suffix)} />
                ) : (
                  `0${suffix}`
                )}
              </h3>

              <p className="mt-2 text-[12px] text-black/55">{label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mb-12 mt-20 flex items-start justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3 text-[11px] font-medium">
              <span className="h-px w-6 bg-black/50" />
              <span>Meet With Team</span>
            </div>

            <h2 className="gricon-heading max-w-[430px] text-[34px] font-semibold leading-[1.08] tracking-[-0.04em]">
              Turning tough ground into ready sites
            </h2>
          </div>

          <button className="mt-9 rounded-full bg-[#F4511E] px-6 py-3 text-[12px] font-semibold text-white">
            › More Members
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {team.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="relative h-[310px] overflow-hidden rounded-md"
            >
              <img
                src={person.img}
                alt={person.name}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/85 to-transparent p-6 pt-20">
                <p className="text-[11px] text-black/60">{person.role}</p>
                <h3 className="gricon-heading mt-1 text-[17px] font-semibold">
                  {person.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos E. Ashcroft",
      role: "Property Owner",
      text: "Gricon prepared our site quickly, safely, and with great attention to detail.",
      style: "bg-white text-black h-[178px]",
    },
    {
      name: "Joseph R. Jones",
      role: "Contractor",
      text: "Their grading and trenching work made the rest of our build much easier. Strongly recommended.",
      style: "bg-[#eef0f4] text-black h-[238px]",
    },
    {
      name: "Willie S. Terry",
      role: "Developer",
      text: "They handled the site preparation with professionalism, clear communication, and reliable timing.",
      style: "bg-[#1F2529] text-white h-[240px]",
    },
    {
      name: "Frances B. Pierre",
      role: "Homeowner",
      text: "The team completed our drainage excavation cleanly and explained every step clearly.",
      style: "bg-white text-black h-[178px]",
    },
    {
      name: "Heidi M. Aguilar",
      role: "Project Lead",
      text: "Their equipment operators were precise, organized, and easy to work with.",
      style: "bg-white text-black h-[178px]",
    },
    {
      name: "Jason S. Le",
      role: "Builder",
      text: "The excavation work was completed on schedule and gave our project a solid start.",
      style: "bg-[#F4511E] text-white h-[238px]",
    },
  ];

  const Card = ({ item, index }: { item: any; index: number }) => (
    <motion.div
      initial={{ y: 35, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`flex flex-col justify-between rounded-md border border-black/10 p-6 text-left ${item.style}`}
    >
      <div>
        <div className="mb-4 text-[13px] tracking-[0.16em] text-[#F4511E]">
          ★★★★★
        </div>

        <p className="text-[13px] font-medium leading-5">
          “{item.text}”
        </p>
      </div>

      <div className="flex items-end justify-between">
        <div>
          <p className="text-[11px] opacity-60">{item.role}</p>
          <p className="gricon-heading text-[13px] font-semibold">
            {item.name}
          </p>
        </div>

        <div className="flex items-center">
          <img
            src={`https://i.pravatar.cc/80?img=${index + 20}`}
            alt={item.name}
            className="h-7 w-7 rounded-full object-cover"
          />
          <div className="-ml-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#eef0f4] text-[11px] text-black">
            ❝
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="bg-white px-6 py-[110px]">
      <div className="mx-auto max-w-[920px] text-center">
        <div className="mb-3 flex items-center justify-center gap-3 text-[11px]">
          <span className="h-px w-6 bg-black/40" />
          <span>Testimonials</span>
          <span className="h-px w-6 bg-black/40" />
        </div>

        <h2 className="gricon-heading mx-auto max-w-[560px] text-[34px] font-semibold leading-[1.08] tracking-[-0.04em]">
          Trusted by homeowners, builders, and developers
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-6">
            <Card item={testimonials[0]} index={0} />
            <Card item={testimonials[1]} index={1} />
          </div>

          <div className="flex flex-col gap-6">
            <Card item={testimonials[2]} index={2} />
            <Card item={testimonials[3]} index={3} />
          </div>

          <div className="flex flex-col gap-6">
            <Card item={testimonials[4]} index={4} />
            <Card item={testimonials[5]} index={5} />
          </div>
        </div>
      </div>
    </section>
  );
}

function AppointmentSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.25, 1]);

  return (
    <section ref={ref} className="relative bg-white px-6 py-[120px]">
      <div className="relative mx-auto h-[520px] max-w-[1200px] overflow-visible">
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            style={{ scale: imageScale }}
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1600&q=80"
            alt="Excavation site"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute left-[10%] top-[45px] z-20 w-[430px] rounded-md bg-white p-8 shadow-[0_35px_90px_rgba(0,0,0,0.18)]"
        >
          <h2 className="gricon-heading text-[26px] font-semibold">
            Schedule a site visit
          </h2>

          <p className="mt-3 text-[13px] leading-5 text-black/60">
            Call Gricon for excavation emergencies, site estimates, project
            planning, and availability.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <label className="text-[11px] font-semibold">
              Full Name
              <input
                className="mt-2 h-10 w-full rounded-md border border-black/15 px-3 text-[12px] outline-none"
                placeholder="Jane Smith"
              />
            </label>

            <label className="text-[11px] font-semibold">
              Email Address
              <input
                className="mt-2 h-10 w-full rounded-md border border-black/15 px-3 text-[12px] outline-none"
                placeholder="jane@gricon.com"
              />
            </label>

            <label className="text-[11px] font-semibold">
              Service Type
              <select className="mt-2 h-10 w-full rounded-md border border-black/15 px-3 text-[12px] text-black/50 outline-none">
                <option>Select...</option>
              </select>
            </label>

            <label className="text-[11px] font-semibold">
              Project Budget
              <select className="mt-2 h-10 w-full rounded-md border border-black/15 px-3 text-[12px] text-black/50 outline-none">
                <option>Select...</option>
              </select>
            </label>
          </div>

          <label className="mt-5 block text-[11px] font-semibold">
            Project Details
            <textarea
              className="mt-2 h-[92px] w-full resize-none rounded-md border border-black/15 p-3 text-[12px] outline-none"
              placeholder="Tell us about your site"
            />
          </label>

          <button className="mt-5 rounded-full bg-[#F4511E] px-6 py-3 text-[12px] font-semibold text-white">
            › Submit
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function BlogSection() {
  const posts = [
    {
      date: "Sep 14, 2025",
      category: "Excavation",
      author: "Ricky Silva",
      title: "The Complete Guide to Site Preparation in 2025",
      desc: "Site preparation is no longer just about moving dirt. It is about creating a safe and reliable base",
      img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    },
    {
      date: "Sep 4, 2025",
      category: "Grading",
      author: "Linda Keller",
      title: "Top 5 Signs Your Property Needs Drainage Work",
      desc: "If water collects near your foundation or driveway, it may be time to inspect your grading",
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    },
    {
      date: "Sep 23, 2025",
      category: "Site Work",
      author: "Nina Rooney",
      title: "Why Proper Excavation Matters Before Every Build",
      desc: "Every strong project begins with the right groundwork, from trenching to grading and site access",
      img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="bg-white px-6 py-[110px] text-black">
      <div className="mx-auto max-w-[920px]">
        <div className="mb-3 flex items-center justify-center gap-3 text-[11px]">
          <span className="h-px w-6 bg-black/40" />
          <span>Blog & Insights</span>
          <span className="h-px w-6 bg-black/40" />
        </div>

        <h2 className="gricon-heading text-center text-[34px] font-semibold tracking-[-0.04em]">
          Excavation news and insights
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ y: 35, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-[160px] overflow-hidden rounded-md">
                <img
                  src={post.img}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <span className="absolute right-2 top-2 rounded-md bg-[#F4511E] px-3 py-2 text-[11px] font-semibold text-white">
                  {post.date}
                </span>
              </div>

              <div className="mt-5 flex gap-4 text-[11px] text-black/50">
                <span>{post.category}</span>
                <span>By&nbsp; {post.author}</span>
              </div>

              <h3 className="gricon-heading mt-2 text-[18px] font-semibold leading-[1.15] tracking-[-0.03em]">
                {post.title}
              </h3>

              <div className="my-4 h-px w-full bg-black/15" />

              <p className="text-[12px] leading-5 text-black/55">
                {post.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[#1F2529] px-6 pt-[120px] text-white">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <h1 className="gricon-heading text-[180px] font-bold tracking-[-0.05em] text-white/5">
          GRICON
        </h1>
      </div>

      <div className="relative z-10 mx-auto max-w-[1100px]">
        <div className="grid gap-16 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-[#F4511E] text-[13px] font-bold text-white">
                G
              </div>

              <span className="gricon-heading text-[15px] font-bold tracking-[0.08em] text-white">
                GRI<span className="text-[#F4511E]">CON</span>
              </span>
            </div>

            <p className="mt-5 text-[13px] leading-6 text-white/60 max-w-[260px]">
              Provides excavation, grading, trenching, and site preparation for residential and commercial projects.
            </p>

            <div className="mt-6 h-px w-[220px] bg-white/10" />

            <p className="mt-6 text-[12px] text-white/60">
              2220 Plymouth Rd #302 Hopkins,<br />
              Minnesota(MN), 55305
            </p>

            <p className="mt-3 text-[12px] font-semibold text-[#F4511E]">
              +123 (456) 789 00
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 text-[13px]">
            <div>
              <p className="mb-4 font-semibold text-white">Essential</p>

              <div className="space-y-3 text-white/60">
                <p>Home</p>
                <p>About</p>
                <p>Services</p>
                <p>Case Study</p>
                <p>Our Team</p>
                <p>Blog</p>
              </div>
            </div>

            <div className="mt-[26px] space-y-3 text-white/60">
              <p>Get In Touch</p>
              <p>Careers</p>
              <p>Faq Page</p>
              <p>Insights</p>
              <p>404</p>
            </div>
          </div>

          <div>
            <p className="mb-4 font-semibold text-white">
              Weekly Newsletter
            </p>

            <p className="text-[13px] leading-6 text-white/60 max-w-[260px]">
              Updates on excavation, site work, grading, and project planning.
            </p>

            <div className="mt-6 flex items-center rounded-full bg-white/5 px-4 py-2">
              <input
                placeholder="E.g. info@gricon.com"
                className="w-full bg-transparent text-[12px] text-white outline-none placeholder:text-white/40"
              />
            </div>

            <button className="mt-5 rounded-full bg-[#F4511E] px-6 py-3 text-[12px] font-semibold text-white">
              › Subscribe
            </button>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 flex items-center justify-between text-[12px] text-white/60">
          <p>Copyright & design by @RedDevs – 2025</p>

          <div className="flex items-center gap-3">
            {["f", "in", "x", "ig"].map((i) => (
              <div
                key={i}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[10px]"
              >
                {i}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1400;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}