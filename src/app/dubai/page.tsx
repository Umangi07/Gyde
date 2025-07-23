"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
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

interface ProtocolItem {
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
  ar?: string[];
}

interface Meta {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
}

interface Hero {
  badge: string;
  title: string;
  subtitle: string;
  btnConsult: string;
  btnCall: string;
}

interface Services {
  title: string;
  list: Service[];
}

interface Protocol {
  title: string;
  items: ProtocolItem[];
}

interface Testimonials {
  title: string;
  list: Testimonial[];
}

interface Contact {
  title: string;
  list: ContactCard[];
}

interface Content {
  meta: Meta;
  nav: NavItem[];
  breadcrumbs: Breadcrumb[];
  hero: Hero;
  services: Services;
  protocol: Protocol;
  testimonials: Testimonials;
  contact: Contact;
  email: string;
  arrange: string;
  lang: string;
  langAlt: string;
  dir: string;
}

const EN: Content = {
  lang: "en-AE",
  title: "Luxury Concierge Services Dubai | Conquerse Executive Travel UAE",
  description:
    "Ultra-exclusive luxury concierge services in Dubai. Private islands, royal protocol, executive security. Conquerse serves the UAE's most discerning clientele.",
  keywords:
    "luxury concierge Dubai, private islands UAE, executive security Dubai, VIP concierge services, royal protocol UAE",
  canonical: "https://conquerse.com/en-ae/dubai",
  ogTitle: "Luxury Concierge Services Dubai | Conquerse Executive Travel",
  ogDescription:
    "Ultra-exclusive luxury concierge services in Dubai. Private islands, royal protocol, executive security for the UAE's elite.",
  ogUrl: "https://conquerse.com/en-ae/dubai",
  schema: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Conquerse Dubai",
    description: "Ultra-exclusive luxury concierge services in Dubai, UAE",
    url: "https://conquerse.com/en-ae/dubai",
    telephone: "+971-4-123-0000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sheikh Zayed Road, Emirates Towers",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      postalCode: "00000",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.2048",
      longitude: "55.2708",
    },
    areaServed: [
      "Dubai",
      "Abu Dhabi",
      "Sharjah",
      "Ajman",
      "Umm Al Quwain",
      "Ras Al Khaimah",
      "Fujairah",
    ],
    serviceType: [
      "Ultra-Luxury Concierge",
      "Private Island Access",
      "Executive Security",
      "Royal Protocol Services",
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
    { label: "Dubai" },
  ],
  hero: {
    badge: "🕌 Dubai, United Arab Emirates",
    title: "Ultra-Exclusive Middle Eastern Luxury",
    subtitle:
      "Where tradition meets innovation, Conquerse provides unparalleled access to the UAE's most exclusive experiences with absolute discretion and royal protocol expertise.",
    btnConsult: "Arrange Consultation",
    btnCall: "Call: +971 4 123 0000",
  },
  services: {
    title: "Dubai's Ultra-Exclusive Services",
    list: [
      {
        icon: "🏝️",
        title: "Private Island Experiences",
        desc: "Exclusive access to private islands in the Arabian Gulf, complete with yacht transport, staff, and customized luxury experiences.",
        detailsTitle: "Island Portfolio:",
        details: [
          "Private Arabian Gulf islands",
          "Luxury yacht charter",
          "Helicopter island access",
          "Bespoke island experiences",
        ],
      },
      {
        icon: "🔒",
        title: "Executive Security & Protection",
        desc: "Military-grade security services with armored vehicles, trained protection specialists, and comprehensive regional security coordination.",
        detailsTitle: "Security Protocols:",
        details: [
          "Armored Mercedes S-Class fleet",
          "Trained protection specialists",
          "Regional security coordination",
          "Diplomatic escort services",
        ],
      },
      {
        icon: "🕌",
        title: "Cultural & Desert Experiences",
        desc: "Authentic Emirati cultural experiences from private desert camps to exclusive cultural performances, respecting local traditions.",
        detailsTitle: "Cultural Access:",
        details: [
          "Private desert camps",
          "Exclusive falconry experiences",
          "Traditional majlis gatherings",
          "Heritage site private tours",
        ],
      },
      {
        icon: "💎",
        title: "Luxury Shopping & Jewelry",
        desc: "Private shopping experiences in Dubai's gold souk and exclusive jewelry ateliers with after-hours access and personal consultations.",
        detailsTitle: "Shopping Privileges:",
        details: [
          "Private gold souk consultations",
          "After-hours mall access",
          "Custom piece commissioning",
        ],
      },
    ],
  },
  protocol: {
    title: "Royal Protocol Expertise",
    items: [
      {
        title: "Diplomatic Relations",
        desc: "Our team includes former diplomatic personnel with deep understanding of Middle Eastern protocol, cultural sensitivities, and governmental relations.",
      },
      {
        title: "Royal Family Connections",
        desc: "Established relationships with royal households across the Gulf region, ensuring appropriate protocol and access to exclusive venues and experiences.",
      },
      {
        title: "Cultural Authenticity",
        desc: "Deep respect for Islamic traditions and Emirati culture, ensuring all arrangements honor local customs while providing world-class luxury service.",
      },
      {
        title: "Absolute Discretion",
        desc: "Military-grade confidentiality protocols with experience serving high-profile individuals who require complete privacy and security.",
      },
    ],
  },
  testimonials: {
    title: "Voices of Distinction",
    list: [
      {
        text: "Conquerse understands the protocols required by our family. Their discretion and cultural sensitivity are impeccable.",
        author: "His Excellency Sheikh Abdullah",
        location: "Royal Advisory Council, Dubai",
      },
      {
        text: "The private island experience Conquerse arranged was beyond anything we could have imagined. True luxury with authentic Emirati hospitality.",
        author: "Fatima Al Mansouri",
        location: "Private Family Office, Abu Dhabi",
      },
      {
        text: "When hosting international dignitaries in Dubai, Conquerse ensures every detail respects our traditions while providing world-class service.",
        author: "Ahmed bin Rashid",
        location: "Diplomatic Services, UAE",
      },
      {
        text: "Conquerse's understanding of royal protocol and cultural nuances makes them the only choice for our family's travel arrangements.",
        author: "Princess Alia Al Thani",
        location: "Royal Household, Qatar",
      },
    ],
  },
  contact: {
    title: "Connect with Conquerse Dubai",
    list: [
      {
        title: "Dubai Office",
        lines: [
          "Sheikh Zayed Road, Emirates Towers",
          "Dubai, United Arab Emirates",
          "By appointment only",
        ],
      },
      {
        title: "24/7 Concierge",
        lines: [
          "Phone: +971 4 123 0000",
          "WhatsApp: Available",
          "Signal: Secure communications",
        ],
      },
      {
        title: "Royal Protocol",
        lines: [
          "Diplomatic coordination",
          "Royal family access",
          "Cultural consultation",
          "Protocol compliance",
        ],
      },
    ],
  },
  email: "Email Dubai Team",
  arrange: "Schedule Consultation",
  langToggle: "AE",
};

