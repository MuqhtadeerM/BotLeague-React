import React from "react";
import { MapPin, Calendar, Tag, ChevronRight } from "lucide-react";

interface BracketTeamProps {
  name?: string;
  winner?: boolean;
}

const BracketTeam: React.FC<BracketTeamProps> = ({ name, winner }) => (
  <div
    className={`h-7 px-2 rounded-sm flex items-center text-xs font-body font-medium transition-colors ${
      winner
        ? "bg-[#e8192c]/20 border border-[#e8192c]/50 text-[#e8192c]"
        : "bg-[#222] border border-[#333] text-[#888]"
    }`}
  >
    {name || <span className="w-16 h-2 bg-[#333] rounded-full inline-block" />}
  </div>
);

const TournamentBracket: React.FC = () => (
  <div className="flex items-center gap-0 w-full mt-4">
    {/* Round 1 */}
    <div className="flex flex-col gap-4 flex-1">
      <BracketTeam />
      <BracketTeam />
      <BracketTeam />
      <BracketTeam />
    </div>

    {/* Connector lines R1→R2 */}
    <div className="flex flex-col justify-around h-full mx-1">
      <svg width="20" height="70" viewBox="0 0 20 70">
        <path
          d="M0 17 H10 V53 H0"
          fill="none"
          stroke="#e8192c"
          strokeWidth="1.5"
        />
      </svg>
      <svg width="20" height="70" viewBox="0 0 20 70">
        <path
          d="M0 17 H10 V53 H0"
          fill="none"
          stroke="#e8192c"
          strokeWidth="1.5"
        />
      </svg>
    </div>

    {/* Round 2 */}
    <div className="flex flex-col gap-8 flex-1 my-auto">
      <BracketTeam winner />
      <BracketTeam />
    </div>

    {/* Connector R2→Final */}
    <div className="mx-1">
      <svg width="20" height="80" viewBox="0 0 20 80">
        <path
          d="M0 20 H10 V60 H0"
          fill="none"
          stroke="#e8192c"
          strokeWidth="1.5"
        />
      </svg>
    </div>

    {/* Final */}
    <div className="flex flex-col justify-center flex-1 my-auto">
      <BracketTeam winner />
    </div>
  </div>
);

interface EventCardProps {
  city: string;
  date: string;
  location: string;
  category: string;
}

const EventCard: React.FC<EventCardProps> = ({
  city,
  date,
  location,
  category,
}) => (
  <div className="bg-[#141414] border border-[#2a2a2a] rounded-sm p-4 hover:border-[#e8192c]/40 transition-colors duration-200">
    <h3 className="font-display font-bold text-white text-lg tracking-wide mb-3">
      Event in {city}
    </h3>
    <div className="grid grid-cols-3 gap-2 mb-4">
      <div>
        <div className="flex items-center gap-1 text-[#888] text-xs font-body mb-1">
          <Calendar size={10} /> Date
        </div>
        <div className="text-[#f0f0f0] text-xs font-body font-medium">
          {date}
        </div>
      </div>
      <div>
        <div className="flex items-center gap-1 text-[#888] text-xs font-body mb-1">
          <MapPin size={10} /> Location
        </div>
        <div className="text-[#f0f0f0] text-xs font-body font-medium">
          {location}
        </div>
      </div>
      <div>
        <div className="flex items-center gap-1 text-[#888] text-xs font-body mb-1">
          <Tag size={10} /> Category
        </div>
        <div className="text-[#f0f0f0] text-xs font-body font-medium">
          {category}
        </div>
      </div>
    </div>
    <button className="w-full bg-[#e8192c] text-white py-2.5 font-display font-bold text-sm tracking-widest uppercase hover:bg-[#b01020] transition-colors duration-200 rounded-sm">
      REGISTER
    </button>
  </div>
);

interface PastEventProps {
  name: string;
  subtitle: string;
}

const PastEvent: React.FC<PastEventProps> = ({ name, subtitle }) => (
  <div className="flex items-center justify-between py-3 border-b border-[#2a2a2a] last:border-0 hover:bg-[#141414] px-2 -mx-2 rounded-sm transition-colors cursor-pointer group">
    <div>
      <div className="font-display font-semibold text-white text-sm tracking-wide group-hover:text-[#e8192c] transition-colors">
        {name}
      </div>
      <div className="text-[#888] text-xs font-body mt-0.5">{subtitle}</div>
    </div>
    <ChevronRight
      size={14}
      className="text-[#555] group-hover:text-[#e8192c] transition-colors"
    />
  </div>
);

const CompetitionsEvents: React.FC = () => {
  return (
    <section id="events" className="bg-[#0a0a0a] py-20 px-6 relative">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#e8192c]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <h2 className="font-display font-bold text-white text-4xl md:text-5xl tracking-tight mb-12">
          COMPETITIONS & EVENTS
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LIVE NOW */}
          <div className="bg-[#141414] border border-[#2a2a2a] rounded-sm p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#e8192c] animate-pulse" />
              <span className="font-display font-bold text-[#e8192c] text-sm tracking-widest uppercase">
                Live Now
              </span>
            </div>

            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-display font-bold text-white text-xl tracking-wide">
                  Bengaluru Regionals
                </h3>
                <p className="text-[#888] text-xs font-body mt-1">
                  Season 2 · Episode 14
                </p>
              </div>
              <span className="bg-[#e8192c]/20 border border-[#e8192c]/50 text-[#e8192c] text-xs font-display font-semibold px-2 py-0.5 rounded-sm tracking-wide">
                Ongoing
              </span>
            </div>

            <TournamentBracket />

            <button className="w-full mt-4 border border-[#e8192c] text-[#e8192c] py-2 font-display font-bold text-sm tracking-widest uppercase hover:bg-[#e8192c] hover:text-white transition-colors duration-200 rounded-sm">
              WATCH LIVE
            </button>
          </div>

          {/* UPCOMING */}
          <div>
            <div className="flex items-center gap-2 mb-4 px-1">
              <span className="font-display font-bold text-[#888] text-sm tracking-widest uppercase">
                Upcoming
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <EventCard
                city="Mumbai"
                date="11/11/25"
                location="BKC"
                category="Antweight"
              />
              <EventCard
                city="Delhi"
                date="11/11/25"
                location="BKC"
                category="Featherweight"
              />
            </div>
          </div>

          {/* PAST RESULTS */}
          <div>
            <div className="flex items-center gap-2 mb-4 px-1">
              <span className="font-display font-bold text-[#888] text-sm tracking-widest uppercase">
                Past Results
              </span>
            </div>
            <div className="bg-[#141414] border border-[#2a2a2a] rounded-sm p-4">
              <PastEvent
                name="Bengaluru Regionals"
                subtitle="Season 2 · Ep 13 · Winner: Team Ares"
              />
              <PastEvent
                name="Chennai Open"
                subtitle="Season 2 · Ep 12 · Winner: Ironclad"
              />
              <PastEvent
                name="Hyderabad Cup"
                subtitle="Season 2 · Ep 11 · Winner: BotStrike"
              />
              <PastEvent
                name="Pune Qualifiers"
                subtitle="Season 2 · Ep 10 · Winner: Voltage"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitionsEvents;
