import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Subheading */}
      <div
        className="flex justify-center items-center text-center w-full"
        style={{
          background: "var(--color-black-solid, #000)",
          padding: "128px 0 144px 0",
        }}
      >
        <p className="text-lg text-gray-200 max-w-2xl">
          Our executive travel specialists are standing by to craft bespoke solutions tailored to your unique requirements and schedule.
        </p>
      </div>

      {/* Contact Info Row */}
      <div className="bg-[#181A20] py-12 px-4 flex flex-wrap justify-center gap-8">
        <div className="flex flex-col items-center min-w-[200px]">
          <span className="mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-[#BF872D] to-[#B5802A] w-16 h-16">
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><path d="M27.333 23.333V26.6663C27.333 27.0209 27.1925 27.3612 26.9425 27.6112C26.6924 27.8613 26.3521 28.0018 25.9975 28.0018C16.5075 28.0018 4 15.4943 4 5.99797C4 5.64336 4.14048 5.30309 4.39052 5.05304C4.64057 4.803 4.98084 4.66252 5.33545 4.66252H8.66878C9.00212 4.66252 9.31612 4.79797 9.54345 5.03064L12.2101 7.6973C12.4375 7.92463 12.573 8.23863 12.573 8.57197C12.573 9.23863 12.573 9.9053 12.573 10.5719C12.573 10.9053 12.4375 11.2193 12.2101 11.4466L10.5434 13.1133C12.3334 16.1133 15.8878 19.6676 18.8878 21.4576L20.5544 19.791C20.7818 19.5636 21.0958 19.4281 21.4291 19.4281C22.0958 19.4281 22.7624 19.4281 23.4291 19.4281C23.7624 19.4281 24.0764 19.5636 24.3038 19.791L26.9704 22.4576C27.2038 22.6849 27.333 22.9989 27.333 23.333Z" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <div className="text-lg font-semibold mb-1">24/7 Concierge</div>
          <div className="text-[#BF872D] font-medium mb-1">+1 (555) 123-4567</div>
          <div className="text-gray-400 text-sm">Immediate assistance available</div>
        </div>
        <div className="flex flex-col items-center min-w-[200px]">
          <span className="mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-[#BF872D] to-[#B5802A] w-16 h-16">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M26.666 5.33398H5.33268C3.85992 5.33398 2.66602 6.52789 2.66602 8.00065V24.0007C2.66602 25.4734 3.85992 26.6673 5.33268 26.6673H26.666C28.1388 26.6673 29.3327 25.4734 29.3327 24.0007V8.00065C29.3327 6.52789 28.1388 5.33398 26.666 5.33398Z" stroke="black" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M29.3327 9.33398L17.3727 16.934C16.961 17.1919 16.4851 17.3287 15.9993 17.3287C15.5136 17.3287 15.0377 17.1919 14.626 16.934L2.66602 9.33398" stroke="black" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </span>
          <div className="text-lg font-semibold mb-1">Executive Team</div>
          <div className="text-[#BF872D] font-medium mb-1">exec@conquerse.com</div>
          <div className="text-gray-400 text-sm">Response within 2 hours</div>
        </div>
        <div className="flex flex-col items-center min-w-[200px]">
          <span className="mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-[#BF872D] to-[#B5802A] w-16 h-16">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M26.6673 13.3327C26.6673 19.99 19.282 26.9233 16.802 29.0647C16.571 29.2384 16.2897 29.3323 16.0007 29.3323C15.7116 29.3323 15.4304 29.2384 15.1993 29.0647C12.7193 26.9233 5.33398 19.99 5.33398 13.3327C5.33398 10.5037 6.45779 7.7906 8.45818 5.79021C10.4586 3.78982 13.1717 2.66602 16.0007 2.66602C18.8296 2.66602 21.5427 3.78982 23.5431 5.79021C25.5435 7.7906 26.6673 10.5037 26.6673 13.3327Z" stroke="black" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 17.334C18.2091 17.334 20 15.5431 20 13.334C20 11.1248 18.2091 9.33398 16 9.33398C13.7909 9.33398 12 11.1248 12 13.334C12 15.5431 13.7909 17.334 16 17.334Z" stroke="black" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </span>
          <div className="text-lg font-semibold mb-1">Global Headquarters</div>
          <div className="text-[#BF872D] font-medium mb-1">New York, NY</div>
          <div className="text-gray-400 text-sm">By appointment only</div>
        </div>
        <div className="flex flex-col items-center min-w-[200px]">
          <span className="mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-[#BF872D] to-[#B5802A] w-16 h-16">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M15.9993 29.3327C23.3631 29.3327 29.3327 23.3631 29.3327 15.9993C29.3327 8.63555 23.3631 2.66602 15.9993 2.66602C8.63555 2.66602 2.66602 8.63555 2.66602 15.9993C2.66602 23.3631 8.63555 29.3327 15.9993 29.3327Z" stroke="black" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 8V16L21.3333 18.6667" stroke="black" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </span>
          <div className="text-lg font-semibold mb-1">Business Hours</div>
          <div className="text-[#BF872D] font-medium mb-1">24/7 Available</div>
          <div className="text-gray-400 text-sm">Never closed for our clients</div>
        </div>
      </div>

      {/* Executive Travel Inquiry Form */}
      <div className="flex justify-center items-center py-20">
        <form className="bg-gradient-to-br from-[#181A20] to-[#232323] rounded-2xl p-10 max-w-2xl w-full shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-white text-center">Executive Travel Inquiry</h2>
          <p className="text-gray-300 mb-8 text-center">Share your requirements and our specialists will craft the perfect solution.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm mb-1">Full Name *</label>
              <input className="w-full bg-black/60 border border-[#BF872D] rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none" placeholder="Your executive name" required />
            </div>
            <div>
              <label className="block text-sm mb-1">Executive Email *</label>
              <input className="w-full bg-black/60 border border-[#BF872D] rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none" placeholder="executive@company.com" type="email" required />
            </div>
            <div>
              <label className="block text-sm mb-1">Company/Organization</label>
              <input className="w-full bg-black/60 border border-[#BF872D] rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none" placeholder="Fortune 500 Company" />
            </div>
            <div>
              <label className="block text-sm mb-1">Direct Phone</label>
              <input className="w-full bg-black/60 border border-[#BF872D] rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none" placeholder="+1 (555) 000-0000" type="tel" />
            </div>
            <div>
              <label className="block text-sm mb-1">Service Required*</label>
              <input className="w-full bg-black/60 border border-[#BF872D] rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none" placeholder="Select service type" required />
            </div>
            <div>
              <label className="block text-sm mb-1">Priority Level</label>
              <select className="w-full bg-black/60 border border-[#BF872D] rounded-md px-4 py-3 text-white focus:outline-none">
                <option>Standard (48 hours)</option>
                <option>Priority (24 hours)</option>
                <option>Urgent (12 hours)</option>
              </select>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-1">Executive Requirements *</label>
            <textarea className="w-full bg-black/60 border border-[#BF872D] rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none" rows={4} placeholder="Please detail your specific requirements, dates, destinations, preferences, and any special accommodations needed for your executive travel arrangements..." required />
          </div>
          <button type="submit" className="w-full bg-[#BF872D] text-black font-semibold px-8 py-4 rounded-full shadow hover:bg-[#B5802A] transition flex items-center justify-center gap-2 text-lg">
            Submit Executive Inquiry
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M12.7727 18.0711C12.8043 18.15 12.8594 18.2174 12.9304 18.2641C13.0014 18.3108 13.0851 18.3347 13.17 18.3325C13.255 18.3303 13.3373 18.3022 13.4059 18.2519C13.4744 18.2016 13.5259 18.1316 13.5535 18.0511L18.9702 2.21781C18.9968 2.14397 19.0019 2.06406 18.9848 1.98744C18.9678 1.91081 18.9292 1.84064 18.8737 1.78513C18.8182 1.72961 18.748 1.69106 18.6714 1.67397C18.5948 1.65688 18.5148 1.66197 18.441 1.68864L2.60768 7.10531C2.52726 7.13289 2.4572 7.18441 2.4069 7.25295C2.35661 7.3215 2.32849 7.40379 2.32631 7.48878C2.32413 7.57377 2.34801 7.65739 2.39472 7.72842C2.44144 7.79945 2.50877 7.85448 2.58768 7.88614L9.19601 10.5361C9.40492 10.6198 9.59472 10.7449 9.75398 10.9038C9.91324 11.0628 10.0387 11.2524 10.1227 11.4611L12.7727 18.0711Z" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.8725 1.78906L9.75586 10.9049" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </button>
          <div className="text-gray-400 text-xs text-center mt-4">
            Your information is protected with bank-level security and absolute discretion.
          </div>
        </form>
      </div>
    </div>
  );
}
