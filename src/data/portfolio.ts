export interface ExpertiseCard {
  title: string;
  description: string;
  icon:
    | "layout"
    | "sliders"
    | "cart"
    | "database"
    | "speed"
    | "plug"
    | "code"
    | "server"
    | "workflow"
    | "cloud"
    | "shield";
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

export interface FiverrReviewStat {
  value: string;
  label: string;
  detail: string;
}

export interface FiverrReviewHighlight {
  focus: string;
  summary: string;
}

export type PortfolioMode = "shopify" | "fullStack";

export const contact = {
  email: "tallalaamir321@gmail.com",
  phone: "+923125126884",
  whatsapp: "https://wa.me/923125126884",
  fiverr: "https://www.fiverr.com/tallalaamir",
  location: "Islamabad, Pakistan",
  resume: "/Tallal_Aamir_Senior_Shopify_Resume_Updated.pdf",
  fullStackResume: "/Tallal_Aamir_Senior_Full_Stack_Developer_Resume.pdf",
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

export const fullStackExpertiseCards: ExpertiseCard[] = [
  {
    title: "Next.js Product Interfaces",
    description:
      "Production-ready interfaces for dashboards, portals, data banks, auction flows, POS screens, and product workflows.",
    icon: "code"
  },
  {
    title: "APIs, Auth & Role Logic",
    description:
      "Node.js and Express APIs for protected dashboards, user roles, admin actions, records, reports, and integration-ready services.",
    icon: "server"
  },
  {
    title: "Business Systems & Dashboards",
    description:
      "POS, IMS, employee management, student data banks, live auction portals, and admin tools built around real operations.",
    icon: "workflow"
  },
  {
    title: "Databases & Records",
    description:
      "Supabase, PostgreSQL, MongoDB, Firebase, searchable records, reporting models, and data structures that match the workflow.",
    icon: "database"
  },
  {
    title: "Cloud & Desktop Delivery",
    description:
      "AWS S3 bucket hosting, Netlify, VPS deployment, Electron.js desktop packaging, Play Store delivery, and practical release checks.",
    icon: "cloud"
  },
  {
    title: "Commerce & POS Workflows",
    description:
      "Shopify knowledge plus custom POS, billing, stock movement, product data, payment-adjacent flows, and operational commerce UX.",
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
  },
  {
    title: "Trello-Style Collaboration Platform",
    eyebrow: "Next.js / Node.js / AWS S3 Hosted Product",
    image: "/assets/case-studies/kanban-system.svg",
    tags: ["Next.js", "Node.js", "AWS S3", "Drag and Drop", "Realtime UX"],
    techStack: ["Next.js", "Node.js", "AWS S3", "REST APIs", "Drag and Drop"],
    description:
      "Built a Trello-inspired task management product with boards, lists, cards, drag-and-drop workflows, attachment handling, and deployment through an AWS S3 bucket hosting setup.",
    highlights: [
      "Board/list/card workflows",
      "Drag-and-drop task movement",
      "AWS S3 bucket hosting",
      "Node.js API layer",
      "Product-style responsive UI"
    ],
    problem:
      "Teams needed a lightweight collaboration interface that could organize work visually, support task movement, and stay simple enough for daily use.",
    solution:
      "I built a Next.js interface with board-based interactions, structured Node.js APIs, attachment-ready flows, and a deployable S3 hosting path.",
    delivered: [
      "Kanban board interface with lists and cards",
      "Drag-and-drop movement across workflow columns",
      "API-driven task state and deployment-ready frontend"
    ],
    impact:
      "A portfolio-grade product build that demonstrates UI state, backend coordination, cloud hosting, and product workflow thinking."
  },
  {
    title: "CarZone Live Auction Portal",
    eyebrow: "Vehicle Auction Platform",
    image: "/assets/case-studies/auction-portal.svg",
    tags: ["Next.js", "Supabase", "Live Auctions", "Admin Dashboard", "RBAC"],
    techStack: ["Next.js", "Supabase", "PostgreSQL", "Role-Based Access", "Dashboards"],
    description:
      "Built a vehicle auction portal with registration, inventory management, auction listings, bidding workflows, role-aware dashboards, and admin controls.",
    highlights: [
      "Live auction workflows",
      "Vehicle inventory management",
      "User and admin dashboards",
      "Role-based access",
      "Bid-ready product logic"
    ],
    problem:
      "The platform needed more than a listing site: users, admins, inventory, bidding actions, and guarded workflows had to connect in one product.",
    solution:
      "I structured the portal around auth-aware screens, Supabase-backed data, auction flows, inventory management, and admin visibility.",
    delivered: [
      "Registration and dashboard flows",
      "Auction and bid management screens",
      "Vehicle inventory and role-aware admin areas"
    ],
    impact:
      "A strong full-stack proof point covering data modeling, dashboards, workflow logic, and business-critical product states."
  },
  {
    title: "POS & Inventory Management Suite",
    eyebrow: "Retail Operations System",
    image: "/assets/case-studies/pos-system.svg",
    tags: ["POS", "Inventory", "Reports", "Billing", "Admin UX"],
    techStack: ["React", "Node.js", "SQL", "REST APIs", "Dashboard UI"],
    description:
      "Built POS and inventory-management workflows for retail operations including sales, billing, stock movement, product records, staff actions, and reporting screens.",
    highlights: [
      "Sales and billing flows",
      "Stock and product tracking",
      "Admin reporting",
      "Role-aware operations",
      "Fast counter-focused UI"
    ],
    problem:
      "Retail teams needed fast everyday screens for checkout, stock checks, reporting, and product updates without making the workflow feel heavy.",
    solution:
      "I designed operational dashboards and POS flows around repeated use: quick inputs, clear totals, reliable records, and clean inventory state.",
    delivered: [
      "Product, category, and stock management",
      "Sales/billing interfaces with reporting views",
      "Admin-friendly management screens"
    ],
    impact:
      "A practical systems portfolio piece that shows ability to build software people use repeatedly during real business operations."
  },
  {
    title: "Electron POS Desktop App",
    eyebrow: "Local-Running Desktop POS",
    image: "/assets/case-studies/pos-system.svg",
    tags: ["Electron.js", "Local App", "POS", "Offline-Ready", "Desktop UX"],
    techStack: ["Electron.js", "JavaScript", "Local Storage", "Desktop UI", "POS Logic"],
    description:
      "Built a local-running Electron.js POS system for desktop use, focused on fast counter workflows, product lookup, cart handling, invoices, and offline-friendly operation.",
    highlights: [
      "Desktop POS workflow",
      "Local-first operation",
      "Fast billing interface",
      "Product lookup",
      "Receipt-ready structure"
    ],
    problem:
      "Some shops need POS software that runs locally on a desktop instead of depending on a browser-only workflow or constant hosting availability.",
    solution:
      "I built an Electron-based app shell with POS-focused screens and local workflows designed for speed, repeat use, and simple deployment.",
    delivered: [
      "Electron desktop app foundation",
      "Local sales and cart workflows",
      "POS screens optimized for counter use"
    ],
    impact:
      "Shows full-stack range beyond web pages: desktop packaging, local operation, and real-world business workflow design."
  },
  {
    title: "IMS Systems",
    eyebrow: "Inventory Management Platforms",
    image: "/assets/case-studies/data-systems.svg",
    tags: ["Inventory", "Stock Control", "Dashboards", "Reports", "Admin Tools"],
    techStack: ["React", "Node.js", "SQL", "REST APIs", "Role-Based UI"],
    description:
      "Built inventory management systems for tracking products, stock levels, movements, categories, suppliers, and reporting across admin workflows.",
    highlights: ["Stock movement tracking", "Product records", "Supplier views", "Reports", "Admin dashboards"],
    problem:
      "Manual inventory handling creates errors, unclear stock levels, and slow reporting for teams managing products across daily operations.",
    solution:
      "I created structured inventory screens, data-backed records, and dashboard flows that make stock state easier to update, review, and audit.",
    delivered: [
      "Product and category management",
      "Stock-in and stock-out workflows",
      "Inventory reports and admin views"
    ],
    impact:
      "A reusable systems pattern for businesses that need clarity around stock, operations, and record keeping."
  },
  {
    title: "Student Data Bank",
    eyebrow: "Education Records System",
    image: "/assets/case-studies/data-systems.svg",
    tags: ["Student Records", "Search", "Data Bank", "Admin Dashboard", "Reports"],
    techStack: ["React", "Node.js", "Database Design", "Forms", "Dashboard UI"],
    description:
      "Built student data-bank workflows for storing, searching, updating, and organizing student profiles, class details, training records, and administrative reports.",
    highlights: ["Student profiles", "Advanced search", "Training records", "Admin forms", "Reporting views"],
    problem:
      "Education and training teams needed structured records instead of scattered files, manual lists, and hard-to-search student information.",
    solution:
      "I designed database-backed forms, searchable tables, record pages, and reporting views that make student information easier to manage.",
    delivered: [
      "Student profile and record management",
      "Searchable data tables and filters",
      "Admin-friendly reporting screens"
    ],
    impact:
      "Turns student information into a usable internal system with faster lookup, cleaner updates, and better administrative control."
  },
  {
    title: "Employee Management System",
    eyebrow: "HR & Operations Dashboard",
    image: "/assets/case-studies/data-systems.svg",
    tags: ["Employees", "Roles", "Attendance", "Admin Dashboard", "Reports"],
    techStack: ["React", "Node.js", "Authentication", "SQL", "Dashboard UI"],
    description:
      "Built employee-management workflows for staff profiles, roles, attendance-style records, admin actions, reporting, and operational visibility.",
    highlights: ["Staff profiles", "Role management", "Attendance-style records", "Admin actions", "Reports"],
    problem:
      "Teams needed a central place to manage employee details, permissions, and operational records without relying on fragmented spreadsheets.",
    solution:
      "I shaped the system around searchable employee records, role-aware screens, management actions, and report-ready operational data.",
    delivered: [
      "Employee profile and role screens",
      "Admin management workflows",
      "Reporting and operational visibility"
    ],
    impact:
      "A business-system build that demonstrates CRUD depth, admin UX, permissions thinking, and practical workflow design."
  },
  {
    title: "Breeders App",
    eyebrow: "Mobile App Published On Play Store",
    image: "/assets/case-studies/mobile-breeders-app.svg",
    tags: ["Mobile App", "Play Store", "Flutter", "Data Management", "User Workflows"],
    techStack: ["Flutter", "Firebase", "Mobile UI", "Play Store Release", "Data Models"],
    description:
      "Built and released a breeders-focused mobile app on the Play Store, with mobile-first flows for managing records, profiles, and app-specific operational data.",
    highlights: ["Play Store release", "Mobile-first UI", "Record management", "Profile workflows", "App deployment"],
    problem:
      "The app needed to organize niche user records in a mobile format that could be installed, updated, and used outside a desktop dashboard.",
    solution:
      "I built the mobile experience with practical record flows, clear app screens, and release-ready packaging for the Play Store.",
    delivered: [
      "Flutter mobile app screens",
      "Data-backed user workflows",
      "Play Store-ready app delivery"
    ],
    impact:
      "Shows mobile delivery range alongside web systems: app UX, release process, and practical data workflows for a real use case."
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
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "WebSockets",
      "Authentication",
      "Third-Party APIs",
      "Socket.IO",
      "State Management",
      "Zustand"
    ]
  },
  {
    title: "Data, Cloud & Deployment",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "Supabase",
      "AWS S3",
      "CloudFront",
      "Git",
      "GitHub",
      "Netlify",
      "VPS Deployment"
    ]
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

export const fullStackSkillGroups: SkillGroup[] = skillGroups.map((group) => {
  if (group.title === "Frontend") {
    return {
      ...group,
      skills: [
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Electron.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Material UI",
        "Responsive Design",
        "Dashboard UX",
        "AJAX"
      ]
    };
  }

  if (group.title === "Backend & APIs") {
    return {
      ...group,
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "WebSockets",
        "Authentication",
        "Role-Based Access",
        "Third-Party APIs",
        "Socket.IO",
        "State Management",
        "Zustand"
      ]
    };
  }

  if (group.title === "Data, Cloud & Deployment") {
    return {
      ...group,
      skills: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Firebase",
        "Supabase",
        "AWS S3",
        "S3 Bucket Hosting",
        "CloudFront",
        "Git",
        "GitHub",
        "Netlify",
        "VPS Deployment"
      ]
    };
  }

  if (group.title === "Performance & Additional") {
    return {
      ...group,
      skills: [
        "Core Web Vitals",
        "Speed Optimization",
        "Theme Cleanup",
        "Lazy Loading",
        "Image Optimization",
        "Debugging",
        "React Native",
        "Flutter",
        "Play Store Release",
        "POS Systems",
        "IMS Systems",
        "Python",
        "C#",
        "SQL"
      ]
    };
  }

  return group;
});

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

