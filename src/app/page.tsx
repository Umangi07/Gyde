'use client';

import Head from "next/head";
import Image from "next/image";
import './globals.css';
import Link from "next/link";

type ServiceCardProps = {
  image: string;
  alt: string;
  title: string;
  description: string;
  bullets: string[];
};

function ServiceCard({ image, alt, title, description, bullets }: ServiceCardProps) {
  return (
    <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-2xl p-8 flex flex-col shadow-xl">
      <Image
        src={image}
        alt={alt}
        width={600}
        height={350}
        className="rounded-xl object-cover mb-5 w-full h-52"
      />
      <h3 className="text-2xl font-serif text-[#D4AF37] mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="list-disc list-inside text-sm text-gray-400 mb-4 space-y-1">
        {bullets.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="mt-4">
        <Link href="/service" className="inline-block bg-[#BF872D] text-black font-semibold px-6 py-2 rounded-full shadow hover:bg-[#B5802A] transition">Learn More</Link>
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Head>
        <title>Conquerse - Luxurious Transportation Redefined</title>
        <meta name="description" content="Bespoke luxury travel solutions for executives and discerning travelers. Private jets, yachts, ground transport, and concierge services." />
        <meta name="keywords" content="luxury travel, concierge, private jet, yacht charter, executive transport" />
        <link rel="canonical" href="https://conquerse.com/" />
        <meta property="og:title" content="Conquerse - Luxurious Transportation Redefined" />
        <meta property="og:description" content="Bespoke luxury travel solutions for executives and discerning travelers." />
        <meta property="og:url" content="https://conquerse.com/" />
        <meta property="og:type" content="website" />
      </Head>
      
      <section
  className="relative flex items-center min-h-[90vh] pt-32 pb-16"
  style={{
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* Video background */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
    src="/hero.mp4"
  />
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-black/60 z-10" />
  <div className="relative z-20 flex flex-col md:flex-row max-w-7xl mx-auto w-full px-8">
    {/* Left: Main Hero */}
    <div className="flex-1 flex flex-col justify-center">
      <div className="inline-block bg-gold/20 border border-gold text-gold px-3 py-2 rounded-full text-sm tracking-wider mb-8 w-fit">
        Trusted by 500+ Executives
      </div>
      <h1 className="text-6xl font-bold mb-4 leading-tight">
        Luxurious <br />
        <span style={{ color: '#D4AF37' }}>Transportation</span> <br />
        Redefined
      </h1>
      <p className="text-xl text-gray-200 mb-8 max-w-xl">
        Elevate your journey with bespoke luxury travel solutions. From boardroom to destination, we orchestrate seamless experiences for discerning leaders who demand nothing less than perfection.
      </p>
      <div className="flex gap-4 mb-10">
        <Link
          href="#reserve"
          className="bg-gold text-black px-8 py-4 rounded-md font-semibold text-lg shadow hover:bg-yellow-400 transition flex items-center gap-2"
        >
          Reserve Your Experience <span>→</span>
        </Link>
        <Link href="/service" className="border-2 border-gold text-gold px-8 py-4 rounded-md font-semibold text-lg bg-black/60 hover:bg-gold hover:text-black transition">
  Our Services
</Link>
      </div>
      {/* Stats Row */}
      <div className="flex gap-12 mt-8">
        <div className="flex flex-col items-center">
          <span className="text-gold text-3xl mb-1">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9997 15.3338L14.6663 18.0005L20.6663 12.0005M26.6663 16.0005C26.6663 22.5451 19.5277 27.305 16.9303 28.8203C16.6351 28.9925 16.4875 29.0786 16.2792 29.1233C16.1176 29.158 15.8818 29.158 15.7201 29.1233C15.5118 29.0786 15.3642 28.9925 15.069 28.8203C12.4716 27.305 5.33301 22.5451 5.33301 16.0005V9.62395C5.33301 8.55793 5.33301 8.02492 5.50735 7.56675C5.66137 7.162 5.91165 6.80085 6.23655 6.51452C6.60433 6.1904 7.10341 6.00325 8.10155 5.62894L15.2506 2.94804C15.5278 2.8441 15.6664 2.79212 15.809 2.77152C15.9355 2.75324 16.0639 2.75324 16.1904 2.77152C16.3329 2.79212 16.4715 2.8441 16.7487 2.94804L23.8978 5.62894C24.8959 6.00325 25.395 6.1904 25.7628 6.51452C26.0877 6.80085 26.338 7.162 26.492 7.56675C26.6663 8.02492 26.6663 8.55793 26.6663 9.62395V16.0005Z" stroke="#BF872D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <span className="font-bold text-lg">100%</span>
          <span className="text-gray-400 text-sm">Privacy Assured</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-gold text-3xl mb-1"><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.9808 30.2741C24.3446 30.2741 30.3141 24.3046 30.3141 16.9408C30.3141 9.57696 24.3446 3.60742 16.9808 3.60742C9.617 3.60742 3.64746 9.57696 3.64746 16.9408C3.64746 24.3046 9.617 30.2741 16.9808 30.2741Z" stroke="#BF872D" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.9805 8.94141V16.9414L22.3138 19.6081" stroke="#BF872D" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
          <span className="font-bold text-lg">24/7</span>
          <span className="text-gray-400 text-sm">Concierge Support</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-gold text-3xl mb-1"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0003 3.27642C18.7376 2.87982 17.3939 2.66602 16.0003 2.66602C8.63653 2.66602 2.66699 8.63555 2.66699 15.9993C2.66699 23.3631 8.63653 29.3327 16.0003 29.3327C23.3641 29.3327 29.3337 23.3631 29.3337 15.9993C29.3337 13.7122 28.7578 11.5596 27.7432 9.67861M22.667 7.66602H22.6737M14.0004 29.1837L14.0005 26.2459C14.0005 26.0868 14.0575 25.9329 14.161 25.8121L17.4754 21.9452C17.7478 21.6274 17.6634 21.1402 17.3 20.9325L13.4917 18.7563C13.3882 18.6972 13.3025 18.6114 13.2434 18.5079L10.7609 14.1575C10.6317 13.9311 10.3824 13.8008 10.1228 13.8239L2.75257 14.4803M28.0003 7.99935C28.0003 10.9449 25.3337 13.3327 22.667 15.9993C20.0003 13.3327 17.3337 10.9449 17.3337 7.99935C17.3337 5.05383 19.7215 2.66602 22.667 2.66602C25.6125 2.66602 28.0003 5.05383 28.0003 7.99935ZM23.0003 7.66602C23.0003 7.85011 22.8511 7.99935 22.667 7.99935C22.4829 7.99935 22.3337 7.85011 22.3337 7.66602C22.3337 7.48192 22.4829 7.33268 22.667 7.33268C22.8511 7.33268 23.0003 7.48192 23.0003 7.66602Z" stroke="#BF872D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
          <span className="font-bold text-lg">500+</span>
          <span className="text-gray-400 text-sm">Global Cities</span>
        </div>
      </div>
    </div>
   
    {/* Right: Executive Excellence Card */}
<div className="flex-1 flex justify-end items-center mt-12 md:mt-0">
  <div className="bg-black/80 backdrop-blur-md border border-gold/30 rounded-3xl p-10 shadow-2xl w-full max-w-sm">

    <h2 className="text-2xl font-bold mb-6 text-white">Executive Excellence</h2>

    {/* 1st Feature */}
    <div className="flex items-start mb-4">
      <span className="text-gold text-2xl mr-3">
        {/* Inline SVG */}
        <svg className="w-9 h-9 flex-shrink-0 aspect-square rounded-full bg-[#BF872D]"xmlns="http://www.w3.org/2000/svg" fill="none"viewBox="0 0 24 24" stroke="currentColor">
        <path d="M5 13.7461H8M2 9.74609L4 10.7461L5.27064 6.93416C5.53292 6.14734 5.66405 5.75393 5.90729 5.46307C6.12208 5.20623 6.39792 5.00742 6.70951 4.88487C7.06236 4.74609 7.47705 4.74609 8.30643 4.74609H15.6936C16.523 4.74609 16.9376 4.74609 17.2905 4.88487C17.6021 5.00742 17.8779 5.20623 18.0927 5.46307C18.3359 5.75393 18.4671 6.14734 18.7294 6.93417L20 10.7461L22 9.74609M16 13.7461H19M6.8 10.7461H17.2C18.8802 10.7461 19.7202 10.7461 20.362 11.0731C20.9265 11.3607 21.3854 11.8196 21.673 12.3841C22 13.0259 22 13.8659 22 15.5461V18.2461C22 18.7107 22 18.9431 21.9616 19.1363C21.8038 19.9297 21.1836 20.5499 20.3902 20.7077C20.197 20.7461 19.9647 20.7461 19.5 20.7461H19C17.8954 20.7461 17 19.8507 17 18.7461C17 18.47 16.7761 18.2461 16.5 18.2461H7.5C7.22386 18.2461 7 18.47 7 18.7461C7 19.8507 6.10457 20.7461 5 20.7461H4.5C4.03534 20.7461 3.80302 20.7461 3.60982 20.7077C2.81644 20.5499 2.19624 19.9297 2.03843 19.1363C2 18.9431 2 18.7107 2 18.2461V15.5461C2 13.8659 2 13.0259 2.32698 12.3841C2.6146 11.8196 3.07354 11.3607 3.63803 11.0731C4.27976 10.7461 5.11984 10.7461 6.8 10.7461Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <div>
        <div className="font-semibold text-gold">Bespoke Solutions</div>
        <div className="text-gray-300 text-sm">Tailored travel arrangements that align with your executive schedule and preferences.</div>
      </div>
    </div>

    {/* 2nd Feature */}
    <div className="flex items-start mb-4">
      <span className="text-gold text-2xl mr-3">
        <svg 
  className="w-9 h-9 flex-shrink-0 aspect-square rounded-full bg-[#BF872D]"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
<path d="M9 12.2465L11 14.2465L15.5 9.74645M20 12.7465C20 17.6549 14.646 21.2249 12.698 22.3613C12.4766 22.4905 12.3659 22.5551 12.2097 22.5886C12.0884 22.6146 11.9116 22.6146 11.7903 22.5886C11.6341 22.5551 11.5234 22.4905 11.302 22.3613C9.35396 21.2249 4 17.6549 4 12.7465V7.96405C4 7.16454 4 6.76479 4.13076 6.42116C4.24627 6.11759 4.43398 5.84673 4.67766 5.63198C4.9535 5.38889 5.3278 5.24853 6.0764 4.9678L11.4382 2.95713C11.6461 2.87917 11.75 2.84019 11.857 2.82473C11.9518 2.81103 12.0482 2.81103 12.143 2.82473C12.25 2.84019 12.3539 2.87917 12.5618 2.95713L17.9236 4.9678C18.6722 5.24853 19.0465 5.38889 19.3223 5.63198C19.566 5.84673 19.7537 6.11759 19.8692 6.42116C20 6.76479 20 7.16454 20 7.96405V12.7465Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </span>
      <div>
        <div className="font-semibold text-gold">Discretion Guaranteed</div>
        <div className="text-gray-300 text-sm">Absolute confidentiality and privacy protection for all your travel arrangements.</div>
      </div>
    </div>

    {/* 3rd Feature */}
    <div className="flex items-start mb-4">
      <span className="text-gold text-2xl mr-3">   <svg 
  className="w-9 h-9 flex-shrink-0 aspect-square rounded-full bg-[#BF872D]"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
<path d="M15 3.2039C14.053 2.90645 13.0452 2.74609 12 2.74609C6.47715 2.74609 2 7.22325 2 12.7461C2 18.2689 6.47715 22.7461 12 22.7461C17.5228 22.7461 22 18.2689 22 12.7461C22 11.0308 21.5681 9.41631 20.8071 8.00554M17 6.49609H17.005M10.5001 22.6344L10.5002 20.431C10.5002 20.3117 10.5429 20.1963 10.6205 20.1057L13.1063 17.2055C13.3106 16.9672 13.2473 16.6017 12.9748 16.446L10.1185 14.8138C10.0409 14.7695 9.97663 14.7051 9.93234 14.6275L8.07046 11.3647C7.97356 11.1949 7.78657 11.0972 7.59183 11.1145L2.06418 11.6068M21 6.74609C21 8.95523 19 10.7461 17 12.7461C15 10.7461 13 8.95523 13 6.74609C13 4.53695 14.7909 2.74609 17 2.74609C19.2091 2.74609 21 4.53695 21 6.74609ZM17.25 6.49609C17.25 6.63416 17.1381 6.74609 17 6.74609C16.8619 6.74609 16.75 6.63416 16.75 6.49609C16.75 6.35802 16.8619 6.24609 17 6.24609C17.1381 6.24609 17.25 6.35802 17.25 6.49609Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
      <div>
        <div className="font-semibold text-gold">Global Network</div>
        <div className="text-gray-300 text-sm">Worldwide partnerships ensuring consistent luxury standards across all destinations.</div>
      </div>
    </div>

    <Link href="#about" className="text-gold underline text-lg mt-6 hover:text-yellow-400 transition block">
      Discover Our Heritage →
    </Link>
  </div>
</div>

  </div>
</section>
<section id="services" className="py-32 bg-[#0D0C0C] text-white">
  <div className="container mx-auto px-6 max-w-7xl">
    <h2 className="text-center text-5xl font-Neue Montreal font-light mb-6 text-[#D4AF37] tracking-wide">
      Our Luxurious Services
    </h2>
    <p className="text-center text-gray-300 text-xl mb-14 max-w-3xl mx-auto">
      Comprehensive luxury travel solutions tailored for executives, entrepreneurs, and discerning individuals who demand excellence.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Card 1: Ground Transport */}
      <ServiceCard
        image="/luxury-car.png"
        alt="Luxury Ground Transportation"
        title="Luxury Ground Transportation"
        description="Premium chauffeur services with a fleet of luxury vehicles for executives and VIPs worldwide."
        bullets={[
          "Executive Sedans & SUVs",
          "Professional Chauffeurs",
          "Real-Time Tracking",
          "Global Availability",
        ]}
      />
    

      {/* Card 2: Jet Charter */}
      <ServiceCard
        image="/Private Jet Charter.png"
        alt="Private Jet Charter"
        title="Private Jet Charter"
        description="Access to the world's finest private aircraft for seamless business and leisure travel."
        bullets={[
          "Light to Heavy Jets",
          "On-Demand Availability",
          "Personalized Service",
          "Global Destinations",
        ]}
      />

      {/* Card 3: Yacht Charters */}
      <ServiceCard
        image="/Yacht Charters.png"
        alt="Luxury Yacht Charters"
        title="Luxury Yacht Charters"
        description="Luxury yacht experiences for corporate events, entertainment, and exclusive gatherings."
        bullets={[
          "Motor & Sailing Yachts",
          "Crew Included",
          "Custom Itineraries",
          "Premium Amenities",
        ]}
      />

      {/* Card 4: Concierge Services */}
      <ServiceCard
        image="/Concierge Services.png"
        alt="Personal Concierge Services"
        title="Personal Concierge Services"
        description="Personalized lifestyle management and exclusive access to experiences worldwide."
        bullets={[
          "24/7 Availability",
          "Event Planning",
          "Restaurant Reservations",
          "Exclusive Access",
        ]}
      />
    </div>
  </div>
</section>



      {/* Why Choose Us Section */}
      <section className="py-32 bg-black" id="about">
        <div className="container mx-auto px-8 max-w-7xl">
          <h2 className="text-center text-4xl font-serif font-light mb-16 text-gold tracking-wider">
            Why Choose <span
              className="font-bold"
              style={{
                color: '#BF872D',
                fontFamily: 'Bona Nova SC',
                fontSize: '48px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '48px',
                letterSpacing: '-1.92px',
                textTransform: 'capitalize',
              }}
            >
              Conquerse
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">We deliver uncompromising quality and service excellence that exceeds the expectations of the most discerning travelers.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="flex justify-center mb-4">
                <span
                  className="text-gold text-4xl"
                  style={{
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #BF872D 0%, #B5802A 100%)',
                    display: 'flex',
                    width: '80px',
                    height: '80px',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.3337 21.6661C33.3337 29.9994 27.5003 34.1661 20.567 36.5828C20.2039 36.7058 19.8096 36.6999 19.4503 36.5661C12.5003 34.1661 6.66699 29.9994 6.66699 21.6661V9.99945C6.66699 9.55742 6.84259 9.1335 7.15515 8.82094C7.46771 8.50838 7.89163 8.33278 8.33366 8.33278C11.667 8.33278 15.8337 6.33278 18.7337 3.79945C19.0867 3.49778 19.5359 3.33203 20.0003 3.33203C20.4647 3.33203 20.9139 3.49778 21.267 3.79945C24.1837 6.34945 28.3337 8.33278 31.667 8.33278C32.109 8.33278 32.5329 8.50838 32.8455 8.82094C33.1581 9.1335 33.3337 9.55742 33.3337 9.99945V21.6661Z" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </div>
              <h4 className="text-gold text-lg mb-2 font-semibold">Privacy & Security</h4>
              <p className="text-gray-400 text-sm">Enterprise-grade security protocols and complete discretion for all your travel arrangements.</p>
            </div>
            <div>
              <div className="flex justify-center mb-4"><span className="text-gold text-4xl"
                style={{
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #BF872D 0%, #B5802A 100%)',
                    display: 'flex',
                    width: '80px',
                    height: '80px',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9997 36.6673C29.2044 36.6673 36.6663 29.2054 36.6663 20.0007C36.6663 10.7959 29.2044 3.33398 19.9997 3.33398C10.7949 3.33398 3.33301 10.7959 3.33301 20.0007C3.33301 29.2054 10.7949 36.6673 19.9997 36.6673Z" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 10V20L26.6667 23.3333" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span></div>
              <h4 className="text-gold text-lg mb-2 font-semibold">24/7 Availability</h4>
              <p className="text-gray-400 text-sm">Round-the-clock support and instant booking capabilities across all time zones worldwide.</p>
            </div>
            <div>
              <div className="flex justify-center mb-4"><span className="text-gold text-4xl" style={{
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #BF872D 0%, #B5802A 100%)',
                    display: 'flex',
                    width: '80px',
                    height: '80px',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9997 36.6673C29.2044 36.6673 36.6663 29.2054 36.6663 20.0007C36.6663 10.7959 29.2044 3.33398 19.9997 3.33398C10.7949 3.33398 3.33301 10.7959 3.33301 20.0007C3.33301 29.2054 10.7949 36.6673 19.9997 36.6673Z" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.9997 3.33398C15.7201 7.82757 13.333 13.7952 13.333 20.0007C13.333 26.2061 15.7201 32.1737 19.9997 36.6673C24.2793 32.1737 26.6663 26.2061 26.6663 20.0007C26.6663 13.7952 24.2793 7.82757 19.9997 3.33398Z" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.33301 20H36.6663" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span></div>
              <h4 className="text-gold text-lg mb-2 font-semibold">Global Network</h4>
              <p className="text-gray-400 text-sm">Extensive partner network covering 500+ cities worldwide with consistent service standards.</p>
            </div>
            <div>
              <div className="flex justify-center mb-4"><span className="text-gold text-4xl"
              style={{
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #BF872D 0%, #B5802A 100%)',
                    display: 'flex',
                    width: '80px',
                    height: '80px',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                ><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.7946 21.4824L28.3196 35.6924C28.3479 35.8597 28.3244 36.0317 28.2523 36.1853C28.1802 36.339 28.0629 36.4669 27.9161 36.5521C27.7694 36.6373 27.6001 36.6756 27.4309 36.6619C27.2618 36.6483 27.1008 36.5833 26.9696 36.4758L21.0029 31.9974C20.7149 31.7822 20.365 31.666 20.0054 31.666C19.6459 31.666 19.296 31.7822 19.0079 31.9974L13.0313 36.4741C12.9001 36.5815 12.7394 36.6463 12.5704 36.66C12.4015 36.6737 12.2324 36.6355 12.0857 36.5505C11.939 36.4656 11.8217 36.338 11.7495 36.1846C11.6772 36.0313 11.6534 35.8596 11.6813 35.6924L14.2046 21.4824" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 23.334C25.5228 23.334 30 18.8568 30 13.334C30 7.81114 25.5228 3.33398 20 3.33398C14.4772 3.33398 10 7.81114 10 13.334C10 18.8568 14.4772 23.334 20 23.334Z" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span></div>
              <h4 className="text-gold text-lg mb-2 font-semibold">Premium Experience</h4>
              <p className="text-gray-400 text-sm">Meticulously curated experiences with attention to every detail and personalized service.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-32 bg-deep-gray">
  <div className="container mx-auto px-8 max-w-7xl">
    <h2 className="text-center text-4xl font-serif font-light mb-16 text-gold tracking-wider">
      Trusted by <span className="font-bold text-yellow-400">Industry Leaders</span>
    </h2>
    <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
      Discover why executives and entrepreneurs worldwide choose Conquerse for their most important journeys.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {[
        {
          name: "Marcus Thompson",
          company: "Managing Partner, Goldman Capital",
          text: "“Conquerse has transformed how we handle executive travel. The attention to detail and level of service is unmatched.”",
          image: "/Marcus Thompson.png"
        },
        {
          name: "Isabella Greene",
          company: "CEO, LuxeJet Holdings",
          text: "“From jets to concierge, Conquerse handles everything flawlessly. A game-changer for luxury logistics.”",
          image: "/Marcus Thompson-2.png"
        },
        {
          name: "Daniel Wu",
          company: "Founder, Apex Innovations",
          text: "“I trust Conquerse with every international trip. They always go above and beyond.”",
          image: "/Marcus Thompson-3.png"
        },
        {
          name: "Amelia Clarke",
          company: "VP Operations, Neptune Yachts",
          text: "“The best luxury experience we've had. Seamless, stylish, and professional from start to finish.”",
          image: "/Marcus Thompson-4.png"
        }
      ].map((testimonial, index) => (
        <div key={index} className="bg-black/80 border border-gold/20 rounded-2xl p-8 shadow-lg flex flex-col">
          <div className="flex mb-4">
            {[...Array(5)].map((_, idx) => (
              <span key={idx} className="text-yellow-400 text-xl mr-1">★</span>
            ))}
          </div>
          <p className="text-gray-200 mb-6 flex-1">{testimonial.text}</p>
          <div className="flex items-center gap-4 mt-auto">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <div className="text-gold font-semibold">{testimonial.name}</div>
              <div className="text-gray-400 text-sm">{testimonial.company}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
}


                