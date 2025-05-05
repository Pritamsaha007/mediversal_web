import React, { useState, useEffect, useRef } from "react";
import DoctorImage1 from "../../../public/doctor.svg";
import Image from "next/image";
import { ConsultationCardData } from "../types";

const ConsultationCard = ({
  imageSrc,
  availability,
  title,
  description,
  buttonText,
}: ConsultationCardData) => {
  return (
    <div className="bg-white rounded-xl shadow-md flex w-full h-full overflow-hidden px-4 py-2">
      <div className="w-2/5 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-between pl-3 w-3/5">
        <p className="text-[#0088B1] text-sm">{availability}</p>
        <h3 className="text-black text-xl font-semibold">{title}</h3>
        <p className="text-[#6D7578] text-xs mb-2">{description}</p>
        <button className="bg-[#E8F4F7] text-[#0088B1] text-sm px-3 py-2 rounded hover:bg-blue-100 transition">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

interface ConsultationCarouselProps {
  cardsData: ConsultationCardData[];
  autoplayInterval?: number;
}

const ConsultationCarousel = ({
  cardsData,
  autoplayInterval = 3000,
}: ConsultationCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const resetTimer = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };

    const startAutoplay = () => {
      resetTimer();
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
      }, autoplayInterval);
    };

    if (cardsData.length > 1 && autoplayInterval > 0) {
      startAutoplay();
      return () => resetTimer();
    }
  }, [cardsData, autoplayInterval]);

  return (
    <>
      <div className="relative w-full max-w-5xl overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cardsData.map((card, index) => (
            <div key={index} className="flex-none w-full px-4">
              <ConsultationCard {...card} />
            </div>
          ))}
        </div>
      </div>
      {cardsData.length > 1 && (
        <div className="absolute -top-5 right-6 flex gap-2">
          {cardsData.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#0088B1] w-6 h-2 rounded-md"
                  : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      )}
    </>
  );
};

const ConsultationSection = () => {
  const consultationCardsData: ConsultationCardData[] = [
    {
      imageSrc: DoctorImage1,
      availability: "Available 24/7",
      title: "Online Consultation",
      description: "Talk to specialist doctor's in just 10 minutes",
      buttonText: "Consult Now",
    },
    {
      imageSrc: DoctorImage1,
      availability: "Limited Slots",
      title: "Specialist Advice",
      description: "Get expert medical advice from experienced professionals.",
      buttonText: "Book Appointment",
    },
    {
      imageSrc: DoctorImage1,
      availability: "Weekend Special",
      title: "Wellness Checkup",
      description: "Comprehensive health assessment at a discounted price.",
      buttonText: "Learn More",
    },
  ];

  return (
    <div className="absolute bottom-3 right-0 w-full md:w-3/4 lg:w-2/3">
      <ConsultationCarousel
        cardsData={consultationCardsData}
        autoplayInterval={3000}
      />
    </div>
  );
};

export default ConsultationSection;