export const fiverrReviewStats: FiverrReviewStat[] = [
  {
    value: "5.0",
    label: "Overall Fiverr rating",
    detail: "Public profile rating across client reviews"
  },
  {
    value: "24",
    label: "Public reviews",
    detail: "Fiverr buyers reviewing delivered work"
  },
  {
    value: "Level 1",
    label: "Seller status",
    detail: "Active freelance delivery profile"
  }
];

export const fiverrReviewBreakdown: FiverrReviewStat[] = [
  {
    value: "5/5",
    label: "Communication",
    detail: "Clear updates and responsive project handling"
  },
  {
    value: "5/5",
    label: "Quality",
    detail: "Clean delivery across Shopify and web tasks"
  },
  {
    value: "5/5",
    label: "Value",
    detail: "Strong output for client budget and timelines"
  }
];

export const fiverrReviewHighlights: FiverrReviewHighlight[] = [
  {
    focus: "Shopify fixes",
    summary: "Clients point to fast theme debugging, clean custom code, and quick turnarounds on urgent store tasks."
  },
  {
    focus: "Store builds",
    summary: "Review patterns highlight polished Shopify delivery, practical guidance, and a smooth handoff after launch."
  },
  {
    focus: "Custom features",
    summary: "Buyers value the ability to translate unclear requests into working product sections, UI logic, and storefront improvements."
  },
  {
    focus: "Client support",
    summary: "Feedback consistently reflects responsive communication, patience, and professional help during revisions."
  }
];

