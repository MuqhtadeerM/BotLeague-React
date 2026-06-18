import React from "react";
import { ClipboardList, Trophy, Briefcase, Cog } from "lucide-react";

const features = [
  {
    number: "1.",
    title: "STRUCTURED EVENTS",
    description: '"From one-off events to a year-round competitive season."',
  },
  {
    number: "2.",
    title: "DIGITAL IDENTITY",
    description: '"Your professional robotics legacy, tracked and verified."',
  },
  {
    number: "3.",
    title: "NATIONAL RANKING",
    description: '"Benchmark your skills against the best engineers in India."',
  },
  {
    number: "4.",
    title: "CAREER PATHWAY",
    description:
      '"Turning arena victories into real-world industry opportunities."',
  },
];

const WhatIsBotLeague: React.FC = () => {
  return (
    <section className="bg-[#111111] py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="font-display text-white text-[56px] uppercase mb-16">
          WHAT IS BOTLEAGUE?
        </h2>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
          {/* Left Content */}
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
            {features.map((feature) => (
              <div key={feature.number}>
                <div className="text-[#FF4D57] text-[32px] font-bold mb-2">
                  {feature.number}
                </div>

                <h3 className="text-white text-[28px] font-semibold leading-tight mb-3">
                  {feature.title}
                </h3>

                <p className="text-[#8A8A8A] text-[18px] leading-relaxed max-w-[320px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Graphic */}
          {/* Right Side Illustration */}
          <div className="flex items-center justify-center">
            <img
              src="/botleague-ecosystem.png"
              alt="BotLeague Ecosystem"
              className="object-contain"
              style={{
                width: "375px",
                height: "386px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsBotLeague;
