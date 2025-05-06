"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Download, Mic, Search, Smartphone, Voicemail } from "lucide-react";

import ConsultationSection from "./ConsultationCardCarousel";

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <div className="bg-white w-full flex justify-between items-center ">
      <div className="py-4 w-full md:py-8">
        <div className="flex flex-col w-full md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="w-full text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light ">
              <span className="text-[#B0B6B8]">All Your </span>
              <span className="text-[#161D1F] font-medium bg-[#E8F4F7] rounded-lg px-2 ">
                health needs,
              </span>
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mt-2 md:leading-16">
              <span className="text-[#B0B6B8]">One Simple App </span>
              <span className="text-[#161D1F] font-medium bg-[#E8F4F7] rounded-lg px-2">
                Trusted Care.
              </span>
              <span className="text-[#B0B6B8]"> Anytime, Anywhere</span>
            </h2>

            <p className="text-[#B0B6B8] mt-4 md:mt-6 max-w-lg mx-auto md:mx-0">
              Instantly connect with doctors, order medicines, or book lab
              tests. Reliable healthcare made easy for everyone.
            </p>

            {/* Search Bar */}
            <div className="relative mt-6 md:mt-8 max-w-xl mx-auto md:mx-0">
              <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#161D1F]">
                <Search size={20} />
              </button>
              <input
                type="text"
                placeholder="Search medicines, symptoms, tests or doctors..."
                className="w-full py-3 px-10 pr-12 text-[#B0B6B8] rounded-lg border bg-[#E8F4F7] border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D3D7D8]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#0088B1]">
                <Mic size={20} />
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
              <button className="bg-[#E8F4F7] text-[#899193] px-3 py-1 rounded-full text-sm">
                Lab Tests
              </button>
              <button className="bg-[#E8F4F7] text-[#899193] px-3 py-1 rounded-full text-sm hidden md:block">
                Consult a Doctor
              </button>
            </div>

            {/* Customer Info */}
            <div className="hidden md:flex items-center mt-6 md:mt-8 justify-center md:justify-start">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-300 border-2 border-white flex items-center justify-center overflow-hidden"
                  >
                    <Image
                      src="/hero.svg"
                      alt="Customer"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                      priority={true}
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
          <div className="w-full  relative mt-4 md:mt-[-100px]">
            <div className="relative">
              <Image
                src="/hero.svg"
                alt="Doctor with stethoscope"
                width={750}
                height={100}
                className="w-full md:h-[750px] h-auto object-cover rounded-lg"
                priority={true}
              />

              {/* Conditionally render this absolutely at the bottom */}
              <div className="absolute bottom-0 left-0 w-full p-4">
                {isMobile ? (
                  <>
                    <div className="flex items-center bg-white bg-opacity-80 backdrop-blur-md rounded-lg p-2 shadow-md">
                      <div className="flex -space-x-4">
                        {[1, 2, 3, 4].map((index) => (
                          <div
                            key={index}
                            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-300 border-2 border-white flex items-center justify-center overflow-hidden"
                          >
                            <Image
                              src="/hero.svg"
                              alt="Customer"
                              width={32}
                              height={32}
                              className="w-full h-full object-cover"
                              priority={true}
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
                    <button className="mt-2 w-full flex items-center gap-2 px-4 py-2 rounded-xl bg-[#E8F4F7] text-sm font-medium hover:opacity-90 transition text-[#0088B1] justify-center">
                      <Smartphone color="#0088B1" className="w-4 h-4" />
                      Download App
                    </button>
                  </>
                ) : (
                  <div className="mt-3 right-0 absolute w-full md:w-[425px]">
                    <ConsultationSection />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
