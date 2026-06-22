import { trustItems } from "@/data/portfolio";
import { InfiniteMarquee } from "@/components/react-bits/InfiniteMarquee";

export function TrustBar() {
  const badgeClass =
    "focus-ring inline-flex min-h-12 items-center rounded-full border border-white/12 bg-white/[0.04] px-5 text-sm font-semibold uppercase text-cream/82 transition hover:border-lime/50 hover:text-lime";
  const badges = trustItems.map((item) =>
    item.href ? (
      <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className={badgeClass}>
        {item.label}
      </a>
    ) : (
      <span key={item.label} className={badgeClass}>
        {item.label}
      </span>
    )
  );

  return (
    <section aria-label="Credibility" className="border-y border-white/10 bg-black/20 py-5">
      <InfiniteMarquee items={badges} className="section-shell" />
    </section>
  );
}
