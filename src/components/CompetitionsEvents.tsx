import React from "react";

const BracketBox = () => (
  <div className="w-[102px] h-[34px] bg-[#5A5A5A] rounded-md" />
);

const TournamentBracket = () => (
  <div className="relative mt-8 flex justify-between items-center h-[250px]">
    {/* Round 1 */}
    <div className="flex flex-col justify-between h-full">
      <BracketBox />
      <BracketBox />
      <BracketBox />
      <BracketBox />
    </div>

    {/* Round 2 */}
    <div className="flex flex-col justify-center gap-24">
      <BracketBox />
      <BracketBox />
    </div>

    {/* Final */}
    <div className="flex items-center">
      <BracketBox />
    </div>

    {/* Connector Lines */}
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 250"
      preserveAspectRatio="none"
    >
      <path
        d="M102 35 H150 V75 H102"
        stroke="#FF4D57"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M102 145 H150 V185 H102"
        stroke="#FF4D57"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M250 75 H300 V130 H250"
        stroke="#FF4D57"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  </div>
);

const cardStyle = "bg-[#171717] border border-[#5A5A5A] rounded-[12px]";

const CompetitionsEvents: React.FC = () => {
  return (
    <section
      id="events"
      className="relative px-6 py-20 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at left center, rgba(255,77,87,0.10), transparent 35%),
          radial-gradient(circle at right center, rgba(255,77,87,0.10), transparent 35%),
          #111111
        `,
      }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <h2 className="font-display text-white text-[48px] md:text-[56px] font-semibold uppercase mb-12">
          Competitions & Events
        </h2>

        <div className="grid lg:grid-cols-[1.2fr_1fr_1fr] gap-6">
          {/* LIVE NOW */}
          <div>
            <h3 className="font-display text-[#FF4D57] text-[36px] uppercase mb-6">
              Live Now
            </h3>

            <div className={`${cardStyle} p-5`}>
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-white text-[20px] font-semibold">
                    Bengaluru Regionals
                  </h4>

                  <p className="text-[#777] text-[14px] mt-1">Lorem Ipsum</p>
                </div>

                <span className="bg-[#FF4D57] text-white text-xs px-3 py-1 rounded">
                  Ongoing
                </span>
              </div>

              <div className="border-b border-[#5A5A5A] mt-4 mb-4" />

              <TournamentBracket />
            </div>
          </div>

          {/* UPCOMING */}
          <div>
            <h3 className="font-display text-white text-[36px] uppercase mb-6">
              Upcoming
            </h3>

            <div className="flex flex-col gap-4">
              <div className={`${cardStyle} p-5`}>
                <h4 className="text-white text-[20px] font-semibold mb-5">
                  Event in Mumbai
                </h4>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-white">Date</p>
                    <p className="text-[#d8d8d8] text-sm">11/11/25</p>
                  </div>

                  <div>
                    <p className="text-sm text-white">Location</p>
                    <p className="text-[#d8d8d8] text-sm">BKC</p>
                  </div>

                  <div>
                    <p className="text-sm text-white">Category</p>
                    <p className="text-[#d8d8d8] text-sm">Lorem</p>
                  </div>
                </div>

                <button className="w-full h-[42px] bg-[#FF4D57] text-white rounded-md font-semibold text-lg hover:bg-[#ff3945] transition">
                  REGISTER
                </button>
              </div>

              <div className={`${cardStyle} p-5`}>
                <h4 className="text-white text-[20px] font-semibold mb-5">
                  Event in Delhi
                </h4>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-white">Date</p>
                    <p className="text-[#d8d8d8] text-sm">11/11/25</p>
                  </div>

                  <div>
                    <p className="text-sm text-white">Location</p>
                    <p className="text-[#d8d8d8] text-sm">BKC</p>
                  </div>

                  <div>
                    <p className="text-sm text-white">Category</p>
                    <p className="text-[#d8d8d8] text-sm">Lorem</p>
                  </div>
                </div>

                <button className="w-full h-[42px] bg-[#FF4D57] text-white rounded-md font-semibold text-lg hover:bg-[#ff3945] transition">
                  REGISTER
                </button>
              </div>
            </div>
          </div>

          {/* PAST RESULTS */}
          <div>
            <h3 className="font-display text-white text-[36px] uppercase mb-6">
              Past Results
            </h3>

            <div className={`${cardStyle} p-6 min-h-[430px]`}>
              {[
                "Bengaluru Regionals",
                "Bengaluru Regionals",
                "Bengaluru Regionals",
              ].map((item, index) => (
                <div
                  key={index}
                  className="py-4 border-b border-[#5A5A5A] last:border-none"
                >
                  <h4 className="text-white text-[18px] font-semibold">
                    {item}
                  </h4>

                  <p className="text-[#777] text-[14px] mt-1">Lorem Ipsum</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitionsEvents;
