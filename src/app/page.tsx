import Image from "next/image";
import Hero from "./components/Hero";
import Service from "./components/Service";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Hero />
      <Service />
    </div>
  );
}
