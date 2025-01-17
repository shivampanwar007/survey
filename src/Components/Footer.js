import React from "react";
import { MdLocationPin } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import { MdMarkEmailRead } from "react-icons/md";

export default function Footer() {
  return (
    <div className="text-white  font-serif flex lg:flex-row   justify-between lg:justify-normal lg:px-[40px] px-4 py-[30px] bg-[#2e4884]">
      <div className="lg:w-[400px] 2xl:w-[600px]">
      {/* bg-gradient-to-l from-[#202453] to-[#0f55bf] */}
        <a href="https://www.tehrihills.com/">
          <img
            className="md:w-[110px] md:h-[60px] w-[100px] h-[55px] mb-3"
            src="./LOGO-WHITE.webp"
            alt="TehriHills"
          />
        </a>
        <p className="md:w-[300px] md:pl-2 text-[12px] md:text-[16px] ">
          Your Trusted Global Market Research Company
        </p>
      </div>
      <div className="flex lg:flex-row flex-col lg:gap-[130px] 2xl:gap-[400px]">
      <div className="space-y-3">
        <p className="text-orange-400 md:text-[24px] text-[18px] font-semibold">
          Get In Touch
        </p>
        <div className="flex gap-2 items-center ">
          <MdLocationPin color="orange " fontSize={24} />

          <p className="md:w-[350px] text-[12px] md:text-[16px]">
            USA office address - 2435 Gill Road, Port Clinton OH 43452
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <MdLocationPin color="orange " fontSize={24} />

          <p className="md:w-[350px] text-[12px] md:text-[16px]">
            Head office address - 2G-34, Vidhi Vihar, New Tehri, Tehri Gharwal,
            Uttarakhand -249001
          </p>
        </div>
      </div>
      <div className="space-y-2 text-[12px] md:text-[16px] lg:mt-10 mt-2">
        <div className="flex gap-2 items-center">
          <GiRotaryPhone color="orange " fontSize={24} />
          <p>+1-419-504-1602</p>
        </div>
        <div className="flex gap-3 items-center">
          <MdMarkEmailRead color="orange " fontSize={24} />
          <p>info@tehrihills.com</p>
        </div>
      </div>
      </div>
    </div>
  );
}
