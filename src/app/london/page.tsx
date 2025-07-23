"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";

// Type definitions
interface NavItem {
  label: string;
  href: string;
}

interface Breadcrumb {
  label: string;
  href?: string;
}

interface Service {
  icon: string;
  title: string;
  desc: string;
  detailsTitle: string;
  details: string[];
}

interface Heritage {
  title: string;
  desc: string;
}

interface Testimonial {
  text: string;
  author: string;
  location: string;
}

interface Contact {
  title: string;
  lines: string[];
}

interface Schema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    "@type": string;
    latitude: string;
    longitude: string;
  };
  areaServed: string[];
  serviceType: string[];
  priceRange: string;
}

interface Content {
  lang: string;
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  schema: Schema;
  nav: NavItem[];
  breadcrumbs: Breadcrumb[];
  locationBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  heroCall: string;
  servicesTitle: string;
  services: Service[];
  heritageTitle: string;
  heritage: Heritage[];
  testimonialsTitle: string;
  testimonials: Testimonial[];
  contactTitle: string;
  contact: Contact[];
  email: string;
  arrange: string;
  langToggle: string;
}

const EN: Content = {
  lang: "en-GB",
  title: "Luxury Concierge Services London | Conquerse Executive Travel UK",
  description:
    "Bespoke luxury concierge services in London. Private clubs, cultural experiences, executive travel. Conquerse serves Britain's most discerning clientele.",
  keywords:
    "luxury concierge London, private clubs UK, executive travel London, VIP concierge services, cultural experiences London",
  canonical: "https://conquerse.com/en-uk/london",
  ogTitle: "Luxury Concierge Services London | Conquerse Executive Travel",
  ogDescription:
    "Bespoke luxury concierge services in London. Private clubs, cultural experiences, executive travel for Britain's elite.",
  ogUrl: "https://conquerse.com/en-uk/london",
  schema: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Conquerse London",
    description: "Luxury concierge services in London, United Kingdom",
    url: "https://conquerse.com/en-uk/london",
    telephone: "+44-20-7123-0000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "25 Old Bond Street, 3rd Floor",
      addressLocality: "London",
      addressRegion: "England",
      postalCode: "W1S 4QB",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "51.5074",
      longitude: "-0.1278",
    },
    areaServed: [
      "London",
      "Greater London",
      "Home Counties",
      "United Kingdom",
    ],
    serviceType: [
      "Luxury Concierge",
      "Cultural Experiences",
      "Private Club Access",
      "Executive Travel",
    ],
    priceRange: "$$$$$",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#products" },
    { label: "Destinations", href: "/#destinations" },
    { label: "For Business", href: "/#business" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#support" },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Destinations", href: "/#destinations" },
    { label: "London" },
  ],
  locationBadge: "🏰 London, United Kingdom",
  heroTitle: "Quintessentially British Excellence",
  heroSubtitle:
    "From Mayfair to the City, Conquerse provides bespoke concierge services that honour British tradition whilst embracing modern luxury.",
  heroCta: "Arrange Meeting",
  heroCall: "Ring: +44 20 7123 0000",
  servicesTitle: "Bespoke London Services",
  services: [
    {
      icon: "🎭",
      title: "Cultural Curation",
      desc:
        "Private access to Britain's most treasured cultural institutions, from the Royal Opera House to exclusive museum viewings.",
      detailsTitle: "London Exclusive:",
      details: [
        "Royal Opera House Royal Box",
        "Private Tower of London tours",
        "After-hours British Museum access",
      ],
    },
    {
      icon: "🏛️",
      title: "Private Club Access",
      desc:
        "Membership privileges at London's most prestigious gentlemen's clubs and exclusive dining establishments.",
      detailsTitle: "Club Portfolio:",
      details: [
        "White's Club guest privileges",
        "Annabel's member access",
        "Royal Automobile Club facilities",
      ],
    },
    {
      icon: "🏨",
      title: "Heritage Accommodations",
      desc:
        "Exclusive stays in London's most distinguished hotels and private residences, from Belgravia townhouses to Mayfair penthouses.",
      detailsTitle: "Accommodation Access:",
      details: [
        "Claridge's penthouse suites",
        "Private Belgravia residences",
        "Historic country estate access",
      ],
    },
    {
      icon: "🎩",
      title: "Royal & State Events",
      desc:
        "Access to Royal Ascot, Wimbledon Centre Court, and other quintessentially British social events.",
      detailsTitle: "Event Access:",
      details: [
        "Royal Enclosure at Ascot",
        "Centre Court Wimbledon",
        "State banquet invitations",
      ],
    },
    {
      icon: "🚁",
      title: "Executive Transport",
      desc:
        "Sophisticated transport solutions including private helicopter transfers and chauffeur services with the finest British vehicles.",
      detailsTitle: "Transport Excellence:",
      details: [
        "Rolls-Royce chauffeur service",
        "Private helicopter to countryside",
        "Exclusive Thames river transport",
      ],
    },
    {
      icon: "🍽️",
      title: "Culinary Experiences",
      desc:
        "Private dining at Michelin-starred establishments and exclusive access to London's most coveted restaurant experiences.",
      detailsTitle: "Dining Privileges:",
      details: [
        "Private chef's table experiences",
        "Historic venue private dinners",
        "Exclusive wine cellar access",
      ],
    },
  ],
  heritageTitle: "Our London Heritage",
  heritage: [
    {
      title: "Established Connections",
      desc:
        "Three generations of relationships with London's most distinguished families, institutions, and cultural establishments.",
    },
    {
      title: "Royal Warrants",
      desc:
        "Partnerships with Royal Warrant holders ensuring the highest standards of British craftsmanship and service.",
    },
    {
      title: "Cultural Expertise",
      desc:
        "Deep knowledge of British heritage, from medieval history to contemporary arts, ensuring authentic cultural experiences.",
    },
    {
      title: "Discretion & Protocol",
      desc:
        "Understanding of British social protocol and aristocratic discretion, essential for high-profile clientele.",
    },
  ],
  testimonialsTitle: "Distinguished Voices",
  testimonials: [
    {
      text:
        '"Conquerse\'s understanding of British protocol is impeccable. They arrange experiences that even we couldn\'t access independently."',
      author: "Lord Pemberton",
      location: "House of Lords, Westminster",
    },
    {
      text:
        '"For our annual London cultural season, Conquerse curates experiences that showcase the very best of British heritage with modern sophistication."',
      author: "Catherine Windsor-Smith",
      location: "Cultural Foundation, Kensington",
    },
    {
      text:
        '"The level of cultural knowledge and institutional access Conquerse provides is simply unmatched in London\'s concierge industry."',
      author: "Sir James Rothschild",
      location: "Private Banking, City of London",
    },
    {
      text:
        '"When hosting international clients in London, Conquerse ensures they experience Britain at its most refined and authentic."',
      author: "Victoria Harrington",
      location: "Managing Partner, Mayfair Capital",
    },
  ],
  contactTitle: "Connect with Conquerse London",
  contact: [
    {
      title: "Mayfair Office",
      lines: [
        "25 Old Bond Street, 3rd Floor",
        "London, W1S 4QB",
        "By appointment only",
      ],
    },
    {
      title: "24/7 Concierge",
      lines: [
        "Phone: +44 20 7123 0000",
        "WhatsApp: Available",
        "Signal: Secure communications",
      ],
    },
    {
      title: "Emergency Services",
      lines: [
        "24/7 emergency hotline",
        "Medical transport coordination",
        "Security incident response",
        "Always available",
      ],
    },
  ],
  email: "Email London Team",
  arrange: "Schedule Consultation",
  langToggle: "UK",
};

