// serviceData.ts

import { Home, Pill, Phone, Microscope, Activity } from "lucide-react";
import { ReactNode } from "react";

// Card and section types
export interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  buttonText: string;
}

export interface ServiceSectionProps {
  title: string;
  description: string;
  cards: ServiceCardProps[];
}

// Service categories data
export const serviceCategories = [
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
    description: "Keep your health in good condition with our health checkups",
    imagePath: "./HealthCheckUp.svg",
  },
];

// Service sections data
export const serviceSections: ServiceSectionProps[] = [
  {
    title: "Expert Homecare, Right at Your Doorstep",
    description: "Trusted professionals for comfort, care & recovery at home.",
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
  // ... (keep the remaining sections exactly as you have them)
];