const LANGS: Record<string, Content> = { en: EN };

export default function DubaiPage() {
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
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta name="keywords" content={t.meta.keywords} />
        <link rel="canonical" href={t.meta.canonical} />
        <meta property="og:title" content={t.meta.ogTitle} />
        <meta property="og:description" content={t.meta.ogDescription} />
        <meta property="og:url" content={t.meta.ogUrl} />
        <meta property="og:type" content="website" />
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
            {t.hero.badge}
          </div>
          <h1 className="text-[clamp(3rem,8vw,5rem)] font-light mb-6 tracking-wide bg-gradient-to-br from-[#FAFAFA] to-[#D4AF37] bg-clip-text text-transparent">
            {t.hero.title}
          </h1>
          <p className="hero-subtitle text-[#8B8B8B] text-xl max-w-2xl mx-auto mb-12">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="btn-primary bg-[#D4AF37] text-black px-8 py-4 rounded-full text-lg font-semibold tracking-wide no-underline transition-all duration-400 hover:bg-[#F4D03F] hover:-translate-y-0.5 shadow-lg">
              {t.hero.btnConsult}
            </a>
            <a href="tel:+97141230000" className="btn-secondary bg-transparent text-[#FAFAFA] border-2 border-[#FAFAFA] px-8 py-4 rounded-full text-lg tracking-wide no-underline transition-all duration-400 hover:bg-[#FAFAFA] hover:text-black hover:-translate-y-0.5">
              {t.hero.btnCall}
            </a>
          </div>
        </div>
      </section>
      {/* Dubai Services */}
      <section className="dubai-services bg-[#2A2A2A] py-32">
        <div className="container max-w-[1400px] mx-auto px-8">
          <h2 className="section-title text-center text-[clamp(2.5rem,5vw,4rem)] font-light mb-16 text-[#D4AF37] tracking-wide">
            {t.services.title}
          </h2>
          <div className="services-grid grid gap-12 md:grid-cols-2 lg:grid-cols-3 mt-16">
            {t.services.list.map((s, i) => (
              <div className="service-card bg-white/5 border border-[rgba(212,175,55,0.2)] rounded-2xl p-12 text-left transition-all duration-400" key={s.title}>
                <div className="service-icon text-4xl mb-6">{s.icon}</div>
                <h3 className="service-title text-2xl font-semibold mb-4 text-[#FAFAFA]">{s.title}</h3>
                <p className="service-description text-[#8B8B8B] mb-6">{s.desc}</p>
                <div className="dubai-specific bg-[#0047AB]/10 border-l-4 border-[#0047AB] p-4 rounded-lg mt-4">
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
      {/* Protocol Expertise */}
      <section className="protocol-expertise bg-black py-32">
        <div className="container max-w-[1400px] mx-auto px-8">
          <h2 className="section-title text-center text-[clamp(2.5rem,5vw,4rem)] font-light mb-16 text-[#D4AF37] tracking-wide">
            {t.protocol.title}
          </h2>
          <div className="protocol-grid grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {t.protocol.items.map((p) => (
              <div className="protocol-item text-center p-8" key={p.title}>
                <h3 className="text-[#D4AF37] mb-4 text-lg font-semibold">{p.title}</h3>
                <p className="text-[#8B8B8B]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Dubai Testimonials */}
      <section className="dubai-testimonials bg-[#2A2A2A] py-32">
        <div className="container max-w-[1400px] mx-auto px-8">
          <h2 className="section-title text-center text-[clamp(2.5rem,5vw,4rem)] font-light mb-16 text-[#D4AF37] tracking-wide">
            {t.testimonials.title}
          </h2>
          <div className="testimonial-grid grid gap-12 md:grid-cols-2">
            {t.testimonials.list.map((testi, i) => (
              <div className="testimonial-card bg-white/5 rounded-2xl p-12 border border-[rgba(212,175,55,0.1)]" key={i}>
                <p className="testimonial-text text-lg italic mb-8 text-[#FAFAFA]">{testi.text}</p>
                <p className="testimonial-author text-[#D4AF37] font-semibold">{testi.author}</p>
                <p className="testimonial-location text-[#8B8B8B] text-sm mt-2">{testi.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Dubai */}
      <section className="contact-dubai bg-black py-32" id="contact">
        <div className="container max-w-[1400px] mx-auto px-8">
          <h2 className="section-title text-center text-[clamp(2.5rem,5vw,4rem)] font-light mb-16 text-[#D4AF37] tracking-wide">
            {t.contact.title}
          </h2>
          <div className="contact-info grid gap-12 md:grid-cols-2 lg:grid-cols-3 mt-16">
            {t.contact.list.map((c, i) => (
              <div className="contact-card bg-white/5 rounded-2xl p-12 text-center border border-[rgba(212,175,55,0.2)]" key={c.title}>
                <h4 className="text-[#D4AF37] mb-4 text-xl font-semibold">{c.title}</h4>
                {c.lines.map((line, idx) => (
                  <p key={idx} className="text-[#8B8B8B] mt-2">{line}</p>
                ))}
              </div>
            ))}
          </div>
          <div className="text-center mt-16 flex flex-wrap justify-center gap-4">
            <a href="mailto:dubai@conquerse.com" className="btn-primary bg-[#D4AF37] text-black px-8 py-4 rounded-full text-lg font-semibold tracking-wide no-underline transition-all duration-400 hover:bg-[#F4D03F] hover:-translate-y-0.5 shadow-lg">
              {t.email}
            </a>
            <a href="#" className="btn-secondary bg-transparent text-[#FAFAFA] border-2 border-[#FAFAFA] px-8 py-4 rounded-full text-lg tracking-wide no-underline transition-all duration-400 hover:bg-[#FAFAFA] hover:text-black hover:-translate-y-0.5">
              {t.arrange}
            </a>
          </div>
        </div>
      </section>
    </>
  );
} 