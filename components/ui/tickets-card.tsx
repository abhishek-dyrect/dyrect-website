"use client";

import { useEffect, useState } from "react";
import { StatusBadge } from "@/components/ui/status-badge";
import { Search, ChevronRight } from "lucide-react";

interface PortalCardProps {
  active?: boolean;
}

const tickets = [
  {
    id: "TS89281",
    sub: "Charging port not working",
    status: "Open",
    tone: "info" as const,
    assignee: "Ari M.",
    mins: "2m",
  },
  {
    id: "TS89274",
    sub: "Replacement requested",
    status: "Assigning",
    tone: "warning" as const,
    assignee: "—",
    mins: "6m",
    highlight: true,
  },
  {
    id: "TS89260",
    sub: "Frame paint defect",
    status: "Repair",
    tone: "brand" as const,
    assignee: "Northgate",
    mins: "18m",
  },
  {
    id: "TS89251",
    sub: "Battery underperforming",
    status: "Resolved",
    tone: "success" as const,
    assignee: "Jordan B.",
    mins: "1h",
  },
];

export function TicketsCard({ active }: PortalCardProps) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!active) {
      setPhase(0);
      return;
    }
    const t1 = setTimeout(() => setPhase(1), 1100);
    const t2 = setTimeout(() => setPhase(2), 2300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [active]);

  return (
    <div className="w-[380px] bg-white border border-[var(--slate-200)] rounded-xl shadow-xl overflow-hidden font-sans">
      {/* Window chrome */}
      <div className="flex items-center gap-3 px-3.5 py-2.5 bg-[#FAFBFC] border-b border-[var(--slate-200)]">
        <div className="flex gap-1.5">
          <span className="w-[9px] h-[9px] rounded-full bg-[#FF6058]" />
          <span className="w-[9px] h-[9px] rounded-full bg-[#FFBC2F]" />
          <span className="w-[9px] h-[9px] rounded-full bg-[#2BC840]" />
        </div>
        <span className="text-[11.5px] text-[var(--slate-500)] font-medium">
          Claims &middot; All tickets
        </span>
      </div>

      <div className="bg-white">
        {/* Filters row */}
        <div className="flex items-center gap-1.5 px-3.5 py-2.5 border-b border-[var(--slate-200)]">
          <div className="flex-1 flex items-center gap-2 px-2.5 py-1.5 bg-[var(--slate-50)] border border-[var(--slate-200)] rounded-md text-xs text-[var(--slate-400)]">
            <Search className="w-3 h-3" />
            Search tickets
          </div>
          {["Open", "Repair", "Resolved"].map((f, i) => (
            <span
              key={i}
              className={`text-[11px] font-medium px-2.5 py-1.5 rounded-full ${i === 0 ? "bg-[var(--slate-800)] text-white" : "bg-transparent text-[var(--slate-600)] border border-[var(--slate-200)]"}`}
            >
              {f}
            </span>
          ))}
        </div>

        {/* Tickets table */}
        <div>
          {tickets.map((t, i) => {
            const isHighlight = t.highlight;
            const assignee =
              isHighlight && phase >= 2
                ? "Northgate"
                : isHighlight && phase === 1
                  ? "..."
                  : t.assignee;
            const status = isHighlight && phase >= 2 ? "Repair" : t.status;
            const tone = isHighlight && phase >= 2 ? "brand" : t.tone;

            return (
              <div
                key={t.id}
                className="grid items-center gap-2.5 px-3.5 py-2.5 relative transition-colors duration-300"
                style={{
                  gridTemplateColumns: "78px 1fr auto auto",
                  borderBottom:
                    i === tickets.length - 1
                      ? "none"
                      : "1px solid var(--slate-100)",
                  background:
                    isHighlight && phase >= 1
                      ? "rgba(36,55,246,0.045)"
                      : "white",
                }}
              >
                {isHighlight && phase >= 1 && (
                  <span className="absolute left-0 top-1 bottom-1 w-[3px] bg-[var(--brand-blue)] rounded-r" />
                )}
                <div className="font-mono text-[11.5px] text-[var(--slate-800)] font-medium tracking-wide">
                  {t.id}
                </div>
                <div className="min-w-0">
                  <div className="text-[12.5px] font-medium text-[var(--slate-800)] truncate">
                    {t.sub}
                  </div>
                  <div className="text-[11px] text-[var(--slate-400)] mt-0.5">
                    Assigned to{" "}
                    <span className="text-[var(--slate-600)] font-medium">
                      {assignee}
                    </span>{" "}
                    &middot; {t.mins} ago
                  </div>
                </div>
                <StatusBadge tone={tone} dot>
                  {status}
                </StatusBadge>
                <ChevronRight className="w-3.5 h-3.5 text-[var(--slate-400)]" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
