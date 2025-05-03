"use client";

import { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Pill,
  Phone,
  Activity,
  Microscope,
} from "lucide-react";

// Define types for our service data
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
}

interface ServiceSectionProps {
  title: string;
  description: string;
  cards: ServiceCardProps[];
}

// Main component
export default function ServiceComponent() {
  // State to keep track of the active service category
  const [activeService, setActiveService] = useState(0);
  // Ref for the scrollable container
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  // State to track scroll position for arrow visibility
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  // Service categories data
  const serviceCategories = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Homecare Services",
      description: "Expert Healthcare professionals at your doorstep",
      imagePath: "./Homecare.svg",
    },
    {
      icon: <Pill className="w-8 h-8" />,
      title: "E-Pharmacy",
      description: "Expert Healthcare professionals at your doorstep",
      imagePath: "./E-Pharmacy.svg",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Online Consultation",
      description: "Get online doctor consultations from trusted experts",
      imagePath: "./OnlineCouns.svg",
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Lab & Diagnostic Test",
      description: "Receive your lab results right at home",
      imagePath: "./Lab.svg",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Health Checkup",
      description:
        "Keep your health in good condition with our health checkups",
      imagePath: "./HealthCheckUp.svg",
    },
  ];

  // Service sections with their respective cards
  const serviceSections: ServiceSectionProps[] = [
    {
      title: "Expert Homecare, Right at Your Doorstep",
      description:
        "Trusted professionals for comfort, care & recovery at home.",
      cards: [
        {
          icon: <span className="text-yellow-400 text-2xl">👨‍⚕️</span>,
          title: "Caretaker at Home",
          description: "Help with daily tasks, hygiene, and patient support.",
          buttonText: "Book a Caretaker",
        },
        {
          icon: <span className="text-yellow-400 text-2xl">👩‍⚕️</span>,
          title: "Nurse at Home",
          description: "Wound care, injections & post-surgery recovery.",
          buttonText: "Book a Nurse",
        },
        {
          icon: <span className="text-yellow-400 text-2xl">🧠</span>,
          title: "Physiotherapy at Home",
          description: "Pain relief, rehab exercises & improved mobility.",
          buttonText: "Book a Physiotherapist",
        },
      ],
    },
    {
      title: "E-Pharmacy Services",
      description: "Medications delivered right to your doorstep.",
      cards: [
        {
          icon: <span className="text-green-500 text-2xl">💊</span>,
          title: "Prescription Medications",
          description:
            "Upload your prescription and get medications delivered.",
          buttonText: "Order Prescription",
        },
        {
          icon: <span className="text-green-500 text-2xl">🏥</span>,
          title: "OTC Medicines",
          description: "Browse and order over-the-counter medicines.",
          buttonText: "Shop OTC Medicines",
        },
        {
          icon: <span className="text-green-500 text-2xl">📦</span>,
          title: "Healthcare Products",
          description: "Medical supplies, supplements, and wellness products.",
          buttonText: "Browse Products",
        },
      ],
    },
    {
      title: "Online Consultation",
      description: "Connect with trusted healthcare professionals virtually.",
      cards: [
        {
          icon: <span className="text-blue-500 text-2xl">👨‍⚕️</span>,
          title: "General Physician",
          description: "Consult for common health concerns and issues.",
          buttonText: "Consult a Physician",
        },
        {
          icon: <span className="text-blue-500 text-2xl">👩‍⚕️</span>,
          title: "Specialist Doctors",
          description: "Connect with specialists in various fields.",
          buttonText: "Find a Specialist",
        },
        {
          icon: <span className="text-blue-500 text-2xl">🧠</span>,
          title: "Mental Health",
          description: "Speak with qualified mental health professionals.",
          buttonText: "Mental Health Support",
        },
      ],
    },
    {
      title: "Lab & Diagnostic Tests",
      description: "Comprehensive testing services at your convenience.",
      cards: [
        {
          icon: <span className="text-purple-500 text-2xl">🔬</span>,
          title: "Home Sample Collection",
          description: "Professional sample collection from your home.",
          buttonText: "Schedule Collection",
        },
        {
          icon: <span className="text-purple-500 text-2xl">📋</span>,
          title: "Health Packages",
          description: "Comprehensive health check-up packages.",
          buttonText: "View Packages",
        },
        {
          icon: <span className="text-purple-500 text-2xl">📊</span>,
          title: "Test Reports",
          description: "View and download your test results online.",
          buttonText: "Access Reports",
        },
      ],
    },
    {
      title: "Health Checkup",
      description: "Preventive healthcare packages for your wellbeing.",
      cards: [
        {
          icon: <span className="text-red-500 text-2xl">❤️</span>,
          title: "Basic Health Checkup",
          description: "Essential tests to monitor your health status.",
          buttonText: "Book Basic Checkup",
        },
        {
          icon: <span className="text-red-500 text-2xl">🫀</span>,
          title: "Comprehensive Checkup",
          description: "Detailed assessment of your overall health.",
          buttonText: "Book Comprehensive",
        },
        {
          icon: <span className="text-red-500 text-2xl">🧬</span>,
          title: "Specialized Packages",
          description: "Age and condition specific health packages.",
          buttonText: "View Packages",
        },
      ],
    },
  ];

  // Handle scroll events for arrow visibility
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;
        setScrollPosition(scrollLeft);
        setMaxScroll(scrollWidth - clientWidth);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      // Set initial values
      setMaxScroll(container.scrollWidth - container.clientWidth);
    }

    // Handle resize to update maxScroll
    const handleResize = () => {
      if (scrollContainerRef.current) {
        setMaxScroll(
          scrollContainerRef.current.scrollWidth -
            scrollContainerRef.current.clientWidth
        );
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Scroll handlers
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const handleServiceClick = (index: number) => {
    setActiveService(index);
    // Scroll to the clicked service card
    if (scrollContainerRef.current) {
      const cards =
        scrollContainerRef.current.querySelectorAll(".service-card");
      if (cards[index]) {
        const containerRect =
          scrollContainerRef.current.getBoundingClientRect();
        const cardRect = cards[index].getBoundingClientRect();
        const scrollLeft =
          cardRect.left -
          containerRect.left +
          scrollContainerRef.current.scrollLeft -
          containerRect.width / 2 +
          cardRect.width / 2;
        scrollContainerRef.current.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 md:py-12">
      {/* Main heading */}
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#161D1F]">
          Our Services, Made for You
        </h2>
        <p className="text-[#B0B6B8] mt-2 text-sm md:text-base">
          Explore trusted care solutions by Mediversal
        </p>
      </div>

      {/* Services slider with navigation */}
      <div className="flex items-center relative">
        {/* Left scroll button */}
        <button
          className={`z-10 bg-white rounded-full p-1 shadow-md mr-1 md:mr-2 ${
            scrollPosition <= 0
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100"
          }`}
          onClick={scrollLeft}
          disabled={scrollPosition <= 0}
        >
          <ChevronLeft size={20} className="md:w-6 md:h-6" />
        </button>

        {/* Services container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-3 md:gap-4 pb-4 scrollbar-hide snap-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {serviceCategories.map((service, index) => (
            <div
              key={index}
              className={`service-card flex-shrink-0 w-56 sm:w-60 md:w-72 rounded-lg overflow-hidden shadow-md snap-center cursor-pointer border ${
                activeService === index ? "border-blue-500" : "border-gray-200"
              }`}
              onClick={() => handleServiceClick(index)}
            >
              <div
                className="relative p-4 h-[320px] sm:h-[360px] md:h-[420px] bg-cover bg-center flex flex-col justify-end"
                style={{ backgroundImage: `url(${service.imagePath})` }}
              >
                <div className="absolute top-4 left-4 bg-[#F8F8F8] text-[#161D1F] rounded-full p-3 md:p-4 z-10">
                  <div className="w-6 h-6 md:w-8 md:h-8">{service.icon}</div>
                </div>

                <div className="flex flex-col z-10 text-left align-middle justify-center">
                  <p className="text-xs sm:text-sm text-[#F8F8F8] mb-2">
                    {service.description}
                  </p>
                  <button className="bg-white text-[#161D1F] text-xs sm:text-sm py-2 md:py-3 px-2 rounded">
                    {service.title}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right scroll button */}
        <button
          className={`z-10 bg-white rounded-full p-1 shadow-md ml-1 md:ml-2 ${
            scrollPosition >= maxScroll
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100"
          }`}
          onClick={scrollRight}
          disabled={scrollPosition >= maxScroll}
        >
          <ChevronRight size={20} className="md:w-6 md:h-6" />
        </button>
      </div>

      {/* Service section content */}
      <div className="mt-8 md:mt-12">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
            {serviceSections[activeService].title}
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base px-2">
            {serviceSections[activeService].description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {serviceSections[activeService].cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#E8F4F7] rounded-lg p-4 md:p-6 flex flex-col"
            >
              <div className="mb-3 md:mb-4 bg-white rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="text-base md:text-lg font-semibold text-[#000000] mb-1 md:mb-2">
                {card.title}
              </h3>
              <p className="text-sm md:text-base text-[#000000] mb-3 md:mb-4 flex-grow">
                {card.description}
              </p>
              <button className="text-sm md:text-base text-[#0088B1] border border-[#0088B1] rounded-md py-1.5 md:py-2 px-3 md:px-4 text-center hover:bg-[#67a6b9] hover:text-white transition-colors">
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
