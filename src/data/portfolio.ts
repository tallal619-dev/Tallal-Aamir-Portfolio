export interface ExpertiseCard {
  title: string;
  description: string;
  icon: "layout" | "sliders" | "cart" | "database" | "speed" | "plug";
}

export interface Project {
  title: string;
  eyebrow: string;
  image: string;
  description: string;
  tags: string[];
  highlights: string[];
  techStack: string[];
  problem: string;
  solution: string;
  delivered: string[];
  impact: string;
}

export interface LiveProject {
  title: string;
  category: string;
  description: string;
  tags: string[];
  url: string;
  image: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  description?: string;
  bullets: string[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface WhyHireItem {
  title: string;
  description: string;
}

export interface TrustItem {
  label: string;
  href?: string;
}

export const contact = {
  email: "tallalaamir321@gmail.com",
  phone: "+923125126884",
  whatsapp: "https://wa.me/923125126884",
  fiverr: "https://www.fiverr.com/tallalaamir",
  location: "Islamabad, Pakistan",
  resume: "/Tallal_Aamir_Senior_Shopify_Resume_Updated.pdf",
  linkedIn: "#",
  github: "#"
};

export const navItems = [
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" }
];

export const trustItems: TrustItem[] = [
  { label: "Senior Shopify Developer" },
  { label: "Development Lead Experience" },
  { label: "Client & Team Ready" },
  { label: "Agency Delivery Experience" },
  { label: "Custom Shopify Systems" },
  { label: "Product UX & Configurators" },
  { label: "Performance-Focused Builds" },
  { label: "Remote-Ready Communication" },
  { label: "Fiverr & Direct Clients", href: contact.fiverr }
];

export const expertiseCards: ExpertiseCard[] = [
  {
    title: "Custom Shopify Theme Development",
    description:
      "Pixel-accurate Shopify storefronts using Liquid, Shopify 2.0 sections, blocks, metafields, and reusable architecture that future teams can maintain.",
    icon: "layout"
  },
  {
    title: "Product Configurators",
    description:
      "Guided product customization flows with engraving, materials, add-ons, live previews, variant logic, and polished customer-facing interfaces.",
    icon: "sliders"
  },
  {
    title: "AJAX Cart & Checkout UX",
    description:
      "Cart drawers, upsells, variant handling, bundle logic, quantity updates, and smoother buying paths that support real conversion goals.",
    icon: "cart"
  },
  {
    title: "Metafields & Metaobjects",
    description:
      "Content systems for scalable product pages, landing pages, filters, swatches, and brand storytelling without hard-coded one-off work.",
    icon: "database"
  },
  {
    title: "Store Speed Optimization",
    description:
      "Theme cleanup, Liquid optimization, JavaScript trimming, image strategy, Core Web Vitals, and practical performance improvements.",
    icon: "speed"
  },
  {
    title: "App & API Integrations",
    description:
      "Payment gateways, booking systems, subscriptions, tracking tools, upsells, CRMs, and third-party Shopify apps connected with care.",
    icon: "plug"
  }
];

export const liveProjects: LiveProject[] = [
  {
    title: "Counter Culture Coffee",
    category: "Premium Shopify / Coffee E-commerce",
    url: "https://counterculturecoffee.com/",
    image: "/assets/projects/counter-culture-coffee.png",
    description:
      "A visually rich coffee e-commerce storefront with strong product presentation, brand storytelling, subscription-style commerce potential, and premium shopping experience.",
    tags: ["Shopify", "E-commerce UX", "Product Pages", "Premium Storefront", "Coffee Brand"]
  },
  {
    title: "Touchy Coffee",
    category: "Shopify Coffee Storefront",
    url: "https://touchycoffee.com/",
    image: "/assets/projects/touchy-coffee.png",
    description:
      "A clean and modern coffee storefront focused on product discovery, brand feel, smooth navigation, and conversion-friendly e-commerce structure.",
    tags: ["Shopify", "Coffee Store", "Storefront UX", "Responsive Design"]
  },
  {
    title: "Collanature",
    category: "Health & Supplement Shopify Store",
    url: "https://collanature.co.uk/",
    image: "/assets/projects/collanature.png",
    description:
      "A conversion-focused supplement storefront for a collagen product brand, built around product education, landing-page structure, trust-building content, and clear buying flow.",
    tags: ["Shopify", "Supplements", "Landing Page", "CRO", "Product Education"]
  },
  {
    title: "Alivia + Danny",
    category: "Personalized Jewelry Shopify Store",
    url: "https://www.aliviadanny.com/",
    image: "/assets/projects/alivia-danny.png",
    description:
      "A personalized jewelry storefront with custom product experience potential, strong visual branding, product customization relevance, and premium e-commerce presentation.",
    tags: ["Shopify", "Jewelry", "Product Customizer", "Personalization", "Premium UX"]
  },
  {
    title: "Masonic Libraries",
    category: "Shopify / Content + Commerce Website",
    url: "https://www.masoniclibraries.com/",
    image: "/assets/projects/masonic-libraries.png",
    description:
      "A specialized Shopify website combining structured content, collections, and e-commerce-style presentation for a niche organization.",
    tags: ["Shopify", "Content Architecture", "Collection Design", "Niche Storefront"]
  },
  {
    title: "Gigas Nutrition",
    category: "Sports Nutrition Shopify Store",
    url: "https://gigasnutrition.com/en",
    image: "/assets/projects/gigas-nutrition.png",
    description:
      "A high-volume nutrition e-commerce storefront with product catalog structure, multilingual market potential, strong product browsing, and performance-focused shopping experience.",
    tags: ["Shopify", "Nutrition", "Product Catalog", "International Store", "E-commerce UX"]
  }
];

export const projects: Project[] = [
  {
    title: "Dressed For Dinner",
    eyebrow: "Shopify Dress Rental Store",
    image: "/assets/case-studies/dressed-for-dinner.png",
    tags: ["Shopify", "Booking Flow", "Collection UX", "Custom Sections", "QA"],
    techStack: ["Liquid", "Shopify 2.0", "JavaScript", "Custom Sections"],
    description:
      "Customized a Shopify dress rental store with booking workflow improvements, collection presentation, FAQ system, custom sections, and launch-focused UX polish.",
    highlights: [
      "Booking flow improvements",
      "Custom collection carousel",
      "FAQ and contact improvements",
      "Cart/header refinements",
      "QA before launch"
    ],
    problem:
      "The store needed rental-specific UX improvements, clearer product discovery, and launch polish without destabilizing the live Shopify theme.",
    solution:
      "I refined the booking journey, improved collection presentation, added reusable content sections, and tightened cart/header behavior across devices.",
    delivered: [
      "Rental-aware product and collection improvements",
      "Launch QA across key customer flows",
      "Reusable theme sections for FAQ and contact content"
    ],
    impact:
      "A cleaner launch-ready storefront with better customer confidence, smoother rental browsing, and fewer friction points before checkout."
  },
  {
    title: "Custom Jewelry Product Configurator",
    eyebrow: "Sytrix / Offshore Project through Noor Ahmed E-Commerce Solutions",
    image: "/assets/case-studies/custom-jewelry-configurator.png",
    tags: ["Shopify", "Liquid", "JavaScript", "Product Customizer", "Metafields"],
    techStack: ["Liquid", "JavaScript", "Metafields", "Theme Performance"],
    description:
      "Built advanced product customization experiences for jewelry stores including engraving options, material selection, size logic, add-ons, dynamic UI, and performance improvements.",
    highlights: [
      "Product page customizer",
      "Variant and option logic",
      "Dynamic product UI",
      "Store speed optimization"
    ],
    problem:
      "Jewelry customers needed a guided way to personalize products while the store still required clean variant handling and stable performance.",
    solution:
      "I built dynamic Liquid and JavaScript flows for engraving, materials, sizing, add-ons, and conditional UI tied to Shopify product data.",
    delivered: [
      "Interactive customization interface",
      "Variant and option validation",
      "Metafield-powered dynamic content",
      "Theme cleanup and performance refinements"
    ],
    impact:
      "A richer buying experience for personalized products with stronger product clarity and a more maintainable theme foundation."
  },
  {
    title: "Shopify Theme Systems",
    eyebrow: "Noor Ahmed E-Commerce Solutions",
    image: "/assets/case-studies/shopify-theme-systems.png",
    tags: ["Shopify 2.0", "Liquid", "AJAX", "Metaobjects", "Theme Architecture"],
    techStack: ["Shopify 2.0", "AJAX", "Metaobjects", "Liquid", "Theme CLI"],
    description:
      "Delivered advanced Shopify features including reusable sections, custom cart logic, dynamic filters, metafield-powered layouts, and scalable storefront systems.",
    highlights: [
      "Custom sections and blocks",
      "AJAX-powered features",
      "Dynamic filters",
      "Metafield architecture",
      "Client-facing delivery"
    ],
    problem:
      "Agency clients needed fast custom storefront work that could scale beyond one-off sections and remain clear for future developers.",
    solution:
      "I built reusable Shopify architecture, AJAX-powered interactions, metafield-driven layouts, and delivery patterns suitable for multi-client agency work.",
    delivered: [
      "Reusable Shopify 2.0 sections",
      "Custom cart and filtering logic",
      "Metafield and metaobject content architecture",
      "Code review and developer guidance"
    ],
    impact:
      "More predictable delivery, reusable storefront systems, and stronger technical quality across multiple Shopify builds."
  },
  {
    title: "Car Zone Portal",
    eyebrow: "Full Stack Vehicle Auction Platform",
    image: "/assets/case-studies/car-zone-portal.png",
    tags: ["Next.js", "Supabase", "Auction Platform", "Admin Dashboard"],
    techStack: ["Next.js", "Supabase", "Role-Based Access", "Dashboards"],
    description:
      "Built a vehicle auction platform with user registration, bidding workflows, inventory management, admin dashboards, and role-based access.",
    highlights: [
      "User registration",
      "Auction and bidding workflows",
      "Inventory management",
      "Admin dashboards"
    ],
    problem:
      "The platform needed a structured full-stack product experience beyond a brochure site, including roles, inventory, and live auction workflows.",
    solution:
      "I built a Next.js and Supabase platform with role-based areas, bidding flows, inventory screens, and admin management tools.",
    delivered: [
      "Authentication-aware workflows",
      "Auction management interfaces",
      "Inventory and dashboard screens",
      "Structured full-stack architecture"
    ],
    impact:
      "Proof of broader engineering ability: shipping product logic, dashboards, data-backed flows, and scalable interfaces beyond Shopify alone."
  }
];

export const experience: ExperienceEntry[] = [
  {
    role: "Senior Shopify Developer / Development Lead",
    company: "Noor Ahmed E-Commerce Solutions",
    period: "Apr 2025 - Jan 2026",
    description:
      "Started as Shopify Custom Developer and progressed to Team Lead and Development Lead through consistent delivery of complex Shopify projects.",
    bullets: [
      "Led Shopify development projects for international clients.",
      "Built custom Shopify themes, Liquid logic, AJAX sections, filters, custom cart flows, and metafield-driven layouts.",
      "Managed code reviews, task delegation, technical planning, and client discussions.",
      "Mentored developers and improved delivery quality."
    ]
  },
  {
    role: "Shopify Developer",
    company: "Sytrix - Offshore Project through Noor Ahmed E-Commerce Solutions",
    period: "May 2025 - Jan 2026",
    bullets: [
      "Built Shopify stores and advanced product customizers.",
      "Developed custom product page logic for jewelry customization.",
      "Improved theme performance and maintainability."
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Techtrove LLC - Offshore Project through Noor Ahmed E-Commerce Solutions",
    period: "May 2025 - Jan 2026",
    bullets: [
      "Built a Trello-style collaboration platform using Next.js and Node.js.",
      "Implemented real-time updates, drag-and-drop workflows, and scalable APIs.",
      "Added broader engineering depth beyond Shopify theme delivery."
    ]
  },
  {
    role: "Shopify Developer",
    company: "Sunskill Technologies",
    period: "Dec 2024 - Mar 2025",
    bullets: [
      "Developed Shopify themes and custom features.",
      "Integrated APIs, apps, and third-party services.",
      "Improved store performance and UX."
    ]
  },
  {
    role: "Web & App Developer",
    company: "Global Experts",
    period: "Dec 2023 - Oct 2024",
    bullets: [
      "Worked on web and mobile application development.",
      "Contributed to Vehicle Tracking System development.",
      "Used HTML, CSS, JavaScript, Flutter, and MERN stack concepts."
    ]
  },
  {
    role: "Freelance Shopify Developer",
    company: "Fiverr & Direct Clients",
    period: "Jun 2023 - Present",
    bullets: [
      "Delivered Shopify and web development projects to international clients.",
      "Built custom sections, landing pages, product pages, collection layouts, and store features.",
      "Managed client communication, delivery, and support independently."
    ]
  },
  {
    role: "Training Officer",
    company: "Roshan Hunar Markaz, Gujar Khan - NAVTTC Project",
    period: "Feb 2026 - Present",
    bullets: [
      "Deliver Advanced Python and software development training.",
      "Conduct technical workshops and mentor students.",
      "Use teaching experience to communicate technical ideas clearly."
    ]
  }
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Shopify Core",
    skills: [
      "Liquid",
      "Online Store 2.0",
      "JSON Templates",
      "Sections & Blocks",
      "Metafields",
      "Metaobjects",
      "Shopify CLI",
      "Theme Kit",
      "Theme Customization",
      "Shopify APIs",
      "Dawn",
      "Symmetry",
      "Spark"
    ]
  },
  {
    title: "Commerce Systems",
    skills: [
      "Product Customizers",
      "Variant Logic",
      "Dynamic Product Pages",
      "Collection Filtering",
      "AJAX Cart",
      "Cart Drawer",
      "Upsells",
      "Bundles",
      "Booking/Rental Flows",
      "Subscription Apps",
      "Payment Gateways",
      "Tracking Apps"
    ]
  },
  {
    title: "Frontend",
    skills: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "Responsive Design",
      "CRO-Focused UX",
      "AJAX"
    ]
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "REST APIs", "WebSockets", "Authentication", "Third-Party APIs", "Socket.IO", "State Management", "Zustand"]
  },
  {
    title: "Data, Cloud & Deployment",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase", "AWS S3", "CloudFront", "Git", "GitHub", "Netlify", "VPS Deployment"]
  },
  {
    title: "Performance & Additional",
    skills: [
      "Core Web Vitals",
      "Speed Optimization",
      "Theme Cleanup",
      "Lazy Loading",
      "Image Optimization",
      "Debugging",
      "React Native",
      "Flutter",
      "Python",
      "C#",
      "SQL"
    ]
  }
];