const LANGS: Record<string, Content> = { en: EN };

export default function LondonPage() {
  const [lang, setLang] = useState("en");
  const t = LANGS[lang];

  // Animate service cards on scroll
  useEffect(() => {
    if (typeof window === "undefined") return;
    const cards = document.querySelectorAll(".service-card");
    cards.forEach((card) => {
      (card as HTMLElement).style.opacity = "0";
      (card as HTMLElement).style.transform = "translateY(30px)";
      (card as HTMLElement).style.transition = "opacity 0.6s, transform 0.6s";
    });
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              (entry.target as HTMLElement).style.opacity = "1";
              (entry.target as HTMLElement).style.transform = "translateY(0)";
            }, idx * 100);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [lang]);

  // Smooth scroll for anchor links
  useEffect(() => {
    if (typeof window === "undefined") return;
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handler = (e: Event) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (href) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };
    anchors.forEach((a) => a.addEventListener("click", handler));
    return () => anchors.forEach((a) => a.removeEventListener("click", handler));
  }, [lang]);

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <meta name="keywords" content={t.keywords} />
        <link rel="canonical" href={t.canonical} />
        <meta property="og:title" content={t.ogTitle} />
        <meta property="og:description" content={t.ogDescription} />
        <meta property="og:url" content={t.ogUrl} />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(t.schema) }}
        />
        <html lang={t.lang} />
      </Head>
      {/* Header */}
      <header className="header fixed top-0 w-full z-[1000] bg-black/95 backdrop-blur border-b border-[rgba(212,175,55,0.2)]">
        <nav className="nav flex justify-between items-center px-8 py-4">
          <a href="/" className="logo text-3xl font-bold text-[#D4AF37] tracking-widest no-underline">Conquerse</a>
          <ul className="nav-links flex gap-8 items-center list-none max-md:hidden">
            {t.nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[#FAFAFA] no-underline text-sm tracking-wide transition-colors duration-300 hover:text-[#D4AF37]"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button
                aria-label="Language toggle"
                className="ml-4 px-4 py-2 rounded-full border border-[#D4AF37] text-[#D4AF37] bg-transparent hover:bg-[#D4AF37] hover:text-black transition-colors duration-300"
                onClick={() => setLang(lang === "en" ? "en" : "en")}
                disabled
              >
                {t.langToggle}
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {/* Breadcrumbs */}
      <section className="breadcrumbs bg-[#2A2A2A] pt-20 pb-4 border-b border-[rgba(212,175,55,0.1)]">
        <div className="container max-w-[1400px] mx-auto px-8">
          <nav className="breadcrumb-nav text-[#8B8B8B] text-sm">
            {t.breadcrumbs.map((b, i) =>
              b.href ? (
                <React.Fragment key={b.label}>
                  <a
                    href={b.href}
                    className="text-[#8B8B8B] hover:text-[#D4AF37] transition-colors"
                  >
                    {b.label}
                  </a>
                  {i < t.breadcrumbs.length - 1 && <span className="mx-1">&gt;</span>}
                </React.Fragment>
              ) : (
                <span key={b.label} className="text-[#D4AF37]">{b.label}</span>
              )
            )}
          </nav>
        </div>
      </section>
      {/* Hero Section */}
      <section
        className="hero bg-cover bg-center text-center py-32"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,71,171,0.3)), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 800\"><rect width=\"1200\" height=\"800\" fill=\"%23001122\"/><path d=\"M0,400 L300,350 L600,380 L900,340 L1200,360 L1200,800 L0,800 Z\" fill=\"%23002244\" opacity=\"0.5\"/><rect x=\"100\" y=\"200\" width=\"80\" height=\"200\" fill=\"%23FFD700\" opacity=\"0.3\"/><rect x=\"300\" y=\"150\" width=\"60\" height=\"250\" fill=\"%23FFD700\" opacity=\"0.2\"/><rect x=\"500\" y=\"100\" width=\"100\" height=\"300\" fill=\"%23FFD700\" opacity=\"0.4\"/><rect x=\"800\" y=\"180\" width=\"70\" height=\"220\" fill=\"%23FFD700\" opacity=\"0.3\"/><text x=\"600\" y=\"500\" text-anchor=\"middle\" fill=\"%23ffffff\" font-size=\"40\" opacity=\"0.1\">LONDON</text></svg>')",
        }}
      >
        <div className="container max-w-[1400px] mx-auto px-8">
          <div className="location-badge inline-block bg-[rgba(212,175,55,0.2)] border border-[#D4AF37] text-[#D4AF37] px-6 py-2 rounded-full text-sm tracking-wide mb-8">
            {t.locationBadge}
          </div>
          <h1 className="text-[clamp(3rem,8vw,5rem)] font-light mb-6 tracking-wide bg-gradient-to-br from-[#FAFAFA] to-[#D4AF37] bg-clip-text text-transparent">
            {t.heroTitle}
          </h1>
          <p className="hero-subtitle text-[#8B8B8B] text-xl max-w-2xl mx-auto mb-12">
            {t.heroSubtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="btn-primary bg-[#D4AF37] text-black px-8 py-4 rounded-full text-lg font-semibold tracking-wide no-underline transition-all duration-400 hover:bg-[#F4D03F] hover:-translate-y-0.5 shadow-lg"
            >
              {t.heroCta}
            </a>
            <a
              href="tel:+442071230000"
              className="btn-secondary bg-transparent text-[#FAFAFA] border-2 border-[#FAFAFA] px-8 py-4 rounded-full text-lg tracking-wide no-underline transition-all duration-400 hover:bg-[#FAFAFA] hover:text-black hover:-translate-y-0.5"
            >
              {t.heroCall}
            </a>
          </div>
        </div>
      </section>
      {/* London Services */}
      <section className="london-services bg-[#2A2A2A] py-32">
        <div className="container max-w-[1400px] mx-auto px-8">
          <h2 className="section-title text-center text-[clamp(2.5rem,5vw,4rem)] font-light mb-16 text-[#D4AF37] tracking-wide">
            {t.servicesTitle}
          </h2>
          <div className="services-grid grid gap-12 md:grid-cols-2 lg:grid-cols-3 mt-16">
            {t.services.map((s, i) => (
              <div
                className="service-card bg-white/5 border border-[rgba(212,175,55,0.2)] rounded-2xl p-12 text-left transition-all duration-400"
                key={s.title}
              >
                <div className="service-icon text-4xl mb-6">{s.icon}</div>
                <h3 className="service-title text-2xl font-semibold mb-4 text-[#FAFAFA]">
                  {s.title}
                </h3>
                <p className="service-description text-[#8B8B8B] mb-6">
                  {s.desc}
                </p>
                <div className="london-specific bg-[#0047AB]/10 border-l-4 border-[#0047AB] p-4 rounded-lg mt-4">
                  <h4 className="text-[#0047AB] mb-2 font-semibold">{s.detailsTitle}</h4>
                  <ul className="list-disc pl-6 text-[#8B8B8B]">
                    {s.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* London Heritage */}
      <section className="london-heritage bg-black py-32">
        <div className="container max-w-[1400px] mx-auto px-8">
          <h2 className="section-title text-center text-[clamp(2.5rem,5vw,4rem)] font-light mb-16 text-[#D4AF37] tracking-wide">
            {t.heritageTitle}
          </h2>
          <div className="heritage-grid grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {t.heritage.map((p) => (
              <div className="heritage-item text-center p-8" key={p.title}>
                <h3 className="text-[#D4AF37] mb-4 text-lg font-semibold">{p.title}</h3>
                <p className="text-[#8B8B8B]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* London Testimonials */}
      <section className="london-testimonials bg-[#2A2A2A] py-32">
        <div className="container max-w-[1400px] mx-auto px-8">
          <h2 className="section-title text-center text-[clamp(2.5rem,5vw,4rem)] font-light mb-16 text-[#D4AF37] tracking-wide">
            {t.testimonialsTitle}
          </h2>
          <div className="testimonial-grid grid gap-12 md:grid-cols-2">
            {t.testimonials.map((testi, i) => (
              <div
                className="testimonial-card bg-white/5 rounded-2xl p-12 border border-[rgba(212,175,55,0.1)]"
                key={i}
              >
                <p className="testimonial-text text-lg italic mb-8 text-[#FAFAFA]">
                  {testi.text}
                </p>
                <p className="testimonial-author text-[#D4AF37] font-semibold">
                  {testi.author}
                </p>
                <p className="testimonial-location text-[#8B8B8B] text-sm mt-2">
                  {testi.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact London */}
      <section className="contact-london bg-black py-32" id="contact">
        <div className="container max-w-[1400px] mx-auto px-8">
          <h2 className="section-title text-center text-[clamp(2.5rem,5vw,4rem)] font-light mb-16 text-[#D4AF37] tracking-wide">
            {t.contactTitle}
          </h2>
          <div className="contact-info grid gap-12 md:grid-cols-2 lg:grid-cols-3 mt-16">
            {t.contact.map((c, i) => (
              <div
                className="contact-card bg-white/5 rounded-2xl p-12 text-center border border-[rgba(212,175,55,0.2)]"
                key={c.title}
              >
                <h4 className="text-[#D4AF37] mb-4 text-xl font-semibold">{c.title}</h4>
                {c.lines.map((line, idx) => (
                  <p key={idx} className="text-[#8B8B8B] mt-2">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div className="text-center mt-16 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:london@conquerse.com"
              className="btn-primary bg-[#D4AF37] text-black px-8 py-4 rounded-full text-lg font-semibold tracking-wide no-underline transition-all duration-400 hover:bg-[#F4D03F] hover:-translate-y-0.5 shadow-lg"
            >
              {t.email}
            </a>
            <a
              href="#"
              className="btn-secondary bg-transparent text-[#FAFAFA] border-2 border-[#FAFAFA] px-8 py-4 rounded-full text-lg tracking-wide no-underline transition-all duration-400 hover:bg-[#FAFAFA] hover:text-black hover:-translate-y-0.5"
            >
              {t.arrange}
            </a>
          </div>
        </div>
      </section>
      <style jsx global>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </>
  );
} 