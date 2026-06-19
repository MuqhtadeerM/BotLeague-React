import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Events", "Programs", "Community", "Ranks"];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Events");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div
        className="relative flex items-center w-full"
        style={{
          height: "90px",
          paddingLeft: "37px",
          paddingRight: "33px",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          className="absolute flex items-center"
          style={{
            left: "27px",
            top: "26px",
            width: "290px",
            height: "58px",
          }}
        >
          <img
            src="/botleague-logo.png"
            alt="BotLeague"
            className="object-contain w-full h-full"
          />
        </a>

        {/* Desktop Nav Links */}
        <div
          className="absolute items-center justify-between hidden md:flex"
          style={{
            width: "617px",
            left: "450px",
            top: "38px",
            height: "25px",
          }}
        >
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setActive(item)}
              className="relative flex items-center justify-center w-[110px] text-[#F5F5F5] hover:text-white font-display font-medium text-[18px] leading-[100%] tracking-[0.02em] transition-all duration-200"
            >
              {item}
              {/* Red underline for active item */}
              {active === item && (
                <span
                  className="
                absolute
                -bottom-9
                left-1/2
                -translate-x-1/2
                w-[102px]
                h-[4px]
                bg-[#FF4D57]
                "
                />
              )}
            </a>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* CTA Buttons */}
        <div className="items-center hidden gap-3 md:flex">
          <button
            className="
              border
              border-[#666]
              text-white
              rounded-[8px]
              font-body
              font-semibold
              text-[18px]
              flex
              items-center
              justify-center
            "
            style={{
              width: "113px",
              height: "43px",
            }}
          >
            LOGIN
          </button>
          <button
            className="
                bg-[#FF4D57]
                text-white
                rounded-[8px]
                font-body
                font-semibold
                text-[18px]
                flex
                items-center
                justify-center
              "
            style={{
              width: "163px",
              height: "43px",
            }}
          >
            REGISTER NOW
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex items-center text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d0d0d] border-t border-[#222] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setActive(item)}
              className={`font-body text-sm ${active === item ? "text-[#e8192c]" : "text-[#f0f0f0]"}`}
            >
              {item}
            </a>
          ))}
          <button className="border border-[#555] text-[#f0f0f0] px-5 py-2 text-sm font-display font-semibold tracking-wider w-full rounded-sm">
            LOGIN
          </button>
          <button className="bg-[#e8192c] text-white px-5 py-2 text-sm font-display font-semibold tracking-wider w-full rounded-sm">
            REGISTER NOW
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
