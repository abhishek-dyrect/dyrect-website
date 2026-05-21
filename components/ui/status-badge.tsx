import { cn } from "@/lib/utils";

interface BadgeProps {
  tone?: "info" | "success" | "warning" | "error" | "slate" | "brand";
  dot?: boolean;
  children: React.ReactNode;
  className?: string;
}

const tones = {
  info: { bg: "#DBEAFE", fg: "#1E3A8A", dotColor: "#2437F6" },
  success: { bg: "#DCFCE7", fg: "#166534", dotColor: "#0ABE52" },
  warning: { bg: "#FEF3C7", fg: "#92400E", dotColor: "#F59E0B" },
  error: { bg: "#FEE2E2", fg: "#991B1B", dotColor: "#EF4444" },
  slate: { bg: "#F1F5F9", fg: "#334155", dotColor: "#64748B" },
  brand: { bg: "#EEF0FE", fg: "#0F1FB8", dotColor: "#2437F6" },
};

export function StatusBadge({
  tone = "info",
  dot = false,
  children,
  className,
}: BadgeProps) {
  const t = tones[tone];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium leading-tight whitespace-nowrap",
        className
      )}
      style={{
        background: t.bg,
        color: t.fg,
      }}
    >
      {dot && (
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: t.dotColor }}
        />
      )}
      {children}
    </span>
  );
}
