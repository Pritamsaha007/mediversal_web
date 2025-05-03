import Image from "next/image";
import { Star, User } from "lucide-react";

interface TestimonialCardProps {
  userName: string;
  testimonial: string;
  userPhoto?: string;
  rating?: number;
}

export default function TestimonialCard({
  userName,
  testimonial,
  userPhoto,
  rating = 4,
}: TestimonialCardProps) {
  const validRating = Math.min(5, Math.max(0, rating));

  return (
    <div className="w-[280.62646484375px] h-[200px] bg-[#E8F4F7] rounded-[20px] py-6 px-4 relative">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border-2  flex items-center justify-center bg-[#E5E8E9]">
          {userPhoto ? (
            <Image
              src={userPhoto}
              alt={`${userName} profile`}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="bg-gray-400"></div>
          )}
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-base font-medium text-black">{userName}</h3>

          <div className="flex mb-2">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  className={`${
                    index < validRating ? "fill-[#0088B1]" : ""
                  } text-[#0088B1]`}
                />
              ))}
          </div>
        </div>
      </div>

      <div className="relative">
        <p className="text-md text-[#4F4F4F] px-3 pt-1">"{testimonial}"</p>
      </div>
    </div>
  );
}
