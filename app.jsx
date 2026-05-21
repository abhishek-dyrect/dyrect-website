/* global React, ReactDOM, Hero, LogoCloud, PlatformOverview, Products, Personas, Capabilities, Stats, Testimonials, ShopifySection, Integrations, BlogSection, FAQ, FinalCTA, SiteFooter, TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakSelect, TweakToggle, TweakColor */
const { useEffect, useState, useRef } = React;

/* ───────────── Nav data ───────────── */
const NAV_ITEMS = [
  {
    label: 'Products', menu: 'products',
    content: {
      type: 'two-col',
      left: {
        heading: 'Products',
        items: [
          { icon: 'file', name: 'Product Registration Software', desc: 'Provide omni-channel, delightful experience at scale.' },
          { icon: 'shield', name: 'Warranty Management Software', desc: 'Save costs, reduce overheads with faster, accurate claims processing.' },
          { icon: 'badge', name: 'Extended Warranties', desc: 'Offer protection plans across more touchpoints. Keep 100% of revenue in-house.' },
        ],
      },
      right: {
        heading: 'Features',
        items: [
          'No-code Experience Builder',
          'Claims Ticket Management',
          'Digital Warranty Card',
          'Product Serialization',
          'Digitize Product Manuals & Guides',
          'Powerful Form Builder',
        ],
        cta: 'See more features',
      },
    },
  },
  {
    label: 'Solutions', menu: 'solutions',
    content: {
      type: 'grid-2',
      heading: 'Industry',
      items: [
        'Electronics', 'Outdoors & Recreation',
        'Baby Gear', 'Beauty and Personal Care',
        'Mobile Accessories', 'Household Appliances',
        'T.V, Audio and Video', 'Exercise and Fitness',
        'Furniture', 'Smart Home and Network',
        'Cycling', 'Automotive',
      ],
    },
  },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Pricing', href: '#pricing' },
  {
    label: 'Resources', menu: 'resources',
    content: {
      type: 'simple-list',
      items: [
        { label: 'Help Center', href: '#' },
        { label: 'Blogs', href: '#' },
        { label: 'Integrations', href: '#integrations' },
        { label: 'Client Success Stories', href: '#' },
        { label: 'How it Works', href: '#' },
        { label: "FAQ's", href: '#faq' },
      ],
    },
  },
  {
    label: 'Free Tools', menu: 'free-tools',
    content: {
      type: 'simple-list',
      items: [
        { label: 'Brand Warranties', href: '#' },
        { label: 'Bulk QR Code Generator', href: '#' },
        { label: 'Serial Number Generator', href: '#' },
        { label: 'Warranty Cost Calculator', href: '#' },
      ],
    },
  },
];

