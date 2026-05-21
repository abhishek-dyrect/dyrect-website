"use client";

import { useEffect, useRef, useState } from "react";
import { StatusBadge } from "@/components/ui/status-badge";

const beforeCards = [
  {
    key: "spreadsheet",
    title: "Spreadsheet",
    body: "Warranty records tracked manually by product and customer.",
    from: { x: 8, y: 6 },
    to: { col: 0, row: 0 },
  },
  {
    key: "inbox",
    title: "Support inbox",
    body: "Claim requests mixed with regular customer tickets.",
    from: { x: 58, y: 14 },
    to: { col: 1, row: 0 },
  },
  {
    key: "claimform",
    title: "Claim form",
    body: "Proof upload, serial checks, and status updates handled separately.",
    from: { x: 14, y: 56 },
    to: { col: 0, row: 1 },
  },
  {
    key: "analytics",
    title: "Analytics",
    body: "Reports assembled late from disconnected sources.",
    from: { x: 62, y: 64 },
    to: { col: 1, row: 1 },
  },
];

const beforeBullets = [
  "Manual registration records and fragmented customer data",
  "Claims validated through repeated back-and-forth conversations",
  "Limited visibility into product, ownership, service",
  "After-sales costs add up with no return",
];

const afterBullets = [
  "Every product owner, warranty card, and claim record connected",
  "Teams validate, assign, track, and resolve from one workspace",
  "Analytics reveal defect trends, registration sources, ROI",
  "Each interaction becomes a revenue touchpoint",
];

function ToolCard({
  x,
  y,
  w,
  h,
  rot,
  opacity,
  title,
  body,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  rot: number;
  opacity: number;
  title: string;
  body: string;
}) {
  return (
    <div
      className="absolute left-0 top-0 bg-white border border-[var(--slate-200)] rounded-xl p-4 overflow-hidden flex flex-col transition-all duration-100"
      style={{
        transform: `translate(${x}px, ${y}px) rotate(${rot}deg)`,
        width: w,
        height: h,
        opacity,
        boxShadow:
          "0 10px 30px -8px rgba(15,23,42,0.18), 0 4px 12px -2px rgba(15,23,42,0.06)",
      }}
    >
      <div className="text-[13.5px] font-bold text-[var(--slate-900)]">
        {title}
      </div>
      <div className="text-[12.5px] text-[var(--slate-600)] mt-1.5 leading-snug max-w-[320px]">
        {body}
      </div>
      <div className="mt-auto flex flex-col gap-1.5 pt-3">
        <span className="h-1.5 rounded-full bg-[var(--slate-100)] w-[92%]" />
        <span className="h-1.5 rounded-full bg-[var(--slate-100)] w-[74%]" />
        <span className="h-1.5 rounded-full bg-[var(--slate-100)] w-[56%]" />
      </div>
    </div>
  );
}