export const processSteps: ProcessStep[] = [
  {
    title: "Audit",
    description: "I review the store, theme architecture, apps, performance, team context, and business goals."
  },
  {
    title: "Plan",
    description: "I turn loose requirements into clear tasks, risks, estimates, and a build path everyone can follow."
  },
  {
    title: "Build",
    description: "I develop scalable sections, custom logic, integrations, and responsive UI with maintainable code."
  },
  {
    title: "Test",
    description: "I test across desktop, mobile, cart, variants, browsers, admin settings, and real customer flows."
  },
  {
    title: "Launch",
    description: "I deploy carefully, document what changed, and support the next iteration after launch."
  }
];

export const whyHire: WhyHireItem[] = [
  {
    title: "Clear communication",
    description: "I translate unclear client, manager, or stakeholder requests into practical Shopify delivery plans."
  },
  {
    title: "Independent delivery",
    description: "I can own custom features from brief to QA without constant hand-holding."
  },
  {
    title: "Developer leadership",
    description: "I review code, delegate tasks, mentor developers, and protect quality when work moves fast."
  },
  {
    title: "Complex Liquid/JS fixes",
    description: "I debug variant logic, cart behavior, custom sections, filters, app conflicts, and theme regressions."
  },
  {
    title: "Reusable Shopify systems",
    description: "I build sections, blocks, metafield models, and theme patterns that a team can reuse."
  },
  {
    title: "Speed and conversion focus",
    description: "I optimize storefronts for fast loading, clean UX, and smoother purchase paths."
  },
  {
    title: "Shopify plus full-stack range",
    description: "I can support Shopify delivery while also handling Next.js and product-style engineering tasks."
  }
];

export const testimonials = [
  "Comfortable working directly with clients, founders, project managers, and senior developers.",
  "Strong fit for Shopify agencies that need dependable execution without extra management overhead.",
  "Useful beyond theme edits: able to reason through product flows, data-backed UI, and full-stack constraints."
];
