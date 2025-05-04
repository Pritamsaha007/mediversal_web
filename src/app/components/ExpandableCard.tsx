import { useState } from "react";
import { CardData } from "../types"; // Adjust the import path as necessary

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
        height: "480px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Card Content */}
      <div className="flex-none w-72 relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={imagePath || "/api/placeholder/300/280"}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
        </div>

        {/* Content on top of the image */}
        <div className="relative h-full w-full flex flex-col justify-between p-4 text-white z-10">
          <div>
            <div className="flex items-center mb-3">{icon}</div>
            <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
            <p className="text-sm text-gray-100 line-clamp-3">{description}</p>
          </div>

          <div className="mt-2">
            <span className="text-xs font-medium text-blue-200 bg-blue-900/40 px-2 py-1 rounded">
              {isHovered ? "Explore Details" : "Hover for details →"}
            </span>
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
          <div className="border-b pb-4 mb-6">
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
                <div className="flex items-center mb-2">
                  {service.icon}
                  <h4 className="font-semibold text-gray-800 ml-2">
                    {service.name}
                  </h4>
                </div>
                <p className="text-sm text-gray-600 ml-6">
                  {service.description}
                </p>
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

          {/* Call to action */}
          <div className="mt-auto pt-4 border-t">
            <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
              {additionalInfo.buttonText || "Book Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
