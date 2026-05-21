"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const PRODUCTS = [
  {
    key: "registration",
    eyebrow: "Product Registration & Upsell",
    title: "Turn every buyer into a",
    titleEm: "reachable customer",
    body: "Stop losing customers to marketplaces and offline retail. Dyrect collects first-party data at the point of registration so every buyer becomes a direct contact the team can reach, retain, and sell to again.",
    bullets: [
      {
        t: "Omnichannel registration",
        d: "QR code on packaging, website link, and automatic registration for Shopify orders.",
      },
      {
        t: "Digital warranty",
        d: "Digital warranty card and a self-serve customer portal — no more paper.",
      },
      {
        t: "Post-registration upsells",
        d: "Trigger upsell offers at the exact moment a customer completes registration.",
      },
    ],
    cta: "Create omnichannel registration",
  },
  {
    key: "claims",
    eyebrow: "Claims & Service Management",
    title: "Every claim logged, assigned, and",
    titleEm: "resolved with full visibility",
    body: "Claims arrive from every direction and service work expands with every unresolved request. Dyrect organizes claim intake, validation, assignment, and resolution with clear ownership end-to-end.",
    bullets: [
      {
        t: "Serial number validation",
        d: "Catch fraudulent and duplicate claims before they are processed.",
      },
      {
        t: "Smart ticket routing",
        d: "Automatic assignment with priority levels and real-time status tracking.",
      },
      {
        t: "Service workflow tracking",
        d: "Repair, replacement, shipment, dealer payment, and OEM chargeback in one workflow.",
      },
    ],
    cta: "Streamline your claims process",
  },
  {
    key: "warranties",
    eyebrow: "Extended Warranties",
    title: "Offer protection plans across more touchpoints.",
    titleEm: "Keep 100% of revenue in-house.",
    body: "Don't leave extended warranty revenue to third parties. Dyrect lets brands sell protection plans directly, at the moment customers are most likely to buy — on the product page or after purchase.",
    bullets: [
      {
        t: "Multi-touchpoint offers",
        d: "Product page, checkout, post-purchase, and inside the registration flow.",
      },
      {
        t: "Native ecommerce",
        d: "Connect natively with Shopify and other ecommerce platforms.",
      },
      {
        t: "Self-serve plan management",
        d: "Customers activate, view, and renew plans from a self-serve portal.",
      },
    ],
    cta: "Explore extended warranties",
  },
  {
    key: "analytics",
    eyebrow: "Insights & Analytics",
    title: "Complete picture of your warranty operation in",
    titleEm: "one dashboard",
    body: "Know exactly where claims come from, which products fail most, how fast the team resolves tickets, and where revenue opportunities are being missed — all in one dashboard, updated in real time.",
    bullets: [
      {
        t: "Warranty performance",
        d: "Track registration rates, claim volumes, and resolution times across every product.",
      },
      {
        t: "Defect trend detection",
        d: "Identify high-defect products before they become a cost problem.",
      },
      {
        t: "Revenue opportunity insights",
        d: "Spot upsell opportunities based on warranty expiry and customer activity.",
      },
    ],
    cta: "Explore analytics",
  },
];

