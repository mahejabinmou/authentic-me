// /* eslint-disable no-unused-vars */
// import { useEffect, useState } from "react";

// const testimonials = [
// 	{
// 		name: "John Doe",
// 		role: "Civil Engineer",
// 		image: "/client-1.png",
// 		rating: "5/5",
// 		feedback:
// 			"Amazing experience! The quality exceeded my expectations, and the service was outstanding. I'll definitely be coming back!",
// 	},
// 	{
// 		name: "John Doe",
// 		role: "Civil Engineer",
// 		image: "/client-2.png",
// 		rating: "5/5",
// 		feedback:
// 			"Amazing experience! The quality exceeded my expectations, and the service was outstanding. I'll definitely be coming back!",
// 	},
// 	{
// 		name: "John Doe",
// 		role: "Civil Engineer",
// 		image: "/client-3.png",
// 		rating: "5/5",
// 		feedback:
// 			"Amazing experience! The quality exceeded my expectations, and the service was outstanding. I'll definitely be coming back!",
// 	},
// ];

// const Testimonials = () => {
// 	const [currentIndex, setCurrentIndex] = useState(0);
// 	const [visibleCards, setVisibleCards] = useState(1);

// 	const updateVisibleCards = () => {
// 		if (window.innerWidth >= 1024) setVisibleCards(3); // Large screens
// 		else if (window.innerWidth >= 768) setVisibleCards(2); // Medium screens
// 		else setVisibleCards(1); // Small screens
// 	};

// 	useEffect(() => {
// 		updateVisibleCards();
// 		window.addEventListener("resize", updateVisibleCards);
// 		return () => window.removeEventListener("resize", updateVisibleCards);
// 	}, []);

// 	// Auto-slider (un-comment below code if necessary)
// 	// useEffect(() => {
// 	// 	const interval = setInterval(() => {
// 	// 		setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
// 	// 	}, 3000); // 3-second delay

// 	// 	return () => clearInterval(interval); // Cleanup interval on unmount
// 	// }, []);

// 	return (
// 		<div className="flex flex-col items-center justify-center sectionGap overflow-hidden">
// 			<h2 className="globalHead text-center">What our customer&apos;s say</h2>
// 			<div className="flex justify-center items-center mt-[12px] mb-[76px]">
// 				<div className="w-[280px] h-[1px] bg-gray-300"></div>
// 				<div className="w-[15px] h-[15px] bg-[#FE8E38] rounded-full mx-2"></div>
// 				<div className="w-[280px] h-[1px] bg-gray-300"></div>
// 			</div>
// 			<div className="relative w-full px-5 overflow-hidden">
// 				<div
// 					className="flex transition-transform duration-500 ease-in-out"
// 					style={{
// 						transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
// 					}}
// 				>
// 					{testimonials.map((testimonial, index) => (
// 						<div
// 							key={index}
// 							className="w-full lg:w-1/3 md:w-1/2 px-4 shrink-0"
// 							style={{ flex: `0 0 ${100 / visibleCards}%` }}
// 						>
// 							<div className="bg-white p-6 rounded-lg shadow-lg text-center">
// 								<img
// 									src={testimonial.image}
// 									alt={testimonial.name}
// 									className="w-20 h-20 rounded-full mx-auto mb-4"
// 								/>
// 								<h3 className="text-xl font-Inter font-semibold">
// 									{testimonial.name}
// 								</h3>
// 								<p className="text-sm font-Inter text-gray-600">
// 									{testimonial.role}
// 								</p>
// 								<div className="flex justify-center items-center mt-2">
// 									<span className="text-yellow-500 text-lg">★★★★★</span>
// 									<span className="ml-2 text-gray-600">
// 										{testimonial.rating}
// 									</span>
// 								</div>
// 								<p className="heroPara text-[#131212]/[.6] mt-4">
// 									{testimonial.feedback}
// 								</p>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Testimonials;

import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    name: "John Doe",
    role: "Civil Engineer",
    image: "/client-1.png",
    rating: "5/5",
    feedback:
      "Amazing experience! The quality exceeded my expectations, and the service was outstanding. I'll definitely be coming back!",
  },
  {
    name: "John Doe",
    role: "Civil Engineer",
    image: "/client-2.png",
    rating: "5/5",
    feedback:
      "Amazing experience! The quality exceeded my expectations, and the service was outstanding. I'll definitely be coming back!",
  },
  {
    name: "John Doe",
    role: "Civil Engineer",
    image: "/client-3.png",
    rating: "5/5",
    feedback:
      "Amazing experience! The quality exceeded my expectations, and the service was outstanding. I'll definitely be coming back!",
  },
  {
    name: "John Doe",
    role: "Civil Engineer",
    image: "/client-3.png",
    rating: "5/5",
    feedback:
      "Amazing experience! The quality exceeded my expectations, and the service was outstanding. I'll definitely be coming back!",
  },
  {
    name: "John Doe",
    role: "Civil Engineer",
    image: "/client-3.png",
    rating: "5/5",
    feedback:
      "Amazing experience! The quality exceeded my expectations, and the service was outstanding. I'll definitely be coming back!",
  },
  {
    name: "John Doe",
    role: "Civil Engineer",
    image: "/client-3.png",
    rating: "5/5",
    feedback:
      "Amazing experience! The quality exceeded my expectations, and the service was outstanding. I'll definitely be coming back!",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  const updateVisibleCards = () => {
    if (window.innerWidth >= 1024) setVisibleCards(3); // Large screens
    else if (window.innerWidth >= 768) setVisibleCards(2); // Medium screens
    else setVisibleCards(1); // Small screens
  };

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center sectionGap overflow-hidden">
      <h2 className="globalHead text-center">What our customer&apos;s say</h2>
      <div className="flex justify-center items-center mt-[12px] mb-[76px]">
        <div className="w-[280px] h-[1px] bg-gray-300"></div>
        <div className="w-[15px] h-[15px] bg-[#FE8E38] rounded-full mx-2"></div>
        <div className="w-[280px] h-[1px] bg-gray-300"></div>
      </div>

      {/* Slider Container */}
      <div className="relative w-full px-5 overflow-hidden">
        {/* Arrow Controls */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-100 text-gray-600 rounded-full p-3 shadow-md z-10"
          onClick={handlePrev}
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-100 text-gray-600 rounded-full p-3 shadow-md z-10"
          onClick={handleNext}
        >
          <FiChevronRight size={24} />
        </button>

        {/* Slider Content */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`w-full lg:w-1/3 md:w-1/2 px-2 shrink-0 transition-all duration-300 
				
			  `}
              style={{ flex: `0 0 ${100 / visibleCards}%` }}
            >
              <div className="bg-[#F1F1F4]/[.5] p-6 rounded-[8px]  text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <h3 className="testmonialName">{testimonial.name}</h3>
                <p className="testmonialRole">{testimonial.role}</p>
                <div className="flex justify-center items-center mt-2">
                  <span className="text-[#FE8E38] text-lg">★★★★★</span>
                  <span className="ml-2 testmonialRole text-[#FE8E38]">
                    {testimonial.rating}
                  </span>
                </div>
                <p className="testmonialFeedback mt-4">
                  {testimonial.feedback}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
