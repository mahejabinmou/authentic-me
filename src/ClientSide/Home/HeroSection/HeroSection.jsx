// import { useState } from "react";
// import { GoArrowDown, GoArrowUp } from "react-icons/go";
// import { MdArrowOutward } from "react-icons/md";

// // Sample Slide Data
// const slides = [
//   {
//     id: 1,
//     bgImage: "/bgZaman.jpg",
//     title: "Transform Your Space with Style",
//     description:
//       "Explore our extensive range of high-quality products and services tailored just for you. Whether you're looking for interior design we’ve got everything you need to make your experience unforgettable. Start your journey now and discover what makes us stand out.",
//     buttonText: "Contact us",
//   },
//   {
//     id: 2,
//     bgImage: "/bgZaman2.jpg",
//     title: "Transform Your Space with Style",
//     description:
//       "Explore our extensive range of high-quality products and services tailored just for you. Whether you're looking for interior design we’ve got everything you need to make your experience unforgettable. Start your journey now and discover what makes us stand out.",
//     buttonText: "Contact us",
//   },
// ];

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Handle Slide Change
//   const handleSlideChange = (direction) => {
//     if (direction === "up") {
//       setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     } else if (direction === "down") {
//       setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//     }
//   };

//   const { bgImage, title, description, buttonText } = slides[currentSlide];

//   return (
//     <div className="relative h-[676px] overflow-hidden">
//       {/* Background Image */}
//       <div
//         style={{
//           backgroundImage: `url(${bgImage})`,
//         }}
//         className="bg-no-repeat bg-center bg-cover w-full h-full transition-all duration-500 ease-in-out"
//       ></div>

//       {/* Content Section */}

//       <div
//         className="absolute inset-0  md:text-left
//       flex flex-col justify-center items-center  text-center"
//       >
//         <h1 className="text-[#FFFFFF] pb-[16px] heroHead  text-center">
//           {title}
//         </h1>
//         <p className="text-[#FFFFFF]/80 pb-[40px] heroPara text-center font-Inter max-w-[768px]">
//           {description}
//         </p>
//         <div className="globalBtnDiv  mx-auto">
//           <button className="globalBtn ">
//             {buttonText} <MdArrowOutward />
//           </button>
//         </div>
//       </div>

//       {/* Scroll Arrows */}
//       <div className="absolute right-[30px] top-[320px] transform -translate-y-1/2 flex lg:flex-col items-center gap-4 z-50">
//         {/* Up Arrow */}
//         <button
//           onClick={() => handleSlideChange("up")}
//           className="bg-transparent border border-[#FFFFFF] text-white p-3 rounded-full hover:bg-gray-700 transition duration-300"
//         >
//           <GoArrowUp className="w-6 h-6" />
//         </button>

//         {/* Down Arrow */}
//         <button
//           onClick={() => handleSlideChange("down")}
//           className="bg-transparent border border-[#FFFFFF] text-white p-3 rounded-full hover:bg-gray-700 transition duration-300"
//         >
//           <GoArrowDown className="w-6 h-6" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import { useEffect, useState } from "react";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";

// Sample Slide Data
const slides = [
  {
    id: 1,
    bgImage: "/bgZaman.jpg",
    title: "Transform Your Space with Style",
    description:
      "Explore our extensive range of high-quality products and services tailored just for you. Whether you're looking for interior design we’ve got everything you need to make your experience unforgettable. Start your journey now and discover what makes us stand out.",
    buttonText: "Contact us",
  },
  {
    id: 2,
    bgImage: "/bgZaman2.jpg",
    title: "Transform Your Space with Style",
    description:
      "Explore our extensive range of high-quality products and services tailored just for you. Whether you're looking for interior design we’ve got everything you need to make your experience unforgettable. Start your journey now and discover what makes us stand out.",
    buttonText: "Contact us",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle Slide Change
  const handleSlideChange = (direction) => {
    if (direction === "up") {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    } else if (direction === "down") {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  // Auto-slide functionality
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(autoSlide);
  }, []);

  const { bgImage, title, description, buttonText } = slides[currentSlide];

  return (
    <div className="relative h-[676px] overflow-hidden">
      {/* Background Image */}
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
        className="bg-no-repeat bg-center bg-cover w-full h-full transition-all duration-500 ease-in-out"
      ></div>

      {/* Content Section */}
      <div
        className="absolute inset-0  md:text-left sectionGap md:sectionGap
      flex flex-col justify-center items-center  text-center"
      >
        <div className="hidden lg:block">
          <div className="flex items-center mt-[12px] ">
            <div className="w-[120px] h-[1px] bg-gray-300"></div>
            <h1 className="text-[#FFFFFF] pb-[16px] heroHead  text-center mx-4">
              {title}
            </h1>
            <div className="w-[120px] h-[1px] bg-gray-300"></div>
          </div>
        </div>

        <div className=" lg:hidden  block   text-[#FFFFFF] pb-[16px] heroHead  text-center">
          {title}
        </div>

        <p className="text-[#FFFFFF]/80 pb-[40px] heroPara text-center font-Inter max-w-[768px]">
          {description}
        </p>
        <div className="globalBtnDiv  mx-auto">
          <button className="globalBtn ">
            {buttonText} <MdArrowOutward />
          </button>
        </div>
      </div>

      {/* Scroll Arrows */}
      <div className=" hidden lg:block ">
        <div className="absolute   right-[30px] top-[320px] transform -translate-y-1/2 flex flex-col items-center gap-4 z-50">
          {/* Up Arrow */}
          <button
            onClick={() => handleSlideChange("up")}
            className="bg-transparent border border-[#FFFFFF] text-white p-3 rounded-full hover:bg-gray-700 transition duration-300"
          >
            <GoArrowUp className="w-6 h-6" />
          </button>

          {/* Down Arrow */}
          <button
            onClick={() => handleSlideChange("down")}
            className="bg-transparent border border-[#FFFFFF] text-white p-3 rounded-full hover:bg-gray-700 transition duration-300"
          >
            <GoArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