export const testimonials = [
  "Comfortable working directly with clients, founders, project managers, and senior developers.",
  "Strong fit for Shopify agencies that need dependable execution without extra management overhead.",
  "Useful beyond theme edits: able to reason through product flows, data-backed UI, and full-stack constraints."
];

export const fullStackTrustItems: TrustItem[] = [
  { label: "Full Stack Developer" },
  { label: "Next.js + Node.js Systems" },
  { label: "AWS S3 Bucket Hosting" },
  { label: "Live Auction Portals" },
  { label: "POS + IMS Systems" },
  { label: "Electron Desktop Apps" },
  { label: "Student Data Banks" },
  { label: "Employee Management" },
  { label: "Play Store Mobile Apps" },
  { label: "Teaching & Leadership" }
];

export const fullStackProcessSteps: ProcessStep[] = [
  {
    title: "Map",
    description: "I clarify users, roles, data, edge cases, integrations, and the product outcome before touching the UI."
  },
  {
    title: "Model",
    description: "I shape schemas, API contracts, state flow, access rules, and screens so the build has a clean foundation."
  },
  {
    title: "Build",
    description: "I ship responsive interfaces, backend endpoints, integrations, dashboards, and reusable product components."
  },
  {
    title: "Harden",
    description: "I test unhappy paths, permissions, responsive behavior, performance, data updates, and release risks."
  },
  {
    title: "Launch",
    description: "I deploy, document the moving pieces, support handoff, and leave the next iteration easier to start."
  }
];

