import React from "react";
import Image from "next/image";

export default function Concierge() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section
        className="relative  pt-23 pb-12 px-4 border-b border-[#2c2c2c]"
       >
        <div className="max-w-7xl mx-auto">
          <div className="mb-8  "
          style={{
          alignSelf: "stretch",
          background: "linear-gradient(90deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.60) 50%, rgba(0, 0, 0, 0.80) 100%)"
        }}
      >
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight"
              style={{
                color: '#FFF',
                textAlign: 'center',
                fontFamily: '"Helvetica Neue"',
                fontSize: '72px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '72px',
              }}
            >
              Luxurious <span
                style={{
                  color: '#BF872D',
                  fontFamily: 'Forum',
                  fontSize: '72px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '72px',
                }}
              >
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Comprehensive luxury travel solutions meticulously designed for executives, entrepreneurs, and distinguished individuals who refuse to compromise on excellence.
          </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-15">
            <a href="/service">
              <button className="bg-[#232323] text-gray-200 font-semibold px-6 py-2 rounded-full shadow transition flex items-center gap-2">
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M15.8327 14.1673H17.4993C17.9993 14.1673 18.3327 13.834 18.3327 13.334V10.834C18.3327 10.084 17.7493 9.41732 17.0827 9.25065C15.5827 8.83398 13.3327 8.33398 13.3327 8.33398C13.3327 8.33398 12.2493 7.16732 11.4993 6.41732C11.0827 6.08398 10.5827 5.83398 9.99935 5.83398H4.16602C3.66602 5.83398 3.24935 6.16732 2.99935 6.58398L1.83268 9.00065C1.72233 9.32251 1.66602 9.6604 1.66602 10.0007V13.334C1.66602 13.834 1.99935 14.1673 2.49935 14.1673H4.16602" stroke="#D1D5DB" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.83268 15.8333C6.75316 15.8333 7.49935 15.0871 7.49935 14.1667C7.49935 13.2462 6.75316 12.5 5.83268 12.5C4.91221 12.5 4.16602 13.2462 4.16602 14.1667C4.16602 15.0871 4.91221 15.8333 5.83268 15.8333Z" stroke="#D1D5DB" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 14.166H12.5" stroke="#D1D5DB" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.1667 15.8333C15.0871 15.8333 15.8333 15.0871 15.8333 14.1667C15.8333 13.2462 15.0871 12.5 14.1667 12.5C13.2462 12.5 12.5 13.2462 12.5 14.1667C12.5 15.0871 13.2462 15.8333 14.1667 15.8333Z" stroke="#D1D5DB" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </span>
                Luxury Ground Transportation
              </button>
            </a>
            <a href="/privatejet">
              <button className="bg-[#232323] text-gray-200 font-semibold px-6 py-2 rounded-full shadow transition flex items-center gap-2 hover:bg-[#BF872D] hover:text-black">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M14.8333 16L13.3333 9.16667L16.25 6.25C17.5 5 17.9167 3.33333 17.5 2.5C16.6667 2.08333 15 2.5 13.75 3.75L10.8333 6.66667L4 5.16667C3.58333 5.08333 3.25 5.25 3.08333 5.58333L2.83333 6C2.66667 6.41667 2.75 6.83333 3.08333 7.08333L7.5 10L5.83333 12.5H3.33333L2.5 13.3333L5 15L6.66667 17.5L7.5 16.6667V14.1667L10 12.5L12.9167 16.9167C13.1667 17.25 13.5833 17.3333 14 17.1667L14.4167 17C14.75 16.75 14.9167 16.4167 14.8333 16Z" stroke="#D1D5DB" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span>Private Aviation Charter</span>
              </button>
            </a>
            <a href="/yacht">
              <button className="bg-[#232323] text-gray-200 font-semibold px-6 py-2 rounded-full shadow transition flex items-center gap-2 hover:bg-[#BF872D] hover:text-black">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 8.49023V11.6661" stroke="#D1D5DB" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 1.66602V4.16602" stroke="#D1D5DB" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.8327 10.8327V5.83268C15.8327 5.39065 15.6571 4.96673 15.3445 4.65417C15.032 4.34161 14.608 4.16602 14.166 4.16602H5.83268C5.39065 4.16602 4.96673 4.34161 4.65417 4.65417C4.34161 4.96673 4.16602 5.39065 4.16602 5.83268V10.8327" stroke="#D1D5DB" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.1493 16.6663C17.0457 15.1534 17.5125 13.4247 17.4993 11.6663L10.676 8.63378C10.463 8.53914 10.2324 8.49023 9.99933 8.49023C9.76622 8.49023 9.5357 8.53914 9.32266 8.63378L2.49933 11.6663C2.46075 14.036 3.29409 16.3373 4.841 18.1329" stroke="#D1D5DB" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.66602 17.4993C2.16602 17.916 2.66602 18.3327 3.74935 18.3327C5.83268 18.3327 5.83268 16.666 7.91602 16.666C8.99935 16.666 9.49935 17.0827 9.99935 17.4993C10.4993 17.916 10.9993 18.3327 12.0827 18.3327C14.166 18.3327 14.166 16.666 16.2493 16.666C17.3327 16.666 17.8327 17.0827 18.3327 17.4993" stroke="#D1D5DB" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span>Luxury Yacht Experiences</span>
              </button>
            </a>
            <a href="/concerign">
              <button className="bg-[#BF872D] text-black font-semibold px-6 py-2 rounded-full transition hover:bg-[#B5802A] hover:text-white flex items-center gap-2 shadow">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M2.5 11.6667H5C5.44203 11.6667 5.86595 11.8423 6.17851 12.1548C6.49107 12.4674 6.66667 12.8913 6.66667 13.3333V15.8333C6.66667 16.2754 6.49107 16.6993 6.17851 17.0118C5.86595 17.3244 5.44203 17.5 5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H15C14.558 17.5 14.134 17.3244 13.8215 17.0118C13.5089 16.6993 13.3333 16.2754 13.3333 15.8333V13.3333C13.3333 12.8913 13.5089 12.4674 13.8215 12.1548C14.134 11.8423 14.558 11.6667 15 11.6667H17.5" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span>Personal Concierge Services</span>
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-black py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          {/* Left: Details */}
          <div className="flex-1 max-w-xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#BF872D] to-[#B5802A]">
                <span className="text-2xl"><svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
  <path d="M4.66992 18.6667H8.66992C9.37717 18.6667 10.0554 18.9476 10.5555 19.4477C11.0556 19.9478 11.3366 20.6261 11.3366 21.3333V25.3333C11.3366 26.0406 11.0556 26.7189 10.5555 27.219C10.0554 27.719 9.37717 28 8.66992 28H7.33659C6.62934 28 5.95107 27.719 5.45097 27.219C4.95087 26.7189 4.66992 26.0406 4.66992 25.3333V16C4.66992 12.8174 5.9342 9.76516 8.18464 7.51472C10.4351 5.26428 13.4873 4 16.6699 4C19.8525 4 22.9048 5.26428 25.1552 7.51472C27.4056 9.76516 28.6699 12.8174 28.6699 16V25.3333C28.6699 26.0406 28.389 26.7189 27.8889 27.219C27.3888 27.719 26.7105 28 26.0033 28H24.6699C23.9627 28 23.2844 27.719 22.7843 27.219C22.2842 26.7189 22.0033 26.0406 22.0033 25.3333V21.3333C22.0033 20.6261 22.2842 19.9478 22.7843 19.4477C23.2844 18.9476 23.9627 18.6667 24.6699 18.6667H28.6699" stroke="black" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
              </span>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">Personal Concierge Services</h2>
                <span className="text-[#BF872D] font-medium text-base">Your Personal Executive Assistant. Globally.</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Comprehensive lifestyle management services designed for executives who demand seamless coordination of their professional and personal commitments across time zones.
            </p>
            <ul className="text-gray-200 mb-6 space-y-2 text-base">
              <li className="flex items-start gap-2"><span className="text-[#BF872D] mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21.8006 9.9995C22.2573 12.2408 21.9318 14.5709 20.8785 16.6013C19.8251 18.6317 18.1075 20.2396 16.0121 21.1568C13.9167 22.0741 11.5702 22.2453 9.36391 21.6419C7.15758 21.0385 5.2248 19.6969 3.88789 17.8409C2.55097 15.9849 1.89073 13.7267 2.01728 11.4429C2.14382 9.15904 3.04949 6.98759 4.58326 5.29067C6.11703 3.59375 8.18619 2.47393 10.4457 2.11795C12.7052 1.76198 15.0184 2.19136 16.9996 3.3345" stroke="#BF872D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 11L12 14L22 4" stroke="#BF872D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span> 24/7 Personal Concierge Availability</li>
              <li className="flex items-start gap-2"><span className="text-[#BF872D] mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21.8006 9.9995C22.2573 12.2408 21.9318 14.5709 20.8785 16.6013C19.8251 18.6317 18.1075 20.2396 16.0121 21.1568C13.9167 22.0741 11.5702 22.2453 9.36391 21.6419C7.15758 21.0385 5.2248 19.6969 3.88789 17.8409C2.55097 15.9849 1.89073 13.7267 2.01728 11.4429C2.14382 9.15904 3.04949 6.98759 4.58326 5.29067C6.11703 3.59375 8.18619 2.47393 10.4457 2.11795C12.7052 1.76198 15.0184 2.19136 16.9996 3.3345" stroke="#BF872D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 11L12 14L22 4" stroke="#BF872D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span> Restaurant Reservations At Exclusive Establishments</li>
              <li className="flex items-start gap-2"><span className="text-[#BF872D] mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21.8006 9.9995C22.2573 12.2408 21.9318 14.5709 20.8785 16.6013C19.8251 18.6317 18.1075 20.2396 16.0121 21.1568C13.9167 22.0741 11.5702 22.2453 9.36391 21.6419C7.15758 21.0385 5.2248 19.6969 3.88789 17.8409C2.55097 15.9849 1.89073 13.7267 2.01728 11.4429C2.14382 9.15904 3.04949 6.98759 4.58326 5.29067C6.11703 3.59375 8.18619 2.47393 10.4457 2.11795C12.7052 1.76198 15.0184 2.19136 16.9996 3.3345" stroke="#BF872D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 11L12 14L22 4" stroke="#BF872D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span> Event Planning And Corporate Hospitality</li>
              <li className="flex items-start gap-2"><span className="text-[#BF872D] mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21.8006 9.9995C22.2573 12.2408 21.9318 14.5709 20.8785 16.6013C19.8251 18.6317 18.1075 20.2396 16.0121 21.1568C13.9167 22.0741 11.5702 22.2453 9.36391 21.6419C7.15758 21.0385 5.2248 19.6969 3.88789 17.8409C2.55097 15.9849 1.89073 13.7267 2.01728 11.4429C2.14382 9.15904 3.04949 6.98759 4.58326 5.29067C6.11703 3.59375 8.18619 2.47393 10.4457 2.11795C12.7052 1.76198 15.0184 2.19136 16.9996 3.3345" stroke="#BF872D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 11L12 14L22 4" stroke="#BF872D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span> Luxury Accommodation Arrangements</li>
              <li className="flex items-start gap-2"><span className="text-[#BF872D] mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21.8006 9.9995C22.2573 12.2408 21.9318 14.5709 20.8785 16.6013C19.8251 18.6317 18.1075 20.2396 16.0121 21.1568C13.9167 22.0741 11.5702 22.2453 9.36391 21.6419C7.15758 21.0385 5.2248 19.6969 3.88789 17.8409C2.55097 15.9849 1.89073 13.7267 2.01728 11.4429C2.14382 9.15904 3.04949 6.98759 4.58326 5.29067C6.11703 3.59375 8.18619 2.47393 10.4457 2.11795C12.7052 1.76198 15.0184 2.19136 16.9996 3.3345" stroke="#BF872D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 11L12 14L22 4" stroke="#BF872D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span> Personal Shopping And Gift Procurement</li>
              <li className="flex items-start gap-2"><span className="text-[#BF872D] mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21.8006 9.9995C22.2573 12.2408 21.9318 14.5709 20.8785 16.6013C19.8251 18.6317 18.1075 20.2396 16.0121 21.1568C13.9167 22.0741 11.5702 22.2453 9.36391 21.6419C7.15758 21.0385 5.2248 19.6969 3.88789 17.8409C2.55097 15.9849 1.89073 13.7267 2.01728 11.4429C2.14382 9.15904 3.04949 6.98759 4.58326 5.29067C6.11703 3.59375 8.18619 2.47393 10.4457 2.11795C12.7052 1.76198 15.0184 2.19136 16.9996 3.3345" stroke="#BF872D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 11L12 14L22 4" stroke="#BF872D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span> Travel Documentation And Visa Assistance</li>
            </ul>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[#BF872D] font-semibold text-lg">Starting from $500+ /month</span>
              <a
                href="#reserve"
                className="bg-[#BF872D] text-black font-semibold px-6 py-2 rounded-full shadow hover:bg-[#B5802A] transition flex items-center gap-2"
                style={{ borderRadius: "8px" }}
              >
                Reserve Now
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4.16602 10H15.8327" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 4.16602L15.8333 9.99935L10 15.8327" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          {/* Right: Concierge Image */}
          <div className="flex-1 flex justify-center">
            <Image src="/Concierge Services.png" alt="Personal Concierge" width={480} height={320} className="rounded-2xl shadow-lg object-cover" />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        style={{
          background: "linear-gradient(90deg, #1B1501 0%, #000 100%)",
          display: "flex",
          height: "406px",
          padding: "80px 0",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: 0,
          alignSelf: "stretch",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              color: '#FFF',
              textAlign: 'center',
              fontFamily: '"Helvetica Neue"',
              fontSize: '48px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '48px',
            }}
          >
            Ready to Experience{" "}
            <span
              style={{
                color: '#BF872D',
                fontFamily: 'Forum',
                fontSize: '48px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '48px',
              }}
            >
              Excellence?
            </span>
          </h2>
          <p
            className="text-lg mb-8"
            style={{
              color: '#D1D5DB',
              textAlign: 'center',
              fontFamily: '"Helvetica Neue"',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '32.5px',
            }}
          >
            Our executive travel specialists are standing by to craft your bespoke journey. Every detail meticulously planned, every expectation exceeded.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#reserve"
              className="font-semibold shadow hover:bg-[#232323] transition text-black"
              style={{
                borderRadius: "8px",
                background: "#BF872D",
                display: "flex",
                minWidth: "240.86px",
                padding: "16px 40px",
                flexDirection: "column",
                alignItems: "center",
                alignSelf: "stretch",
              }}
            >
              Start Your Journey
            </a>
            <a
              href="#contact"
              className=" text-white font-semibold shadow hover:bg-[#BF872D] hover:text-black transition"
              style={{
                borderRadius: "8px",
                border: "1px solid #4B5563",
                display: "flex",
                minWidth: "280.11px",
                padding: "17px 41px",
                flexDirection: "column",
                alignItems: "center",
                alignSelf: "stretch",
              }}
            >
              Speak with a Specialist
            </a>
          </div>
        </div>
      </section>

      
    </div>
  );
} 