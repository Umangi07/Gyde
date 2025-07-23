"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useLanguage } from "../ClientLayout";

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

interface PhilosophyItem {
  title: string;
  desc: string;
}

interface Testimonial {
  text: string;
  author: string;
  location: string;
}

interface ContactCard {
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
  greeting: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  heroCall: string;
  servicesTitle: string;
  services: Service[];
  philosophyTitle: string;
  philosophy: PhilosophyItem[];
  testimonialsTitle: string;
  testimonials: Testimonial[];
  contactTitle: string;
  contact: ContactCard[];
  langToggle?: string;
  email?: string;
  arrange?: string;
}

const EN: Content = {
  lang: "en-JP",
  title: "Luxury Concierge Services Tokyo | Conquerse Executive Travel Japan",
  description:
    "Precision luxury concierge services in Tokyo. Omotenashi philosophy, cultural harmony, executive excellence. Conquerse serves Japan's most discerning clientele.",
  keywords:
    "luxury concierge Tokyo, omotenashi Japan, executive travel Tokyo, VIP concierge services Japan, cultural harmony",
  canonical: "https://conquerse.com/en-jp/tokyo",
  ogTitle: "Luxury Concierge Services Tokyo | Conquerse Executive Travel",
  ogDescription:
    "Precision luxury concierge services in Tokyo. Omotenashi philosophy, cultural harmony, executive excellence for Japan's elite.",
  ogUrl: "https://conquerse.com/en-jp/tokyo",
  schema: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Conquerse Tokyo",
    description: "Precision luxury concierge services in Tokyo, Japan",
    url: "https://conquerse.com/en-jp/tokyo",
    telephone: "+81-3-1234-0000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Marunouchi, Chiyoda-ku",
      addressLocality: "Tokyo",
      addressRegion: "Tokyo",
      postalCode: "100-0005",
      addressCountry: "JP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "35.6762",
      longitude: "139.6503",
    },
    areaServed: [
      "Tokyo",
      "Osaka",
      "Kyoto",
      "Yokohama",
      "Nagoya",
      "Sapporo",
      "Fukuoka",
    ],
    serviceType: [
      "Luxury Concierge",
      "Omotenashi Service",
      "Cultural Harmony",
      "Executive Excellence",
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
    { label: "Tokyo" },
  ],
  locationBadge: "🌸 Tokyo, Japan",
  greeting: "こんにちは | Konnichiwa",
  heroTitle: "Precision Meets Tradition",
  heroSubtitle:
    "In the heart of Japan's capital, Conquerse embodies the spirit of omotenashi—anticipating needs before they're expressed, delivering perfection with cultural harmony.",
  heroCta: "Arrange Consultation",
  heroCall: "Call: +81 3 1234 0000",
  servicesTitle: "Tokyo's Precision Services",
  services: [
    {
      icon: "🏯",
      title: "Traditional Ryokan Experiences",
      desc: "Exclusive access to Japan's most prestigious ryokan and traditional inns, from centuries-old establishments to modern interpretations of Japanese hospitality.",
      detailsTitle: "Ryokan Portfolio:",
      details: [
        "Private onsen experiences",
        "Traditional kaiseki dining",
        "Zen garden meditation",
        "Cultural performance access",
      ],
    },
    {
      icon: "🍣",
      title: "Culinary Excellence",
      desc: "Access to Tokyo's most exclusive dining experiences, from private omakase sessions with master chefs to exclusive restaurant openings.",
      detailsTitle: "Culinary Access:",
      details: [
        "Private omakase sessions",
        "Master chef consultations",
        "Exclusive restaurant access",
        "Traditional tea ceremonies",
      ],
    },
    {
      icon: "🎌",
      title: "Cultural Harmony Experiences",
      desc: "Deep cultural immersion experiences that honor Japanese traditions while providing modern luxury, from private temple visits to traditional arts.",
      detailsTitle: "Cultural Access:",
      details: [
        "Private temple ceremonies",
        "Traditional arts workshops",
        "Seasonal festival access",
        "Cultural performance viewings",
      ],
    },
    {
      icon: "🏢",
      title: "Executive Business Services",
      desc: "Precision business services tailored to Japanese corporate culture, from private meeting spaces to executive transport with cultural sensitivity.",
      detailsTitle: "Business Excellence:",
      details: [
        "Private meeting facilities",
        "Executive transport coordination",
        "Cultural protocol guidance",
        "Business relationship facilitation",
      ],
    },
  ],
  philosophyTitle: "Our Omotenashi Philosophy",
  philosophy: [
    {
      title: "Anticipatory Service",
      desc:
        "True omotenashi means anticipating needs before they're expressed. Our service philosophy embodies this Japanese principle of selfless hospitality.",
    },
    {
      title: "Cultural Harmony",
      desc:
        "Deep understanding of wa (harmony) and how to navigate Japanese social structures with appropriate respect and cultural sensitivity.",
    },
    {
      title: "Precision Excellence",
      desc:
        "Japanese attention to detail applied to every aspect of service delivery, ensuring perfection in execution and presentation.",
    },
    {
      title: "Respectful Innovation",
      desc:
        "Balancing cutting-edge technology with traditional values, creating experiences that honor both innovation and heritage.",
    },
  ],
  testimonialsTitle: "Voices of Respect",
  testimonials: [
    {
      text:
        '"Conquerse\'s understanding of Japanese business protocol helped us navigate complex negotiations with the cultural sensitivity required for success."',
      author: "Hiroshi Yamamoto",
      location: "CEO, SoftBank Ventures",
    },
    {
      text:
        '"The ryokan experience Conquerse arranged was authentic in every detail, showing deep respect for our traditions while providing modern luxury."',
      author: "Akiko Takahashi",
      location: "Cultural Ambassador, Tokyo",
    },
    {
      text:
        '"Conquerse\'s omotenashi service philosophy perfectly complements our corporate culture. They anticipate our needs with remarkable precision."',
      author: "Kenji Tanaka",
      location: "Managing Director, Toyota Group",
    },
    {
      text:
        '"When hosting international partners in Tokyo, Conquerse ensures they experience the authentic Japan that makes our culture so special."',
      author: "Yuki Sato",
      location: "International Relations, Sony Corporation",
    },
  ],
  contactTitle: "Connect with Conquerse Tokyo",
  contact: [
    {
      title: "Tokyo Office",
      lines: [
        "Marunouchi, Chiyoda-ku",
        "Tokyo 100-0005, Japan",
        "By appointment only",
      ],
    },
    {
      title: "24/7 Concierge",
      lines: [
        "Phone: +81 3 1234 0000",
        "WhatsApp: Available",
        "Signal: Secure communications",
      ],
    },
    {
      title: "Cultural Coordination",
      lines: [
        "Protocol guidance",
        "Cultural event planning",
        "Traditional ceremony access",
        "Language assistance",
      ],
    },
  ],
  email: "Email Tokyo Team",
  arrange: "Schedule Consultation",
  langToggle: "JP",
};

