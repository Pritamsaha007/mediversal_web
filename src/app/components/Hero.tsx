"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

import ConsultationSection from "./ConsultationCardCarousel";
const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-[#F8F8F8] w-full">
      <div className="container mx-auto px-4 py-8 md:py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-left md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-light">
              <span className="text-[#B0B6B8] ">All Your </span>
              <span className="text-[#161D1F] font-medium bg-[#E8F4F7]">
                health needs
              </span>
              <span className="text-gray-400">,</span>
            </h1>
            <h2 className="text-4xl md:text-5xl font-light mt-2">
              <span className="text-[#B0B6B8]">One Simple App </span>
              <span className="text-[#161D1F] font-medium bg-[#E8F4F7]">
                Trusted Care.
              </span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-light text-[#B0B6B8] mt-2">
              Anytime/Anywhere
            </h3>

            <p className="text-[#B0B6B8] mt-6 max-w-lg mx-auto md:mx-0">
              Instantly connect with doctors, order medicines, or book lab
              tests. Reliable healthcare made easy for everyone.
            </p>

            {/* Search Bar */}
            <div className="relative mt-8 max-w-xl mx-auto md:mx-0">
              <input
                type="text"
                placeholder="Search medicines, symptoms, tests or doctors..."
                className="w-full py-3 px-4 pr-12 text-[#B0B6B8] rounded-lg border bg-[#E8F4F7] border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D3D7D8]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search size={20} />
              </button>
            </div>

            {/* Popular Tags */}
            <div className="flex flex-wrap items-center mt-4 gap-2 justify-center md:justify-start">
              <span className="text-sm text-[#161D1F]">
                Ask MediAssist AI anything:
              </span>
              <button className="bg-[#E8F4F7] text-[#899193] px-3 py-1 rounded-full text-sm">
                Buy Medicines
              </button>
              <button className="bg-[#E8F4F7] text-[#899193] px-3 py-1 rounded-full text-sm ">
                Lab Tests
              </button>
              <button className="bg-[#E8F4F7] text-[#899193] px-3 py-1 rounded-full text-sm hidden md:block">
                Consult a Doctor
              </button>
            </div>

            {/* Customer Info */}
            <div className="flex items-center mt-8 justify-center md:justify-start">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full bg-blue-300 border-2 border-white flex items-center justify-center overflow-hidden"
                  >
                    <Image
                      src="./hero.svg"
                      alt="Customer"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <p className="font-bold text-[#161D1F]">1000+</p>
                <p className="text-sm text-[#161D1F]">
                  happy patients and customers with us
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative">
              <Image
                src="/hero.svg"
                alt="Doctor with stethoscope"
                width={750}
                height={500}
                className="rounded-lg"
              />

              <ConsultationSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
