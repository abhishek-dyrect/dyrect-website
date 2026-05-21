"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, FileText, Shield, Award, Building2 } from "lucide-react";

const NAV_ITEMS = [
  {
    label: "Products",
    menu: "products",
    content: {
      type: "two-col",
      left: {
        heading: "Products",
        items: [
          {
            icon: FileText,
            name: "Product Registration Software",
            desc: "Provide omni-channel, delightful experience at scale.",
          },
          {
            icon: Shield,
            name: "Warranty Management Software",
            desc: "Save costs, reduce overheads with faster, accurate claims processing.",
          },
          {
            icon: Award,
            name: "Extended Warranties",
            desc: "Offer protection plans across more touchpoints. Keep 100% of revenue in-house.",
          },
        ],
      },
      right: {
        heading: "Features",
        items: [
          "No-code Experience Builder",
          "Claims Ticket Management",
          "Digital Warranty Card",
          "Product Serialization",
          "Digitize Product Manuals & Guides",
          "Powerful Form Builder",
        ],
        cta: "See more features",
      },
    },
  },
  {
    label: "Solutions",
    menu: "solutions",
    content: {
      type: "grid-2",
      heading: "Industry",
      items: [
        "Electronics",
        "Outdoors & Recreation",
        "Baby Gear",
        "Beauty and Personal Care",
        "Mobile Accessories",
        "Household Appliances",
        "T.V, Audio and Video",
        "Exercise and Fitness",
        "Furniture",
        "Smart Home and Network",
        "Cycling",
        "Automotive",
      ],
    },
  },
  { label: "Showcase", href: "#showcase" },
  { label: "Pricing", href: "#pricing" },
  {
    label: "Resources",
    menu: "resources",
    content: {
      type: "simple-list",
      items: [
        { label: "Help Center", href: "#" },
        { label: "Blogs", href: "#" },
        { label: "Integrations", href: "#integrations" },
        { label: "Client Success Stories", href: "#" },
        { label: "How it Works", href: "#" },
        { label: "FAQ's", href: "#faq" },
      ],
    },
  },
  {
    label: "Free Tools",
    menu: "free-tools",
    content: {
      type: "simple-list",
      items: [
        { label: "Brand Warranties", href: "#" },
        { label: "Bulk QR Code Generator", href: "#" },
        { label: "Serial Number Generator", href: "#" },
        { label: "Warranty Cost Calculator", href: "#" },
      ],
    },
  },
];

