import React from "react";

const disciplines = [
  { title: "Robo Race", image: "/sports/robo-race.jpg" },
  { title: "Line Follower", image: "/sports/line-follower.jpg" },
  { title: "RC Racing", image: "/sports/rc-racing.jpg" },
  {
    title: "FPV Drone Racing &\nAeromodelling",
    image: "/sports/drone-racing.jpg",
  },
  { title: "Robo Hockey", image: "/sports/robo-hockey.jpg" },
  { title: "Robo War", image: "/sports/robo-war.jpg" },
];

const Card = ({ title, image }: { title: string; image: string }) => (
  <div
    className="relative rounded-[14px] overflow-hidden border border-[#4A4A4A] hover:border-[#FF4D57] transition-all duration-300 cursor-pointer group"
    style={{ height: "200px" }}
  >
    {/* Full bleed image */}
    <img
      src={image}
      alt={title}
      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
    />

    {/* Bottom gradient overlay */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
      }}
    />

    {/* Title pinned to bottom */}
    <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
      <h3
        className="font-medium leading-tight text-white whitespace-pre-line"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "18px",
          fontWeight: 500,
          textShadow: "0 1px 4px rgba(0,0,0,0.8)",
        }}
      >
        {title}
      </h3>
    </div>
  </div>
);

const CompetitionDisciplines: React.FC = () => {
  return (
    <section className="px-6 py-20 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl">
        {/* Label */}
        <p
          className="mb-2 uppercase"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            color: "#e8192c",
            letterSpacing: "0.15em",
          }}
        >
          Sports
        </p>

        {/* Heading */}
        <h2
          className="mb-12 text-white uppercase"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "0.02em",
          }}
        >
          Competition Disciplines
        </h2>

        {/* Row 1 — 4 equal columns */}
        <div className="grid grid-cols-2 gap-5 mb-5 lg:grid-cols-4">
          {disciplines.slice(0, 4).map((item, i) => (
            <Card key={i} title={item.title} image={item.image} />
          ))}
        </div>

        {/* Row 2 — 2 cards + circuit graphic */}
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {/* Robo Hockey */}
          <Card title={disciplines[4].title} image={disciplines[4].image} />

          {/* Robo War */}
          <Card title={disciplines[5].title} image={disciplines[5].image} />

          {/* Circuit graphic — spans 2 columns */}
          <div
            className="hidden lg:flex col-span-2 items-center justify-center relative overflow-hidden rounded-[14px]"
            style={{ height: "200px" }}
          >
            <img
              src="/sports/circuit-bg.png"
              alt="Circuit"
              className="object-cover w-full h-full opacity-25"
            />
            {/* Dark overlay so it's subtle */}
            <div className="absolute inset-0 bg-[#0a0a0a]/40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitionDisciplines;
