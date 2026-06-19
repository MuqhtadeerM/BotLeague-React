import React from "react";
import {
  Circle,
  Lightbulb,
  BrainCircuit,
  Bitcoin,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    icon: <Circle size={72} strokeWidth={2.5} />,
    title: "MINI\nMAKERS",
    description: "Where Creativity Meets Logic.",
    featured: true,
  },
  {
    icon: <Lightbulb size={72} strokeWidth={2.5} />,
    title: "JUNIOR\nINNOVATORS",
    description: "Engineering & Strategy Fundamentals.",
  },
  {
    icon: <BrainCircuit size={72} strokeWidth={2.5} />,
    title: "YOUNG\nENGINEERS",
    description: "Advanced Wireless & Autonomous Control.",
  },
  {
    icon: <Bitcoin size={72} strokeWidth={2.5} />,
    title: "ROBO\nMINDS",
    description: "Elite Professional Sports & Robotics.",
  },
];

const Categories: React.FC = () => {
  return (
    <section className="bg-[#111111] py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="font-display text-white text-[56px] uppercase mb-14">
          Categories
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`
                rounded-[18px]
                min-h-[330px]
                p-8
                flex
                flex-col
                border
                transition-all
                duration-300
                ${
                  category.featured
                    ? "border-[#D4A400] bg-gradient-to-r from-[#2A2412] to-[#1A1A1A]"
                    : "border-[#5A5A5A] bg-[#1E1E1E]"
                }
              `}
            >
              {/* Icon */}
              <div className="text-[#FFC400] mb-8">{category.icon}</div>

              {/* Title */}
              <h3
                className="
                  font-display
                  text-white
                  text-[28px]
                  uppercase
                  leading-[1.1]
                  whitespace-pre-line
                  mb-4
                "
              >
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-[#8A8A8A] text-[18px] leading-snug mb-auto">
                {category.description}
              </p>

              {/* Learn More */}
              <button className="mt-8 flex items-center gap-2 text-[#FF4D57] text-[24px] font-semibold uppercase">
                Learn More
                <ArrowRight size={24} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
