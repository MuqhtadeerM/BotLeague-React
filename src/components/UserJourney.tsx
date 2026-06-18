import React from "react";
import { Wrench, MapPin, Trophy, Users } from "lucide-react";

interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
}

const Step: React.FC<StepProps> = ({
  number,
  icon,
  title,
  description,
  isLast,
}) => (
  <div className="flex flex-col items-center text-center relative flex-1">
    {/* Connector line (not on last) */}
    {!isLast && (
      <div className="absolute top-[52px] left-1/2 w-full h-[2px] bg-gradient-to-r from-[#1a3a6e] to-[#1a3a6e] z-0" />
    )}

    {/* Icon circle */}
    <div
      className="relative z-10 w-[104px] h-[104px] rounded-full flex items-center justify-center mb-4"
      style={{
        background: "radial-gradient(circle, #0f1a2e 60%, #0a0a14 100%)",
        boxShadow:
          "0 0 0 2px #1a3a6e, 0 0 0 4px #0a0a0a, 0 0 20px rgba(26,58,110,0.4)",
      }}
    >
      <div className="text-white">{icon}</div>
    </div>

    {/* Step label */}
    <span className="font-display font-bold text-[#e8192c] text-sm tracking-widest uppercase mb-2">
      STEP {number}
    </span>

    {/* Title */}
    <h3 className="font-display font-bold text-white text-sm md:text-base tracking-wide uppercase leading-tight mb-2">
      {title}
    </h3>

    {/* Description */}
    <p className="text-[#666] font-body text-xs md:text-sm leading-relaxed max-w-[140px]">
      {description}
    </p>
  </div>
);

const UserJourney: React.FC = () => {
  const steps = [
    {
      icon: <Wrench size={32} strokeWidth={1.5} />,
      title: "Build Your Team",
      description:
        "Assemble your squad, design your robot, and prepare for battle",
    },
    {
      icon: <MapPin size={32} strokeWidth={1.5} />,
      title: "Compete Across India",
      description: "Enter regional tournaments in cities across the country",
    },
    {
      icon: <Trophy size={32} strokeWidth={1.5} />,
      title: "Earn National Ranking & Value",
      description: "Climb the leaderboard and build your team's reputation",
    },
    {
      icon: <Users size={32} strokeWidth={1.5} />,
      title: "Join the League",
      description:
        "Qualify for the national league and compete at the highest level",
    },
  ];

  return (
    <section className="bg-[#0a0a0a] py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#1a3a6e]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Eyebrow */}
        <div className="text-center mb-4">
          <span className="font-display font-bold text-[#e8192c] text-sm tracking-[0.3em] uppercase">
            USER JOURNEY
          </span>
        </div>

        {/* Section title */}
        <h2 className="font-display font-bold text-white text-3xl md:text-5xl tracking-tight text-center mb-3">
          YOUR PATH TO THE LEAGUE
        </h2>

        {/* Subtitle */}
        <p className="text-[#555] font-body text-sm md:text-base text-center mb-16 max-w-md mx-auto">
          From garage builds to national glory — every champion starts at Step 1
        </p>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-4 relative">
          {/* Horizontal connecting line across all steps (desktop only) */}
          <div
            className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-[2px] z-0"
            style={{
              background:
                "linear-gradient(to right, #1a3a6e, #3a6ab0, #1a3a6e)",
            }}
          />

          {steps.map((step, i) => (
            <Step
              key={i}
              number={i + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-[#e8192c] text-white px-10 py-3.5 font-display font-bold text-sm tracking-widest uppercase hover:bg-[#b01020] transition-colors duration-200 rounded-sm shadow-[0_0_20px_rgba(232,25,44,0.3)]">
            START YOUR JOURNEY
          </button>
        </div>
      </div>
    </section>
  );
};

export default UserJourney;
