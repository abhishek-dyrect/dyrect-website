"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const personas = [
  {
    role: "Marketer",
    title: "You have thousands of buyers",
    titleEm: "you cannot reach",
    body: "Every product sold through Amazon, offline retail, or a distributor is a customer your brand has no record of. No email, no phone number, no purchase history. Dyrect captures first-party data at the point of product registration so every buyer becomes a direct contact you own, regardless of where they purchased.",
    bullets: [
      "First-party data on every buyer",
      "Trigger upsells at registration",
      "Sync to Klaviyo, Mailchimp, HubSpot",
    ],
  },
  {
    role: "Warranty manager",
    title: "Your claims process was",
    titleEm: "not built to scale",
    body: "Claims come in through email, WhatsApp, and phone calls. Each one gets logged manually, followed up individually, and resolved slowly. Dyrect replaces that with a structured system where every claim is validated against a serial number, assigned to the right person, tracked in real time, and closed without manual chasing.",
    bullets: [
      "Serial-number validation",
      "Smart assignment to dealers",
      "Repair + chargeback in one workflow",
    ],
  },
  {
    role: "Business owner",
    title: "Your after-sales operation",
    titleEm: "costs money and earns none",
    body: "Every warranty claim your team resolves is an expense with no return. Dyrect turns each service interaction into a revenue touchpoint by surfacing extended warranty plans and upsell offers at the right moment, so the same operation that was draining margin starts generating it.",
    bullets: [
      "100% in-house extended warranties",
      "3x higher attach rate (avg.)",
      "P&L visibility on every claim",
    ],
  },
];

export function Personas() {
  const [tab, setTab] = useState(0);
  const p = personas[tab];

  return (
    <section
      className="section relative overflow-hidden"
      style={{ background: "#0F172A", color: "white" }}
    >
      {/* Glow */}
      <div
        aria-hidden
        className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(36,55,246,0.45), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="container relative">
        <div className="text-center max-w-[900px] mx-auto reveal">
          <p className="eyebrow" style={{ color: "#7E8DFE" }}>
            Customer profile
          </p>
          <h2 className="section-title mt-3 text-white">
            Whoever owns the post-sale problem,{" "}
            <span className="em" style={{ color: "#A4AFFE" }}>
              Dyrect solves it
            </span>
            .
          </h2>
          <p
            className="text-[17px] leading-relaxed max-w-[720px] mx-auto mt-4"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            No first-party data. Slow claims processing. After-sales service
            that costs more than it earns. These are not separate problems —
            they are the same broken post-sale operation hitting three different
            teams. Dyrect fixes the whole thing.
          </p>
        </div>

        {/* Role tabs */}
        <div className="flex gap-2 justify-center mt-10 flex-wrap">
          {personas.map((pp, i) => (
            <button
              key={pp.role}
              onClick={() => setTab(i)}
              className="py-2.5 px-4.5 rounded-full font-sans text-sm font-medium transition-all duration-200 cursor-pointer"
              style={{
                background: tab === i ? "white" : "transparent",
                color: tab === i ? "#0F172A" : "rgba(255,255,255,0.75)",
                border:
                  tab === i
                    ? "1px solid white"
                    : "1px solid rgba(255,255,255,0.18)",
              }}
            >
              {pp.role}
            </button>
          ))}
        </div>

        <div
          className="product-tab-content mt-11 grid items-center gap-14"
          style={{ gridTemplateColumns: "1fr 440px" }}
        >
          <div>
            <h3
              className="font-sans font-bold leading-tight tracking-tight m-0 text-white"
              style={{ fontSize: "clamp(22px, 2.2vw, 30px)" }}
            >
              {p.title}{" "}
              <span className="em" style={{ color: "#A4AFFE" }}>
                {p.titleEm}
              </span>
            </h3>
            <p
              className="text-base leading-relaxed mt-4"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              {p.body}
            </p>
            <ul className="list-none p-0 mt-5 flex flex-col gap-2.5">
              {p.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex gap-3 items-center text-[15px]"
                  style={{ color: "rgba(255,255,255,0.9)" }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(36,55,246,0.25)",
                      color: "#A4AFFE",
                    }}
                  >
                    <Check className="w-[11px] h-[11px]" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <Link
              href="#demo"
              className="inline-flex items-center gap-1.5 mt-8 text-white font-medium text-[15px]"
            >
              See how it works
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>

          {/* Visual placeholder */}
          <div className="flex justify-center min-h-[400px]">
            <div className="w-[380px] h-[350px] bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-white/40 text-sm">
              Visual placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
