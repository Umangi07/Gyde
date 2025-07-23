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

interface HeritageItem {
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
  greeting: string;
  title: string;
  subtitle: string;
  btnDarshan: string;
  btnCall: string;
}

interface Services {
  title: string;
  list: Service[];
}

interface Heritage {
  title: string;
  items: HeritageItem[];
}

interface Testimonials {
  title: string;
  list: Testimonial[];
}

interface Contact {
  title: string;
  cards: ContactCard[];
  btnEmail: string;
  btnMeeting: string;
  guest: string;
}

interface Content {
  meta: Meta;
  nav: NavItem[];
  breadcrumbs: Breadcrumb[];
  hero: Hero;
  services: Services;
  heritage: Heritage;
  testimonials: Testimonials;
  contact: Contact;
  lang: string;
  langAlt: string;
  dir: string;
}

const EN: Content = {
  lang: "en-IN",
  title: "Luxury Concierge Services Mumbai | Conquerse Executive Travel India",
    description:
    "Authentic luxury concierge services in Mumbai. Heritage experiences, wellness journeys, Bollywood access. Conquerse serves India's most discerning clientele.",
    keywords:
    "luxury concierge Mumbai, heritage experiences India, wellness journeys, Bollywood access, VIP concierge services India",
  canonical: "https://conquerse.com/en-in/mumbai",
  ogTitle: "Luxury Concierge Services Mumbai | Conquerse Executive Travel",
    ogDescription:
    "Authentic luxury concierge services in Mumbai. Heritage experiences, wellness journeys, Bollywood access for India's elite.",
  ogUrl: "https://conquerse.com/en-in/mumbai",
  schema: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Conquerse Mumbai",
    description: "Authentic luxury concierge services in Mumbai, India",
    url: "https://conquerse.com/en-in/mumbai",
    telephone: "+91-22-1234-0000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nariman Point, Marine Drive",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400021",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "19.0760",
      longitude: "72.8777",
    },
    areaServed: [
      "Mumbai",
      "Pune",
      "Goa",
      "Delhi",
      "Bangalore",
      "Chennai",
      "Kolkata",
    ],
    serviceType: [
      "Luxury Concierge",
      "Heritage Experiences",
      "Wellness Journeys",
      "Entertainment Access",
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
    { label: "Mumbai" },
  ],
  hero: {
    badge: "🏛️ Mumbai, India",
    title: "Authentic Indian Heritage Excellence",
    subtitle:
      "From the Gateway of India to the heart of Bollywood, Conquerse provides authentic Indian experiences that honor tradition while delivering world-class luxury service.",
    btnDarshan: "Arrange Darshan",
    btnCall: "Call: +91 22 1234 0000",
  },
  services: {
    title: "Mumbai's Authentic Services",
    list: [
      {
        icon: "🏛️",
        title: "Heritage & Cultural Experiences",
        desc: "Authentic access to India's most sacred sites and cultural institutions, from private temple darshans to exclusive museum viewings.",
        detailsTitle: "Heritage Access:",
        details: [
          "Private temple darshans",
          "Exclusive museum viewings",
          "Cultural performance access",
          "Historical site private tours",
        ],
      },
      {
        icon: "🧘",
        title: "Wellness & Ayurvedic Journeys",
        desc: "Authentic Ayurvedic treatments and wellness experiences at India's finest retreats, with genuine practitioners and time-honoured traditions.",
        detailsTitle: "Wellness Access:",
        details: [
          "Private Ayurvedic consultations",
          "Exclusive wellness retreats",
          "Traditional healing ceremonies",
          "Yoga master private sessions",
        ],
      },
      {
        icon: "🎭",
        title: "Bollywood & Entertainment",
        desc: "Behind-the-scenes access to Bollywood productions, private film studio tours, and exclusive entertainment industry experiences.",
        detailsTitle: "Entertainment Access:",
        details: [
          "Film studio private tours",
          "Celebrity meet arrangements",
          "Movie premiere invitations",
          "Production set visits",
        ],
      },
      {
        icon: "🍛",
        title: "Culinary Heritage Experiences",
        desc: "Authentic culinary journeys including private cooking classes with renowned chefs, traditional family kitchens, and regional speciality tastings.",
        detailsTitle: "Culinary Journeys:",
        details: [
          "Private family kitchen visits",
          "Master chef cooking classes",
          "Regional cuisine tours",
          "Traditional spice market visits",
        ],
      },
      {
        icon: "💎",
        title: "Jewellery & Craft Experiences",
        desc: "Access to India's master craftsmen and jewellers, private workshops with traditional artisans, and bespoke piece commissioning.",
        detailsTitle: "Craft Access:",
        details: [
          "Master jeweller consultations",
          "Traditional artisan workshops",
          "Custom piece commissioning",
          "Heritage craft demonstrations",
        ],
      },
    ],
  },
  heritage: {
    title: "Mumbai's Rich Heritage",
    items: [
      {
        title: "Gateway to India",
        desc: "Private access to Mumbai's most iconic landmark with exclusive viewing experiences and historical context provided by expert guides.",
      },
      {
        title: "Marine Drive Promenade",
        desc: "Exclusive experiences along Mumbai's famous Queen's Necklace, from private sunset viewings to luxury yacht departures.",
      },
      {
        title: "Elephanta Caves",
        desc: "Private access to the ancient rock-cut temples with expert archaeological guidance and traditional cultural performances.",
      },
      {
        title: "Colaba Causeway",
        desc: "Curated shopping experiences in Mumbai's most vibrant district with access to hidden gems and exclusive boutiques.",
      },
    ],
  },
  testimonials: {
    title: "Voices of Tradition",
    list: [
      {
        text: "Conquerse arranged a private darshan at the temple that was deeply spiritual and authentic. Their understanding of our traditions is remarkable.",
        author: "Priya Patel",
        location: "Cultural Foundation, Mumbai",
      },
      {
        text: "The Bollywood studio tour Conquerse arranged for our family was incredible. We saw the magic behind the scenes with complete privacy.",
        author: "Rajesh Kapoor",
        location: "Film Producer, Mumbai",
      },
      {
        text: "Conquerse's Ayurvedic wellness retreat was transformative. They connected us with genuine practitioners who honored ancient traditions.",
        author: "Dr. Meera Iyer",
        location: "Wellness Institute, Pune",
      },
      {
        text: "When hosting international clients in Mumbai, Conquerse ensures they experience the authentic India we love, not just the tourist version.",
        author: "Arun Desai",
        location: "Managing Director, Tata Group",
      },
    ],
  },
  contact: {
    title: "Connect with Conquerse Mumbai",
    list: [
      {
        title: "Mumbai Office",
        lines: [
          "Nariman Point, Marine Drive",
          "Mumbai, Maharashtra 400021",
          "By appointment only",
        ],
      },
      {
        title: "24/7 Concierge",
        lines: [
          "Phone: +91 22 1234 0000",
          "WhatsApp: Available",
          "Signal: Secure communications",
        ],
      },
      {
        title: "Cultural Coordination",
        lines: [
          "Temple access coordination",
          "Cultural event arrangements",
          "Traditional ceremony planning",
          "Heritage site access",
        ],
      },
    ],
  },
  email: "Email Mumbai Team",
  arrange: "Schedule Consultation",
  langToggle: "IN",
};