export const fullStackWhyHire: WhyHireItem[] = [
  {
    title: "Systems-minded engineering",
    description: "I connect screens, records, roles, reports, and business rules so the product behaves like a real working system."
  },
  {
    title: "Operational UI polish",
    description: "I build dashboards, POS screens, portals, and data tables that stay fast and readable during repeated daily use."
  },
  {
    title: "Backend confidence",
    description: "I can reason through APIs, auth, database structure, integrations, and release risks without losing sight of UX."
  },
  {
    title: "Independent ownership",
    description: "I can take a fuzzy brief, break it into tasks, build the feature, test it, and communicate tradeoffs."
  },
  {
    title: "Team-ready communication",
    description: "Teaching and lead experience help me explain technical decisions clearly to clients, students, and developers."
  },
  {
    title: "Web, desktop, and mobile range",
    description: "I can ship browser-based systems, local Electron.js apps, and mobile app workflows instead of being locked to one surface."
  }
];

export const fullStackReviewHighlights: FiverrReviewHighlight[] = [
  {
    focus: "Frontend builds",
    summary: "Clients value clean responsive pages, practical UI fixes, and a steady path from rough request to working interface."
  },
  {
    focus: "Custom features",
    summary: "Delivery patterns show comfort with product logic, dynamic UI, third-party tools, and iteration after feedback."
  },
  {
    focus: "Communication",
    summary: "Feedback consistently points to clear updates, patient revisions, and help turning unclear requirements into action."
  },
  {
    focus: "Reliability",
    summary: "Review themes highlight quick turnarounds, careful debugging, and ownership when project details shift."
  }
];

export const fullStackTestimonials = [
  "Comfortable owning UI, API, database, deployment, and release details for internal systems.",
  "Strong fit for teams building dashboards, portals, POS tools, inventory systems, and workflow products.",
  "Useful when a project needs someone who can build, explain, test, and teach without creating extra drag."
];

