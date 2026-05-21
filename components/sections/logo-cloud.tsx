"use client";

import Image from "next/image";

const CUSTOMER_LOGOS = [
  { name: "Burton", src: "/images/logos/burton_snowboards_logo.jpeg", h: 36 },
  { name: "Briggs & Riley", src: "/images/logos/briggs-riley.jpeg", h: 22 },
  { name: "Dow", src: "/images/logos/dow-logo.png", h: 30 },
  { name: "JCB", src: "/images/logos/jcb-logo.png", h: 32 },
  { name: "Velotric", src: "/images/logos/velotric-logo.jpeg", h: 22 },
  { name: "Diggs", src: "/images/logos/diggs-pet-logo.png", h: 30 },
  { name: "Greens", src: "/images/logos/greens-tapware logo.png", h: 34 },
  { name: "GoMechanic", src: "/images/logos/go-mechanic-logo.png", h: 26 },
  { name: "R for Rabbit", src: "/images/logos/R_for_Rabbit_logo.png", h: 36 },
  { name: "Neemans", src: "/images/logos/neemans-logo.png", h: 26 },
  {
    name: "Clore Automotive",
    src: "/images/logos/Clore-Automotive-Logo.png",
    h: 28,
  },
  { name: "Aircon", src: "/images/logos/Aircon-logo.png", h: 28 },
  { name: "Keplin Group", src: "/images/logos/keplin logo.webp", h: 30 },
  { name: "Lacuna", src: "/images/logos/lacuna-logo.webp", h: 26 },
];

export function LogoCloud() {
  return (
    <section className="section-tight bg-white border-b border-[var(--slate-200)]">
      <div className="container">
        <div className="text-center mb-7">
          <p className="text-[13px] font-medium text-[var(--slate-500)] uppercase tracking-wider m-0">
            Trusted by 500+ brands globally
          </p>
        </div>
        <div
          className="logo-grid grid items-center justify-items-center gap-y-10 gap-x-6"
          style={{ gridTemplateColumns: "repeat(7, 1fr)" }}
        >
          {CUSTOMER_LOGOS.map((l) => (
            <Image
              key={l.name}
              src={l.src}
              alt={l.name}
              width={140}
              height={l.h}
              className="object-contain grayscale opacity-70 transition-all duration-200 hover:grayscale-0 hover:opacity-100"
              style={{ height: l.h, maxWidth: 140, width: "auto" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
