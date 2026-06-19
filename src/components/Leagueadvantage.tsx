import React from "react";
import { Medal, Gavel, Briefcase, Zap } from "lucide-react";

const advantages = [
  {
    icon: <Medal size={28} className="text-[#e8192c]" />,
    title: "NATIONAL RECOGNITION",
    desc: '"Benchmark your skills on India\'s official robotics leaderboard."',
  },
  {
    icon: <Gavel size={28} className="text-[#e8192c]" />,
    title: "FAIR JUDGING",
    desc: '"Compete with confidence under standardized, expert-led evaluation."',
  },
  {
    icon: <Briefcase size={28} className="text-[#e8192c]" />,
    title: "CAREER OPS",
    desc: '"Bridge the gap between arena victories and top-tier tech placements."',
  },
  {
    icon: <Zap size={28} className="text-[#e8192c]" />,
    title: "HIGH - ENERGY ECO",
    desc: '"Join a nationwide community of elite innovators and robotics athletes."',
  },
];

const LeagueAdvantage: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute -translate-y-1/2 pointer-events-none top-1/2 left-1/3"
        style={{
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(232,25,44,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-start gap-16 lg:flex-row">
          {/* LEFT: Text content */}
          <div className="flex-1">
            {/* Eyebrow */}
            <p
              className="mb-1 uppercase"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "15px",
                fontWeight: 700,
                color: "#e8192c",
                letterSpacing: "0.12em",
              }}
            >
              Why Register ?
            </p>

            {/* Heading */}
            <h2
              className="text-white uppercase mb-14"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "0.02em",
              }}
            >
              The League Advantage
            </h2>

            {/* Advantage items */}
            <div className="flex flex-col gap-10">
              {advantages.map((item, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div
                    className="flex items-center justify-center flex-shrink-0 rounded-lg"
                    style={{
                      width: "52px",
                      height: "52px",
                      background: "rgba(232,25,44,0.1)",
                      border: "1px solid rgba(232,25,44,0.25)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3
                      className="mb-1 text-white"
                      style={{
                        fontFamily: "'Orbitron', sans-serif",
                        fontSize: "17px",
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "14px",
                        color: "#888888",
                        lineHeight: 1.55,
                        fontStyle: "italic",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="flex justify-center flex-shrink-0 w-full lg:justify-end lg:w-auto">
            <div
              className="overflow-hidden rounded-2xl"
              style={{ width: "300px", minHeight: "560px" }}
            >
              <img
                src="/leaderboard.png"
                alt="Leaderboard"
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeagueAdvantage;
