"use client";
import ExpandableCard from "./ExpandableCard";
import { healthcareCards } from "../CardData";

export default function CardContainer() {
  return (
    <div className="p-2 bg-white">
      <h1 className="text-[24px] md:text-5xl font-bold text-center text-[#161D1F] mb-2">
        Our Services, Made for You
      </h1>
      <p className="text-[14px] md:text-xl text-center mb-2 text-[#B0B6B8]">
        Explore trusted care solutions by Mediversal
      </p>

      {/* Scrollable container */}
      <div className="overflow-x-auto hide-scrollbar px-4 md:px-0">
        <div className="w-full  gap-6 py-6 md:flex-wrap md:justify-center">
          <div className="flex space-x-8 min-w-max mx-auto pl-4">
            {healthcareCards.map((card, index) => (
              <div key={index} className="flex-shrink-0">
                <ExpandableCard {...card} />
              </div>
            ))}
          </div>
        </div>
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
