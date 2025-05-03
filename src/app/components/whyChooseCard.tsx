import Image from "next/image";
import CardImg from "../../../public/assets/happiness-young-white-men-race-adult 1.svg";

interface WhyChooseCardProps {
  h1: string;
  p1: string;
  imageSrc?: string | any;
  imageAlt?: string;
}

export default function WhyChooseCard({
  h1,
  p1,
  imageSrc = CardImg,
  imageAlt = "Why Choose Card",
}: WhyChooseCardProps) {
  return (
    <>
      <div className="min-w-[260px] max-w-[280px] h-[350px] bg-white rounded-[20px] shadow-[0px_4px_40px_rgba(0,0,0,0.1)] flex-shrink-0 flex flex-col items-center p-4">
        <div className="h-[202px] flex items-center justify-center mb-2">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={248}
            height={202}
            className="object-contain max-w-[248px] max-h-[202px]"
          />
        </div>
        <h1 className="text-[20px] font-bold text-center text-black">{h1}</h1>
        <p className="text-[16px] font-normal text-center text-[#4F4F4F]">
          {p1}
        </p>
      </div>
    </>
  );
}
