import type { Project } from "./portfolio";

// Project scope comes from the supplied 2026 Shopify and full-stack resumes.
export const resumeProjects: Project[] = [
  {
    title: "Cart, Bundle & Upsell Systems",
    eyebrow: "Shopify / Custom Commerce Workflows",
    image: "/assets/case-studies/interfaces/cart.svg",
    description: "Built and debugged AJAX carts, multi-product bundles, upsells, discount logic, and quantity synchronization across Shopify themes and apps.",
    tags: ["AJAX Cart", "Bundles", "Upsells", "Liquid", "JavaScript"],
    highlights: ["Cart drawers", "Multi-product bundles", "Discount logic", "Quantity synchronization"],
    techStack: ["JavaScript", "AJAX", "Liquid", "Shopify Apps"],
    problem: "Cart state, product bundles, discounts, and third-party apps need to stay in sync as a customer changes their order.",
    solution: "Implemented cart interactions and bundle logic, connected theme and app workflows, and debugged quantity and discount edge cases.",
    delivered: ["AJAX cart updates and cart drawers", "Multi-product bundle and upsell flows", "Quantity synchronization and discount logic", "Theme-app integration fixes"],
    impact: "Custom cart functionality that supports the store's selling model and handles changes throughout the buying journey."
  },
  {
    title: "Collection Filtering & Product Discovery",
    eyebrow: "Shopify / Catalog Navigation",
    image: "/assets/case-studies/interfaces/filtering.svg",
    description: "Custom collection filtering using tags, variants, metafields, and dynamic data, with responsive interfaces and maintainable theme logic.",
    tags: ["Collection Filters", "Metafields", "AJAX", "Liquid", "Responsive UI"],
    highlights: ["Tag and variant filters", "Dynamic product data", "Responsive collection UI"],
    techStack: ["Liquid", "JavaScript", "AJAX", "Metafields"],
    problem: "Standard collection layouts do not always capture the attributes customers need to find the right product.",
    solution: "Built filtering and discovery logic around the store's tags, variants, and product data, with responsive controls and reusable theme code.",
    delivered: ["Custom collection filtering", "Tag, variant, and metafield-driven logic", "Dynamic product results", "Responsive product-discovery interfaces"],
    impact: "A collection experience organized around product attributes, with code the store's team can maintain."
  },
  {
    title: "Vehicle Tracking System",
    eyebrow: "Global Experts / Web & Mobile Contribution",
    image: "/assets/case-studies/interfaces/tracking.svg",
    description: "Contributed to a vehicle tracking solution across web interfaces, Flutter clients, application integrations, and shared data workflows.",
    tags: ["JavaScript", "Flutter", "APIs", "Web & Mobile", "Integration"],
    highlights: ["Web and mobile interfaces", "Shared data workflows", "Integration testing"],
    techStack: ["JavaScript", "Flutter", "APIs", "Databases"],
    problem: "Web and mobile clients needed connected application workflows and consistent access to shared tracking data.",
    solution: "Contributed UI implementation, application integrations, testing, and troubleshooting as a Web & App Developer at Global Experts.",
    delivered: ["Web and mobile UI contributions", "Application integration work", "Shared data workflows", "Testing and production troubleshooting"],
    impact: "Hands-on delivery across connected web and mobile applications, including integration work beyond individual screens."
  },
  {
    title: "School Management System",
    eyebrow: "Python / Education Operations",
    image: "/assets/case-studies/interfaces/school.svg",
    description: "A Python-based school management system used in day-to-day operations for student records and administrative workflows.",
    tags: ["Python", "SQL", "Student Records", "Administration"],
    highlights: ["Student records", "Administrative workflows", "Ongoing maintenance"],
    techStack: ["Python", "SQL", "Application Logic", "Data Management"],
    problem: "School staff needed a practical way to maintain student records and carry out routine administrative work.",
    solution: "Built the application's logic and data workflows, with direct ownership of implementation, testing, and maintenance.",
    delivered: ["Student record management", "Administrative workflows", "Python application logic and SQL data management", "Testing and maintenance"],
    impact: "An operational application used for everyday school administration and student record keeping."
  }
];
