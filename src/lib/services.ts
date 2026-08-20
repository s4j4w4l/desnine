export const serviceSlugs = [
  "branding",
  "web-design",
  "web-development",
  "packaging-design",
  "graphic-design",
  "seo",
  "ai-automation",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export type ServicePage = {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  overview: string[];
  deliverables: { title: string; description: string }[];
  benefits: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  related: { title: string; href: string; description: string }[];
  cta: string;
};

const sharedLocalFaq = {
  question: "Do you work with businesses outside Quebec?",
  answer:
    "Yes. Desnine Studio works remotely with businesses across Canada and internationally. Our process is designed for clear online collaboration while giving businesses in Vaudreuil-Dorion, Hudson, the West Island, and Greater Montreal access to a nearby creative partner.",
};

export const services: Record<ServiceSlug, ServicePage> = {
  branding: {
    slug: "branding",
    name: "Branding & Brand Identity",
    shortName: "Branding",
    title: "Branding & Brand Identity Studio in Quebec",
    description:
      "Strategic branding and brand identity design for modern businesses in Quebec and Montreal. Build a clear, distinctive system with Desnine Studio.",
    eyebrow: "Branding services",
    h1: "Brand Identity & Branding Design",
    lead:
      "A strong identity makes a business easier to recognize, trust, and choose. Desnine Studio creates strategic brand systems for founders and teams ready to present themselves with greater clarity and confidence.",
    overview: [
      "Branding is more than a logo. It is the set of decisions that shapes how your business looks, sounds, and behaves wherever people meet it. When those decisions are inconsistent, even a good company can feel uncertain. We establish a clear creative direction and turn it into a practical identity system your team can use.",
      "Our work begins with the business: its audience, offer, position, personality, and ambitions. From there, we develop the visual language—logo, typography, colour, imagery, composition, and applications—so every element supports the same idea. The result is distinctive without becoming difficult to manage.",
      "Based in Quebec, we partner with businesses in Vaudreuil-Dorion, Hudson, the West Island, Montreal, and beyond. Whether the need is a new identity or a thoughtful rebrand, the process stays collaborative, direct, and grounded in real use.",
    ],
    deliverables: [
      { title: "Brand strategy", description: "Positioning, audience, personality, and creative principles that give the identity a clear foundation." },
      { title: "Logo system", description: "Primary and secondary marks designed to remain recognizable across different formats and sizes." },
      { title: "Colour & typography", description: "A purposeful palette and type system that create a consistent, ownable expression." },
      { title: "Visual language", description: "Art direction, image treatment, layout principles, graphic devices, and icon direction." },
      { title: "Brand guidelines", description: "A usable reference that explains how the system should be applied and protected." },
      { title: "Launch applications", description: "Priority touchpoints such as social assets, stationery, presentations, packaging direction, or digital layouts." },
    ],
    benefits: [
      { title: "Clarity before decoration", description: "Creative choices are tied to what the business needs to communicate, not a short-lived visual trend." },
      { title: "A system built to expand", description: "The identity can move from a website to packaging, campaigns, and everyday business materials without losing coherence." },
      { title: "Practical ownership", description: "Your team receives organized assets and guidance that make consistent execution easier after launch." },
    ],
    faqs: [
      { question: "What does a branding package include?", answer: "Scope depends on the business, but a typical engagement can include strategy, a logo system, colour, typography, visual language, brand guidelines, and selected launch applications. We define the exact deliverables before the project begins." },
      { question: "Can you redesign an existing brand?", answer: "Yes. We can evolve an identity while preserving useful recognition, or recommend a more fundamental reset when the existing system no longer reflects the business." },
      { question: "Do you work with startups?", answer: "Yes. We work with new ventures and established organizations. The scope is shaped around what the business genuinely needs now and what should remain flexible for later." },
      { question: "How much does branding cost?", answer: "Branding costs vary with strategy, the number of deliverables, and the complexity of the system. After learning about your goals, we provide a clear project scope and quote rather than applying a generic package." },
      sharedLocalFaq,
    ],
    related: [
      { title: "Marché Main", href: "/work/marche-main", description: "Brand identity and retail design for a neighbourhood grocery concept." },
    ],
    cta: "Start your brand project",
  },
  "web-design": {
    slug: "web-design",
    name: "Web Design",
    shortName: "Web Design",
    title: "Web Design Studio in Quebec & Montreal",
    description:
      "Custom, responsive web design for businesses in Quebec and Montreal. Desnine Studio creates clear digital experiences built around your brand and goals.",
    eyebrow: "Web design services",
    h1: "Custom Website Design for Modern Brands",
    lead:
      "Your website should make the value of your business easy to understand—and the next step easy to take. We design distinctive, responsive experiences that connect brand expression with practical user needs.",
    overview: [
      "A website often becomes the first serious interaction someone has with a business. If the message is unclear, the hierarchy is weak, or the experience feels generic, trust drops quickly. Desnine Studio brings strategy, content structure, visual design, and interaction together in one coherent experience.",
      "We plan the path before polishing the interface. That means understanding who is visiting, what they need to know, which objections the page should answer, and which actions matter most. Wireframes establish the logic; art direction makes it memorable; responsive design ensures the experience holds together on every screen.",
      "Our studio works with organizations throughout Vaudreuil-Dorion, the West Island, Greater Montreal, and remotely across Canada. Each site is designed around the real brand rather than forced into a generic template.",
    ],
    deliverables: [
      { title: "Website strategy", description: "Audience, goals, conversion paths, page priorities, and a focused plan for the experience." },
      { title: "Information architecture", description: "A sitemap and content hierarchy that help visitors and search engines understand the site." },
      { title: "Wireframes", description: "Page-level structure that establishes flow, messaging, and calls to action before visual polish." },
      { title: "UI design", description: "Responsive layouts, components, interaction states, and a digital design system rooted in the brand." },
      { title: "Content direction", description: "Guidance for headlines, page structure, proof, and conversion-focused copy." },
      { title: "Developer handoff", description: "Organized designs and specifications, or a direct transition into development with our studio." },
    ],
    benefits: [
      { title: "Brand and usability together", description: "The experience can feel original without making visitors work to understand it." },
      { title: "Designed for real screens", description: "Mobile is considered from the start, including readability, navigation, forms, and touch interactions." },
      { title: "A foundation for growth", description: "Reusable components make future pages and content easier to add consistently." },
    ],
    faqs: [
      { question: "What is included in a web design project?", answer: "A project may include strategy, sitemap planning, wireframes, responsive interface design, content direction, prototypes, and developer handoff. We tailor the scope to the website rather than assuming every business needs the same number of pages." },
      { question: "Can you redesign an existing website?", answer: "Yes. We assess what is useful in the current site, identify structural and visual problems, and redesign the experience without discarding valuable content or search equity unnecessarily." },
      { question: "Do you also build the website?", answer: "Yes. Design and development can be handled together, creating a more direct path from approved layouts to a polished, high-performance build." },
      { question: "Will the website work on mobile?", answer: "Yes. Responsive behaviour is part of the design system, not an afterthought. We plan layouts, navigation, content density, forms, and interactions for small and large screens." },
      sharedLocalFaq,
    ],
    related: [
      { title: "Marché Main", href: "/work/marche-main", description: "A cohesive identity and digital direction for a local retail brand." },
    ],
    cta: "Design your next website",
  },
  "web-development": {
    slug: "web-development",
    name: "Web Development",
    shortName: "Web Development",
    title: "Custom Web Development in Quebec",
    description:
      "Responsive, high-performance website development for Quebec businesses. Custom Next.js builds, accessible interfaces, SEO foundations, and clean handoff.",
    eyebrow: "Web development services",
    h1: "Custom Website Development",
    lead:
      "Good development protects the design while making the website fast, reliable, accessible, and easy to evolve. We build production-ready websites with careful attention to both the visible experience and the systems underneath it.",
    overview: [
      "A polished mockup is only useful when the final website performs as intended. Slow pages, fragile components, inconsistent responsive behaviour, and inaccessible interactions can undermine an otherwise strong brand. Our development process translates approved design into a stable system rather than a collection of disconnected screens.",
      "We use modern tools such as Next.js when they suit the project, with reusable components, semantic HTML, responsive styling, and technical SEO built into the foundation. Content, analytics, integrations, and editing needs are considered early so the finished site supports day-to-day business rather than becoming difficult to maintain.",
      "Desnine Studio supports businesses in Quebec, Montreal, and across Canada with custom builds and design-to-development engagements. When another platform is a better fit, we make that recommendation based on the actual requirements.",
    ],
    deliverables: [
      { title: "Technical planning", description: "Platform, architecture, content model, integrations, hosting, and deployment requirements." },
      { title: "Responsive front end", description: "Accurate implementation across screen sizes with reusable, maintainable components." },
      { title: "Content integration", description: "Structured pages and editing workflows appropriate to the people maintaining the site." },
      { title: "Technical SEO", description: "Semantic markup, metadata, crawl controls, canonicals, structured data, and performance fundamentals." },
      { title: "Accessibility basics", description: "Keyboard support, labels, focus states, meaningful structure, and appropriate image alternatives." },
      { title: "QA & launch", description: "Cross-device review, final checks, deployment, and a clear handoff." },
    ],
    benefits: [
      { title: "Built around the design", description: "The production experience preserves the details and hierarchy established during design." },
      { title: "Less friction later", description: "Reusable architecture and clear conventions make ongoing changes safer and more efficient." },
      { title: "Performance with purpose", description: "Images, fonts, scripts, and interactions are handled carefully without flattening the creative experience." },
    ],
    faqs: [
      { question: "Do you build websites with Next.js?", answer: "Yes. Next.js is a strong option for custom, content-led, high-performance websites. We choose the platform according to the project rather than forcing every build into the same stack." },
      { question: "Can you develop a design created by another team?", answer: "Yes, provided the design files and interaction requirements are sufficiently complete. We review the system first and identify gaps before development begins." },
      { question: "Can you connect forms and third-party tools?", answer: "Yes. Integrations can include forms, analytics, email platforms, content systems, and other business tools. The exact set is confirmed during technical planning." },
      { question: "Will I be able to update the website?", answer: "Where ongoing editing is needed, we plan an appropriate content workflow and document the parts your team can manage safely." },
      sharedLocalFaq,
    ],
    related: [
      { title: "Web Design", href: "/services/web-design", description: "Plan the structure, interface, and responsive experience before development." },
      { title: "SEO", href: "/services/seo", description: "Build search visibility into the technical and content foundation." },
    ],
    cta: "Build a better website",
  },
  "packaging-design": {
    slug: "packaging-design",
    name: "Packaging Design",
    shortName: "Packaging",
    title: "Packaging Design Studio in Quebec",
    description:
      "Strategic packaging and label design for food, wellness, retail, and consumer brands in Quebec, Montreal, and across Canada.",
    eyebrow: "Packaging design services",
    h1: "Packaging Design Built for the Shelf",
    lead:
      "Packaging has to attract attention, communicate clearly, and belong unmistakably to the brand. We create systems that balance visual impact with the practical realities of a product range.",
    overview: [
      "A package is a small surface carrying a large responsibility. It must establish recognition, organize information, support product differentiation, and feel credible beside established competitors. Desnine Studio approaches packaging as both a brand expression and an information system.",
      "We begin with the product, category, audience, format, and retail context. The design then develops through hierarchy, typography, colour, imagery, and repeatable rules for variants. We collaborate with the client and production partners around supplied specifications while keeping mandatory claims and final regulatory approval with the appropriate experts.",
      "Our Quebec-based studio supports food, supplement, wellness, retail, and emerging consumer brands across Greater Montreal and Canada. Packaging can be developed as part of a new identity or as an extension of an established one.",
    ],
    deliverables: [
      { title: "Packaging direction", description: "A clear creative route connected to the brand, category, audience, and shelf context." },
      { title: "Label & package design", description: "Front, back, and side-panel layouts built around supplied dielines and content." },
      { title: "Product architecture", description: "Colour, naming, hierarchy, and variant rules that help a range stay organized." },
      { title: "Typography & imagery", description: "A visual approach that balances personality, legibility, product information, and recognition." },
      { title: "Print-ready artwork", description: "Prepared final files based on confirmed printer specifications and approved content." },
      { title: "Presentation mockups", description: "Realistic visuals for review, internal presentations, ecommerce, or launch communications." },
    ],
    benefits: [
      { title: "One product, one family", description: "Individual products can lead with their benefit while remaining part of a recognizable range." },
      { title: "Clear information", description: "Hierarchy helps customers scan essential product details without flattening the brand personality." },
      { title: "Designed for production", description: "The creative direction is developed with format, print constraints, and supplied specifications in mind." },
    ],
    faqs: [
      { question: "Do you design labels and full packaging systems?", answer: "Yes. We can design a single label, a complete package, or a flexible system for multiple products and variants. Scope depends on the formats and number of items involved." },
      { question: "Can packaging be part of a branding project?", answer: "Yes. Developing identity and packaging together often creates a stronger system because product architecture and brand decisions can inform one another from the start." },
      { question: "Do you provide dielines or printing?", answer: "We design using printer- or manufacturer-supplied dielines and can coordinate around their specifications. Structural engineering, regulatory review, and physical printing should be confirmed with the relevant production specialists." },
      { question: "Can you extend an existing package to new products?", answer: "Yes. We can assess the current system, define clearer variant rules, and extend it while protecting useful brand recognition." },
      sharedLocalFaq,
    ],
    related: [
      { title: "Marché Main", href: "/work/marche-main", description: "Brand identity and applications for a neighbourhood food retailer." },
    ],
    cta: "Discuss your packaging",
  },
  "graphic-design": {
    slug: "graphic-design",
    name: "Graphic Design",
    shortName: "Graphic Design",
    title: "Graphic Design Studio in Quebec & Montreal",
    description:
      "Graphic design for campaigns, print, presentations, social content, and digital communications by Desnine Studio in Quebec.",
    eyebrow: "Graphic design services",
    h1: "Graphic Design With a Clear Point of View",
    lead:
      "From a focused campaign to an ongoing set of brand materials, we turn ideas and information into visual communication that feels coherent, useful, and unmistakably yours.",
    overview: [
      "Businesses produce a constant stream of visual material: presentations, ads, social posts, documents, event graphics, print pieces, and sales tools. Without a strong system, those touchpoints quickly drift apart. Desnine Studio brings them back under one visual direction.",
      "We start by clarifying the audience, message, format, and action. Design choices then support the content instead of competing with it. Existing brand guidelines can be extended thoughtfully, or we can establish a practical campaign language where no complete system exists.",
      "We work with organizations in Vaudreuil-Dorion, Hudson, the West Island, Montreal, and remotely across Canada. Engagements can support a specific launch or an ongoing need for reliable, brand-aware creative execution.",
    ],
    deliverables: [
      { title: "Campaign design", description: "A focused visual direction and adaptable assets for a product, event, message, or launch." },
      { title: "Print design", description: "Brochures, menus, reports, stationery, signage, and other tactile brand materials." },
      { title: "Digital design", description: "Web graphics, banners, email visuals, downloadable resources, and platform-ready assets." },
      { title: "Social media design", description: "Reusable templates and campaign content that stay consistent without feeling repetitive." },
      { title: "Presentations", description: "Clear, persuasive decks for pitches, sales, internal communication, or stakeholder updates." },
      { title: "Production files", description: "Organized exports and working files prepared for the intended channels and suppliers." },
    ],
    benefits: [
      { title: "Consistency without sameness", description: "Materials feel connected to the brand while adapting to different messages and formats." },
      { title: "Content-led hierarchy", description: "Layout and typography make information easier to scan, understand, and remember." },
      { title: "Reliable execution", description: "A defined visual approach reduces improvisation and helps future assets move faster." },
    ],
    faqs: [
      { question: "Can you work with our existing brand guidelines?", answer: "Yes. We can apply and extend an established identity while respecting its core rules. If the guidelines leave gaps, we identify practical additions instead of reinventing the brand." },
      { question: "Do you offer ongoing design support?", answer: "Ongoing support can be discussed when the volume, types of deliverables, and workflow are clear. We will recommend a structure that fits the actual need." },
      { question: "Do you design for both print and digital channels?", answer: "Yes. We design across physical and digital formats and prepare assets according to the requirements of each channel." },
      { question: "Can you create templates our team can reuse?", answer: "Yes. Reusable templates can be part of the deliverables when internal speed and consistency are priorities." },
      sharedLocalFaq,
    ],
    related: [
      { title: "Branding", href: "/services/branding", description: "Create the identity system that guides every piece of communication." },
      { title: "Marché Main", href: "/work/marche-main", description: "See how brand thinking extends into practical retail applications." },
    ],
    cta: "Plan your next design project",
  },
  seo: {
    slug: "seo",
    name: "SEO Optimization",
    shortName: "SEO",
    title: "SEO Services for Quebec Businesses",
    description:
      "Technical, on-page, and local SEO services for businesses in Quebec and Greater Montreal. Clear priorities, useful content, and measurable foundations.",
    eyebrow: "SEO services",
    h1: "SEO Built Into the Website",
    lead:
      "Search visibility is strongest when technical foundations, page structure, useful content, and brand credibility work together. We improve the parts of SEO a business can control—without promises no responsible studio can make.",
    overview: [
      "SEO problems are rarely solved by adding keywords to a page. Search engines need to crawl the site, understand which page answers which intent, trust the information, and see a coherent relationship between services, proof, and expertise. Visitors need the same clarity.",
      "Desnine Studio audits technical signals, metadata, indexation, internal links, content structure, page experience, and local relevance. We then prioritize changes by impact and effort. The goal is a site that communicates the business accurately and creates stronger opportunities to earn qualified organic visits over time.",
      "For local businesses, we build natural relevance around Vaudreuil-Dorion, Hudson, the West Island, Montreal, Greater Montreal, and Quebec without creating thin doorway pages. We do not guarantee rankings; competition, demand, authority, and search-engine changes remain outside any agency’s control.",
    ],
    deliverables: [
      { title: "Technical audit", description: "Crawlability, indexation, canonicals, status codes, rendering, structured data, and performance priorities." },
      { title: "Keyword & intent map", description: "A clear primary purpose for important URLs to reduce overlap and guide content decisions." },
      { title: "On-page optimization", description: "Titles, descriptions, headings, copy structure, image context, and semantic improvements." },
      { title: "Site architecture", description: "Service hierarchy, internal linking, breadcrumbs, and crawl paths that connect expertise with proof." },
      { title: "Local SEO foundations", description: "Consistent business signals and useful geographic context without fabricated locations or spam pages." },
      { title: "Measurement plan", description: "A practical approach to Search Console, analytics, conversions, and ongoing priorities." },
    ],
    benefits: [
      { title: "Priorities over checklists", description: "Work is organized around the issues most likely to affect discovery and qualified leads." },
      { title: "Content for people", description: "Pages answer real questions and commercial intent instead of chasing arbitrary keyword density." },
      { title: "No ranking theatre", description: "Recommendations distinguish controllable improvements from outcomes no studio can guarantee." },
    ],
    faqs: [
      { question: "Can you guarantee a number-one Google ranking?", answer: "No. No responsible SEO provider can control or guarantee a ranking position. We improve technical quality, relevance, clarity, and measurement so the site is better positioned to earn visibility." },
      { question: "What is included in an SEO audit?", answer: "The audit can cover crawl and indexation signals, metadata, site architecture, rendering, internal links, structured data, page experience, content intent, and local relevance. Scope is confirmed before work begins." },
      { question: "Do you provide local SEO?", answer: "Yes. We can strengthen accurate local signals for the areas a business genuinely serves, connect the website with Google Business Profile activity, and improve locally relevant pages without creating duplicate city content." },
      { question: "How quickly does SEO work?", answer: "There is no universal timeline. Technical fixes can be deployed quickly, but crawling, reprocessing, competition, content quality, and authority influence when search visibility changes." },
      sharedLocalFaq,
    ],
    related: [
      { title: "Web Development", href: "/services/web-development", description: "Improve the technical foundation, rendering, performance, and maintainability of the site." },
      { title: "Web Design", href: "/services/web-design", description: "Align search intent with a clearer experience and stronger conversion path." },
    ],
    cta: "Improve your website’s search foundation",
  },
  "ai-automation": {
    slug: "ai-automation",
    name: "AI Automation",
    shortName: "AI Automation",
    title: "AI Automation for Quebec Businesses",
    description:
      "Practical AI automation, assistants, bots, and workflow integration for businesses in Quebec and across Canada. Designed around real operational needs.",
    eyebrow: "AI automation services",
    h1: "Practical AI Automation for Business",
    lead:
      "Automation should remove repetitive work without making the customer experience feel mechanical. We identify focused opportunities, design understandable workflows, and connect tools around the way your team actually operates.",
    overview: [
      "AI is useful when it solves a defined problem. Adding a chatbot or automated workflow without clear ownership, good source information, and sensible fallbacks often creates more friction than it removes. Desnine Studio starts with the process, not the novelty.",
      "We map the current workflow, identify repetitive steps, define where human judgment remains essential, and design an automation with clear inputs and outputs. That can include internal assistants, lead intake, support triage, scheduling, content operations, reporting, or connections between existing tools.",
      "Our Quebec-based studio works with businesses locally and remotely across Canada. We focus on practical scope, responsible handling of information, and systems a team can understand. We do not present experimental technology as a guaranteed replacement for people or sound operations.",
    ],
    deliverables: [
      { title: "Workflow discovery", description: "A map of the current process, pain points, decision steps, tools, and responsible owners." },
      { title: "Automation strategy", description: "Prioritized opportunities based on usefulness, complexity, risk, and expected operational value." },
      { title: "AI assistants & bots", description: "Focused interfaces that help retrieve information, qualify requests, or support defined tasks." },
      { title: "Tool integration", description: "Connections between forms, inboxes, calendars, documents, CRMs, or other approved systems." },
      { title: "Testing & safeguards", description: "Expected paths, failure states, human escalation, permissions, and quality checks." },
      { title: "Documentation & handoff", description: "A clear explanation of how the workflow operates and where it should be monitored." },
    ],
    benefits: [
      { title: "Start with a real bottleneck", description: "The work targets a defined operational problem rather than adding AI for appearance." },
      { title: "Keep people in control", description: "Appropriate review, escalation, and ownership are designed into the workflow." },
      { title: "Fit the existing business", description: "Where practical, automation connects the tools and habits the team already relies on." },
    ],
    faqs: [
      { question: "What business tasks can AI automate?", answer: "Useful candidates can include intake, routing, information retrieval, scheduling, summaries, reporting, and repetitive content operations. Suitability depends on the process, data, risk, and need for human judgment." },
      { question: "Do you build AI chatbots?", answer: "Yes, when a conversational interface is appropriate. We first define its information source, purpose, limitations, escalation path, and how success should be evaluated." },
      { question: "Can AI automation connect to our current tools?", answer: "Often, yes. Feasibility depends on the tools, their APIs, access permissions, and the information being handled. We assess those constraints before confirming a build." },
      { question: "Will automation replace our team?", answer: "Our focus is reducing repetitive work and supporting people, not making blanket replacement claims. Human review remains important wherever context, sensitivity, or accountability matters." },
      sharedLocalFaq,
    ],
    related: [
      { title: "Web Development", href: "/services/web-development", description: "Build a reliable interface or integration layer for a custom workflow." },
      { title: "SEO", href: "/services/seo", description: "Create a clearer measurement and content foundation around digital growth." },
    ],
    cta: "Explore an automation opportunity",
  },
};

export function getService(slug: string) {
  return services[slug as ServiceSlug];
}
