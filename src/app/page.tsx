import Image from "next/image";
import WhyChooseCard from "./components/whyChooseCard";
import TestimonialCard from "./components/testimonialCard";
import VideoCard from "./components/videoCard";
import Banner from "./components/Banner";
import Footer from "./components/Foooter";
import { Video } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center text-[#0088B1]">
        Why Choose Mediversal
      </h2>
      <div className="flex flex-wrap gap-8 justify-center p-8 ">
        <WhyChooseCard
          h1="Genuine Medicines"
          p1="100% original medicines delivered safely to your home."
        />

        <WhyChooseCard
          h1="Accurate Tests & Reports"
          p1="Reliable tests from NABL - accredited labs for accurate results."
        />
      </div>
      <h2 className="text-2xl sm:text-3xl font-semibold text-center text-[#0088B1] mb-6">
        Patients & Customers Testimonials
      </h2>
      <div className="flex flex-wrap gap-8 justify-center">
        <VideoCard
          videoId="PG16dZwJ5dQ"
          thumbnailUrl="https://img.youtube.com/vi/PG16dZwJ5dQ/hqdefault.jpg"
        />
        <VideoCard
          videoId="9EX_amIrXIg"
          thumbnailUrl="https://img.youtube.com/vi/9EX_amIrXIg/hqdefault.jpg"
        />
      </div>

      <div className="flex flex-wrap gap-6 justify-center p-8">
        <TestimonialCard
          userName="Priya M."
          testimonial="The at-home lab test was so convenient. The technician was professional and I got my results the same day."
          rating={4}
        />

        <TestimonialCard
          userName="John D."
          testimonial="I loved the ease of scheduling my test. The process was straightforward and the results were delivered quickly."
          rating={5}
        />

        <TestimonialCard
          userName="Sara L."
          testimonial="The mobile app made it easy to track my test. I felt supported throughout the entire process"
          rating={4}
        />

        <TestimonialCard
          userName="Sara L."
          testimonial="The mobile app made it easy to track my test. I felt supported throughout the entire process"
          rating={4}
        />
        <button className="inline-flex items-center justify-center bg-white text-[#0088B1] border border-[#0088B1] rounded-md px-5 py-2 text-base transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105">
          <Video className="w-5 h-5 mr-2" />
          Watch Video Stories
        </button>
      </div>

      <Banner />

      <Footer />
    </div>
  );
}
