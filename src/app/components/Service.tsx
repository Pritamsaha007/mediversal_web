"use client";
import ExpandableCard from "./ExpandableCard";
import { healthcareCards } from "../CardData";

export default function CardContainer() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-8">
        Our Healthcare Services
      </h1>

      {/* Scrollable container */}
      <div className="relative">
        <div className="overflow-x-auto pb-4 hide-scrollbar">
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
