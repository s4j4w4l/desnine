# Desnine Studio SEO architecture

This document is the maintained keyword, metadata, and internal-link map for the production site. The canonical host is `https://www.desnine.com`.

## Keyword map

| URL | Primary keyword | Secondary keywords | Intent |
| --- | --- | --- | --- |
| `/` | branding and web design studio Quebec | creative design studio, Greater Montreal design studio | Commercial / brand |
| `/about` | about Desnine Studio | independent design studio Quebec, creative direction | Trust / evaluation |
| `/services` | creative design services | branding, web, packaging, SEO, AI services | Commercial hub |
| `/services/branding` | branding studio Quebec | brand identity design, logo system, visual identity | Commercial |
| `/services/web-design` | web design studio Quebec | custom website design, responsive web design, UX/UI | Commercial |
| `/services/web-development` | web development Quebec | custom website development, Next.js development | Commercial |
| `/services/packaging-design` | packaging design Quebec | label design, product packaging, supplement packaging | Commercial |
| `/services/graphic-design` | graphic design studio Quebec | print design, campaign design, social media design | Commercial |
| `/services/seo` | SEO services Quebec | technical SEO, local SEO, on-page SEO | Commercial |
| `/services/ai-automation` | AI automation Quebec | AI workflows, AI assistants, business automation | Commercial |
| `/work` | Desnine Studio portfolio | branding case studies, web design projects | Proof / evaluation |
| `/work/marche-main` | grocery branding case study | retail identity, food packaging design | Proof / evaluation |
| `/work/biotasup` | wellness packaging case study | supplement branding, health brand identity | Proof / evaluation |
| `/article` | branding and design insights | web design articles, SEO insights | Informational hub |
| `/contact` | contact Desnine Studio | request design quote, start a branding project | Conversion |

## Metadata map

| URL | SEO title direction | Description focus | H1 |
| --- | --- | --- | --- |
| `/` | Branding & Web Design Studio in Quebec \| Desnine Studio | Brands, websites, Quebec and Greater Montreal | The Standard Your Competitors Wish They Could Call Their Own. |
| `/about` | About Desnine Studio — Creative Direction in Quebec | Independent studio, location and disciplines | Creative direction for modern brands. |
| `/services` | Design Studio Services — Branding, Web Design, SEO & AI | Core creative and digital services | Rendered service overview heading |
| `/services/branding` | Branding & Brand Identity Studio in Quebec | Strategic identity systems | Brand Identity & Branding Design |
| `/services/web-design` | Web Design Studio in Quebec & Montreal | Responsive custom web design | Custom Website Design for Modern Brands |
| `/services/web-development` | Custom Web Development in Quebec | Next.js, performance, accessible implementation | Custom Website Development |
| `/services/packaging-design` | Packaging Design Studio in Quebec | Product, label and range systems | Packaging Design Built for the Shelf |
| `/services/graphic-design` | Graphic Design Studio in Quebec & Montreal | Campaign, print and digital communication | Graphic Design With a Clear Point of View |
| `/services/seo` | SEO Services for Quebec Businesses | Technical, on-page and local SEO | SEO Built Into the Website |
| `/services/ai-automation` | AI Automation for Quebec Businesses | Practical workflows, assistants and integrations | Practical AI Automation for Business |
| `/work` | Our Work - Brand & Web Design Case Studies | Selected case studies | Our Work |
| `/work/marche-main` | Marché Main — Grocery Branding & Identity Case Study | Retail branding and packaging | Marché Main — Grocery Branding & Identity |
| `/work/biotasup` | Biotasup - Brand Identity Case Study | Wellness identity and packaging | Biotasup — Wellness Branding & Packaging |
| `/article` | Articles - Branding, Design & AI Automation Insights | Useful studio insights | Article listing heading |
| `/contact` | Contact Our Design Studio — Start a Project | Services and Quebec service area | Let’s Build Something Remarkable |

## Internal-link map

- Homepage → Services hub, selected work, About, Contact.
- Services hub → every core service page.
- Branding → Marché Main, Biotasup, Contact.
- Web Design → Marché Main, Biotasup, Web Development, Contact.
- Web Development → Web Design, SEO, Contact.
- Packaging Design → Biotasup, Marché Main, Branding, Contact.
- Graphic Design → Branding, Marché Main, Contact.
- SEO → Web Design, Web Development, Contact.
- AI Automation → Web Development, SEO, Contact.
- Marché Main → Branding, Packaging Design, Contact.
- Biotasup → Branding, Packaging Design, Contact.
- About → every service, Work, Contact.
- Footer → service hub, all seven core services, About, Work, Contact, Privacy.

## Multilingual migration note

English and French currently switch client-side at the same URL. Separate `/en/` and `/fr/` routes would be the correct foundation for language-specific canonicals, `hreflang`, and server-rendered French metadata. That migration is intentionally not bundled into this SEO release because it changes every public URL and requires professional review of all Canadian French service content. Until that work is complete, the site must not publish misleading same-URL `hreflang` alternates.

## Future content clusters

Publish supporting articles only when they are complete enough to answer a real client question. Priority topics are maintained in the implementation report: branding cost, website cost, rebranding timing, website redesign, packaging process, supplement packaging, local SEO, Next.js SEO, AI automation examples, and choosing a creative studio.
