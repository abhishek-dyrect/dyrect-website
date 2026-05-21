const stats = [
  {
    value: "4M+",
    label: "Customers served",
    sub: "across registrations and claims",
  },
  {
    value: "500+",
    label: "Brands running on Dyrect",
    sub: "DTC, retail, and manufacturers",
  },
  {
    value: "3x",
    label: "Higher attach rate",
    sub: "on extended warranty programs",
  },
  {
    value: "<30m",
    label: "Time to go live",
    sub: "with the Shopify app",
  },
];

export function Stats() {
  return (
    <section
      className="section-tight relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0F172A 0%, #1A23A8 100%)",
        color: "white",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none grid-bg-dark"
      />
      <div className="container relative">
        <div
          className="stats-grid grid items-start gap-8"
          style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="border-l border-white/15 pl-6"
            >
              <div
                className="font-sans font-semibold leading-none tracking-tight text-white"
                style={{ fontSize: "clamp(40px, 5vw, 56px)", letterSpacing: "-2px" }}
              >
                {s.value}
              </div>
              <div className="mt-2.5 text-[15px] font-medium text-white">
                {s.label}
              </div>
              <div className="mt-1 text-[13px] text-white/55">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
