import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompetitionsEvents from "./components/CompetitionsEvents";
import UserJourney from "./components/UserJourney";
import WhatIsBotLeague from "./components/WhatIsBotLeague";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-body">
      <Navbar />
      <Hero />
      <CompetitionsEvents />
      <UserJourney />
      <WhatIsBotLeague />

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-8 px-6">
        <div className="flex flex-col items-center justify-between gap-4 mx-auto max-w-7xl md:flex-row">
          <div className="flex items-center gap-2">
            <div className="bg-[#e8192c] text-white font-display font-bold text-sm px-1.5 py-0.5 rounded-sm">
              B⚡T
            </div>
            <span className="text-sm font-bold tracking-widest text-white uppercase font-display">
              League
            </span>
          </div>
          <p className="text-[#444] font-body text-xs">
            © 2025 BotLeague. India's National Robotics Arena.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
