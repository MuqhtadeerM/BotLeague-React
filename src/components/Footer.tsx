import React from "react";

const quickLinksCol1 = [
  "The Arena",
  "Episodes",
  "National Rankings",
  "Programs",
  "Rulebooks",
];

const quickLinksCol2 = [
  "Join the Team",
  "Sponsorships",
  "Help Center",
  "Contact Us",
  "Legal",
];

const socialIcons = [
  {
    href: "#",
    label: "YouTube",
    svg: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "Instagram",
    svg: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "Facebook",
    svg: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "Twitter / X",
    svg: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d0d0d] border-t border-[#1e1e1e]">
      <div className="px-6 py-12 mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          {/* LEFT: Quick Links */}
          <div className="flex-1">
            <h4
              className="mb-6 text-white"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.12em",
              }}
            >
              QUICK LINKS
            </h4>
            <div className="flex gap-16">
              <ul className="flex flex-col gap-3">
                {quickLinksCol1.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="transition-colors duration-150 hover:text-white"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "14px",
                        color: "#888",
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-3">
                {quickLinksCol2.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="transition-colors duration-150 hover:text-white"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "14px",
                        color: "#888",
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: Social Media */}
          <div className="flex flex-col items-start md:items-end">
            <h4
              className="mb-6 text-white"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.12em",
              }}
            >
              SOCIAL MEDIA
            </h4>
            <div className="flex items-center gap-4">
              {socialIcons.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="flex items-center justify-center rounded-full transition-all duration-150 hover:text-white hover:border-[#666]"
                  style={{
                    width: "44px",
                    height: "44px",
                    border: "1px solid #333",
                    color: "#666",
                  }}
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1e1e1e] mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <img
            src="/botleague-logo.png"
            alt="BotLeague"
            className="w-auto h-7"
          />
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              color: "#444",
            }}
          >
            © 2025 BotLeague. India's National Robotics Arena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