const LANGS: Record<string, Content> = { en: EN };

export default function TokyoPage() {
  const [lang] = useState("en");
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
      {/* Breadcrumbs */}
      <section className="breadcrumbs bg-[#2A2A2A] pt-20 pb-4 border-b border-[rgba(212,175,55,0.1)]">
        <div className="container max-w-[1400px] mx-auto px-8">
          <nav className="breadcrumb-nav text-[#8B8B8B] text-sm">
            {t.breadcrumbs.map((b, i) =>
              b.href ? (
                <span key={b.label}>
                  <a
                    href={b.href}
                    className="text-[#8B8B8B] hover:text-[#D4AF37] transition-colors"
                  >
                    {b.label}
                  </a>
                  {i < t.breadcrumbs.length - 1 && <span className="mx-1">&gt;</span>}
                </span>
              ) : (
                <span key={b.label} className="text-[#D4AF37]">{b.label}</span>
              )
            )}
          </nav>
        </div>
      </section>
      {/* Hero Section */}
      <section className="hero bg-cover bg-center text-center py-32" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,71,171,0.3))" }}>
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
            <a href="#contact" className="btn-primary bg-[#D4AF37] text-black px-8 py-4 rounded-full text-lg font-semibold tracking-wide no-underline transition-all duration-400 hover:bg-[#F4D03F] hover:-translate-y-0.5 shadow-lg">
              {t.heroCta}
            </a>
            <a href="tel:+81312340000" className="btn-secondary bg-transparent text-[#FAFAFA] border-2 border-[#FAFAFA] px-8 py-4 rounded-full text-lg tracking-wide no-underline transition-all duration-400 hover:bg-[#FAFAFA] hover:text-black hover:-translate-y-0.5">
              {t.heroCall}
            </a>
          </div>
        </div>
      </section>
      {/* Tokyo Services */}
      <section className="tokyo-services bg-[#2A2A2A] py-32">
        <div className="container max-w-[1400px] mx-auto px-8">
          <h2 className="section-title text-center text-[clamp(2.5rem,5vw,4rem)] font-light mb-16 text-[#D4AF37] tracking-wide">
            {t.servicesTitle}
          </h2>
          <div className="services-grid grid gap-12 md:grid-cols-2 lg:grid-cols-3 mt-16">
            {t.services.map((s, i) => (
              <div className="service-card bg-white/5 border border-[rgba(212,175,55,0.2)] rounded-2xl p-12 text-left transition-all duration-400" key={s.title}>
                <div className="service-icon text-4xl mb-6">{s.icon}</div>
                <h3 className="service-title text-2xl font-semibold mb-4 text-[#FAFAFA]">{s.title}</h3>
                <p className="service-description text-[#8B8B8B] mb-6">{s.desc}</p>
                <div className="tokyo-specific bg-[#0047AB]/10 border-l-4 border-[#0047AB] p-4 rounded-lg mt-4">
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
      {/* Omotenashi Philosophy */}
      <section className="omotenashi-philosophy bg-black py-32">
        <div className="container max-w-[1400px] mx-auto px-8">
          <h2 className="section-title text-center text-[clamp(2.5rem,5vw,4rem)] font-light mb-16 text-[#D4AF37] tracking-wide">
            {t.philosophyTitle}
          </h2>
          <div className="philosophy-grid grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {t.philosophy.map((p) => (
              <div className="philosophy-item text-center p-8" key={p.title}>
                <h3 className="text-[#D4AF37] mb-4 text-lg font-semibold">{p.title}</h3>
                <p className="text-[#8B8B8B]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Tokyo Testimonials */}
      <section className="tokyo-testimonials bg-[#2A2A2A] py-32">
        <div className="container max-w-[1400px] mx-auto px-8">
          <h2 className="section-title text-center text-[clamp(2.5rem,5vw,4rem)] font-light mb-16 text-[#D4AF37] tracking-wide">
            {t.testimonialsTitle}
          </h2>
          <div className="testimonial-grid grid gap-12 md:grid-cols-2">
            {t.testimonials.map((testi, i) => (
              <div className="testimonial-card bg-white/5 rounded-2xl p-12 border border-[rgba(212,175,55,0.1)]" key={i}>
                <p className="testimonial-text text-lg italic mb-8 text-[#FAFAFA]">{testi.text}</p>
                <p className="testimonial-author text-[#D4AF37] font-semibold">{testi.author}</p>
                <p className="testimonial-location text-[#8B8B8B] text-sm mt-2">{testi.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Tokyo */}
      <section className="contact-tokyo bg-black py-32" id="contact">
        <div className="container max-w-[1400px] mx-auto px-8">
          <h2 className="section-title text-center text-[clamp(2.5rem,5vw,4rem)] font-light mb-16 text-[#D4AF37] tracking-wide">
            {t.contactTitle}
          </h2>
          <div className="contact-info grid gap-12 md:grid-cols-2 lg:grid-cols-3 mt-16">
            {t.contact.map((c, i) => (
              <div className="contact-card bg-white/5 rounded-2xl p-12 text-center border border-[rgba(212,175,55,0.2)]" key={c.title}>
                <h4 className="text-[#D4AF37] mb-4 text-xl font-semibold">{c.title}</h4>
                {c.lines.map((line, idx) => (
                  <p key={idx} className="text-[#8B8B8B] mt-2">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 