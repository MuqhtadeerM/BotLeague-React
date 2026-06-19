import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompetitionsEvents from "./components/CompetitionsEvents";
import UserJourney from "./components/UserJourney";
import WhatIsBotLeague from "./components/WhatIsBotLeague";
import Categories from "./components/Categories";
import CompetitionDisciplines from "./components/CompetitionDisciplines";
import LeagueAdvantage from "./components/Leagueadvantage";
import JoinEcosystem from "./components/Joinecosystem";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-body">
      <Navbar />
      <Hero />
      <CompetitionsEvents />
      <UserJourney />
      <WhatIsBotLeague />
      <Categories />
      <CompetitionDisciplines />
      <LeagueAdvantage />
      <JoinEcosystem />

      <Footer />
    </div>
  );
};

export default App;