const LANGS: Record<string, Content> = { en: EN };

export default function MumbaiPage() {
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
              {t.hero.btnDarshan}
            </a>
            <a href="tel:+912212340000" className="btn-secondary bg-transparent text-[#FAFAFA] border-2 border-[#FAFAFA] px-8 py-4 rounded-full text-lg tracking-wide no-underline transition-all duration-400 hover:bg-[#FAFAFA] hover:text-black hover:-translate-y-0.5">
              {t.hero.btnCall}
            </a>
          </div>
        </div>
      </section>
      {/* Mumbai Services */}
      <section className="mumbai-services bg-[#2A2A2A] py-32">
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
                <div className="mumbai-specific bg-[#0047AB]/10 border-l-4 border-[#0047AB] p-4 rounded-lg mt-4">
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
      {/* Mumbai Heritage */}
      <section className="mumbai-heritage bg-black py-32">
        <div className="container max-w-[1400px] mx-auto px-8">
          <h2 className="section-title text-center text-[clamp(2.5rem,5vw,4rem)] font-light mb-16 text-[#D4AF37] tracking-wide">
            {t.heritage.title}
          </h2>
          <div className="heritage-grid grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {t.heritage.items.map((p) => (
              <div className="heritage-item text-center p-8" key={p.title}>
                <h3 className="text-[#D4AF37] mb-4 text-lg font-semibold">{p.title}</h3>
                <p className="text-[#8B8B8B]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Mumbai Testimonials */}
      <section className="mumbai-testimonials bg-[#2A2A2A] py-32">
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
      {/* Contact Mumbai */}
      <section className="contact-mumbai bg-black py-32" id="contact">
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
            <a href="mailto:mumbai@conquerse.com" className="btn-primary bg-[#D4AF37] text-black px-8 py-4 rounded-full text-lg font-semibold tracking-wide no-underline transition-all duration-400 hover:bg-[#F4D03F] hover:-translate-y-0.5 shadow-lg">
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