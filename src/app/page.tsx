import Image from "next/image";
import WhyChooseCard from "./components/whyChooseCard";
import TestimonialCard from "./components/testimonialCard";
import VideoCard from "./components/videoCard";
import Banner from "./components/Banner";
import Footer from "./components/Foooter";
import { Video } from "lucide-react";
import Hero from "./components/Hero";
import Service from "./components/Service";

export default function Home() {
  return (
    <div className="bg-white md:px-[100px] px-[10px]">
      <Hero />
      <Service />
      <h2 className="text-2xl sm:text-3xl font-semibold text-center text-[#0088B1] mt-5">
        Why Choose Mediversal
      </h2>
      <div className="overflow-x-auto">
        <div className="flex flex-nowrap gap-6 px-6 py-6 md:flex-wrap md:justify-center lg:px-10">
          <WhyChooseCard
            h1="Genuine Medicines"
            p1="100% original medicines delivered safely to your home."
          />
          <WhyChooseCard
            h1="Accurate Tests & Reports"
            p1="Reliable tests from NABL - accredited labs for accurate results."
          />
          <WhyChooseCard
            h1="Trusted Doctors"
            p1="Experienced specialists who care about your health."
          />
          <WhyChooseCard
            h1="Personal Care & Attention"
            p1="Care and treatments tailored just for you."
          />
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl font-semibold text-center text-[#0088B1] mt-5 mb-5">
        Patients & Customers Testimonials
      </h2>
      <div className="flex flex-wrap gap-8 justify-center px-5">
        <VideoCard
          videoId="PG16dZwJ5dQ"
          thumbnailUrl="https://img.youtube.com/vi/PG16dZwJ5dQ/hqdefault.jpg"
        />
        <VideoCard
          videoId="9EX_amIrXIg"
          thumbnailUrl="https://img.youtube.com/vi/9EX_amIrXIg/hqdefault.jpg"
        />
      </div>

      <div className="overflow-x-auto">
        <div className="flex flex-nowrap gap-6 p-6 md:flex-wrap md:justify-center hide-scrollbar">
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
            testimonial="The mobile app made it easy to track my test. I felt supported throughout the entire process."
            rating={4}
          />
          <TestimonialCard
            userName="Mark T."
            testimonial="Having a technician come to my home was a game changer. I would recommend this service to everyone."
            rating={4}
          />
        </div>
      </div>
      <div className="flex justify-center mt-5 mb-5">
        <button className="flex-shrink-0 inline-flex items-center justify-center bg-white text-[#0088B1] border border-[#0088B1] rounded-md px-5 py-2 text-base transition-all duration-300 hover:bg-primary hover:text-[#0088B1] hover:scale-105">
          <Video className="w-5 h-5 mr-2" />
          Watch Video Stories
        </button>
      </div>
      <Banner />

      <Footer />
    </div>
  );
}
