import { useState } from "react";
import { CardData } from "../types";
import Image from "next/image";

export default function ExpandableCard({
  icon,
  title,
  description,
  imagePath,
  additionalInfo,
}: CardData) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out bg-white"
      style={{
        width: isHovered ? "800px" : "300px",
        height: "420px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Card Content */}
      <div className="flex-none w-72 relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={imagePath || "/api/placeholder/300/280"}
            alt={title}
            className="object-cover w-full h-full"
            height={280}
            width={300}
          />
          {/* Gradient overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
        </div>

        {/* Content on top of the image */}
        <div className="relative h-full w-full flex flex-col justify-between p-4 text-[#161D1F] z-10">
          <div className="flex items-center mb-3">
            <div className="bg-[#F8F8F8] p-2 rounded-full inline-flex">
              {icon}
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-100 text-left mb-3">
              {description}
            </p>
            <div className="flex justify-center">
              <button className="bg-white text-[#161D1F] text-[16px] font-semibold px-4 py-3 rounded shadow w-full">
                {title}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information (shown on hover) */}
      <div
        className={`flex-grow transition-all duration-300 ease-in-out bg-white ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          {/* Header */}
          <div className="border-b pb-4 mb-6 mt-2">
            <h3 className="text-xl font-bold text-[#161D1F]">
              {additionalInfo.title}
            </h3>
            <p className="text-sm text-[#B0B6B8] mt-1">
              {additionalInfo.description}
            </p>
          </div>

          {/* Service List */}
          <div className="flex-grow">
            {additionalInfo.services?.map((service, index) => (
              <div key={index} className="mb-5">
                <div className="flex items-start justify-between">
                  {/* Left content: Icon, Name, Description */}
                  <div className="flex items-start">
                    <div className="bg-[#E5E8E9] p-2 rounded-full mt-1 mr-3">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#161D1F] text-[14px]">
                        {service.name}
                      </h4>
                      <p className="text-[10px] text-[#B0B6B8] mt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  {/* Right: Book Now Button */}
                  <button className="text-[#0088B1] text-sm font-semibold ml-4 mt-1 whitespace-nowrap border border-[#0088B1] rounded px-8 py-1">
                    Book Now
                  </button>
                </div>
              </div>
            ))}

            {/* If services array is not available, fall back to the original structure */}
            {!additionalInfo.services && (
              <div className="bg-blue-50 p-4 rounded-lg mb-5">
                <h4 className="font-semibold text-blue-800">
                  {additionalInfo.serviceName}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  {additionalInfo.seriviceDescription}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
