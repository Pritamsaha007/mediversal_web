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
  Clock,
  Clipboard,
  Monitor,
  Video,
  MessageCircle,
  Users,
  Truck,
  Package,
  Clock3,
} from "lucide-react";
import { CardData } from "./types";

export const healthcareCards: CardData[] = [
  {
    icon: <Home className="w-8 h-8 text-white" />,
    title: "Homecare Services",
    description: "Expert Healthcare professionals at your doorstep",
    imagePath: "./Homecare.svg",
    additionalInfo: {
      title: "Expert Homecare, Right at Your Doorstep",
      description:
        "Trusted professionals for comfort, care & recovery at home.",
      services: [
        {
          icon: <User className="w-5 h-5 text-blue-600" />,
          name: "Caretaker at Home",
          description: "Help with daily tasks, hygiene, and patient support.",
        },
        {
          icon: <ClipboardList className="w-5 h-5 text-blue-600" />,
          name: "Nurse at Home",
          description: "Wound care, injections & post-surgery recovery.",
        },
        {
          icon: <Activity className="w-5 h-5 text-blue-600" />,
          name: "Physiotherapy at Home",
          description: "Pain relief, rehab exercises & improved mobility.",
        },
      ],
      buttonText: "Book a Caretaker",
    },
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-white" />,
    title: "Doctor Consultation",
    description: "Connect with specialists for personalized medical advice",
    imagePath: "./Doctor.svg",
    additionalInfo: {
      title: "Quality Healthcare Consultations",
      description: "Get expert medical advice from the comfort of your home.",
      services: [
        {
          icon: <Video className="w-5 h-5 text-blue-600" />,
          name: "Video Consultation",
          description: "Connect with specialists via secure video calls.",
        },
        {
          icon: <Calendar className="w-5 h-5 text-blue-600" />,
          name: "In-Home Doctor Visits",
          description:
            "Have a physician come to your residence for examinations.",
        },
        {
          icon: <MessageCircle className="w-5 h-5 text-blue-600" />,
          name: "Follow-up Care",
          description: "Ongoing support and monitoring after consultations.",
        },
      ],
      buttonText: "Book an Appointment",
    },
  },
  {
    icon: <Heart className="w-8 h-8 text-white" />,
    title: "Elderly Care",
    description: "Compassionate support for seniors with specialized needs",
    imagePath: "./HealthCheckup.svg",
    additionalInfo: {
      title: "Dedicated Care for Seniors",
      description:
        "Specialized care services designed for elderly comfort and well-being.",
      services: [
        {
          icon: <Users className="w-5 h-5 text-blue-600" />,
          name: "Senior Companion",
          description:
            "Companionship, medication management, and personal care.",
        },
        {
          icon: <Calendar className="w-5 h-5 text-blue-600" />,
          name: "Memory Care",
          description:
            "Specialized support for seniors with dementia or Alzheimer's.",
        },
        {
          icon: <Activity className="w-5 h-5 text-blue-600" />,
          name: "Mobility Assistance",
          description: "Help with movement, exercise, and fall prevention.",
        },
      ],
      buttonText: "Get Elder Care",
    },
  },
  {
    icon: <Baby className="w-8 h-8 text-white" />,
    title: "Pediatric Services",
    description: "Child-friendly healthcare for your little ones",
    imagePath: "./Lab.svg",
    additionalInfo: {
      title: "Expert Pediatric Care",
      description:
        "Child-centered healthcare from certified pediatric specialists.",
      services: [
        {
          icon: <Thermometer className="w-5 h-5 text-blue-600" />,
          name: "Child Development",
          description:
            "Growth monitoring, developmental assessment, and wellness plans.",
        },
        {
          icon: <Calendar className="w-5 h-5 text-blue-600" />,
          name: "Infant Care",
          description:
            "Specialized care for newborns and infants up to 12 months.",
        },
        {
          icon: <Calendar className="w-5 h-5 text-blue-600" />,
          name: "Pediatric First Aid",
          description:
            "Emergency response and care for children's injuries or illness.",
        },
      ],
      buttonText: "Book Pediatric Care",
    },
  },
  {
    icon: <Pill className="w-8 h-8 text-white" />,
    title: "Medication Delivery",
    description: "Fast and reliable delivery of prescribed medications",
    imagePath: "./OnlineCouns.svg",
    additionalInfo: {
      title: "Reliable Medication Delivery",
      description: "Get your prescriptions delivered safely to your doorstep.",
      services: [
        {
          icon: <Truck className="w-5 h-5 text-blue-600" />,
          name: "Rx Delivery",
          description: "Same-day delivery with proper storage and handling.",
        },
        {
          icon: <Package className="w-5 h-5 text-blue-600" />,
          name: "Monthly Medication Box",
          description:
            "Pre-sorted medications delivered on a recurring schedule.",
        },
        {
          icon: <Clock className="w-5 h-5 text-blue-600" />,
          name: "Medication Reminders",
          description: "Timely alerts and dosage tracking to ensure adherence.",
        },
      ],
      buttonText: "Order Medication",
    },
  },
];
