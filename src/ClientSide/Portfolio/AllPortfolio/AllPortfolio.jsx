// /* eslint-disable no-unused-vars */

// import { useState } from "react";
// import { FiArrowUpRight } from "react-icons/fi";
// import { IoCloseOutline } from "react-icons/io5";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";

// const AllPortfolio = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const products = [
//     { id: 1, name: "Commercial dining area", image: "/r1.png" },
//     { id: 2, name: "Commercial dining area", image: "/r2.png" },
//     { id: 3, name: "Commercial dining area", image: "/r3.png" },
//     { id: 1, name: "Commercial dining area", image: "/r1.png" },
//     { id: 2, name: "Commercial dining area", image: "/r2.png" },
//     { id: 3, name: "Commercial dining area", image: "/r3.png" },
//   ];

//   //   const sliderSettings = {
//   //     dots: false,
//   //     infinite: true,
//   //     speed: 500,
//   //     slidesToShow: 4,
//   //     slidesToScroll: 1,
//   //     autoplay: true,
//   //     autoplaySpeed: 3000,
//   //     responsive: [
//   //       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//   //       { breakpoint: 768, settings: { slidesToShow: 1 } },
//   //     ],
//   //   };

//   return (
//     <div className="sectionGap">
//       {/* Product Slider */}
//       {/* <Slider {...sliderSettings}> */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-[15px]">
//         {products.map((item) => (
//           <div key={item.id}>
//             <div
//               className={`relative p-5 bg-no-repeat bg-center bg-cover h-[466px] bg-white shadow-lg rounded-[8px] transition-all duration-300 cursor-pointer group`}
//               style={{
//                 backgroundImage: `url(${item.image})`,
//               }}
//               onMouseEnter={() => setHoveredCard(item.id)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               {/* Hover Effect */}
//               <div
//                 className={`absolute inset-0 bg-black bg-opacity-75 rounded-[8px] transition-all duration-300 h-[467px]
//                   ${
//                     hoveredCard === item.id
//                       ? "opacity-100 pointer-events-auto"
//                       : "opacity-0 pointer-events-none"
//                   }`}
//               >
//                 <div className="flex justify-end m-[30px]">
//                   <div className="text-white p-2 rounded-full cursor-pointer bg-[#FE8E38] transition">
//                     <FiArrowUpRight size={20} />
//                   </div>
//                 </div>
//                 <p className="portfolioHoverText font-Inter text-white absolute bottom-[75px] left-[100px] flex justify-center items-center">
//                   {item.name}
//                 </p>
//                 {/* <div className="absolute bottom-6 md:bottom-[-10px] right-4">
//                   <button
//                     onClick={(e) => e.stopPropagation()}
//                     className="border border-gray-300 p-2 rounded-full cursor-pointer hover:bg-gray-100 transition"
//                   >
//                     <IoCloseOutline size={20} />
//                   </button>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* </Slider> */}
//     </div>
//   );
// };

// export default AllPortfolio;

import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const AllPortfolio = () => {
	const [hoveredCard, setHoveredCard] = useState(null);

	const products = [
		// { id: 1, name: "Commercial dining area", image: "/r1.png", route: "/portfolio/1" }, demo
		{ id: 1, name: "Commercial dining area", image: "/r1.png" },
		{ id: 2, name: "Commercial dining area", image: "/r2.png" },
		{ id: 3, name: "Commercial dining area", image: "/r3.png" },
		{ id: 4, name: "Commercial dining area", image: "/r1.png" },
		{ id: 5, name: "Commercial dining area", image: "/r2.png" },
		{ id: 6, name: "Commercial dining area", image: "/r3.png" },
	];

	return (
		<div className="sectionGap">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-[15px]">
				{products.map((item) => (
					<div key={item.id}>
						{/* Wrap each card with Link */}
						{/* <Link to={item.route}> demo */}
						<Link to="/portfolio-detail">
							<div
								className={`relative p-5 bg-no-repeat bg-center bg-cover h-[466px] bg-white shadow-lg rounded-[8px] transition-all duration-300 cursor-pointer group`}
								style={{
									backgroundImage: `url(${item.image})`,
								}}
								onMouseEnter={() => setHoveredCard(item.id)}
								onMouseLeave={() => setHoveredCard(null)}
							>
								{/* Hover Effect */}
								<div
									className={`absolute inset-0 bg-black bg-opacity-75 rounded-[8px] transition-all duration-300 h-[467px] flex flex-col justify-between p-6 ${
										hoveredCard === item.id ? "opacity-100" : "opacity-0"
									}`}
								>
									{/* Icon */}
									<div className="flex justify-end">
										<div className="text-white p-2 rounded-full cursor-pointer bg-[#FE8E38] transition">
											<FiArrowUpRight size={20} />
										</div>
									</div>

									{/* Title */}
									<p className="portfolioHoverText font-Inter text-white text-center">
										{item.name}
									</p>
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default AllPortfolio;