interface ModeHeading {
  eyebrow: string;
  title: string;
  copy: string;
}

interface PortfolioModeContent {
  switchLabel: string;
  alternateLabel: string;
  resume: string;
  headerRole: string;
  heroBadge: string;
  heroFirstLine: string;
  heroSecondLead: string;
  heroHighlight: string;
  heroCopy: string;
  heroColors: string[];
  heroBackground: string;
  heroNameTag: string;
  trustItems: TrustItem[];
  expertiseCards: ExpertiseCard[];
  expertiseHeading: ModeHeading;
  featuredHeading: ModeHeading;
  caseStudyHeading: ModeHeading;
  caseStudyOrder: string[];
  stackHeading: ModeHeading;
  skillGroupOrder: string[];
  experienceHeading: ModeHeading;
  processHeading: ModeHeading;
  processSteps: ProcessStep[];
  whyHireHeading: ModeHeading;
  whyHire: WhyHireItem[];
  testimonials: string[];
  reviewsHeading: ModeHeading;
  reviewHighlights: FiverrReviewHighlight[];
  contactCopy: string;
  contactMailtoFallback: string;
  footerRole: string;
  menuHighlights: string[];
}

export const portfolioModeCopy: Record<PortfolioMode, PortfolioModeContent> = {
  shopify: {
    switchLabel: "Shopify",
    alternateLabel: "Full Stack",
    resume: contact.resume,
    headerRole: "Senior Shopify Developer",
    heroBadge: "Senior Shopify Developer / Development Lead",
    heroFirstLine: "Build fast.",
    heroSecondLead: "Lead calmly.",
    heroHighlight: "Ship clean.",
    heroCopy:
      "Senior Shopify developer and full-stack commerce engineer for brands, agencies, and hiring teams that need polished storefronts, custom product flows, and dependable delivery.",
    heroColors: ["#D7FF4A", "#ffffff", "#a5cf97"],
    heroBackground: "#050806",
    heroNameTag: "Muhammad Tallal Aamir / Shopify Lead",
    trustItems,
    expertiseCards,
    expertiseHeading: {
      eyebrow: "Expertise",
      title: "What I Bring To Shopify Teams",
      copy: "Custom storefront architecture, conversion-led UX, and clean engineering habits for brands, agencies, and in-house commerce teams."
    },
    featuredHeading: {
      eyebrow: "Selected delivery",
      title: "Shopify Work With Real Business Context",
      copy: "Storefronts, product experiences, agency builds, and performance-focused improvements that show both client impact and senior development judgment."
    },
    caseStudyHeading: {
      eyebrow: "Technical depth",
      title: "Deep-Dive Case Studies",
      copy: "A closer look at how I think through requirements, architecture, user flows, maintainability, and launch-ready execution."
    },
    caseStudyOrder: [
      "Custom Jewelry Product Configurator",
      "Dressed For Dinner",
      "Shopify Theme Systems",
      "Car Zone Portal"
    ],
    stackHeading: {
      eyebrow: "Stack",
      title: "Technical Stack, Shopify At The Core",
      copy: "Shopify is my strongest lane, but my resume also covers frontend engineering, APIs, full-stack product work, databases, cloud tools, mobile frameworks, and teaching Python."
    },
    skillGroupOrder: ["Shopify Core", "Commerce Systems", "Frontend", "Backend & APIs", "Data, Cloud & Deployment", "Performance & Additional"],
    experienceHeading: {
      eyebrow: "Experience",
      title: "Delivery, Leadership, And Range",
      copy: "Shopify implementation, development leadership, client communication, and enough full-stack range to solve the product problems around the storefront too."
    },
    processHeading: {
      eyebrow: "Process",
      title: "How I Move Work From Brief To Launch",
      copy: "A calm, structured workflow for client projects, agency tasks, and team environments where clarity matters as much as code."
    },
    processSteps,
    whyHireHeading: {
      eyebrow: "Why work with me",
      title: "Why Clients And Teams Trust Me",
      copy: "I bring the blend that matters in real Shopify work: implementation speed, communication, technical ownership, and polished delivery."
    },
    whyHire,
    testimonials,
    reviewsHeading: {
      eyebrow: "Fiverr reviews",
      title: "Proof From Real Client Delivery",
      copy: "A public Fiverr profile snapshot for clients, agencies, and hiring teams who want proof beyond the portfolio visuals."
    },
    reviewHighlights: fiverrReviewHighlights,
    contactCopy: "Open to remote Shopify roles, agency contracts, freelance builds, and long-term e-commerce development partnerships.",
    contactMailtoFallback: "Hi Tallal, I would like to discuss a Shopify project, role, or agency contract.",
    footerRole: "Senior Shopify Developer / Development Lead",
    menuHighlights: ["Theme builds", "Product customizers", "AJAX carts", "Performance"]
  },
  fullStack: {
    switchLabel: "Full Stack",
    alternateLabel: "Commerce",
    resume: contact.fullStackResume,
    headerRole: "Full Stack Systems Developer",
    heroBadge: "Full Stack Developer / Systems Engineer",
    heroFirstLine: "Build systems.",
    heroSecondLead: "Wire data.",
    heroHighlight: "Ship products.",
    heroCopy:
      "Full-stack developer building Next.js products, Node.js APIs, AWS S3 hosted apps, live auction portals, POS systems, IMS tools, data banks, employee dashboards, Electron desktop apps, and mobile apps.",
    heroColors: ["#38BDF8", "#F5F7FB", "#2563EB"],
    heroBackground: "#05070c",
    heroNameTag: "Muhammad Tallal Aamir / Full Stack Systems Developer",
    trustItems: fullStackTrustItems,
    expertiseCards: fullStackExpertiseCards,
    expertiseHeading: {
      eyebrow: "Expertise",
      title: "What I Bring To Product Teams",
      copy: "Frontend craft, backend logic, data modeling, deployment care, and enough commerce depth to connect product work to business outcomes."
    },
    featuredHeading: {
      eyebrow: "Selected systems",
      title: "Full-Stack Products, Portals, POS And Data Systems",
      copy: "Next.js products, AWS S3 hosted apps, auction portals, POS and inventory tools, student data banks, employee management systems, and Play Store mobile delivery."
    },
    caseStudyHeading: {
      eyebrow: "Product depth",
      title: "Systems Case Studies",
      copy: "A closer look at architecture, workflows, records, roles, releases, and business logic across web, desktop, and mobile software."
    },
    caseStudyOrder: [
      "Trello-Style Collaboration Platform",
      "CarZone Live Auction Portal",
      "POS & Inventory Management Suite",
      "Electron POS Desktop App",
      "IMS Systems",
      "Student Data Bank",
      "Employee Management System",
      "Breeders App"
    ],
    stackHeading: {
      eyebrow: "Stack",
      title: "Technical Stack For Web, Desktop And Mobile Systems",
      copy: "Next.js, React, Node.js, databases, APIs, AWS S3 bucket hosting, Electron.js, Flutter, Play Store release, dashboards, POS, IMS, and admin workflows."
    },
    skillGroupOrder: ["Frontend", "Backend & APIs", "Data, Cloud & Deployment", "Performance & Additional", "Commerce Systems", "Shopify Core"],
    experienceHeading: {
      eyebrow: "Experience",
      title: "Systems Delivery, Teaching, And Range",
      copy: "Full-stack products, business dashboards, POS/IMS workflows, mobile app delivery, commerce systems, development leadership, and teaching experience."
    },
    processHeading: {
      eyebrow: "Process",
      title: "How I Move Ideas Into Working Systems",
      copy: "A structured workflow for interfaces, APIs, databases, dashboards, local apps, mobile releases, integrations, and role-based operations."
    },
    processSteps: fullStackProcessSteps,
    whyHireHeading: {
      eyebrow: "Why work with me",
      title: "Why Product Teams Can Trust Me",
      copy: "I bring the blend that matters in product engineering: UI polish, backend judgment, ownership, communication, and careful delivery."
    },
    whyHire: fullStackWhyHire,
    testimonials: fullStackTestimonials,
    reviewsHeading: {
      eyebrow: "Client proof",
      title: "Evidence From Real Delivery",
      copy: "A practical delivery snapshot for teams that care about communication, reliability, iteration, systems thinking, and finished work."
    },
    reviewHighlights: fullStackReviewHighlights,
    contactCopy: "Open to remote full-stack roles, product engineering work, POS and IMS builds, auction portals, dashboards, Electron apps, mobile apps, and long-term development partnerships.",
    contactMailtoFallback: "Hi Tallal, I would like to discuss a full-stack system, product role, POS/IMS build, dashboard, Electron app, or API integration.",
    footerRole: "Full Stack Developer / Systems Engineer",
    menuHighlights: ["Next.js", "AWS S3", "POS + IMS", "Electron"]
  }
};
