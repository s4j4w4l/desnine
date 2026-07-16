export type Lang = "en" | "fr";

// ─────────────────────────────────────────────────────────────────────────────
// All site copy in English and French.
// Edit this file to update text in-house — no other file changes needed.
// ─────────────────────────────────────────────────────────────────────────────
export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      ourWork: "Our Work",
      contact: "Contact Us",
    },

    hero: {
      badge: "Premium Design Studio",
      line1: { dark: "The Standard", muted: "Your" },
      line2: { red: "Competitors", dark: "Wish They" },
      line3: { muted: "Could Call", red: "Their Own." },
      description:
        "We craft premium brand identities, websites, and design systems that elevate perception, build trust, and turn businesses into unforgettable brands.",
    },

    hero2: {
      title: "We Are Great At",
      description:
        "We elevate your brand, streamline your business, and enhance your digital presence, all in one place.",
    },

    clientFeedback: {
      title: { word1: "Stories", word2: "in", word3: "Motion", word4: "!" },
      description:
        "Desnine Studio is an independent, multi-disciplinary design studio specializing in visual storytelling and innovative campaigns. We offer web and graphic design, branding, content support, social media strategy, email marketing, and targeted ads, tailored to elevate your brand.",
      stats: [
        { label: "Projects Delivered", note: "We've brought 50+ digital visions to life." },
        { label: "Satisfaction Rate", note: "Built on trust and long-term relationships." },
        { label: "Average Rating", note: "Across Google, Clutch, and referrals." },
        { label: "Happy Clients Worldwide", note: "From startups to global brands." },
      ],
    },

    process: {
      label: "(Process)",
      heading: ["Clear", "Steps.", "Clean", "Delivery."],
      subtitle:
        "A simple flow that keeps everything moving, no confusion, no delays.",
      steps: [
        {
          title: "DISCOVERY + DIRECTION",
          desc: "We learn your goals, your audience, and what success looks like.",
        },
        {
          title: "DESIGN SYSTEM",
          desc: "We set the look and rules: layout, type, spacing, and consistency.",
        },
        {
          title: "BUILD + IMPLEMENT",
          desc: "We build it responsive, fast, and polished across devices.",
        },
        {
          title: "REVISIONS + QA",
          desc: "You review, we refine, then we test everything before launch.",
        },
        {
          title: "LAUNCH + SUPPORT",
          desc: "We go live, hand over files, and stay available if you need updates.",
        },
      ],
    },

    faq: {
      label: "(FAQs)",
      heading: ["Questions?", "Answered", "."],
      subtitle: "Helping you understand our process and offerings at Desnine Studio.",
      items: [
        {
          q: "What does Desnine Studio specialize in?",
          a: "Desnine Studio focuses on clean, modern design for websites and brands. We help businesses look professional, clear, and trustworthy online.",
        },
        {
          q: "Can I start with a small project?",
          a: "Yes. Many clients start small and grow over time. We're happy to work together step by step.",
        },
        {
          q: "How long does a typical project take?",
          a: "Most projects take between 1–4 weeks, depending on what's needed. We agree on timelines before starting.",
        },
        {
          q: "Do you work with existing brands and websites?",
          a: "Yes. We can improve or update what you already have without starting from scratch.",
        },
        {
          q: "How do we work together?",
          a: "We start by understanding your goal, then move step by step with clear communication and regular updates.",
        },
        {
          q: "Is Desnine Studio a good fit for my business?",
          a: "If you want clear design, honest communication, and a smooth process, we'll work well together.",
        },
      ],
    },

    textReveal: "So, are you ready to stand out?",
    textRevealCta: "Request a Free Quote",

    footer: {
      description:
        "Desnine is a creative studio helping brands grow through branding, web design, SEO optimization, AI automation, and identity. We craft clear strategies, clean visuals, and digital solutions that connect with people and drive results.",
      newsletter: "Get the latest from Desnine Studio.",
      navTitle: "Navigation",
      followTitle: "Follow Us",
      successMsg: "✅ Thanks! You're on the list.",
      errorMsg: "❌ Something went wrong",
      links: {
        services: "Services",
        ourWork: "Our Work",
        whyUs: "Why Us?",
        contact: "Contact Us",
        privacy: "Privacy Policy",
      },
    },

    // ── Service page ──────────────────────────────────────────────────────────
    serviceHero: {
      words: ["Our", "Creative", "Services.", "Excellence", "Delivered."],
      description:
        "From brand identity to full digital experiences — every service is crafted with precision, purpose, and a relentless focus on results.",
    },

    // ── Contact Us CTA section (shared across pages) ──────────────────────────
    contactUs: {
      words: ["Ready", "to", "Build", "Something", "Exceptional?"],
      description:
        "Let's transform your ideas into a brand, website, or experience that stands out, connects with people, and drives real results.",
      cta: "Let's Talk",
    },

    // ── Contact page hero ─────────────────────────────────────────────────────
    contactHero: {
      badge: "Get in touch",
      words: ["Let's", "Build", "Something", "Remarkable"],
      description:
        "Have a bold idea or need ongoing creative support? Desnine is a creative studio crafting brands, websites, and visual systems that connect, engage, and drive meaningful growth.",
    },

    // ── Contact page FAQ ──────────────────────────────────────────────────────
    contactFaq: {
      label: "(FAQs)",
      words: ["Frequently", "Asked", "Questions"],
      subtitle:
        "Clear answers about our process, timelines, services, and how we work with you from the first idea to final delivery.",
      items: [
        {
          q: "What services do you offer?",
          a: "Our Studio offers branding & identity, web design & development, design systems, packaging, and ongoing creative support. We also partner on content and production.",
        },
        {
          q: "How does Desnine process work?",
          a: "We start with a discovery phase to understand your business and audience, followed by research, concept development, design refinement, and final asset delivery.",
        },
        {
          q: "What is the typical project timeline?",
          a: "Timelines vary by project scope, but a full branding engagement typically takes 4–6 weeks from kickoff to final deliverables.",
        },
        {
          q: "How does the Monthly Retainer work?",
          a: "We align on the scope of your project ahead of kickoff and prepare a transparent timeline and design plan based on your needs. It doesn't matter whether it's branding, website design, UI/UX, or marketing materials, it's all included.",
        },
        {
          q: "Do you offer logo design only?",
          a: "Yes, we can create a standalone logo, but we recommend a comprehensive visual identity system for consistent application across touchpoints.",
        },
        {
          q: "What if I'm not happy with the work?",
          a: "At Desnine Studio, we keep refining until it feels right. Design is subjective, and sometimes your vision evolves, that's normal. We collaborate closely, make thoughtful revisions, and bridge any taste gaps to ensure the final result matches your expectations perfectly.",
        },
        {
          q: "Is there a limit to how much I can ask for?",
          a: "Not really, you're free to ask for anything you need. We'll always be transparent about what's included in your plan and what falls outside the original scope. For custom projects, any additional requests can be handled through a change order or by adding a retainer option to keep everything smooth and organized.",
        },
      ],
    },

    // ── Trust badge (hero) ────────────────────────────────────────────────────
    trustBadge: {
      freeQuote: "Get Your Free Quote",
      seeWork: "See Our Work",
      lovedBy: "Loved by Big Brands",
    },

    // ── Why Us page ───────────────────────────────────────────────────────────
    whyUs: {
      badge: "Why us",
      eyebrow: "Creative direction for modern brands",
      heading: "Why choose",
      description:
        "We blend brand strategy, design craft, and automation so every touchpoint is clearer, faster, and more effective.",
      ctaLetsTalk: "Let's talk",
      ctaSeeWork: "See our work",
      ctaNote: "Clear scopes, honest timelines, no fluff.",
      principlesTitle: "What we stand for",
      principlesSubtitle:
        "The principles that shape our decisions, timelines, and the work you ship.",
      principlesTag: "Outcomes over aesthetics",
      principles: [
        {
          tag: "Principle 01",
          title: "Clarity over clutter",
          description: "Simple, strategic design that moves people and markets.",
        },
        {
          tag: "Principle 02",
          title: "Partnership mindset",
          description: "We listen first, create second. Guided, not sold to.",
        },
        {
          tag: "Principle 03",
          title: "Innovation with purpose",
          description: "Creativity + AI + automation aimed at real outcomes.",
        },
        {
          tag: "Principle 04",
          title: "Reliability first",
          description: "Clear timelines, tight scope, proactive communication.",
        },
        {
          tag: "Principle 05",
          title: "Data-led decisions",
          description: "We measure what matters and iterate to lift ROI.",
        },
        {
          tag: "Principle 06",
          title: "Transparent pricing",
          description: "No surprises. Crystal-clear scopes and milestones.",
        },
      ],
      comparisonTitle: "What makes us different",
      comparisonSubtitle: "We remove the noise and build systems that grow with you.",
      comparisonNote: "Lean, transparent workflow",
      mostAgencies: "Most agencies",
      mostAgenciesItems: [
        "Rituals over results",
        "Rigid retainers & add-ons",
        "Bloated processes",
        "Surface-level design",
        "Opaque pricing",
      ],
      desnineWay: "The Desnine way",
      desnineWayItems: [
        "Outcomes > output",
        "Flexible, tailored scopes",
        "Lean, transparent workflow",
        "Brand systems that scale",
        "Clear budgets & timelines",
      ],
      desnineWayNote: "Built for founders who want momentum, not meetings.",
      howWeWorkTitle: "How we work",
      howWeWorkHeading:
        "A lean four-step flow that keeps momentum high and surprises low.",
      howWeWorkDesc:
        "From first call to post-launch support, we keep you in the loop and focused on what matters: shipping work that moves the business.",
      steps: [
        {
          label: "Step 01",
          title: "Discovery",
          description:
            "Map goals, audience, and success metrics so we're aligned on a clear brief before any pixels move.",
        },
        {
          label: "Step 02",
          title: "Strategy",
          description:
            "Positioning, messaging, and creative direction with sharp focus — the blueprint for every asset.",
        },
        {
          label: "Step 03",
          title: "Design & Build",
          description:
            "Identity, website, packaging, and automations crafted to convert and stay consistent at scale.",
        },
        {
          label: "Step 04",
          title: "Launch & Support",
          description:
            "QA, handover, and post-launch optimization so momentum doesn't die the day the project goes live.",
        },
      ],
      partnershipTitle: "Built on partnership",
      partnershipHeading: "We treat your brand like it's ours.",
      partnershipDesc:
        "We ask better questions, make braver choices, and stay after launch to keep compounding results. Post-launch support, responsive communication, and a streamlined workflow are baked into how we work — not sold as add-ons.",
      partnershipBadges: [
        "Post-launch support",
        "Responsive comms",
        "Streamlined workflow",
      ],
      ctaBoxTitle: "Let's shape your story",
      ctaBoxDesc:
        "Whether you need a brand foundation, a conversion-ready website, or packaging that sells, we'll guide you from idea to impact.",
      ctaStartProject: "Start a project",
      ctaExploreServices: "Explore services",
      ctaBoxNote:
        "One focused studio, no bloated team. Just senior direction and a clear line to the people doing the work.",
    },

    // ── Work page ─────────────────────────────────────────────────────────────
    work: {
      heading: ["Our", "Work"],
      descBold: "Creative that connects. Design that delivers.",
      desc: "We don't just design, we build visual stories that move people and grow brands. Each project below reflects our commitment to clarity, impact, and craft.",
      moreProjects:
        "More projects and case studies are currently in development and will be added soon.",
    },

    // ── Work case study shared labels + per-project content ───────────────────
    workCase: {
      goBack: "Go back",
      projectSummary: "The Project Summary :",
      whatWeDid: "What We Did :",
      category: "Category",
      logoBranding: "Logo & Branding",
      coresecure: {
        summary: [
          "Core Secure is dedicated to leading the integration of Web3 infrastructure into corporate operations, with a vision built on collaboration, security, transparency, and simplicity. Its visual identity embraces a youthful, tech-savvy, and minimal design inspired by the structured nature of blockchain. The geometric symbol reflects reliability and innovation, while Aeonik's geometric typeface conveys forward thinking stability. A bold blue palette reinforces trust and professionalism, positioning Core Secure as a distinctive and trustworthy presence in the Web3 landscape.",
        ],
        category:
          "Technology & Security, Innovation, Reliability, Collaboration, Transparency, Professionalism & Trust",
      },
      greenly: {
        summary: [
          "Greenly positions itself as an ecological alliance dedicated to advancing green innovation and safeguarding natural resources. The mission is rooted in creating a sustainable future for the planet by driving environmental protection and collective responsibility. Greenly acts as a catalyst for change, inspiring communities and individuals to contribute toward a greener tomorrow and reinforcing its role as a partner in ecological progress.",
        ],
        category:
          "Technology & Security, Innovation, Reliability, Collaboration, Transparency, Professionalism & Trust",
      },
      mavo: {
        summary: [
          "Mavo is a financial management app built to simplify money control for individuals and businesses. The identity features a bold M logo symbolizing stability and growth, supported by a vibrant color palette, clean typography, and visuals inspired by financial data flows. The brand system spans digital product UI, stationery, and marketing assets, creating a cohesive and approachable look.",
        ],
        category: "Marketing Collateral",
      },
      quixel: {
        summary: [
          "Quixel's corporate identity was designed to encapsulate the essence of innovation and realism that defines its approach to 3D assets. The identity integrates three core elements: a stylized globe, the letter Q, and a digital mesh motif. Together, these elements symbolize the brand's commitment to blending creativity with cutting-edge technology, offering creators high-quality solutions.",
          "The system was built on a modular grid, enhancing depth, precision, and sophistication. A vibrant orange palette conveys energy, creativity, and forward-thinking, while Helvetica Now provides a modern, cohesive typographic foundation. This identity not only reflects Quixel's mission to empower artists but also strengthens its global presence in the 3D design landscape.",
        ],
        category: "Technology & Empowerment",
      },
    },

    // ── Subscription page ─────────────────────────────────────────────────────
    sub: {
      badge: "Design Subscription",
      words: ["Subscription", "Design", "That", "Drives Results"],
      description:
        "A modern design subscription for teams that need consistent, high-quality design without long contracts or unnecessary friction.",
      getInTouch: "Get in Touch",
      seePricing: "See Pricing",
      rating: "4.9/5 stars (100+ Clients)",
      tagline: "They hit their targets — you're next.",
      scrollExplore: "Scroll to explore",
    },

    // ── Articles page ─────────────────────────────────────────────────────────
    articles: {
      eyebrow: "Articles",
      heading: "Articles & Resources",
      description: "Deep-dives and practical playbooks on branding, web, and AI.",
      searchPlaceholder: "Search (press / to focus)",
      readArticle: "Read Article",
      read: "Read",
      loadMore: "Load more",
      noResults: "No results. Try another term.",
    },

    // ── Privacy page ──────────────────────────────────────────────────────────
    privacy: {
      title: "Privacy Policy",
      description:
        'This website is operated by Desnine Studio ("we", "us", "our"). We collects, uses, and protects your information when you use our website, products, or services (the "Service"). We respect the privacy of users of our website and recognise that when you choose to provide us with information about yourself, you trust us to act in a responsible manner with that information.',
      badge1: "GDPR-Friendly",
      badge2: "CCPA-Aware",
      badge3: "Cookie Controls",
      lastUpdated: "Last updated:",
    },

    // ── Services bento grid (service section two) ─────────────────────────────
    bentoSection: {
      cta: "See all services →",
      items: [
        {
          title: "Branding & Identity",
          description:
            "From strategy to visuals, we craft identities that reflect who you are and resonate with who you want to reach. Logo, type, color, tone delivered as a ready-to-use system.",
        },
        {
          title: "Print & Packaging Design",
          description:
            "We create packaging and print assets that turn heads and tell stories. From label design and structural packaging to flyers, menus, business cards, and event signage we make your brand tangible.",
        },
        {
          title: "Website Design & Development",
          description:
            "We design and build high performing websites with seamless user experience, clean interfaces, and solid backend development using Webflow, WordPress, Shopify or custom stacks. Fast. Responsive. Made to grow with you.",
        },
        {
          title: "AI Automation & Bots",
          description:
            "Harness the power of AI to automate repetitive tasks, streamline operations, and provide smarter customer service with chatbots and custom automations. Designed to save you time, money, and energy.",
        },
        {
          title: "SEO Optimization",
          description:
            "We boost your search visibility with smart SEO strategies that align with your brand and business goals. From keyword research to on-page fixes, technical audits to content optimization we help you climb the ranks and stay there.",
        },
        {
          title: "Advertising Design",
          description:
            "Whether print or digital, we create ad creatives that catch the eye, communicate clearly, and drive action. From static to motion, one-off campaigns to long-term strategies, we've got you covered.",
        },
        {
          title: "Smart Analytics",
          description:
            "We help you set up and make sense of your analytics whether it's user behavior, campaign performance, or conversion paths. Get dashboards, insights, and reporting tools that make your data work for you.",
        },
        {
          title: "Digital Design",
          description:
            "We craft stunning digital assets like newsletters, presentations, web banners, app graphics, social content, email templates, UI elements and more that feel consistent, responsive, and ready for any screen.",
        },
        {
          title: "Content Creation & Visual Support",
          description:
            "Desnine enhances your content with illustrations, iconography, photo retouching, and mockups. We turn raw ideas into polished visuals that connect.",
        },
        {
          title: "Industry-Specific Design",
          description:
            "Whether you're in F&B, tech, fashion, health, or real estate our industry-specific design services help you stand. Whatever your niche, we help you look professional and trustworthy.",
        },
      ],
    },

    // ── Contact form ──────────────────────────────────────────────────────────
    contactForm: {
      heading: "Tell us about your project",
      subtitle: "Fill in the details below, we'll get back within 24–48 hours.",
      fullName: "Full Name *",
      companyName: "Company Name",
      emailAddress: "Email Address *",
      phoneNumber: "Phone Number",
      serviceNeeded: "Service Needed *",
      timeline: "Ideal Timeline (optional)",
      projectDetails: "Tell Us About Your Project *",
      fullNamePlaceholder: "Enter your full name",
      companyNamePlaceholder: "Enter your company name",
      emailPlaceholder: "your@email.com",
      phonePlaceholder: "+1 (555) 123-4567",
      projectDetailsPlaceholder: "Describe your goals, requirements, timeline...",
      selectService: "Select a service",
      selectWindow: "Select a window",
      services: [
        "SEO Optimization",
        "Website Design & Development",
        "AI Automation & Bots",
        "Smart Analytics",
        "Branding & Identity",
        "Print & Packaging Design",
        "Digital Design",
        "Advertising Design",
        "Content Creation & Visual Support",
        "Industry-Specific Design",
        "Social Media Management",
        "Multiple Services",
        "Other",
      ],
      timelineOptions: ["ASAP", "2–4 weeks", "4–8 weeks", "Flexible"],
      sending: "Sending...",
      sendMessage: "Send Message",
      errorRequired: "Please fill all required fields.",
      successMsg: "Form submitted successfully!",
      networkError: "Network error. Please try again.",
      unknownError: "Something went wrong. Please try again.",
      consent:
        "By submitting this form, you consent to Desnine storing your information to respond to your inquiry.",
    },

    // ── Article page chrome ───────────────────────────────────────────────────
    articlePage: {
      backToArticles: "Back to Articles",
      minRead: "min read",
      relatedReads: "Related reads",
    },
  },

  // ───────────────────────────────────────────────────────────────────────────
  // FRENCH
  // ───────────────────────────────────────────────────────────────────────────
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      ourWork: "Nos Réalisations",
      contact: "Nous Contacter",
    },

    hero: {
      badge: "Studio de Design Premium",
      line1: { dark: "La Référence", muted: "Que" },
      line2: { red: "Vos Concurrents", dark: "Voudraient" },
      line3: { muted: "Appeler", red: "La Leur." },
      description:
        "Nous créons des identités de marque, des sites web et des systèmes de design qui élèvent la perception, bâtissent la confiance et transforment les entreprises en marques inoubliables.",
    },

    hero2: {
      title: "Nos Expertises",
      description:
        "Nous élevons votre marque, optimisons vos processus et renforçons votre présence digitale, tout en un seul endroit.",
    },

    clientFeedback: {
      title: { word1: "Histoires", word2: "en", word3: "Mouvement", word4: "!" },
      description:
        "Desnine Studio est un studio de design indépendant et multidisciplinaire spécialisé dans la narration visuelle et les campagnes innovantes. Nous offrons du design web et graphique, du branding, du soutien de contenu, de la stratégie sur les réseaux sociaux, du marketing par courriel et des publicités ciblées, adaptés pour élever votre marque.",
      stats: [
        { label: "Projets Livrés", note: "Nous avons concrétisé plus de 50 visions numériques." },
        { label: "Taux de Satisfaction", note: "Fondé sur la confiance et les relations durables." },
        { label: "Note Moyenne", note: "Sur Google, Clutch et les recommandations." },
        { label: "Clients Satisfaits dans le Monde", note: "Des startups aux marques mondiales." },
      ],
    },

    process: {
      label: "(Processus)",
      heading: ["Étapes", "Claires.", "Livraison", "Nette."],
      subtitle:
        "Un flux simple qui fait avancer les choses, sans confusion ni délais.",
      steps: [
        {
          title: "DÉCOUVERTE + DIRECTION",
          desc: "Nous apprenons vos objectifs, votre audience et ce que signifie le succès.",
        },
        {
          title: "SYSTÈME DE DESIGN",
          desc: "Nous définissons l'apparence et les règles : mise en page, typographie, espacement et cohérence.",
        },
        {
          title: "CONSTRUCTION + IMPLÉMENTATION",
          desc: "Nous construisons un site responsive, rapide et soigné sur tous les appareils.",
        },
        {
          title: "RÉVISIONS + ASSURANCE QUALITÉ",
          desc: "Vous révisez, nous raffinons, puis nous testons tout avant le lancement.",
        },
        {
          title: "LANCEMENT + SUPPORT",
          desc: "Nous mettons en ligne, remettons les fichiers et restons disponibles pour les mises à jour.",
        },
      ],
    },

    faq: {
      label: "(FAQs)",
      heading: ["Questions?", "Répondues", "."],
      subtitle:
        "Vous aider à comprendre notre processus et nos offres chez Desnine Studio.",
      items: [
        {
          q: "En quoi se spécialise Desnine Studio?",
          a: "Desnine Studio se concentre sur un design propre et moderne pour les sites web et les marques. Nous aidons les entreprises à paraître professionnelles, claires et fiables en ligne.",
        },
        {
          q: "Puis-je commencer avec un petit projet?",
          a: "Oui. Beaucoup de clients commencent petit et grandissent avec le temps. Nous sommes heureux de travailler ensemble étape par étape.",
        },
        {
          q: "Combien de temps prend un projet typique?",
          a: "La plupart des projets prennent entre 1 et 4 semaines, selon les besoins. Nous convenons des délais avant de commencer.",
        },
        {
          q: "Travaillez-vous avec des marques et sites existants?",
          a: "Oui. Nous pouvons améliorer ou mettre à jour ce que vous avez déjà sans repartir de zéro.",
        },
        {
          q: "Comment travaille-t-on ensemble?",
          a: "Nous commençons par comprendre votre objectif, puis avançons étape par étape avec une communication claire et des mises à jour régulières.",
        },
        {
          q: "Desnine Studio convient-il à mon entreprise?",
          a: "Si vous souhaitez un design clair, une communication honnête et un processus fluide, nous travaillerons bien ensemble.",
        },
      ],
    },

    textReveal: "Alors, êtes-vous prêt à vous démarquer?",
    textRevealCta: "Demander un Devis Gratuit",

    footer: {
      description:
        "Desnine est un studio créatif qui aide les marques à croître grâce au branding, au design web, à l'optimisation SEO, à l'automatisation IA et à l'identité. Nous créons des stratégies claires, des visuels épurés et des solutions numériques qui créent du lien et génèrent des résultats.",
      newsletter: "Restez informé par Desnine Studio.",
      navTitle: "Navigation",
      followTitle: "Suivez-Nous",
      successMsg: "✅ Merci! Vous êtes sur la liste.",
      errorMsg: "❌ Une erreur s'est produite",
      links: {
        services: "Services",
        ourWork: "Nos Réalisations",
        whyUs: "Pourquoi Nous?",
        contact: "Nous Contacter",
        privacy: "Politique de Confidentialité",
      },
    },

    // ── Service page ──────────────────────────────────────────────────────────
    serviceHero: {
      words: ["Nos", "Services", "Créatifs.", "Excellence", "Garantie."],
      description:
        "De l'identité de marque aux expériences digitales complètes — chaque service est conçu avec précision, intention et un focus implacable sur les résultats.",
    },

    // ── Contact Us CTA section ────────────────────────────────────────────────
    contactUs: {
      words: ["Prêts", "à", "Créer", "Quelque", "Chose d'Exceptionnel?"],
      description:
        "Transformons vos idées en une marque, un site web ou une expérience qui se démarque, crée du lien et génère de vrais résultats.",
      cta: "Parlons-en",
    },

    // ── Contact page hero ─────────────────────────────────────────────────────
    contactHero: {
      badge: "Entrer en contact",
      words: ["Construisons", "Quelque", "Chose", "Remarquable"],
      description:
        "Vous avez une idée audacieuse ou besoin d'un soutien créatif continu? Desnine est un studio créatif qui conçoit des marques, des sites web et des systèmes visuels qui connectent, engagent et génèrent une croissance significative.",
    },

    // ── Contact page FAQ ──────────────────────────────────────────────────────
    contactFaq: {
      label: "(FAQs)",
      words: ["Questions", "Fréquemment", "Posées"],
      subtitle:
        "Des réponses claires sur notre processus, nos délais, nos services et la façon dont nous travaillons avec vous de la première idée à la livraison finale.",
      items: [
        {
          q: "Quels services offrez-vous?",
          a: "Notre studio offre du branding & identité, du design web & développement, des systèmes de design, de l'emballage et du soutien créatif continu. Nous collaborons aussi sur du contenu et de la production.",
        },
        {
          q: "Comment fonctionne le processus Desnine?",
          a: "Nous commençons par une phase de découverte pour comprendre votre entreprise et votre audience, suivie de recherches, du développement de concepts, du raffinement du design et de la livraison finale des actifs.",
        },
        {
          q: "Quel est le délai habituel d'un projet?",
          a: "Les délais varient selon la portée du projet, mais un engagement complet de branding prend généralement 4 à 6 semaines du lancement à la livraison finale.",
        },
        {
          q: "Comment fonctionne le forfait mensuel?",
          a: "Nous nous alignons sur la portée de votre projet avant le lancement et préparons un calendrier transparent et un plan de design selon vos besoins. Que ce soit du branding, du design web, de l'UI/UX ou des supports marketing, tout est inclus.",
        },
        {
          q: "Proposez-vous uniquement du design de logo?",
          a: "Oui, nous pouvons créer un logo autonome, mais nous recommandons un système d'identité visuelle complet pour une application cohérente sur tous les points de contact.",
        },
        {
          q: "Que faire si je ne suis pas satisfait du travail?",
          a: "Chez Desnine Studio, nous continuons à affiner jusqu'à ce que ce soit parfait. Le design est subjectif et votre vision peut évoluer — c'est normal. Nous collaborons étroitement, effectuons des révisions réfléchies et comblons tout écart de goût pour que le résultat final corresponde parfaitement à vos attentes.",
        },
        {
          q: "Y a-t-il une limite à ce que je peux demander?",
          a: "Pas vraiment, vous êtes libre de demander ce dont vous avez besoin. Nous serons toujours transparents sur ce qui est inclus dans votre plan et ce qui dépasse la portée initiale. Pour les projets personnalisés, toute demande supplémentaire peut être traitée par un ordre de modification ou en ajoutant une option de retainer.",
        },
      ],
    },

    // ── Trust badge ───────────────────────────────────────────────────────────
    trustBadge: {
      freeQuote: "Obtenir un Devis Gratuit",
      seeWork: "Voir Nos Réalisations",
      lovedBy: "Apprécié par les Grandes Marques",
    },

    // ── Why Us page ───────────────────────────────────────────────────────────
    whyUs: {
      badge: "Pourquoi nous",
      eyebrow: "Direction créative pour les marques modernes",
      heading: "Pourquoi choisir",
      description:
        "Nous associons stratégie de marque, savoir-faire en design et automatisation pour que chaque point de contact soit plus clair, plus rapide et plus efficace.",
      ctaLetsTalk: "Parlons-en",
      ctaSeeWork: "Voir nos réalisations",
      ctaNote: "Portées claires, délais honnêtes, sans superflu.",
      principlesTitle: "Ce pour quoi nous nous engageons",
      principlesSubtitle:
        "Les principes qui guident nos décisions, nos délais et le travail que vous livrez.",
      principlesTag: "Résultats avant l'esthétique",
      principles: [
        {
          tag: "Principe 01",
          title: "Clarté plutôt que désordre",
          description: "Un design simple et stratégique qui touche les gens et les marchés.",
        },
        {
          tag: "Principe 02",
          title: "Esprit de partenariat",
          description: "Nous écoutons d'abord, créons ensuite. Guidés, pas vendus.",
        },
        {
          tag: "Principe 03",
          title: "Innovation avec intention",
          description: "Créativité + IA + automatisation orientées vers de vrais résultats.",
        },
        {
          tag: "Principe 04",
          title: "Fiabilité avant tout",
          description: "Délais clairs, portée précise, communication proactive.",
        },
        {
          tag: "Principe 05",
          title: "Décisions basées sur les données",
          description: "Nous mesurons ce qui compte et itérons pour améliorer le ROI.",
        },
        {
          tag: "Principe 06",
          title: "Tarification transparente",
          description: "Aucune surprise. Portées et jalons parfaitement clairs.",
        },
      ],
      comparisonTitle: "Ce qui nous différencie",
      comparisonSubtitle: "Nous éliminons le bruit et construisons des systèmes qui grandissent avec vous.",
      comparisonNote: "Flux de travail lean et transparent",
      mostAgencies: "La plupart des agences",
      mostAgenciesItems: [
        "Rituels plutôt que résultats",
        "Retainers rigides & suppléments",
        "Processus gonflés",
        "Design superficiel",
        "Tarification opaque",
      ],
      desnineWay: "La méthode Desnine",
      desnineWayItems: [
        "Résultats > production",
        "Portées flexibles et adaptées",
        "Flux de travail lean et transparent",
        "Systèmes de marque évolutifs",
        "Budgets & délais clairs",
      ],
      desnineWayNote: "Conçu pour les fondateurs qui veulent de l'élan, pas des réunions.",
      howWeWorkTitle: "Comment nous travaillons",
      howWeWorkHeading:
        "Un processus lean en quatre étapes qui maintient l'élan et minimise les surprises.",
      howWeWorkDesc:
        "Du premier appel au support post-lancement, nous vous tenons informé et concentré sur l'essentiel : livrer un travail qui fait avancer l'entreprise.",
      steps: [
        {
          label: "Étape 01",
          title: "Découverte",
          description:
            "Définir les objectifs, l'audience et les indicateurs de succès pour s'aligner sur un brief clair avant tout mouvement.",
        },
        {
          label: "Étape 02",
          title: "Stratégie",
          description:
            "Positionnement, messages et direction créative avec une mise au point précise — le plan directeur de chaque actif.",
        },
        {
          label: "Étape 03",
          title: "Design & Construction",
          description:
            "Identité, site web, emballage et automatisations conçus pour convertir et rester cohérents à grande échelle.",
        },
        {
          label: "Étape 04",
          title: "Lancement & Support",
          description:
            "Assurance qualité, transfert et optimisation post-lancement pour que l'élan ne s'arrête pas le jour du lancement.",
        },
      ],
      partnershipTitle: "Fondé sur le partenariat",
      partnershipHeading: "Nous traitons votre marque comme si c'était la nôtre.",
      partnershipDesc:
        "Nous posons de meilleures questions, faisons des choix plus audacieux et restons après le lancement pour continuer à accumuler des résultats. Le support post-lancement, la communication réactive et un flux de travail rationalisé font partie intégrante de notre façon de travailler — ils ne sont pas vendus en option.",
      partnershipBadges: [
        "Support post-lancement",
        "Comms réactives",
        "Flux de travail rationalisé",
      ],
      ctaBoxTitle: "Façonnons votre histoire",
      ctaBoxDesc:
        "Que vous ayez besoin d'une base de marque, d'un site web optimisé pour la conversion ou d'un emballage qui se vend, nous vous guidons de l'idée à l'impact.",
      ctaStartProject: "Démarrer un projet",
      ctaExploreServices: "Explorer les services",
      ctaBoxNote:
        "Un studio ciblé, sans équipe gonflée. Juste une direction senior et un lien direct avec ceux qui font le travail.",
    },

    // ── Work page ─────────────────────────────────────────────────────────────
    work: {
      heading: ["Nos", "Réalisations"],
      descBold: "Créatif qui connecte. Design qui livre.",
      desc: "Nous ne faisons pas que du design, nous construisons des histoires visuelles qui touchent les gens et font grandir les marques. Chaque projet ci-dessous reflète notre engagement envers la clarté, l'impact et le savoir-faire.",
      moreProjects:
        "D'autres projets et études de cas sont actuellement en développement et seront ajoutés prochainement.",
    },

    // ── Work case study shared labels + per-project content ───────────────────
    workCase: {
      goBack: "Retour",
      projectSummary: "Résumé du Projet :",
      whatWeDid: "Ce que Nous Avons Fait :",
      category: "Catégorie",
      logoBranding: "Logo & Identité",
      coresecure: {
        summary: [
          "Core Secure se consacre à la direction de l'intégration de l'infrastructure Web3 dans les opérations d'entreprise, avec une vision fondée sur la collaboration, la sécurité, la transparence et la simplicité. Son identité visuelle adopte un design jeune, technophile et minimal inspiré de la nature structurée de la blockchain. Le symbole géométrique reflète la fiabilité et l'innovation, tandis que la police géométrique Aeonik exprime une stabilité tournée vers l'avenir. Une palette bleue audacieuse renforce la confiance et le professionnalisme, positionnant Core Secure comme une présence distinctive et fiable dans le paysage Web3.",
        ],
        category:
          "Technologie & Sécurité, Innovation, Fiabilité, Collaboration, Transparence, Professionnalisme & Confiance",
      },
      greenly: {
        summary: [
          "Greenly se positionne comme une alliance écologique dédiée à l'avancement de l'innovation verte et à la protection des ressources naturelles. La mission est ancrée dans la création d'un avenir durable pour la planète en favorisant la protection de l'environnement et la responsabilité collective. Greenly agit comme catalyseur du changement, inspirant les communautés et les individus à contribuer à un avenir plus vert et renforçant son rôle de partenaire dans le progrès écologique.",
        ],
        category:
          "Technologie & Sécurité, Innovation, Fiabilité, Collaboration, Transparence, Professionnalisme & Confiance",
      },
      mavo: {
        summary: [
          "Mavo est une application de gestion financière conçue pour simplifier le contrôle de l'argent pour les particuliers et les entreprises. L'identité met en vedette un logo M audacieux symbolisant la stabilité et la croissance, soutenu par une palette de couleurs vibrante, une typographie propre et des visuels inspirés des flux de données financières. Le système de marque couvre l'UI du produit numérique, la papeterie et les actifs marketing, créant une apparence cohérente et accessible.",
        ],
        category: "Supports Marketing",
      },
      quixel: {
        summary: [
          "L'identité d'entreprise de Quixel a été conçue pour encapsuler l'essence de l'innovation et du réalisme qui définit son approche des actifs 3D. L'identité intègre trois éléments essentiels : un globe stylisé, la lettre Q et un motif de maillage numérique. Ensemble, ces éléments symbolisent l'engagement de la marque à mêler créativité et technologie de pointe, offrant aux créateurs des solutions de haute qualité.",
          "Le système a été construit sur une grille modulaire, renforçant la profondeur, la précision et la sophistication. Une palette orange vibrante exprime l'énergie, la créativité et la vision d'avenir, tandis qu'Helvetica Now fournit une base typographique moderne et cohérente. Cette identité reflète non seulement la mission de Quixel d'habiliter les artistes, mais renforce également sa présence mondiale dans le paysage du design 3D.",
        ],
        category: "Technologie & Empowerment",
      },
    },

    // ── Subscription page ─────────────────────────────────────────────────────
    sub: {
      badge: "Design par Abonnement",
      words: ["Design", "Par", "Abonnement", "Qui Génère des Résultats"],
      description:
        "Un abonnement design moderne pour les équipes qui ont besoin d'un design cohérent et de haute qualité sans contrats longs ni friction inutile.",
      getInTouch: "Nous Contacter",
      seePricing: "Voir les Tarifs",
      rating: "4,9/5 étoiles (100+ Clients)",
      tagline: "Ils ont atteint leurs objectifs — vous êtes le prochain.",
      scrollExplore: "Défiler pour explorer",
    },

    // ── Articles page ─────────────────────────────────────────────────────────
    articles: {
      eyebrow: "Articles",
      heading: "Articles & Ressources",
      description: "Analyses approfondies et guides pratiques sur le branding, le web et l'IA.",
      searchPlaceholder: "Rechercher (appuyez sur / pour cibler)",
      readArticle: "Lire l'Article",
      read: "Lire",
      loadMore: "Charger plus",
      noResults: "Aucun résultat. Essayez un autre terme.",
    },

    // ── Privacy page ──────────────────────────────────────────────────────────
    privacy: {
      title: "Politique de Confidentialité",
      description:
        'Ce site est exploité par Desnine Studio (« nous », « notre »). Nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre site web, nos produits ou nos services (le « Service »). Nous respectons la vie privée des utilisateurs de notre site et reconnaissons que lorsque vous choisissez de nous fournir des informations vous concernant, vous nous faites confiance pour agir de manière responsable avec ces informations.',
      badge1: "Conforme RGPD",
      badge2: "Conforme CCPA",
      badge3: "Contrôles des Cookies",
      lastUpdated: "Dernière mise à jour :",
    },

    // ── Services bento grid (service section two) ─────────────────────────────
    bentoSection: {
      cta: "Voir tous les services →",
      items: [
        {
          title: "Identité & Marque",
          description:
            "De la stratégie aux visuels, nous créons des identités qui reflètent qui vous êtes et résonnent avec votre cible. Logo, typographie, couleurs et ton livrés en système clé en main.",
        },
        {
          title: "Design d'Impression & Packaging",
          description:
            "Nous créons des emballages et supports imprimés qui attirent le regard et racontent des histoires. Du design d'étiquettes à l'emballage structurel, en passant par les dépliants, menus, cartes de visite et signalétique — nous rendons votre marque tangible.",
        },
        {
          title: "Conception & Développement Web",
          description:
            "Nous concevons et développons des sites web performants avec une expérience utilisateur fluide, des interfaces épurées et un développement backend solide sur Webflow, WordPress, Shopify ou sur mesure. Rapide. Responsive. Fait pour grandir avec vous.",
        },
        {
          title: "Automatisation IA & Bots",
          description:
            "Exploitez la puissance de l'IA pour automatiser les tâches répétitives, optimiser les opérations et offrir un service client plus intelligent avec des chatbots et automatisations sur mesure. Conçu pour vous faire gagner du temps, de l'argent et de l'énergie.",
        },
        {
          title: "Optimisation SEO",
          description:
            "Nous améliorons votre visibilité dans les moteurs de recherche avec des stratégies SEO intelligentes alignées sur votre marque et vos objectifs. De la recherche de mots-clés aux corrections on-page, des audits techniques à l'optimisation du contenu — nous vous aidons à grimper et à y rester.",
        },
        {
          title: "Design Publicitaire",
          description:
            "Que ce soit en impression ou en digital, nous créons des visuels publicitaires qui captent l'attention, communiquent clairement et génèrent de l'action. Du statique au motion, des campagnes ponctuelles aux stratégies long terme, nous avons tout ce qu'il vous faut.",
        },
        {
          title: "Analytique Intelligente",
          description:
            "Nous vous aidons à mettre en place et à interpréter vos données analytiques, qu'il s'agisse du comportement des utilisateurs, des performances de campagne ou des parcours de conversion. Obtenez des tableaux de bord, insights et outils de reporting qui font travailler vos données pour vous.",
        },
        {
          title: "Design Numérique",
          description:
            "Nous concevons de superbes actifs numériques : newsletters, présentations, bannières web, graphiques d'applis, contenu social, gabarits d'e-mail, éléments UI et bien plus — cohérents, responsives et prêts pour tous les écrans.",
        },
        {
          title: "Création de Contenu & Support Visuel",
          description:
            "Desnine enrichit votre contenu avec des illustrations, de l'iconographie, de la retouche photo et des maquettes. Nous transformons des idées brutes en visuels soignés qui créent du lien.",
        },
        {
          title: "Design Sectoriel",
          description:
            "Que vous soyez dans la restauration, la tech, la mode, la santé ou l'immobilier, nos services de design sectoriel vous aident à vous démarquer. Quelle que soit votre niche, nous vous aidons à paraître professionnel et fiable.",
        },
      ],
    },

    // ── Contact form ──────────────────────────────────────────────────────────
    contactForm: {
      heading: "Parlez-nous de votre projet",
      subtitle: "Remplissez les informations ci-dessous, nous vous répondrons dans les 24 à 48 heures.",
      fullName: "Nom complet *",
      companyName: "Nom de l'entreprise",
      emailAddress: "Adresse e-mail *",
      phoneNumber: "Numéro de téléphone",
      serviceNeeded: "Service requis *",
      timeline: "Délai idéal (optionnel)",
      projectDetails: "Parlez-nous de votre projet *",
      fullNamePlaceholder: "Entrez votre nom complet",
      companyNamePlaceholder: "Entrez le nom de votre entreprise",
      emailPlaceholder: "votre@email.com",
      phonePlaceholder: "+1 (555) 123-4567",
      projectDetailsPlaceholder: "Décrivez vos objectifs, exigences, délais...",
      selectService: "Sélectionner un service",
      selectWindow: "Sélectionner une fenêtre",
      services: [
        "Optimisation SEO",
        "Conception & Développement Web",
        "Automatisation IA & Bots",
        "Analytique Intelligente",
        "Identité & Marque",
        "Design d'Impression & Packaging",
        "Design Numérique",
        "Design Publicitaire",
        "Création de Contenu & Support Visuel",
        "Design Sectoriel",
        "Gestion des Réseaux Sociaux",
        "Plusieurs Services",
        "Autre",
      ],
      timelineOptions: ["Dès que possible", "2 à 4 semaines", "4 à 8 semaines", "Flexible"],
      sending: "Envoi en cours...",
      sendMessage: "Envoyer le message",
      errorRequired: "Veuillez remplir tous les champs obligatoires.",
      successMsg: "Formulaire soumis avec succès !",
      networkError: "Erreur réseau. Veuillez réessayer.",
      unknownError: "Une erreur s'est produite. Veuillez réessayer.",
      consent:
        "En soumettant ce formulaire, vous consentez à ce que Desnine conserve vos informations pour répondre à votre demande.",
    },

    // ── Article page chrome ───────────────────────────────────────────────────
    articlePage: {
      backToArticles: "Retour aux articles",
      minRead: "min de lecture",
      relatedReads: "Lectures connexes",
    },
  },
} as const;

export type Translations = (typeof translations)[Lang];
