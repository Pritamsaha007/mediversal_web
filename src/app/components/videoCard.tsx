"use client";
import { useState } from "react";
import { Play } from "lucide-react";

interface VideoCardProps {
  videoId: string;
  thumbnailUrl?: string;
  title?: string;
}

export default function VideoCard({
  videoId,
  thumbnailUrl,
  title,
}: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-[598px] h-[349px] bg-[#E8F4F7] rounded-[20px] overflow-hidden relative">
      {isPlaying ? (
        <iframe
          title={`YouTube Video ${videoId}`}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0`}
          frameBorder="0"
          allow="autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      ) : (
        <div
          className="w-full h-full bg-cover bg-center flex items-center justify-center cursor-pointer"
          style={
            thumbnailUrl ? { backgroundImage: `url(${thumbnailUrl})` } : {}
          }
          onClick={() => setIsPlaying(true)}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="relative inline-flex items-center justify-center">
              {/* <span className="absolute text-[#B0B6B8] font-bold text-opacity-30 text-[64px] z-0 whitespace-nowrap">
                Video Here
              </span> */}
              <Play size={48} className="text-[#0088B1] z-10" fill="#0088B1" />
            </div>

            {title && (
              <h3 className="text-white text-lg font-medium mt-4 text-center max-w-[80%] drop-shadow-md">
                {title}
              </h3>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
