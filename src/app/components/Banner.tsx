import React from "react";

import BannerImage from "../../../public/assets/HomePage - 02 1.svg";
import BannerImage1 from "../../../public/assets/HomePage - 02 2.svg";
import GooglePlayBadge from "../../../public/assets/googleplay.svg";
import AppStoreBadge from "../../../public/assets/appstore.svg";
import Image from "next/image";
function Banner() {
  return (
    <div className="w-full bg-primary flex bg-[#0088B1] justify-between items-center px-5 py-16 lg:px-5 lg:py-16 xl:px-20 xl:py-20 flex-wrap">
      <div className="hidden lg:flex w-1/4 relative -mb-16 justify-center items-center">
        <Image src={BannerImage} alt="Banner" className="w-full h-auto" />
      </div>

      <div className="w-full lg:w-1/2 text-white text-center px-5">
        <p className="text-4xl md:text-5xl font-semibold leading-snug mb-4">
          Simplifying Healthcare
          <br />
          Impacting Lives
        </p>
        <p className="text-lg md:text-xl mt-5 mb-3">
          Download the App for Free
        </p>
        <div className="flex justify-center gap-5 flex-col sm:flex-row items-center mt-4">
          <a
            href="https://play.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={GooglePlayBadge}
              alt="Get it on Google Play"
              className="h-14"
            />
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={AppStoreBadge}
              alt="Download on the App Store"
              className="h-14"
            />
          </a>
        </div>
      </div>

      <div className="hidden lg:flex w-1/4 relative -mt-24 justify-center items-center">
        <Image src={BannerImage1} alt="Banner 1" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default Banner;
