"use client";

import {
  BadgeCheck,
  Fingerprint,
  SlidersHorizontal,
  UserCog,
  Palette,
  Users,
  QrCode,
  Truck,
} from "lucide-react";

const items = [
  {
    icon: BadgeCheck,
    t: "Digital warranty cards",
    d: "Replace paper cards with digital warranty records linked to the product and purchase details.",
  },
  {
    icon: Fingerprint,
    t: "Serial number validation",
    d: "Check product authenticity and warranty eligibility before service activity moves ahead.",
  },
  {
    icon: SlidersHorizontal,
    t: "Custom forms and policies",
    d: "Set up registration fields, claim forms, and warranty rules for different products and categories.",
  },
  {
    icon: UserCog,
    t: "Self-serve warranty portal",
    d: "Give buyers a clear place to view product details, warranty status, and service activity.",
  },
  {
    icon: Palette,
    t: "White-label experience",
    d: "Registration pages and customer comms carry the brand's logo, colors, and tone. Not a third-party tool.",
  },
  {
    icon: Users,
    t: "Team workspaces",
    d: "Keep claim ownership, notes, assignments, and service actions organized across internal teams.",
  },
  {
    icon: QrCode,
    t: "QR codes on packaging",
    d: "Generate per-SKU QR codes so customers register their purchase in seconds, from anywhere.",
  },
  {
    icon: Truck,
    t: "Shipment + dealer payouts",
    d: "Track every shipment, repair, replacement, and dealer reimbursement in a single workflow.",
  },
];

export function Capabilities() {
  return (
    <section className="section bg-white" id="capabilities">
      <div className="container">
        <div className="text-center max-w-[880px] mx-auto">
          <p className="eyebrow">Capabilities</p>
          <h2 className="section-title mt-3">
            Everything you need to run warranty operations, built in
          </h2>
          <p className="section-sub">
            No add-ons, no third-party tools stitched together. Every feature
            needed to run a complete warranty operation comes built into Dyrect.
          </p>
        </div>
        <div
          className="cap-grid grid gap-5 mt-14"
          style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
        >
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={i}
                className="p-6 bg-[var(--slate-50)] border border-[var(--slate-200)] rounded-xl transition-all duration-200 cursor-default hover:bg-white hover:border-[var(--brand-blue)] hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-[var(--slate-200)] text-[var(--brand-blue)] flex items-center justify-center mb-4">
                  <Icon className="w-[22px] h-[22px]" strokeWidth={1.7} />
                </div>
                <div className="font-semibold text-[15px] text-[var(--slate-900)] mb-1.5">
                  {it.t}
                </div>
                <div className="text-sm text-[var(--slate-600)] leading-relaxed">
                  {it.d}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