export function Products() {
  const [tab, setTab] = useState(0);
  const [featIdx, setFeatIdx] = useState(0);

  useEffect(() => {
    setFeatIdx(0);
  }, [tab]);

  const p = PRODUCTS[tab];

  return (
    <section
      className="section bg-[var(--slate-50)]"
      id="products"
    >
      <div className="container">
        <div className="text-center max-w-[900px] mx-auto reveal">
          <p className="eyebrow">Products</p>
          <h2 className="section-title mt-3">
            The only warranty management system built for the{" "}
            <span className="em">full post-sale journey</span>
          </h2>
          <p className="section-sub">
            Most warranty tools solve one part of the problem. Dyrect covers the
            entire journey, from the moment a product is registered to the day a
            claim is resolved and every service interaction in between.
          </p>
        </div>

        {/* Tabs */}
        <div
          className="product-tabs flex gap-1.5 mt-12 p-1.5 bg-white rounded-xl border border-[var(--slate-200)] shadow-sm max-w-[920px] mx-auto overflow-x-auto"
        >
          {PRODUCTS.map((pp, i) => (
            <button
              key={pp.key}
              onClick={() => setTab(i)}
              className="flex-1 py-3 px-4 rounded-lg font-sans text-[13px] font-medium transition-all duration-200 whitespace-nowrap text-left flex items-center gap-2.5 cursor-pointer"
              style={{
                background: tab === i ? "var(--brand-blue)" : "transparent",
                color: tab === i ? "white" : "var(--slate-600)",
              }}
            >
              <span
                className="w-[22px] h-[22px] rounded-md flex items-center justify-center text-[11px] font-semibold"
                style={{
                  background:
                    tab === i
                      ? "rgba(255,255,255,0.18)"
                      : "var(--slate-100)",
                  color: tab === i ? "white" : "var(--brand-blue)",
                }}
              >
                {i + 1}
              </span>
              {pp.eyebrow.split("&")[0].trim()}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div
          className="product-tab-content mt-9 bg-white border border-[var(--slate-200)] rounded-2xl shadow-lg p-8 lg:p-14 grid items-center gap-14"
          style={{ gridTemplateColumns: "1fr 460px" }}
        >
          <div>
            <p className="eyebrow">{p.eyebrow}</p>
            <h3 className="font-sans font-bold text-[var(--slate-900)] mt-3.5 mb-4 leading-tight tracking-tight" style={{ fontSize: "clamp(24px, 2.6vw, 32px)" }}>
              {p.title} <span className="em">{p.titleEm}</span>
            </h3>
            <p className="text-[var(--slate-600)] text-base leading-relaxed m-0">
              {p.body}
            </p>
            <ul className="list-none p-0 mt-7 flex flex-col gap-1.5">
              {p.bullets.map((b, i) => {
                const selected = featIdx === i;
                return (
                  <li key={i}>
                    <button
                      onClick={() => setFeatIdx(i)}
                      className="w-full text-left flex gap-3.5 items-start p-3.5 rounded-lg transition-all duration-200 cursor-pointer relative"
                      style={{
                        background: selected
                          ? "var(--brand-blue-subtle)"
                          : "transparent",
                        border: selected
                          ? "1px solid color-mix(in srgb, var(--brand-blue) 25%, transparent)"
                          : "1px solid transparent",
                      }}
                    >
                      <span
                        className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200"
                        style={{
                          background: selected
                            ? "var(--brand-blue)"
                            : "var(--brand-blue-subtle)",
                          color: selected ? "white" : "var(--brand-blue)",
                        }}
                      >
                        <Check className="w-3.5 h-3.5" strokeWidth={2.6} />
                      </span>
                      <div className="flex-1">
                        <div
                          className="flex items-center gap-2 font-semibold text-[15px]"
                          style={{
                            color: selected
                              ? "var(--brand-blue-deep)"
                              : "var(--slate-900)",
                          }}
                        >
                          {b.t}
                          {selected && (
                            <ArrowRight className="w-[13px] h-[13px]" strokeWidth={2.4} />
                          )}
                        </div>
                        <div className="text-[var(--slate-600)] text-sm mt-0.5">
                          {b.d}
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
            <Link
              href="#demo"
              className="inline-flex items-center gap-1.5 mt-7 pl-3.5 text-[var(--brand-blue)] font-medium text-[15px]"
            >
              {p.cta}
              <ArrowRight className="w-[15px] h-[15px]" strokeWidth={2} />
            </Link>
          </div>
          <div className="flex justify-center min-h-[480px] relative">
            {/* Placeholder for feature previews */}
            <div className="w-[380px] h-[400px] bg-gradient-to-br from-[var(--slate-100)] to-[var(--slate-50)] rounded-xl border border-[var(--slate-200)] flex items-center justify-center text-[var(--slate-400)] text-sm">
              Feature preview placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