function NavTwoCol({ content }: { content: any }) {
  return (
    <div
      className="grid gap-8 min-w-[720px]"
      style={{ gridTemplateColumns: "minmax(360px, 420px) 1px 240px" }}
    >
      <div>
        <div className="text-[11px] font-semibold text-[var(--slate-400)] uppercase tracking-wider mb-4">
          {content.left.heading}
        </div>
        <div className="flex flex-col gap-1">
          {content.left.items.map((it: any, i: number) => {
            const Icon = it.icon;
            return (
              <Link
                key={i}
                href="#"
                className="flex gap-3.5 p-3 rounded-lg items-start transition-colors hover:bg-[var(--slate-50)]"
              >
                <span className="w-9 h-9 rounded-lg bg-[var(--brand-blue-subtle)] text-[var(--brand-blue)] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-[22px] h-[22px]" strokeWidth={1.7} />
                </span>
                <div>
                  <div className="text-sm font-semibold text-[var(--slate-900)]">
                    {it.name}
                  </div>
                  <div className="text-[12.5px] text-[var(--slate-500)] mt-0.5 leading-snug">
                    {it.desc}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="bg-[var(--slate-200)]" />
      <div>
        <div className="text-[11px] font-semibold text-[var(--slate-400)] uppercase tracking-wider mb-4">
          {content.right.heading}
        </div>
        <div className="flex flex-col">
          {content.right.items.map((it: string, i: number) => (
            <Link
              key={i}
              href="#"
              className="px-2.5 py-2 rounded-md text-sm font-medium text-[var(--slate-800)] transition-colors hover:bg-[var(--slate-50)] hover:text-[var(--brand-blue)]"
            >
              {it}
            </Link>
          ))}
        </div>
        <Link
          href="#"
          className="inline-flex items-center gap-1 mt-3.5 ml-2.5 text-[13px] font-semibold text-[var(--brand-blue)]"
        >
          {content.right.cta} &nbsp;›
        </Link>
      </div>
    </div>
  );
}

function NavGrid({ content }: { content: any }) {
  return (
    <div className="min-w-[540px]">
      <div className="flex items-center gap-2.5 text-[11px] font-semibold text-[var(--slate-400)] uppercase tracking-wider mb-4">
        <span className="w-[22px] h-[22px] rounded-md bg-[var(--slate-100)] text-[var(--slate-600)] flex items-center justify-center">
          <Building2 className="w-[13px] h-[13px]" strokeWidth={1.8} />
        </span>
        {content.heading}
      </div>
      <div className="grid grid-cols-2 gap-x-9 gap-y-1">
        {content.items.map((it: string, i: number) => (
          <Link
            key={i}
            href="#"
            className="px-2.5 py-2 rounded-md text-sm font-medium text-[var(--slate-800)] transition-colors hover:bg-[var(--slate-50)] hover:text-[var(--brand-blue)]"
          >
            {it}
          </Link>
        ))}
      </div>
    </div>
  );
}

function NavSimpleList({ content }: { content: any }) {
  return (
    <div className="min-w-[220px] flex flex-col">
      {content.items.map((it: any, i: number) => (
        <Link
          key={i}
          href={it.href}
          className="px-3 py-2.5 rounded-md text-sm font-medium text-[var(--slate-800)] whitespace-nowrap transition-colors hover:bg-[var(--slate-50)] hover:text-[var(--brand-blue)]"
        >
          {it.label}
        </Link>
      ))}
    </div>
  );
}

function NavPanel({ content }: { content: any }) {
  return (
    <div
      className="absolute top-[calc(100%+4px)] bg-white border border-[var(--slate-200)] rounded-[14px] p-7 z-[60]"
      style={{
        boxShadow:
          "0 24px 60px -12px rgba(15,23,42,0.18), 0 6px 18px -4px rgba(15,23,42,0.06)",
      }}
    >
      {content.type === "two-col" && <NavTwoCol content={content} />}
      {content.type === "grid-2" && <NavGrid content={content} />}
      {content.type === "simple-list" && <NavSimpleList content={content} />}
    </div>
  );
}

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const hideTimer = useRef<NodeJS.Timeout | null>(null);

  const show = (key: string) => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setOpenMenu(key);
  };

  const scheduleHide = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

  return (
    <header className="relative z-50 bg-white border-b border-[var(--slate-200)]">
      <div className="container flex items-center gap-6 py-3.5 px-6">
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/images/logos/Dyrect-03 (3).png"
            alt="Dyrect"
            width={112}
            height={28}
            className="h-7 w-auto"
          />
        </Link>

        <nav className="nav-links flex items-center gap-1 relative">
          {NAV_ITEMS.map((item) => {
            const isOpen = openMenu === item.menu;
            const hasMenu = !!item.menu;
            return (
              <div
                key={item.label}
                onMouseEnter={() => hasMenu && show(item.menu!)}
                onMouseLeave={() => hasMenu && scheduleHide()}
                className="relative"
              >
                <Link
                  href={item.href || "#"}
                  className="inline-flex items-center gap-1 px-3.5 py-2.5 rounded-md text-[14.5px] font-medium relative transition-colors"
                  style={{
                    color: isOpen
                      ? "var(--brand-blue)"
                      : "var(--slate-800)",
                  }}
                >
                  {item.label}
                  {hasMenu && (
                    <ChevronDown
                      className="w-[11px] h-[11px] mt-0.5 transition-transform duration-200"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                      }}
                      strokeWidth={2.4}
                    />
                  )}
                  {isOpen && (
                    <span className="absolute left-3.5 right-3.5 bottom-0.5 h-0.5 bg-[var(--brand-blue)] rounded" />
                  )}
                </Link>
                {isOpen && hasMenu && (
                  <div
                    onMouseEnter={() => show(item.menu!)}
                    onMouseLeave={scheduleHide}
                  >
                    <NavPanel content={item.content} />
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex-1" />

        <Link
          href="#demo"
          className="btn btn-primary flex-shrink-0"
          style={{ fontSize: 14, padding: "11px 18px" }}
        >
          Book a Meeting
        </Link>
      </div>
    </header>
  );
}