/* Icon component for the Products column */
function NavIcon({ name }) {
  const paths = {
    file:   <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></>,
    badge:  <><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M19.6 4.4a9 9 0 0 0-15.2 0L12 22l7.6-17.6z"/></>,
  };
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

/* ───────────── Mega-menu panel ───────────── */
function NavPanel({ content, onClose }) {
  return (
    <div
      onMouseEnter={(e) => e.stopPropagation()}
      style={{
        position: 'absolute', top: 'calc(100% + 4px)',
        background: 'white',
        border: '1px solid var(--border-default)',
        borderRadius: 14,
        boxShadow: '0 24px 60px -12px rgba(15,23,42,0.18), 0 6px 18px -4px rgba(15,23,42,0.06)',
        padding: 28,
        zIndex: 60,
      }}>
      {content.type === 'two-col' && <NavTwoCol content={content} />}
      {content.type === 'grid-2' && <NavGrid content={content} />}
      {content.type === 'simple-list' && <NavSimpleList content={content} />}
    </div>
  );
}

function NavTwoCol({ content }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'minmax(360px, 420px) 1px 240px',
      gap: 32, minWidth: 720,
    }}>
      <div>
        <div style={{ fontSize: 11, fontWeight: 600, color: '#94A3B8', letterSpacing: 1.4, textTransform: 'uppercase', marginBottom: 16 }}>{content.left.heading}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {content.left.items.map((it, i) => (
            <a key={i} href="#" style={{
              display: 'flex', gap: 14, padding: '12px',
              borderRadius: 10, alignItems: 'flex-start',
              transition: 'background 160ms',
            }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-slate-50)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
              <span style={{
                width: 36, height: 36, borderRadius: 8,
                background: 'var(--color-brand-blue-subtle)',
                color: 'var(--color-brand-blue)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <NavIcon name={it.icon} />
              </span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#0F172A' }}>{it.name}</div>
                <div style={{ fontSize: 12.5, color: '#64748B', marginTop: 2, lineHeight: 1.4 }}>{it.desc}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div style={{ background: 'var(--color-slate-200)' }} />
      <div>
        <div style={{ fontSize: 11, fontWeight: 600, color: '#94A3B8', letterSpacing: 1.4, textTransform: 'uppercase', marginBottom: 16 }}>{content.right.heading}</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {content.right.items.map((it, i) => (
            <a key={i} href="#" style={{
              padding: '8px 10px', borderRadius: 6,
              fontSize: 14, fontWeight: 500, color: '#1E293B',
              transition: 'background 160ms',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-slate-50)'; e.currentTarget.style.color = 'var(--color-brand-blue)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1E293B'; }}>
              {it}
            </a>
          ))}
        </div>
        <a href="#" style={{
          display: 'inline-flex', alignItems: 'center', gap: 4,
          marginTop: 14, marginLeft: 10,
          fontSize: 13, fontWeight: 600, color: 'var(--color-brand-blue)',
        }}>
          {content.right.cta} &nbsp;›
        </a>
      </div>
    </div>
  );
}

function NavGrid({ content }) {
  return (
    <div style={{ minWidth: 540 }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        fontSize: 11, fontWeight: 600, color: '#94A3B8',
        letterSpacing: 1.4, textTransform: 'uppercase', marginBottom: 18,
      }}>
        <span style={{
          width: 22, height: 22, borderRadius: 6,
          background: 'var(--color-slate-100)', color: '#475569',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/>
            <path d="M9 9v0M9 12v0M9 15v0M9 18v0"/>
          </svg>
        </span>
        {content.heading}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 36, rowGap: 4 }}>
        {content.items.map((it, i) => (
          <a key={i} href="#" style={{
            padding: '9px 10px', borderRadius: 6,
            fontSize: 14, fontWeight: 500, color: '#1E293B',
            transition: 'all 160ms',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-slate-50)'; e.currentTarget.style.color = 'var(--color-brand-blue)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1E293B'; }}>
            {it}
          </a>
        ))}
      </div>
    </div>
  );
}

function NavSimpleList({ content }) {
  return (
    <div style={{ minWidth: 220, display: 'flex', flexDirection: 'column' }}>
      {content.items.map((it, i) => (
        <a key={i} href={it.href} style={{
          padding: '10px 12px', borderRadius: 6,
          fontSize: 14, fontWeight: 500, color: '#1E293B',
          transition: 'all 160ms',
          whiteSpace: 'nowrap',
        }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-slate-50)'; e.currentTarget.style.color = 'var(--color-brand-blue)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1E293B'; }}>
          {it.label}
        </a>
      ))}
    </div>
  );
}

/* ───────────── Nav (static, not sticky) ───────────── */
function SiteNav() {
  const [openMenu, setOpenMenu] = useState(null);
  // Defer hide so cursor can travel from trigger to panel without it closing
  const hideTimer = useRef(null);
  const show = (key) => {
    clearTimeout(hideTimer.current);
    setOpenMenu(key);
  };
  const scheduleHide = () => {
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

  return (
    <header style={{
      position: 'relative', zIndex: 50,
      background: 'white',
      borderBottom: '1px solid var(--border-default)',
    }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', gap: 24,
        padding: '14px 24px',
      }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img src="assets/logo-blue-wordmark.png" alt="Dyrect" style={{ height: 28 }} />
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4, position: 'relative' }} className="nav-links">
          {NAV_ITEMS.map((item) => {
            const isOpen = openMenu === item.menu;
            const hasMenu = !!item.menu;
            return (
              <div key={item.label}
                onMouseEnter={() => hasMenu && show(item.menu)}
                onMouseLeave={() => hasMenu && scheduleHide()}
                style={{ position: 'relative' }}>
                <a href={item.href || '#'} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 4,
                  padding: '10px 14px', borderRadius: 6,
                  fontSize: 14.5, fontWeight: 500,
                  color: isOpen ? 'var(--color-brand-blue)' : '#1E293B',
                  position: 'relative',
                  transition: 'color 160ms',
                }}>
                  {item.label}
                  {hasMenu && (
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 180ms ease', marginTop: 1 }}>
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  )}
                  {isOpen && (
                    <span style={{
                      position: 'absolute', left: 14, right: 14, bottom: 2,
                      height: 2, background: 'var(--color-brand-blue)', borderRadius: 2,
                    }} />
                  )}
                </a>
                {isOpen && hasMenu && (
                  <div
                    onMouseEnter={() => show(item.menu)}
                    onMouseLeave={scheduleHide}>
                    <NavPanel content={item.content} />
                  </div>
                )}
              </div>
            );
          })}
        </nav>
        <div style={{ flex: 1 }} />
        <a href="#demo" className="btn btn-primary" style={{ fontSize: 14, padding: '11px 18px', flexShrink: 0 }}>
          Book a Meeting
        </a>
      </div>
    </header>
  );
}

/* Reveal-on-scroll observer */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ───────────── App ───────────── */
function App() {
  const [tweaks, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  useReveal();

  // Apply density via CSS var
  useEffect(() => {
    document.documentElement.style.setProperty('--section-pad', tweaks.density === 'airy' ? '120px' : tweaks.density === 'compact' ? '64px' : '96px');
  }, [tweaks.density]);

  // Apply primary color
  useEffect(() => {
    document.documentElement.style.setProperty('--color-brand-blue', tweaks.primaryColor);
    // derive hover (darker) and subtle (lighter) crudely
    const hex = tweaks.primaryColor.replace('#', '');
    const r = parseInt(hex.slice(0,2),16), g=parseInt(hex.slice(2,4),16), b=parseInt(hex.slice(4,6),16);
    const dark = `rgb(${Math.max(0,r-22)}, ${Math.max(0,g-22)}, ${Math.max(0,b-22)})`;
    const deep = `rgb(${Math.max(0,r-50)}, ${Math.max(0,g-50)}, ${Math.max(0,b-50)})`;
    document.documentElement.style.setProperty('--color-brand-blue-hover', dark);
    document.documentElement.style.setProperty('--color-brand-blue-deep', deep);
    document.documentElement.style.setProperty('--color-brand-blue-subtle', `rgba(${r},${g},${b},0.07)`);
    document.documentElement.style.setProperty('--color-brand-blue-light', `rgba(${r},${g},${b},0.14)`);
  }, [tweaks.primaryColor]);

  return (
    <>
      <SiteNav />
      <main>
        <Hero variation={tweaks.heroVariation} />
        {tweaks.show_logos && <LogoCloud />}
        {tweaks.show_platform && <PlatformOverview />}
        {tweaks.show_products && <Products />}
        {tweaks.show_personas && <Personas />}
        {tweaks.show_capabilities && <Capabilities />}
        {tweaks.show_stats && <Stats />}
        {tweaks.show_testimonials && <Testimonials />}
        {tweaks.show_shopify && <ShopifySection />}
        {tweaks.show_integrations && <Integrations />}
        {tweaks.show_blog && <BlogSection />}
        {tweaks.show_faq && <FAQ />}
        {tweaks.show_cta && <FinalCTA />}
      </main>
      <SiteFooter />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Hero">
          <TweakRadio label="Layout"
            value={tweaks.heroVariation}
            onChange={(v) => setTweak('heroVariation', v)}
            options={[
              { value: 'stacked',  label: 'Stacked cards' },
              { value: 'centered', label: 'Centered' },
            ]} />
        </TweakSection>

        <TweakSection label="Style">
          <TweakColor label="Primary color"
            value={tweaks.primaryColor}
            onChange={(v) => setTweak('primaryColor', v)}
            options={['#2437F6', '#0F1FB8', '#7C3AED', '#0EA5E9']} />
          <TweakRadio label="Density"
            value={tweaks.density}
            onChange={(v) => setTweak('density', v)}
            options={[
              { value: 'compact', label: 'Compact' },
              { value: 'default', label: 'Default' },
              { value: 'airy',    label: 'Airy' },
            ]} />
        </TweakSection>

        <TweakSection label="Sections">
          <TweakToggle label="Logo cloud"     value={tweaks.show_logos}        onChange={(v)=>setTweak('show_logos', v)} />
          <TweakToggle label="Platform (Before / After)" value={tweaks.show_platform} onChange={(v)=>setTweak('show_platform', v)} />
          <TweakToggle label="Products tabs"  value={tweaks.show_products}     onChange={(v)=>setTweak('show_products', v)} />
          <TweakToggle label="Personas"       value={tweaks.show_personas}     onChange={(v)=>setTweak('show_personas', v)} />
          <TweakToggle label="Capabilities"   value={tweaks.show_capabilities} onChange={(v)=>setTweak('show_capabilities', v)} />
          <TweakToggle label="Stats banner"   value={tweaks.show_stats}        onChange={(v)=>setTweak('show_stats', v)} />
          <TweakToggle label="Testimonials"   value={tweaks.show_testimonials} onChange={(v)=>setTweak('show_testimonials', v)} />
          <TweakToggle label="Shopify"        value={tweaks.show_shopify}      onChange={(v)=>setTweak('show_shopify', v)} />
          <TweakToggle label="Integrations"   value={tweaks.show_integrations} onChange={(v)=>setTweak('show_integrations', v)} />
          <TweakToggle label="Blog"           value={tweaks.show_blog}         onChange={(v)=>setTweak('show_blog', v)} />
          <TweakToggle label="FAQ"            value={tweaks.show_faq}          onChange={(v)=>setTweak('show_faq', v)} />
          <TweakToggle label="Final CTA"      value={tweaks.show_cta}          onChange={(v)=>setTweak('show_cta', v)} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
