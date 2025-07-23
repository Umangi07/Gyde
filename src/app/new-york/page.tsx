"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";

const EN = {
  lang: "en-US",
  title: "Luxury Travel Concierge New York | Conquerse Executive Services NYC",
  description:
    "Premium travel concierge services in New York City. Private jets, executive security, luxury accommodations. Conquerse serves Manhattan's most discerning executives.",
  keywords:
    "luxury travel concierge New York, private jet NYC, executive travel Manhattan, VIP concierge services, corporate travel NYC",
  canonical: "https://conquerse.com/en-us/new-york",
  ogTitle: "Luxury Travel Concierge New York | Conquerse Executive Services",
  ogDescription:
    "Premium travel concierge services in New York City. Private jets, executive security, luxury accommodations for Manhattan's elite.",
  ogUrl: "https://conquerse.com/en-us/new-york",
  schema: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Conquerse New York",
    description: "Luxury travel concierge services in New York City",
    url: "https://conquerse.com/en-us/new-york",
    telephone: "+1-212-555-0000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "432 Park Avenue, Suite 4800",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10016",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "40.7589",
      longitude: "-73.9851",
    },
    areaServed: [
      "Manhattan",
      "Brooklyn",
      "Queens",
      "Bronx",
      "Staten Island",
      "Westchester",
      "Long Island",
      "New Jersey",
    ],
    serviceType: [
      "Luxury Travel Concierge",
      "Private Jet Charter",
      "Executive Security",
      "Corporate Travel Management",
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
    { label: "New York" },
  ],
  locationBadge: "🗽 New York City",
  heroTitle: "Your Executive Command Center",
  heroSubtitle:
    "In the city that never sleeps, Conquerse ensures your travel never misses a beat. Premium concierge services for Manhattan's most demanding executives.",
  heroCta: "Book Consultation",
  heroCall: "Call: (212) 555-0000",
  servicesTitle: "Manhattan's Premium Services",
  services: [
    {
      icon: "✈️",
      title: "Private Aviation",
      desc:
        "Seamless access to Teterboro, Westchester, and Long Island private terminals. Skip JFK delays with our executive aviation network.",
      detailsTitle: "NYC Exclusive:",
      details: [
        "Manhattan helipad transfers",
        "Private terminal at Teterboro",
        "Direct connections to Hamptons",
      ],
    },
    {
      icon: "🚗",
      title: "Executive Security Transport",
      desc:
        "Armored vehicles and executive protection for high-profile movements through Manhattan, Brooklyn, and the tri-state area.",
      detailsTitle: "NYC Expertise:",
      details: [
        "Wall Street security protocols",
        "UN General Assembly logistics",
        "Madison Avenue discrete transport",
      ],
    },
    {
      icon: "🏨",
      title: "Ultra-Luxury Accommodations",
      desc:
        "Exclusive access to Manhattan's most prestigious hotels and private residences, from Central Park penthouses to Financial District suites.",
      detailsTitle: "NYC Portfolio:",
      details: [
        "Private floors at The Plaza",
        "Central Park penthouse access",
        "Exclusive SoHo loft experiences",
      ],
    },
    {
      icon: "🎭",
      title: "Cultural & Entertainment Access",
      desc:
        "Private boxes at Lincoln Center, exclusive restaurant reservations, and backstage access to Broadway's hottest shows.",
      detailsTitle: "NYC Connections:",
      details: [
        "Met Opera private boxes",
        "Chef's table at Le Bernardin",
        "Private Yankee Stadium suites",
      ],
    },
    {
      icon: "💼",
      title: "Corporate Event Management",
      desc:
        "Seamless corporate events from Wall Street boardrooms to Midtown galas, with complete logistics and security coordination.",
      detailsTitle: "NYC Venues:",
      details: [
        "Top of the Rock private events",
        "NYSE boardroom access",
        "Brooklyn Bridge exclusive dinners",
      ],
    },
    {
      icon: "🏥",
      title: "Executive Health & Wellness",
      desc:
        "Priority access to Manhattan's top medical facilities and wellness centers, with discrete health concierge services.",
      detailsTitle: "NYC Medical:",
      details: [
        "Mount Sinai VIP services",
        "Private medical transport",
        "Executive health screening",
      ],
    },
  ],
  expertiseTitle: "Why Conquerse Knows New York",
  expertise: [
    {
      title: "Manhattan Native Team",
      desc:
        "Our NYC concierge team has lived and worked in Manhattan for decades, with insider access to the city's most exclusive venues and services.",
    },
    {
      title: "Wall Street Connections",
      desc:
        "Deep relationships with Financial District institutions, ensuring seamless corporate travel and business entertainment for Fortune 500 executives.",
    },
    {
      title: "Security Expertise",
      desc:
        "Former NYPD and executive protection specialists on staff, understanding the unique security considerations of high-profile NYC travel.",
    },
    {
      title: "Cultural Curation",
      desc:
        "Exclusive partnerships with Lincoln Center, MoMA, and Broadway theaters provide access to New York's most coveted cultural experiences.",
    },
  ],
  testimonialsTitle: "Manhattan Voices",
  testimonials: [
    {
      text:
        '"Conquerse transformed our quarterly board meetings from logistical nightmares into seamless experiences. Their Wall Street expertise is unmatched."',
      author: "Michael Chen",
      location: "Managing Director, Goldman Sachs",
    },
    {
      text:
        '"From Teterboro pickups to Central Park penthouse stays, Conquerse handles every detail with the discretion our family requires."',
      author: "Sarah Rothschild",
      location: "Private Family Office, Upper East Side",
    },
    {
      text:
        '"When we\'re filming in Manhattan, Conquerse ensures our talent gets the VIP treatment they expect. True professionals."',
      author: "David Rodriguez",
      location: "Executive Producer, Netflix Originals",
    },
    {
      text:
        '"Our IPO roadshow required military precision. Conquerse\'s Manhattan team delivered flawlessly across 12 investor meetings."',
      author: "Jennifer Park",
      location: "CFO, TechCorp Industries",
    },
  ],
  contactTitle: "Connect with Conquerse New York",
  contact: [
    {
      title: "Manhattan Office",
      lines: [
        "432 Park Avenue, Suite 4800",
        "New York, NY 10016",
        "By appointment only",
      ],
    },
    {
      title: "24/7 Concierge",
      lines: [
        "Phone: (212) 555-0000",
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
  email: "Email NYC Team",
  arrange: "Schedule Consultation",
  langToggle: "US",
};

const LANGS = { en: EN };

export default function NewYorkPage() {
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

  // Header scroll effect
  useEffect(() => {
    if (typeof window === "undefined") return;
    const header = document.querySelector(".header");
    const onScroll = () => {
      if (!header) return;
      (header as HTMLElement).style.background =
        window.scrollY > 100 ? "rgba(0,0,0,0.98)" : "rgba(0,0,0,0.95)";
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <header className="header fixed top-0 w-full z-[1000] bg-black/95 backdrop-blur border-b border-[rgba(212,175,55,0.2)] transition-all duration-300">
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
                <>
                  <a
                    key={b.label}
                    href={b.href}
                    className="text-[#8B8B8B] hover:text-[#D4AF37] transition-colors"
                  >
                    {b.label}
                  </a>
                  {i < t.breadcrumbs.length - 1 && <span className="mx-1">&gt;</span>}
                </>
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
            "linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,71,171,0.3)), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 800\"><rect width=\"1200\" height=\"800\" fill=\"%23001122\"/><path d=\"M0,400 L300,350 L600,380 L900,340 L1200,360 L1200,800 L0,800 Z\" fill=\"%23002244\" opacity=\"0.5\"/><rect x=\"100\" y=\"200\" width=\"80\" height=\"200\" fill=\"%23FFD700\" opacity=\"0.3\"/><rect x=\"300\" y=\"150\" width=\"60\" height=\"250\" fill=\"%23FFD700\" opacity=\"0.2\"/><rect x=\"500\" y=\"100\" width=\"100\" height=\"300\" fill=\"%23FFD700\" opacity=\"0.4\"/><rect x=\"800\" y=\"180\" width=\"70\" height=\"220\" fill=\"%23FFD700\" opacity=\"0.3\"/><text x=\"600\" y=\"500\" text-anchor=\"middle\" fill=\"%23ffffff\" font-size=\"40\" opacity=\"0.1\">NYC SKYLINE</text></svg>')",
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
              href="tel:+12125559933"
              className="btn-secondary bg-transparent text-[#FAFAFA] border-2 border-[#FAFAFA] px-8 py-4 rounded-full text-lg tracking-wide no-underline transition-all duration-400 hover:bg-[#FAFAFA] hover:text-black hover:-translate-y-0.5"
            >
              {t.heroCall}
            </a>
          </div>
        </div>
      </section>
      {/* NYC Services */}
      <section className="nyc-services bg-[#2A2A2A] py-32">
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
                <div className="nyc-specific bg-[#0047AB]/10 border-l-4 border-[#0047AB] p-4 rounded-lg mt-4">
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
      {/* Local Expertise */}
      <section className="local-expertise bg-black py-32">
        <div className="container max-w-[1400px] mx-auto px-8">
          <h2 className="section-title text-center text-[clamp(2.5rem,5vw,4rem)] font-light mb-16 text-[#D4AF37] tracking-wide">
            {t.expertiseTitle}
          </h2>
          <div className="expertise-grid grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {t.expertise.map((p) => (
              <div className="expertise-item text-center p-8" key={p.title}>
                <h3 className="text-[#D4AF37] mb-4 text-lg font-semibold">{p.title}</h3>
                <p className="text-[#8B8B8B]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* NYC Testimonials */}
      <section className="nyc-testimonials bg-[#2A2A2A] py-32">
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
      {/* Contact NYC */}
      <section className="contact-nyc bg-black py-32" id="contact">
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
              href="mailto:newyork@conquerse.com"
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