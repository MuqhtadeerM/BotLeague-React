import React, { useState } from "react";

const roles = [
  { title: "BECOME IN JUDGE" },
  { title: "VOLUNTEER" },
  { title: "COMMUNITY MEMBER" },
];

const sponsors = [
  { name: "NIT DELHI", image: "/sponsors/nit-delhi.png" },
  { name: "INDIAN BIT", image: "/sponsors/indian-bit.png" },
  { name: "NIT SILCHAR", image: "/sponsors/nit-silchar.png" },
  { name: "ROBO COMPANY", image: "/sponsors/robo-company-1.png" },
  { name: "IIT BOMBAY", image: "/sponsors/iit-bombay.png" },
  { name: "ROBO COMPANY", image: "/sponsors/robo-company-2.png" },
];

const SignupCard: React.FC<{ title: string }> = ({ title }) => {
  const [form, setForm] = useState({ name: "", location: "", enroll: "" });

  return (
    <div
      className="flex flex-col flex-1 gap-4 p-6 rounded-xl"
      style={{
        background: "#1a1a1a",
        border: "1px solid #2e2e2e",
        minWidth: "240px",
      }}
    >
      <h3
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "15px",
          fontWeight: 700,
          color: "#ffffff",
          letterSpacing: "0.08em",
          marginBottom: "4px",
        }}
      >
        {title}
      </h3>

      {/* Name */}
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#e8192c] transition-colors"
        style={{
          background: "#111",
          border: "1px solid #333",
          color: "#ccc",
          fontFamily: "'Inter', sans-serif",
        }}
      />

      {/* Location */}
      <input
        type="text"
        placeholder="Location"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
        className="w-full rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#e8192c] transition-colors"
        style={{
          background: "#111",
          border: "1px solid #333",
          color: "#ccc",
          fontFamily: "'Inter', sans-serif",
        }}
      />

      {/* Enroll */}
      <input
        type="text"
        placeholder="Enroll"
        value={form.enroll}
        onChange={(e) => setForm({ ...form, enroll: e.target.value })}
        className="w-full rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#e8192c] transition-colors"
        style={{
          background: "#111",
          border: "1px solid #333",
          color: "#ccc",
          fontFamily: "'Inter', sans-serif",
        }}
      />

      {/* Sign Up Button */}
      <button
        className="w-full py-3 rounded-md font-bold tracking-widest uppercase hover:bg-[#c01020] transition-colors duration-200 mt-1"
        style={{
          background: "#e8192c",
          color: "#fff",
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "14px",
          letterSpacing: "0.12em",
        }}
      >
        SIGN UP
      </button>
    </div>
  );
};

const JoinEcosystem: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2
          className="mb-10 text-white uppercase"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "clamp(28px, 4vw, 52px)",
            fontWeight: 700,
            letterSpacing: "0.03em",
            lineHeight: 1.1,
          }}
        >
          JOIN THE ECOSYSTEM
        </h2>

        {/* 3 signup cards */}
        <div className="flex flex-col gap-5 mb-20 md:flex-row">
          {roles.map((r, i) => (
            <SignupCard key={i} title={r.title} />
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#222] mb-12" />

        {/* Sponsors */}
        <h3
          className="mb-10 text-white uppercase"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "22px",
            fontWeight: 700,
            letterSpacing: "0.15em",
          }}
        >
          SPONSORS
        </h3>

        {/* Sponsor grid — 3 cols × 2 rows */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
          {sponsors.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-4 cursor-pointer group"
            >
              {/* Logo image */}
              <div
                className="flex items-center justify-center flex-shrink-0 overflow-hidden rounded-full"
                style={{
                  width: "72px",
                  height: "72px",
                  background: "#1a1a1a",
                  border: "1px solid #2e2e2e",
                }}
              >
                <img
                  src={s.image}
                  alt={s.name}
                  className="object-contain w-full h-full p-1"
                />
              </div>

              {/* Name */}
              <span
                className="group-hover:text-[#e8192c] transition-colors duration-200"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "0.05em",
                  lineHeight: 1.3,
                }}
              >
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinEcosystem;