function PlatformLeft({
  afterAmt,
  textPrimary,
  textSecondary,
}: {
  afterAmt: number;
  textPrimary: string;
  textSecondary: string;
}) {
  const showAfter = afterAmt > 0.5;
  const pillBg = showAfter
    ? "rgba(36,55,246,0.85)"
    : "var(--warning-subtle)";
  const pillFg = showAfter ? "white" : "var(--warning-text)";
  const pillDot = showAfter ? "#A4AFFE" : "var(--warning)";

  const bullets = showAfter ? afterBullets : beforeBullets;

  return (
    <div className="relative z-[2]">
      <div
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11.5px] font-semibold uppercase tracking-wider transition-all duration-300"
        style={{ background: pillBg, color: pillFg }}
      >
        <span
          className="w-[7px] h-[7px] rounded-full"
          style={{ background: pillDot }}
        />
        {showAfter ? "After Dyrect" : "Before Dyrect"}
      </div>

      <div className="relative mt-5 min-h-[168px]">
        <h3
          className="absolute inset-0 m-0 font-sans font-bold leading-[1.04] tracking-tight transition-colors duration-300"
          style={{
            fontSize: "clamp(34px, 4.2vw, 56px)",
            letterSpacing: "-1.5px",
            color: textPrimary,
            opacity: 1 - afterAmt,
            transform: `translateY(${afterAmt * -10}px)`,
          }}
        >
          Disconnected warranty operations
        </h3>
        <h3
          className="absolute inset-0 m-0 font-sans font-bold leading-[1.04] tracking-tight transition-colors duration-300"
          style={{
            fontSize: "clamp(34px, 4.2vw, 56px)",
            letterSpacing: "-1.5px",
            color: textPrimary,
            opacity: afterAmt,
            transform: `translateY(${(1 - afterAmt) * 10}px)`,
          }}
        >
          One connected warranty lifecycle
        </h3>
      </div>

      <p
        className="text-base leading-relaxed mt-4 max-w-[440px] min-h-[76px] transition-colors duration-300"
        style={{ color: textSecondary }}
      >
        {showAfter
          ? "Registration, claims, service tracking, customer ownership, protection plans, and analytics operate from one brand-owned warranty system."
          : "Product records, claim requests, service conversations, customer data, and warranty proof live across sheets, forms, inboxes, and separate tools."}
      </p>

      <ol className="list-none p-0 mt-6 flex flex-col gap-3">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3.5 items-start">
            <span
              className="w-[22px] h-[22px] rounded-full text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{
                background: showAfter
                  ? "var(--brand-blue)"
                  : "var(--warning-subtle)",
                color: showAfter ? "white" : "var(--warning-text)",
              }}
            >
              {i + 1}
            </span>
            <span
              className="text-[15px] font-medium leading-snug max-w-[420px] transition-colors duration-300"
              style={{ color: textPrimary }}
            >
              {b}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function PlatformRight({
  morph,
  afterAmt,
}: {
  morph: number;
  afterAmt: number;
}) {
  const STAGE_W = 600,
    STAGE_H = 600;
  const GRID_GAP = 16;
  const SLOT_W = (STAGE_W - GRID_GAP) / 2;
  const SLOT_H = (STAGE_H - GRID_GAP) / 2;

  return (
    <div
      className="relative ml-auto z-[1]"
      style={{ width: "100%", maxWidth: STAGE_W, height: STAGE_H }}
    >
      {/* Dashed lines */}
      <svg
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{ opacity: Math.max(0, 1 - morph * 2.5) }}
        viewBox={`0 0 ${STAGE_W} ${STAGE_H}`}
        preserveAspectRatio="none"
      >
        <path
          d="M 80 80 C 200 200, 260 120, 380 260"
          stroke="#CBD5E1"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
        />
        <path
          d="M 420 80 C 320 220, 180 220, 120 360"
          stroke="#CBD5E1"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
        />
        <path
          d="M 100 360 C 220 280, 340 320, 460 360"
          stroke="#CBD5E1"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
        />
      </svg>

      {/* Tool cards */}
      {beforeCards.map((c) => {
        const fromX = (c.from.x / 100) * STAGE_W;
        const fromY = (c.from.y / 100) * STAGE_H;
        const toX = c.to.col * (SLOT_W + GRID_GAP);
        const toY = c.to.row * (SLOT_H + GRID_GAP);
        const x = fromX + (toX - fromX) * morph;
        const y = fromY + (toY - fromY) * morph;
        const rot = (c.from.x > 50 ? 4 : -3) * (1 - morph);
        const w = 260 + (SLOT_W - 260) * morph;
        const h = 150 + (SLOT_H - 150) * morph;
        const fade = afterAmt > 0 ? 1 - afterAmt : 1;
        return (
          <ToolCard
            key={c.key}
            x={x}
            y={y}
            w={w}
            h={h}
            rot={rot}
            opacity={fade}
            title={c.title}
            body={c.body}
          />
        );
      })}

      {/* After Dyrect workspace */}
      <div
        className="absolute inset-0 bg-white rounded-[14px] border border-white/10 overflow-hidden flex flex-col transition-all duration-500"
        style={{
          opacity: afterAmt,
          transform: `translateY(${(1 - afterAmt) * 20}px)`,
          boxShadow: "0 24px 60px -12px rgba(0,0,0,0.45)",
          pointerEvents: afterAmt < 0.5 ? "none" : "auto",
          transitionTimingFunction: "cubic-bezier(.16,.84,.44,1)",
        }}
      >
        <div className="p-4 pb-3 border-b border-[var(--slate-200)] flex items-center gap-3">
          <div className="flex-1">
            <div className="text-sm font-semibold text-[var(--slate-900)]">
              Dyrect warranty workspace
            </div>
            <div className="text-xs text-[var(--slate-500)] mt-0.5">
              Registrations &middot; claims &middot; service &middot; owners
              &middot; plans &middot; analytics
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--brand-blue-subtle)] text-[var(--brand-blue-deep)] text-[11.5px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" />
            Synced
          </span>
        </div>
        <div className="flex-1 p-4 grid grid-cols-2 gap-3.5 grid-rows-[auto_1fr_auto]">
          <div className="bg-[var(--slate-50)] border border-[var(--slate-200)] rounded-lg p-3.5">
            <div className="text-[11px] text-[var(--slate-500)] uppercase tracking-wide font-medium">
              Registered products
            </div>
            <div className="font-sans text-[26px] font-bold text-[var(--slate-900)] mt-1.5 tracking-tight">
              48,291
            </div>
            <div className="text-xs text-[var(--slate-500)] mt-1.5 leading-snug">
              QR, Shopify, website, portal — all mapped to owners
            </div>
          </div>
          <div className="bg-[var(--slate-50)] border border-[var(--slate-200)] rounded-lg p-3.5">
            <div className="text-[11px] text-[var(--slate-500)] uppercase tracking-wide font-medium">
              Claims in progress
            </div>
            <div className="font-sans text-[26px] font-bold text-[var(--slate-900)] mt-1.5 tracking-tight">
              284
            </div>
            <div className="text-xs text-[var(--slate-500)] mt-1.5 leading-snug">
              Validated by warranty terms, proof, and serial rules
            </div>
          </div>
          <div className="col-span-2 bg-[var(--slate-50)] border border-[var(--slate-200)] rounded-lg p-3.5">
            <div className="flex items-baseline justify-between mb-1">
              <div className="text-[11px] text-[var(--slate-500)] uppercase tracking-wide font-medium">
                Service workflow &middot; Claim status
              </div>
              <span className="text-[11px] text-[var(--slate-500)] inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" />
                Live
              </span>
            </div>
            <div>
              {[
                {
                  id: "CLM-2041",
                  desc: "Replacement approved",
                  state: "Ready",
                  tone: "success" as const,
                },
                {
                  id: "CLM-2042",
                  desc: "Repair center assigned",
                  state: "Assigned",
                  tone: "success" as const,
                },
                {
                  id: "CLM-2043",
                  desc: "Customer notified",
                  state: "Sent",
                  tone: "success" as const,
                },
              ].map((row, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-2.5"
                  style={{
                    borderTop:
                      i === 0 ? "none" : "1px solid var(--slate-100)",
                  }}
                >
                  <span className="font-mono text-xs text-[var(--slate-600)] font-medium w-[78px]">
                    {row.id}
                  </span>
                  <span className="text-[13px] text-[var(--slate-800)] flex-1">
                    {row.desc}
                  </span>
                  <StatusBadge tone={row.tone}>{row.state}</StatusBadge>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[var(--slate-50)] border border-[var(--slate-200)] rounded-lg p-3.5">
            <div className="text-[11px] text-[var(--slate-500)] uppercase tracking-wide font-medium">
              Owner portal logins
            </div>
            <div className="font-sans text-[26px] font-bold text-[var(--slate-900)] mt-1.5 tracking-tight">
              9,142
            </div>
            <div className="text-xs text-[var(--slate-500)] mt-1.5 leading-snug">
              Self-serve warranty cards, claims, and repair tracking
            </div>
          </div>
          <div className="bg-[var(--slate-50)] border border-[var(--slate-200)] rounded-lg p-3.5">
            <div className="text-[11px] text-[var(--slate-500)] uppercase tracking-wide font-medium">
              Revenue opportunity
            </div>
            <div className="flex items-baseline gap-2 mt-1.5">
              <span className="font-sans text-[26px] font-bold text-[var(--slate-900)] tracking-tight">
                $48,210
              </span>
              <span className="text-xs text-[var(--success-text)] font-semibold">
                +42%
              </span>
            </div>
            <div className="text-xs text-[var(--slate-500)] mt-1.5 leading-snug">
              Protection plans, accessories, and renewals this month
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PlatformOverview() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf: number;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = sectionRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const total = rect.height - vh;
        const scrolled = -rect.top;
        let p = scrolled / total;
        p = Math.max(0, Math.min(1, p));
        setProgress(p);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const p = progress;
  const morph = Math.max(0, Math.min(1, (p - 0.2) / 0.35));
  const afterAmt = Math.max(0, Math.min(1, (p - 0.45) / 0.3));

  const bgMix = (t: number) => {
    const lerp = (a: number, b: number) => Math.round(a + (b - a) * t);
    const r = lerp(248, 11);
    const g = lerp(250, 18);
    const b = lerp(252, 64);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const textPrimary = afterAmt > 0.5 ? "#FFFFFF" : "#0F172A";
  const textSecondary =
    afterAmt > 0.5 ? "rgba(255,255,255,0.7)" : "#475569";

  return (
    <section
      ref={sectionRef}
      id="platform"
      className="relative bg-white"
      style={{ height: "350vh" }}
    >
      <div
        className="sticky top-0 h-screen min-h-[860px] overflow-hidden flex flex-col transition-colors duration-200"
        style={{ background: bgMix(p) }}
      >
        {/* Progress bar */}
        <div
          aria-hidden
          className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--slate-200)]"
        >
          <div
            className="h-full bg-[var(--brand-blue)] transition-all duration-75"
            style={{ width: `${p * 100}%` }}
          />
        </div>

        {/* Intro text (fades out) */}
        <div
          className="container pt-14 pb-5 transition-opacity duration-200"
          style={{ opacity: Math.max(0, 1 - p * 4) }}
        >
          <div className="text-center max-w-[880px] mx-auto">
            <p className="eyebrow">Platform</p>
            <h2 className="section-title mt-2.5">
              All-in-one warranty management.{" "}
              <span className="em">Seamless</span> for your team.{" "}
              <span className="em">Effortless</span> for your customers.
            </h2>
            <p className="section-sub mt-3">
              Registration, claims, service, protection plans, and analytics no
              longer need separate tools. Scroll to see the shift.
            </p>
          </div>
        </div>

        {/* Main content */}
        <div
          className="container flex-1 grid items-center gap-12 pb-36 relative"
          style={{ gridTemplateColumns: "1fr 1.15fr" }}
        >
          <PlatformLeft
            afterAmt={afterAmt}
            textPrimary={textPrimary}
            textSecondary={textSecondary}
          />
          <PlatformRight morph={morph} afterAmt={afterAmt} />

          {/* Dots */}
          <div className="absolute left-1/2 -bottom-8 -translate-x-1/2 flex gap-2 z-[5]">
            {[0, 1, 2].map((i) => {
              const active =
                (i === 0 && p < 0.33) ||
                (i === 1 && p >= 0.33 && p < 0.66) ||
                (i === 2 && p >= 0.66);
              return (
                <span
                  key={i}
                  className="h-1.5 rounded-full transition-all duration-200"
                  style={{
                    width: active ? 22 : 6,
                    background: active
                      ? afterAmt > 0.5
                        ? "white"
                        : "var(--brand-blue)"
                      : afterAmt > 0.5
                        ? "rgba(255,255,255,0.3)"
                        : "var(--slate-300)",
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Scroll hint */}
        <div
          aria-hidden
          className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 text-[var(--slate-400)] text-[10px] font-semibold tracking-wider uppercase pointer-events-none transition-opacity duration-200"
          style={{ opacity: p > 0.05 ? 0 : 1 }}
        >
          Scroll
          <svg
            width="14"
            height="22"
            viewBox="0 0 24 36"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="6" y="2" width="12" height="20" rx="6" />
            <line x1="12" y1="7" x2="12" y2="11">
              <animate
                attributeName="y1"
                values="7;11;7"
                dur="1.4s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y2"
                values="11;15;11"
                dur="1.4s"
                repeatCount="indefinite"
              />
            </line>
          </svg>
        </div>
      </div>
    </section>
  );
}
