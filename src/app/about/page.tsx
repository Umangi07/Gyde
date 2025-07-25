import React from "react";
import Image from "next/image";

export default function About() {
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
            className="text-5xl md:text-6xl font-bold mb-4 tracking-tight"
            style={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: '"Helvetica Neue"',
              fontSize: "72px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "72px",
            }}
          >  Redefining{" "}
            <span
              style={{
                color: "#BF872D",
                fontFamily: "Forum",
                fontSize: "72px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "72px",
              }}
            > 
               Luxurious Travel
            </span>
          </h1>
          <p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
            style={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: '"Helvetica Neue"',
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "32.5px",
            }}
          >
            For over a decade, Conquerse has been the silent partner behind the world's most successful executives, orchestrating seamless travel experiences that enable leaders to focus on what matters most.
          </p>
        </div>
        </div>
        {/* Stats Row */}
        <div
          className="flex flex-wrap gap-8 mt-12 justify-center items-center"
          style={{
            background: "rgba(17, 24, 39, 0.50)",
            display: "flex",
            width: "100%",
            padding: "80px 0",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="flex flex-col justify-center items-center px-10 py-6 min-w-[180px]">
            <span
              className="text-[#BF872D] text-4xl mb-2"
              style={{
                borderRadius: "16px",
                background: "linear-gradient(135deg, #BF872D 0%, #B17D2A 100%)",
                display: "flex",
                width: "80px",
                height: "80px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M26.6673 35V31.6667C26.6673 29.8986 25.9649 28.2029 24.7147 26.9526C23.4645 25.7024 21.7688 25 20.0007 25H10.0007C8.23254 25 6.53685 25.7024 5.28661 26.9526C4.03636 28.2029 3.33398 29.8986 3.33398 31.6667V35" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.0007 18.3333C18.6825 18.3333 21.6673 15.3486 21.6673 11.6667C21.6673 7.98477 18.6825 5 15.0007 5C11.3188 5 8.33398 7.98477 8.33398 11.6667C8.33398 15.3486 11.3188 18.3333 15.0007 18.3333Z" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M36.666 35.0001V31.6668C36.6649 30.1897 36.1733 28.7548 35.2683 27.5873C34.3633 26.4199 33.0962 25.5861 31.666 25.2168" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M26.666 5.2168C28.1 5.58397 29.3711 6.41797 30.2787 7.58731C31.1864 8.75666 31.6791 10.1948 31.6791 11.6751C31.6791 13.1554 31.1864 14.5936 30.2787 15.7629C29.3711 16.9323 28.1 17.7663 26.666 18.1335" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <span className="text-2xl font-bold">10,000+</span>
            <span className="text-gray-300 text-sm mt-1">Executive Clients Served</span>
          </div>
          <div className="flex flex-col px-8 py-6 min-w-[180px] items-center">
            <span
              className="text-[#BF872D] text-4xl mb-2"
              style={{
                borderRadius: "16px",
                background: "linear-gradient(135deg, #BF872D 0%, #B17D2A 100%)",
                display: "flex",
                width: "80px",
                height: "80px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path d="M20.0007 36.6673C29.2054 36.6673 36.6673 29.2054 36.6673 20.0007C36.6673 10.7959 29.2054 3.33398 20.0007 3.33398C10.7959 3.33398 3.33398 10.7959 3.33398 20.0007C3.33398 29.2054 10.7959 36.6673 20.0007 36.6673Z" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.0007 3.33398C15.721 7.82757 13.334 13.7952 13.334 20.0007C13.334 26.2061 15.721 32.1737 20.0007 36.6673C24.2803 32.1737 26.6673 26.2061 26.6673 20.0007C26.6673 13.7952 24.2803 7.82757 20.0007 3.33398Z" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.33398 20H36.6673" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </span>
            <span className="text-2xl font-bold">500+</span>
            <span className="text-gray-300 text-sm mt-1">Cities Worldwide</span>
          </div>
          <div className="flex flex-col px-8 py-6 min-w-[180px] items-center">
            <span
              className="text-[#BF872D] text-4xl mb-2"
              style={{
                borderRadius: "16px",
                background: "linear-gradient(135deg, #BF872D 0%, #B17D2A 100%)",
                display: "flex",
                width: "80px",
                height: "80px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M25.7946 21.4824L28.3196 35.6924C28.3479 35.8597 28.3244 36.0317 28.2523 36.1853C28.1802 36.339 28.0629 36.4669 27.9161 36.5521C27.7694 36.6373 27.6001 36.6756 27.4309 36.6619C27.2618 36.6483 27.1008 36.5833 26.9696 36.4758L21.0029 31.9974C20.7149 31.7822 20.365 31.666 20.0054 31.666C19.6459 31.666 19.296 31.7822 19.0079 31.9974L13.0313 36.4741C12.9001 36.5815 12.7394 36.6463 12.5704 36.66C12.4015 36.6736 12.2324 36.6355 12.0857 36.5505C11.939 36.4656 11.8217 36.338 11.7495 36.1846C11.6772 36.0313 11.6534 35.8596 11.6813 35.6924L14.2046 21.4824" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20 23.334C25.5228 23.334 30 18.8568 30 13.334C30 7.81114 25.5228 3.33398 20 3.33398C14.4772 3.33398 10 7.81114 10 13.334C10 18.8568 14.4772 23.334 20 23.334Z" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </span>
            <span className="text-2xl font-bold">15+</span>
            <span className="text-gray-300 text-sm mt-1">Years of Excellence</span>
          </div>
          <div className="flex flex-col px-8 py-6 min-w-[180px] items-center">
            <span
              className="text-[#BF872D] text-4xl mb-2"
              style={{
                borderRadius: "16px",
                background: "linear-gradient(135deg, #BF872D 0%, #B17D2A 100%)",
                display: "flex",
                width: "80px",
                height: "80px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M36.6673 11.666L22.5007 25.8327L14.1673 17.4993L3.33398 28.3327" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M26.666 11.666H36.666V21.666" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </span>
            <span className="text-2xl font-bold">99.8%</span>
            <span className="text-gray-300 text-sm mt-1">Client Satisfaction Rate</span>
          </div>
        </div>

      </section>

      {/* Heritage Section */}
      <section className="bg-black py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-[#BF872D]">Our Heritage</h2>
            <p className="text-gray-300 mb-6">
              Born from the recognition that today's global executives deserve travel solutions as sophisticated as their business strategies, Conquerse emerged as the industry's most trusted partner for luxury travel coordination.<br/><br/>
              What began as a boutique chauffeur service for Silicon Valley entrepreneurs has evolved into a comprehensive luxury travel ecosystem, serving C-suite executives, private equity partners, and distinguished individuals across six continents.<br/><br/>
              Our commitment extends beyond transportation: we're architects of seamless experiences, guardians of precious time, and custodians of absolute discretion. Every journey we orchestrate reflects our unwavering dedication to operational excellence and client privacy.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(/Executive%20meeting.png) lightgray 50% / cover no-repeat",
                height: "384px",
                maxWidth: "576px",
                alignSelf: "stretch",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <span
                className="text-black px-4 py-2 font-bold text-lg z-10"
                style={{
                  position: "absolute",
                  right: "-32px",
                  bottom: "-32px",
                  display: "flex",
                  width: "128px",
                  height: "128px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "9999px",
                  background: "#BF872D",
                }}
              >
                15+ YEARS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Leadership Section */}
      <section className="bg-gradient-to-b from-[#18181b] to-[#2c2c2c] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Executive <span className="text-[#BF872D]">Leadership</span></h2>
          <p className="text-gray-300 mb-12">Meet the visionaries who set the standard for luxury travel excellence worldwide.</p>
          <div className="flex flex-wrap justify-center gap-12">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-[#232323] rounded-2xl p-8 flex flex-col items-center max-w-xs w-full">
                <Image src="/Marcus Blackwood.png" alt="Victoria Sterling" width={100} height={100} className="rounded-full mb-4 object-cover" />
                <div className="text-lg font-bold text-white mb-1">Victoria Sterling</div>
                <div className="text-[#BF872D] font-medium mb-2">Chief Executive Officer</div>
                <div className="text-gray-400 text-sm">Former luxury hospitality executive with 20+ years orchestrating experiences for Fortune 500 leadership.</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="bg-black py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2
            className="text-3xl font-bold mb-12 text-white"
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
            Our <span
              className="text-[#BF872D]"
              style={{
                color: '#BF872D',
                fontFamily: 'Forum',
                fontSize: '48px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '48px',
              }}
            >
              Principles
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-[#181A20] rounded-xl px-8 py-8 flex flex-col items-center max-w-xs w-full">
              <span
                className="mb-2 flex items-center justify-center"
                style={{
                  borderRadius: "13332px",
                  background: "#BF872D",
                  width: "48px",
                  height: "48px",
                  flexShrink: 0,
                  aspectRatio: "1/1",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M12.0007 15.3338L14.6673 18.0005L20.6673 12.0005M26.6673 16.0005C26.6673 22.5451 19.5287 27.305 16.9313 28.8203C16.6361 28.9925 16.4885 29.0786 16.2802 29.1233C16.1186 29.158 15.8827 29.158 15.7211 29.1233C15.5128 29.0786 15.3652 28.9925 15.07 28.8203C12.4726 27.305 5.33398 22.5451 5.33398 16.0005V9.62395C5.33398 8.55793 5.33398 8.02492 5.50833 7.56675C5.66235 7.162 5.91263 6.80085 6.23753 6.51452C6.60531 6.1904 7.10438 6.00325 8.10252 5.62894L15.2516 2.94804C15.5288 2.8441 15.6674 2.79212 15.81 2.77152C15.9364 2.75324 16.0649 2.75324 16.1913 2.77152C16.3339 2.79212 16.4725 2.8441 16.7497 2.94804L23.8988 5.62894C24.8969 6.00325 25.396 6.1904 25.7638 6.51452C26.0887 6.80085 26.339 7.162 26.493 7.56675C26.6673 8.02492 26.6673 8.55793 26.6673 9.62395V16.0005Z" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div className="text-lg font-bold mb-2">Discretion</div>
              <div className="text-gray-400 text-sm">Absolute confidentiality and privacy protection form the cornerstone of every client relationship.</div>
            </div>
            <div className="bg-[#181A20] rounded-xl px-8 py-8 flex flex-col items-center max-w-xs w-full">
              <span
                className="mb-2 flex items-center justify-center"
                style={{
                  borderRadius: "13332px",
                  background: "#BF872D",
                  width: "48px",
                  height: "48px",
                  flexShrink: 0,
                  aspectRatio: "1/1",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M10.4915 20.6126L9.33333 29.3327L15.4512 25.662C15.6507 25.5422 15.7505 25.4824 15.857 25.459C15.9512 25.4383 16.0488 25.4383 16.143 25.459C16.2495 25.4824 16.3493 25.5422 16.5488 25.662L22.6667 29.3327L21.5092 20.6088M21.9012 5.66452C22.1071 6.16255 22.5024 6.55841 23.0001 6.76509L24.7452 7.48799C25.2433 7.6943 25.639 8.09001 25.8453 8.58807C26.0516 9.08614 26.0516 9.64576 25.8453 10.1438L25.1229 11.8878C24.9165 12.3861 24.9162 12.9463 25.1236 13.4443L25.8447 15.1878C25.9469 15.4345 25.9996 15.6989 25.9996 15.966C25.9997 16.233 25.9471 16.4974 25.8449 16.7442C25.7427 16.9909 25.5929 17.215 25.4041 17.4038C25.2152 17.5926 24.991 17.7424 24.7443 17.8445L23.0004 18.5669C22.5023 18.7728 22.1065 19.1681 21.8998 19.6658L21.1769 21.411C20.9707 21.9091 20.575 22.3048 20.0769 22.5111C19.5789 22.7174 19.0193 22.7174 18.5212 22.5111L16.7773 21.7887C16.2792 21.5829 15.7198 21.5834 15.2221 21.7899L13.4769 22.5118C12.9791 22.7176 12.42 22.7174 11.9224 22.5113C11.4247 22.3051 11.0293 21.9099 10.8228 21.4124L10.0997 19.6666C9.8938 19.1686 9.49854 18.7727 9.00085 18.566L7.25566 17.8431C6.75783 17.6369 6.36226 17.2415 6.15588 16.7437C5.94951 16.2459 5.94923 15.6865 6.1551 15.1886L6.87746 13.4446C7.08325 12.9465 7.08283 12.3871 6.8763 11.8893L6.15497 10.1428C6.0527 9.89612 6.00004 9.63169 6 9.36465C5.99996 9.0976 6.05253 8.83317 6.15472 8.58645C6.25691 8.33973 6.40671 8.11557 6.59557 7.92677C6.78442 7.73797 7.00862 7.58823 7.25537 7.48612L8.9993 6.76373C9.49687 6.55799 9.89249 6.16322 10.0993 5.66607L10.8222 3.92083C11.0285 3.42276 11.4242 3.02705 11.9222 2.82074C12.4203 2.61444 12.9799 2.61444 13.4779 2.82074L15.2218 3.54313C15.7199 3.74893 16.2793 3.74851 16.7771 3.54196L18.523 2.82186C19.021 2.61568 19.5804 2.61572 20.0784 2.82198C20.5763 3.02825 20.972 3.42384 21.1783 3.92178L21.9014 5.66755L21.9012 5.66452Z" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div className="text-lg font-bold mb-2">Excellence</div>
              <div className="text-gray-400 text-sm">Uncompromising quality standards that exceed the expectations of the most discerning travelers.</div>
            </div>
            <div className="bg-[#181A20] rounded-xl px-8 py-8 flex flex-col items-center max-w-xs w-full">
              <span
                className="mb-2 flex items-center justify-center"
                style={{
                  borderRadius: "13332px",
                  background: "#BF872D",
                  width: "48px",
                  height: "48px",
                  flexShrink: 0,
                  aspectRatio: "1/1",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M15.9993 2.66602V29.3327M25.4274 6.57126L6.57126 25.4274M29.3327 15.9993H2.66602M25.4274 25.4274L6.57126 6.57126" stroke="black" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div className="text-lg font-bold mb-2">Innovation</div>
              <div className="text-gray-400 text-sm">Continuously evolving our services to anticipate and exceed the evolving needs of global executives.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="py-20 px-4"
        style={{
          background: "linear-gradient(90deg, #1B1501 0%, #000 100%)"
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            style={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: '"Helvetica Neue"',
              fontSize: "48px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "48px",
            }}
            className="mb-4"
          > Join the Elite{" "}
            <span
              style={{
                color: "#BF872D",
                fontFamily: "Forum",
                fontSize: "48px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "48px",
              }}
            >
             Circle
            </span>
          </h2>
          <p
            className="mb-8"
            style={{
              color: "#D1D5DB",
              textAlign: "center",
              fontFamily: '"Helvetica Neue"',
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "32.5px",
            }}
          >
            Experience why the world's most successful executives trust Gyde with their most important journeys. Your extraordinary experience awaits.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#reserve"
              style={{
                borderRadius: "8px",
                background: "#BF872D",
                display: "flex",
                padding: "16px 40px",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                alignSelf: "stretch",
                color: "#000",
                fontWeight: 600,
                fontSize: "1.125rem", // matches text-lg/font-semibold
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                transition: "background 0.2s"
              }}
              className="hover:bg-[#B5802A] transition"
            >
              Begin Your Journey
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path d="M4.53125 10.75H16.1979" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.3652 4.91602L16.1986 10.7493L10.3652 16.5827" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#contact"
              className="font-semibold px-8 py-4 rounded-full shadow hover:bg-[#BF872D] hover:text-black transition"
              style={{
                borderRadius: "8px",
                border: "1px solid #4B5563",
                color: "#FFF",
                textAlign: "center",
                fontFamily: '"Helvetica Neue"',
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "28px"
              }}
            >
              Contact Leadership
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
