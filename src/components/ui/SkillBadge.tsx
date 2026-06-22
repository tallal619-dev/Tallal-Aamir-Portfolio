import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  label: string;
  className?: string;
}

export function SkillBadge({ label, className }: SkillBadgeProps) {
  return (
    <span className={cn("skill-glow rounded-full bg-white/[0.045] px-4 py-2 text-sm font-medium text-cream/88 transition duration-300", className)}>
      {label}
    </span>
  );
}
