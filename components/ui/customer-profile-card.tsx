"use client";

import { StatusBadge } from "@/components/ui/status-badge";
import { Bike } from "lucide-react";

interface PortalCardProps {
  active?: boolean;
}

export function CustomerProfileCard({ active }: PortalCardProps) {
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
          Customer &middot; Sarah Chen
        </span>
      </div>

      <div className="bg-white">
        {/* Hero strip */}
        <div className="p-4 pb-3 border-b border-[var(--slate-200)] flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#2437F6] to-[#7E8DFE] text-white flex items-center justify-center font-semibold text-base tracking-tight">
            SC
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-sm text-[var(--slate-900)]">
              Sarah Chen
            </div>
            <div className="text-xs text-[var(--slate-500)] mt-0.5">
              sarah.chen@hey.com &middot; +1 415 555 0142
            </div>
          </div>
          <StatusBadge tone="success" dot>
            Verified
          </StatusBadge>
        </div>

        {/* Meta grid */}
        <div className="grid grid-cols-2 gap-[1px] bg-[var(--slate-200)]">
          {[
            { k: "Sales channel", v: "Shopify", tone: "brand" as const },
            { k: "Location", v: "San Francisco, CA", tone: null },
            { k: "Lifetime orders", v: "4", tone: null },
            { k: "Warranty status", v: "Active", tone: "success" as const },
          ].map((item, i) => (
            <div key={i} className="bg-white px-3.5 py-2.5">
              <div className="text-[10.5px] text-[var(--slate-500)] uppercase tracking-wide font-medium">
                {item.k}
              </div>
              <div className="mt-1 text-[13px] font-medium text-[var(--slate-800)]">
                {item.tone ? (
                  <StatusBadge tone={item.tone} dot>
                    {item.v}
                  </StatusBadge>
                ) : (
                  item.v
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Products owned */}
        <div className="p-4 pb-3.5">
          <div className="text-[11px] text-[var(--slate-500)] uppercase tracking-wide font-medium mb-2">
            Registered products
          </div>
          {[
            {
              name: "Velotric Discover 2",
              sn: "VD2-A8421",
              exp: "Apr 22, 2028",
              warn: false,
            },
            {
              name: "Velotric Nomad 1 Plus",
              sn: "VN1-B2031",
              exp: "Jun 10, 2026",
              warn: true,
            },
          ].map((p, i) => (
            <div
              key={i}
              className={`flex items-center gap-2.5 p-2.5 mb-1.5 rounded-md border border-[var(--slate-200)] ${i === 0 ? "bg-[var(--slate-50)]" : "bg-white"}`}
            >
              <div className="w-7 h-7 rounded bg-[var(--slate-100)] flex items-center justify-center text-[var(--slate-600)]">
                <Bike className="w-3.5 h-3.5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[12.5px] font-medium text-[var(--slate-800)] truncate">
                  {p.name}
                </div>
                <div className="text-[11px] text-[var(--slate-500)] font-mono">
                  {p.sn}
                </div>
              </div>
              <StatusBadge tone={p.warn ? "warning" : "success"} dot>
                {p.warn ? "Expires soon" : "Active"}
              </StatusBadge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
