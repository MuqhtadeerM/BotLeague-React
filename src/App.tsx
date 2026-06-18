import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompetitionsEvents from "./components/CompetitionsEvents";
import UserJourney from "./components/UserJourney";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-body">
      <Navbar />
      <Hero />
      <CompetitionsEvents />
      <UserJourney />

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-[#e8192c] text-white font-display font-bold text-sm px-1.5 py-0.5 rounded-sm">
              B⚡T
            </div>
            <span className="font-display font-bold text-white tracking-widest uppercase text-sm">
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
