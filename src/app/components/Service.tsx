"use client";
import ExpandableCard from "./ExpandableCard";
import { healthcareCards } from "../CardData";

export default function CardContainer() {
  return (
    <div className="p-2 bg-white">
      <h1 className="text-[48px] font-bold text-center text-[#161D1F]">
        Our Services, Made for You
      </h1>
      <p className="text-[20px] text-center mb-8 text-[#B0B6B8]">
        Explore our range of healthcare services tailored to your needs.
      </p>

      {/* Scrollable container */}
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex flex-nowrap gap-6 px-6 py-6 md:flex-wrap md:justify-center lg:px-10">
          <div className="flex space-x-6 px-4 min-w-max">
            {healthcareCards.map((card, index) => (
              <div key={index} className="flex-shrink-0">
                <ExpandableCard {...card} />
              </div>
            ))}
          </div>
        </div>
        {/* Scroll indicators */}
      </div>
      {/* Custom scrollbar styling */}
      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
}
