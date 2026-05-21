import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";

const footerCols = [
  {
    h: "Products",
    links: [
      { l: "Product Registration Software", href: "#" },
      { l: "Warranty Management Software", href: "#" },
      { l: "Extended Warranties", href: "#" },
    ],
  },
  {
    h: "Free Tools",
    links: [
      { l: "Bulk QR Code Generator", href: "#" },
      { l: "Serial Number Generator", href: "#" },
      { l: "Warranty Cost Calculator", href: "#" },
    ],
  },
  {
    h: "Solutions",
    links: [
      { l: "Electronics", href: "#" },
      { l: "Outdoors & Recreation", href: "#" },
      { l: "Baby Gear", href: "#" },
      { l: "Beauty and Personal Care", href: "#" },
      { l: "Mobile Accessories", href: "#" },
      { l: "Household Appliances", href: "#" },
      { l: "T.V, Audio and Video", href: "#" },
      { l: "Exercise and Fitness", href: "#" },
      { l: "Furniture", href: "#" },
      { l: "Smart Home and Network", href: "#" },
      { l: "Cycling", href: "#" },
    ],
  },
  {
    h: "Company",
    links: [
      { l: "Features", href: "#" },
      { l: "Pricing", href: "#" },
      { l: "Contact Us", href: "#" },
    ],
    sub: {
      h: "Features",
      links: [
        { l: "Digitalize Warranty", href: "#" },
        { l: "Form Builder (No-Code)", href: "#" },
        { l: "Digitize Product Manual", href: "#" },
        { l: "Serial Number Validator", href: "#" },
        { l: "Claims and Ticket Management", href: "#" },
        { l: "All Features", href: "#" },
      ],
    },
  },
  {
    h: "Resources",
    links: [
      { l: "FAQs", href: "#faq" },
      { l: "Blog", href: "#blog" },
      { l: "Integrations", href: "#integrations" },
      { l: "Brand Warranties", href: "#" },
      { l: "Our Partners", href: "#" },
    ],
    sub: {
      h: "Alternatives",
      links: [
        { l: "Zoho vs Dyrect", href: "#" },
        { l: "Salesforce vs Dyrect", href: "#" },
        { l: "SAP vs Dyrect", href: "#" },
        { l: "Odoo vs Dyrect", href: "#" },
      ],
    },
  },
];

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs font-semibold text-white/55 uppercase tracking-wider mb-3.5">
      {children}
    </div>
  );
}

function ColLinks({ links }: { links: { l: string; href: string }[] }) {
  return (
    <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
      {links.map((l) => (
        <li key={l.l}>
          <Link
            href={l.href}
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            {l.l}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function SiteFooter() {
  return (
    <footer
      className="relative overflow-hidden pt-20 pb-6"
      style={{
        background: "#0B1020",
        color: "rgba(255,255,255,0.72)",
      }}
    >
      {/* Grid background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(closest-side, black, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(closest-side, black, transparent 80%)",
        }}
      />

      <div className="container relative">
        {/* Top: 5 link columns */}
        <div className="footer-grid grid grid-cols-5 gap-8">
          {footerCols.map((c, i) => (
            <div key={i}>
              <ColHeading>{c.h}</ColHeading>
              <ColLinks links={c.links} />
              {c.sub && (
                <div className="mt-6">
                  <ColHeading>{c.sub.h}</ColHeading>
                  <ColLinks links={c.sub.links} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom: brand + get-in-touch */}
        <div className="footer-bottom mt-16 grid grid-cols-[1.2fr_1fr_1fr] gap-10 items-start pt-10 border-t border-white/10">
          {/* Brand block */}
          <div>
            <Image
              src="/images/logos/Dyrect-03 (3).png"
              alt="Dyrect"
              width={128}
              height={32}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-sm leading-relaxed text-white/65 max-w-[320px]">
              The most seamless warranty management software. Registration,
              claims, and protection plans — unified.
            </p>
            {/* Socials */}
            <div className="flex gap-2.5 mt-5">
              <Link
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/85 transition-colors hover:bg-white/20 hover:text-white"
              >
                <Linkedin className="w-4 h-4" strokeWidth={1.8} />
              </Link>
            </div>
          </div>

          {/* US office */}
          <div>
            <ColHeading>Get in touch &middot; US</ColHeading>
            <p className="m-0 text-sm leading-relaxed text-white/70">
              655 S Fair Oaks Ave,
              <br />
              Sunnyvale, CA 94086
            </p>
            <Link
              href="mailto:sales@dyrect.co"
              className="inline-block mt-3.5 text-sm font-medium text-[#A4AFFE]"
            >
              sales@dyrect.co
            </Link>
          </div>

          {/* India office */}
          <div>
            <ColHeading>Get in touch &middot; India</ColHeading>
            <p className="m-0 text-sm leading-relaxed text-white/70">
              <strong className="text-white font-semibold">
                Neuroone Solutions Pvt. Ltd.
              </strong>
              <br />
              A-805, Magnolia Apartment, Baner
              <br />
              Pashan Link Road, Pune — 411021
            </p>
            <Link
              href="tel:+919975470169"
              className="inline-block mt-3.5 text-sm font-medium text-[#A4AFFE]"
            >
              +91 9975470169
            </Link>
          </div>
        </div>

        {/* Legal bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex justify-between items-center text-[13px] text-white/50 gap-4 flex-wrap">
          <div>
            &copy; 2026 Dyrect (Neuroone Solutions Pvt. Ltd.). All rights
            reserved.
          </div>
          <div className="flex gap-5">
            {["Privacy", "Terms", "Security", "Status"].map((t) => (
              <Link
                key={t}
                href="#"
                className="text-inherit transition-colors hover:text-white"
              >
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
