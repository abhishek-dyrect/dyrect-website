"use client";

import { useEffect, useState } from "react";

interface PortalCardProps {
  active?: boolean;
}

const bars = [38, 52, 44, 61, 58, 72, 68, 79, 84, 76, 88, 94];
const labels = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
const maxBar = 100;

export function AnalyticsCard({ active }: PortalCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }
    const target = 12482;
    const start = performance.now();
    const dur = 1400;
    let raf: number;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
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
          Analytics &middot; Last 12 months
        </span>
      </div>

      <div className="bg-white">
        {/* KPI row */}
        <div className="grid grid-cols-3 gap-[1px] bg-[var(--slate-200)] border-b border-[var(--slate-200)]">
          {[
            {
              label: "Registrations",
              value: count.toLocaleString(),
              trend: "+18.2%",
            },
            { label: "Avg resolution", value: "1.4d", trend: "-31%" },
            { label: "Upsell revenue", value: "$84.2K", trend: "+42%" },
          ].map((k, i) => (
            <div key={i} className="bg-white px-3.5 py-3">
              <div className="text-[10.5px] text-[var(--slate-500)] uppercase tracking-wide font-medium">
                {k.label}
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-[17px] font-semibold text-[var(--slate-900)] tracking-tight font-sans">
                  {k.value}
                </span>
                <span className="text-[11px] text-[var(--success-text)] font-medium">
                  {k.trend}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Chart area */}
        <div className="px-3.5 pt-3.5 pb-2">
          <div className="flex items-center justify-between mb-2.5">
            <div>
              <div className="text-xs font-semibold text-[var(--slate-800)]">
                Claim resolutions
              </div>
              <div className="text-[11px] text-[var(--slate-500)] mt-0.5">
                vs. previous period
              </div>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-[var(--slate-600)]">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-sm bg-[var(--brand-blue)]" />{" "}
                2026
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-sm bg-[var(--slate-200)]" />{" "}
                2025
              </span>
            </div>
          </div>

          <div
            className="grid gap-1 items-end h-24"
            style={{ gridTemplateColumns: `repeat(${bars.length}, 1fr)` }}
          >
            {bars.map((v, i) => {
              const prev = v - 8 - (i % 3) * 3;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center gap-1 h-full"
                >
                  <div className="flex-1 w-full flex items-end gap-0.5">
                    <div
                      className="flex-1 bg-[var(--slate-200)] rounded-t-sm"
                      style={{ height: `${(prev / maxBar) * 100}%` }}
                    />
                    <div
                      className="flex-1 bg-gradient-to-b from-[#4F60FE] to-[#2437F6] rounded-t-sm transition-all duration-700"
                      style={{
                        height: active ? `${(v / maxBar) * 100}%` : "0%",
                        transitionDelay: `${i * 60}ms`,
                        transitionTimingFunction: "cubic-bezier(.16,.84,.44,1)",
                      }}
                    />
                  </div>
                  <span className="text-[9.5px] text-[var(--slate-400)] font-medium">
                    {labels[i]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
