import React from "react";
import { Radio } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#0A0A0A]"
      style={{
        height: "701px",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Arena Image */}
        <div
          className="absolute top-0 right-0"
          style={{
            width: "1077px",
            height: "701px",
          }}
        >
          <img
            src="/arena-battle.png"
            alt="Robot Battle Arena"
            className="object-cover w-full h-full"
            style={{
              objectPosition: "center center",
            }}
          />

          {/* Left Fade */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  to right,
                  #0A0A0A 0%,
                  rgba(10,10,10,0.95) 12%,
                  rgba(10,10,10,0.75) 25%,
                  rgba(10,10,10,0.35) 40%,
                  transparent 60%
                )
              `,
            }}
          />

          {/* Bottom Fade */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 35%)",
            }}
          />
        </div>

        {/* Left Dark Section */}
        <div
          className="absolute top-0 left-0 h-full bg-[#0A0A0A]"
          style={{
            width: "363px",
          }}
        />

        {/* Red Ambient Glow */}
        <div className="absolute top-[120px] right-[180px] w-[350px] h-[350px] bg-[#E8192C]/10 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full h-full">
        {/* Live Badge */}
        <div className="absolute top-[120px] right-[160px] flex items-center gap-3 bg-[#111111]/90 border border-[#2A2A2A] rounded px-4 py-2">
          <Radio size={12} className="text-[#E8192C] fill-[#E8192C]" />

          <span className="text-[#E8192C] text-sm font-medium">LIVE :</span>

          <span className="text-sm text-white">
            Episode 14 · Bengaluru Regionals
          </span>

          <button className="text-[#E8192C] text-sm font-semibold">
            WATCH LIVE
          </button>
        </div>

        {/* Hero Text */}
        <div className="absolute left-[81px] top-[245px]">
          <h1
            className="
              font-display
              font-semibold
              uppercase
              text-white
              leading-[1]
              tracking-[0.02em]
            "
            style={{
              width: "781px",
              fontSize: "72px",
              textShadow: "0px 4px 40px rgba(0,0,0,0.7)",
            }}
          >
            INDIA'S ULTIMATE
            <br />
            ROBOTICS ARENA
          </h1>

          <p
            className="mt-5 text-white font-body"
            style={{
              width: "480px",
              fontSize: "28px",
              fontWeight: 300,
              lineHeight: "100%",
            }}
          >
            Build. Compete. Rank. The National
            <br />
            Ecosystem for Robotics Arena
          </p>

          <div className="flex gap-4 mt-10">
            <button className="bg-[#FF4D57] hover:bg-[#e63b47] text-white px-8 py-4 font-semibold rounded transition-all duration-300">
              CREATE ACCOUNT
            </button>

            <button className="border border-white text-white hover:border-[#FF4D57] hover:text-[#FF4D57] px-8 py-4 rounded transition-all duration-300">
              EXPLORE EVENTS
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent z-20" />
    </section>
  );
};

export default Hero;
