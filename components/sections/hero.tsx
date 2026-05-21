"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { RotatingWord } from "@/components/ui/rotating-word";
import { CustomerProfileCard } from "@/components/ui/customer-profile-card";
import { TicketsCard } from "@/components/ui/tickets-card";
import { AnalyticsCard } from "@/components/ui/analytics-card";

function useCycle(n: number, ms: number): [number, (v: number) => void] {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((v) => (v + 1) % n), ms);
    return () => clearInterval(t);
  }, [n, ms]);
  return [active, setActive];
}

const headlineWords = [
  "D2C brands",
  "Shopify merchants",
  "retailers",
  "manufacturers",
];

const cards = [
  { Comp: CustomerProfileCard, key: "profile", label: "Customer profile" },
  { Comp: TicketsCard, key: "tickets", label: "Claims & tickets" },
  { Comp: AnalyticsCard, key: "analytics", label: "Analytics" },
];

const positions = [
  { x: 36, y: 56, scale: 0.93, op: 0.55, blur: 1.2, z: 1 }, // back
  { x: 18, y: 28, scale: 0.97, op: 0.85, blur: 0, z: 2 }, // mid
  { x: 0, y: 0, scale: 1, op: 1, blur: 0, z: 3 }, // front
];

function HeroStacked() {
  const [active, setActive] = useCycle(3, 4200);

  const order = [
    (active + 2) % 3, // back
    (active + 1) % 3, // mid
    active, // front
  ];

  return (
    <div className="relative w-[380px] h-[520px] mx-auto">
      {/* Glow */}
      <div
        aria-hidden
        className="absolute -inset-10 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(closest-side, rgba(36,55,246,0.18), transparent 70%)",
          filter: "blur(24px)",
        }}
      />
      {order.map((cardIdx, layerIdx) => {
        const pos = positions[layerIdx];
        const isFront = layerIdx === 2;
        const CardComp = cards[cardIdx].Comp;
        return (
          <div
            key={cards[cardIdx].key}
            onClick={() => setActive(cardIdx)}
            className="absolute transition-all duration-700"
            style={{
              top: pos.y + 60,
              left: pos.x,
              transform: `scale(${pos.scale})`,
              transformOrigin: "top left",
              opacity: pos.op,
              filter: pos.blur ? `blur(${pos.blur}px)` : "none",
              zIndex: pos.z,
              cursor: isFront ? "default" : "pointer",
              transitionTimingFunction: "cubic-bezier(.16,.84,.44,1)",
            }}
          >
            <CardComp active={isFront} />
          </div>
        );
      })}
      {/* Dots indicator */}
      <div className="absolute left-0 top-[calc(100%+4px)] flex gap-2 z-[4]">
        {cards.map((c, i) => (
          <button
            key={c.key}
            onClick={() => setActive(i)}
            className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-full cursor-pointer transition-all duration-200"
            style={{
              background: active === i ? "#0F172A" : "white",
              color: active === i ? "white" : "#475569",
              border:
                active === i
                  ? "1px solid #0F172A"
                  : "1px solid var(--slate-200)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: active === i ? "#2BC840" : "#CBD5E1",
              }}
            />
            {c.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero hero--stacked relative py-14 pb-24 overflow-hidden">
      {/* Background gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(800px 400px at 85% 8%, rgba(36,55,246,0.06), transparent 70%),
            radial-gradient(600px 300px at 8% 12%, rgba(36,55,246,0.04), transparent 70%),
            linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)
          `,
        }}
      />
      {/* Grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none grid-bg"
      />

      <div className="container relative z-[1]">
        <div
          className="hero-grid grid items-start gap-14"
          style={{ gridTemplateColumns: "1fr 460px" }}
        >
          <div>
            <div className="pill mb-5">
              <span className="dot">&#9733;</span> Rated 4.8 on G2 &middot; 5★
              on Shopify
            </div>
            <h1
              className="display-heading"
              style={{ fontSize: "clamp(30px, 4vw, 48px)" }}
            >
              The most <span className="em">seamless</span>
              <br />
              <span className="whitespace-nowrap">
                warranty management software
              </span>
              <br />
              <span className="inline-block align-baseline">
                for&nbsp;
                <RotatingWord words={headlineWords} />
              </span>
            </h1>
            <p className="text-lg text-[var(--slate-600)] max-w-[560px] mt-5 leading-relaxed">
              Warranty registration, claims management, and tracking unified in
              one system. Reduce the cost of every claim, manage warranties with
              more control, and turn the warranty lifecycle into a new revenue
              channel.
            </p>
            <div className="flex gap-3 mt-7 flex-wrap">
              <Link href="#demo" className="btn btn-primary btn-lg">
                Book a demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#platform" className="btn btn-secondary btn-lg">
                See the platform
              </Link>
            </div>
            <div className="flex gap-6 items-center mt-9 text-[var(--slate-500)] text-[13px]">
              {[
                "Live in <30 min",
                "No developer needed",
                "Built for Shopify",
              ].map((txt, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <Check
                    className="w-3.5 h-3.5 text-[var(--success)]"
                    strokeWidth={3}
                  />
                  {txt}
                </div>
              ))}
            </div>
          </div>

          <HeroStacked />
        </div>
      </div>
    </section>
  );
}
