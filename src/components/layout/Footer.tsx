import { contact } from "@/data/portfolio";

const links = [
  { label: "Email", href: `mailto:${contact.email}` },
  { label: "Fiverr", href: contact.fiverr, external: true },
  { label: "Resume", href: contact.resume },
  { label: "Portfolio", href: "#top" },
  { label: "LinkedIn", href: contact.linkedIn },
  { label: "GitHub", href: contact.github }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="display-text text-4xl text-cream sm:text-5xl">Muhammad Tallal Aamir</p>
          <p className="mt-3 max-w-xl text-sm text-muted">
            Senior Shopify Developer and development lead - available for remote roles, agency contracts, and client builds.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              download={link.label === "Resume" ? true : undefined}
              className="focus-ring rounded-full border border-white/12 px-4 py-2 text-sm text-muted transition hover:border-lime/50 hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
