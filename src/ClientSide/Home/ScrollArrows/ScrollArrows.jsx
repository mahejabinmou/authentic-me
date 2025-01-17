import React from "react";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

const ScrollArrows = () => {
  return (
    <div className="fixed right-[50px] top-[320px] transform -translate-y-1/2 flex flex-col items-center gap-4 z-50">
      {/* Up Arrow */}
      <button className="bg-transparent  border border-[#FFFFFF] text-white p-3 rounded-full hover:bg-gray-700 transition duration-300">
        <GoArrowDown className="w-6 h-6" />
      </button>

      {/* Down Arrow */}
      <button className=" text-white mt-[14px] p-3 border border-[#FFFFFF] rounded-full hover:bg-gray-700 transition duration-300">
        <GoArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ScrollArrows;
