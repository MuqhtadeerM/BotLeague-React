import React from "react";
import { Wrench, Building2, Trophy, Users } from "lucide-react";

interface StepProps {
  step: number;
  icon: React.ReactNode;
  title: string;
  isLast?: boolean;
}

const Step: React.FC<StepProps> = ({ step, icon, title, isLast }) => {
  return (
    <div className="relative flex flex-col items-center flex-1">
      {/* Connector */}
      {!isLast && (
        <div className="hidden md:block absolute top-[72px] left-1/2 w-full h-[3px] bg-[#1D1DFF] z-0" />
      )}

      {/* Circle */}
      <div className="relative z-10">
        <div className="w-[144px] h-[144px] rounded-full bg-[#2B2B2B] flex items-center justify-center">
          <div className="w-[112px] h-[112px] rounded-full border-[4px] border-[#1D1DFF] flex items-center justify-center bg-black">
            <div className="text-white">{icon}</div>
          </div>
        </div>
      </div>

      {/* Vertical line */}
      <div className="w-[2px] h-[28px] bg-[#BFBFBF] mt-2" />

      {/* Step */}
      <div className="text-[#FF4D57] font-display text-[20px] uppercase mt-2">
        STEP {step}
      </div>

      {/* Title */}
      <h3 className="mt-3 text-white font-semibold text-center uppercase leading-tight text-[18px] max-w-[220px]">
        {title}
      </h3>
    </div>
  );
};

const UserJourney: React.FC = () => {
  const steps = [
    {
      icon: <Wrench size={46} strokeWidth={1.8} />,
      title: "BUILD YOUR TEAM",
    },
    {
      icon: <Building2 size={46} strokeWidth={1.8} />,
      title: "COMPETE ACROSS INDIA",
    },
    {
      icon: <Trophy size={46} strokeWidth={1.8} />,
      title: "EARN NATIONAL RANKING & VALUE",
    },
    {
      icon: <Users size={46} strokeWidth={1.8} />,
      title: "JOIN THE LEAGUE",
    },
  ];

  return (
    <section className="px-6 py-24 bg-black">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-4 text-center">
          <span className="text-[#FF4D57] text-[18px] font-display uppercase">
            USER JOURNEY
          </span>
        </div>

        <h2 className="font-display text-white text-center text-[56px] uppercase leading-none">
          YOUR PATH TO THE LEAGUE
        </h2>

        <p className="text-[#5F5F5F] text-center text-[20px] mt-4 mb-20">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </p>

        {/* Steps */}
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:gap-0">
          {steps.map((step, index) => (
            <Step
              key={index}
              step={index + 1}
              icon={step.icon}
              title={step.title}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserJourney;
