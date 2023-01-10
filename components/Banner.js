import React from "react";

const Banner = () => {
  return (
    <div className="p-4 py-14 bg-[rgba(248,247,255,1)] h-full 760:h-[70vh] 760:flex 760:items-center justify-center 960:px-16 1080:px-20">
      <div className="text-center 560:px-20 560:py-1 760:px-0 760:py-0 760:w-[45%] 760:mr-6 760:text-left 1080:w-[40%]">
        <h2 className="text-2xl font-medium 760:text-3xl 960:text-4xl">
            If you want to grow you have to do something different from the majority of people.
        </h2>
        <button className="bg-[#EF5366] text-white py-2 px-4 text-sm uppercase rounded-md mt-5 760:mt-12">Lets Start with us</button>
      </div>
      <img src="./banner.webp" alt="orbitius" className="mt-6 760:w-[50%]" />
    </div>
  );
};

export default Banner;
