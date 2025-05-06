import {
  Home,
  Heart,
  Stethoscope,
  Baby,
  Pill,
  ClipboardList,
  User,
  Activity,
  Thermometer,
  Calendar,
  Video,
  MessageCircle,
  Users,
  BaggageClaim,
} from "lucide-react";
import { CardData } from "./types";

export const healthcareCards: CardData[] = [
  {
    icon: (
      <Home
        className="w-8 h-8 text-[#161D1F] font-extralight"
        strokeWidth={1}
      />
    ),
    title: "Homecare Services",
    description: "Expert Healthcare professionals at your doorstep",
    imagePath: "./Homecare.svg",
    additionalInfo: {
      title: "Expert Homecare, Right at Your Doorstep",
      description:
        "Trusted professionals for comfort, care & recovery at home.",
      services: [
        {
          icon: <User className="w-6 h-6 text-yellow-500" />,
          name: "Caretaker at Home",
          description: "Help with daily tasks, hygiene, and patient support.",
        },
        {
          icon: <ClipboardList className="w-6 h-6 text-yellow-500" />,
          name: "Nurse at Home",
          description: "Wound care, injections & post-surgery recovery.",
        },
        {
          icon: <Activity className="w-6 h-6 text-yellow-500" />,
          name: "Physiotherapy at Home",
          description: "Pain relief, rehab exercises & improved mobility.",
        },
      ],
      buttonText: "Book a Caretaker",
    },
  },
  {
    icon: <BaggageClaim className="w-8 h-8 text-[#161D1F]" strokeWidth={1} />,
    title: "E-Pharmacy",
    description: "Convenient online pharmacy for all your needs",
    imagePath: "./E-Pharmacy.svg",
    additionalInfo: {
      title: "Quality Healthcare Consultations",
      description: "Get expert medical advice from the comfort of your home.",
      services: [
        {
          icon: <Video className="w-6 h-6 text-yellow-500" />,
          name: "Video Consultation",
          description: "Connect with specialists via secure video calls.",
        },
        {
          icon: <Calendar className="w-6 h-6 text-yellow-500" />,
          name: "In-Home Doctor Visits",
          description:
            "Have a physician come to your residence for examinations.",
        },
        {
          icon: <MessageCircle className="w-6 h-6 text-yellow-500" />,
          name: "Follow-up Care",
          description: "Ongoing support and monitoring after consultations.",
        },
      ],
      buttonText: "Book an Appointment",
    },
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-[#161D1F]" strokeWidth={1} />,
    title: "Online Consultation",
    description: "Connect with specialists for personalized medical advice",
    imagePath: "./doctor.svg",
    additionalInfo: {
      title: "Quality Healthcare Consultations",
      description: "Get expert medical advice from the comfort of your home.",
      services: [
        {
          icon: <Video className="w-6 h-6 text-yellow-500" />,
          name: "Video Consultation",
          description: "Connect with specialists via secure video calls.",
        },
        {
          icon: <Calendar className="w-6 h-6 text-yellow-500" />,
          name: "In-Home Doctor Visits",
          description:
            "Have a physician come to your residence for examinations.",
        },
        {
          icon: <MessageCircle className="w-6 h-6 text-yellow-500" />,
          name: "Follow-up Care",
          description: "Ongoing support and monitoring after consultations.",
        },
      ],
      buttonText: "Book an Appointment",
    },
  },
  {
    icon: <Heart className="w-8 h-8 text-[#161D1F]" strokeWidth={1} />,
    title: "Lab & Diagnostic Test",
    description: "Receive your lab results right at home.",
    imagePath: "./Lab.svg",
    additionalInfo: {
      title: "Dedicated Care for Seniors",
      description:
        "Specialized care services designed for elderly comfort and well-being.",
      services: [
        {
          icon: <Users className="w-6 h-6 text-yellow-500" />,
          name: "Senior Companion",
          description:
            "Companionship, medication management, and personal care.",
        },
        {
          icon: <Calendar className="w-6 h-6 text-yellow-500" />,
          name: "Memory Care",
          description:
            "Specialized support for seniors with dementia or Alzheimer's.",
        },
        {
          icon: <Activity className="w-6 h-6 text-yellow-500" />,
          name: "Mobility Assistance",
          description: "Help with movement, exercise, and fall prevention.",
        },
      ],
      buttonText: "Get Elder Care",
    },
  },
  {
    icon: <Baby className="w-8 h-8 text-[#161D1F]" strokeWidth={1} />,
    title: "Health Checkups",
    description: "Keep your health in good condition with our health checkup.",
    imagePath: "./HealthCheckUp.svg",
    additionalInfo: {
      title: "Expert Pediatric Care",
      description:
        "Child-centered healthcare from certified pediatric specialists.",
      services: [
        {
          icon: <Thermometer className="w-6 h-6 text-yellow-500" />,
          name: "Child Development",
          description:
            "Growth monitoring, developmental assessment, and wellness plans.",
        },
        {
          icon: <Calendar className="w-6 h-6 text-yellow-500" />,
          name: "Infant Care",
          description:
            "Specialized care for newborns and infants up to 12 months.",
        },
        {
          icon: <Calendar className="w-6 h-6 text-yellow-500" />,
          name: "Pediatric First Aid",
          description:
            "Emergency response and care for children's injuries or illness.",
        },
      ],
      buttonText: "Book Pediatric Care",
    },
  },
];
