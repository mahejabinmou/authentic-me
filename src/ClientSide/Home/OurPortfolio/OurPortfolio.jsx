// import { IoCloseOutline } from "react-icons/io5";

import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const OurPortfolio = () => {
	const [hoveredCard, setHoveredCard] = useState(null);

	const products = [
		{ id: 1, name: "Commercial dining area", image: "/r1.png" },
		{ id: 2, name: "Commercial dining area", image: "/r2.png" },
		{ id: 3, name: "Commercial dining area", image: "/r3.png" },
		{ id: 1, name: "Commercial dining area", image: "/r1.png" },
		{ id: 2, name: "Commercial dining area", image: "/r2.png" },
		{ id: 3, name: "Commercial dining area", image: "/r3.png" },
	];

	const sliderSettings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{ breakpoint: 1024, settings: { slidesToShow: 2 } },
			{ breakpoint: 768, settings: { slidesToShow: 1 } },
		],
	};

	return (
		<div className="sectionTop overflow-hidden">
			<div className="flex flex-col justify-center items-center  mb-[76px]">
				<h2 className="globalHead text-center">Our Portfolio</h2>
				<div className="flex items-center mt-[12px]">
					<div className="w-[280px] h-[1px] bg-gray-300"></div>
					<div className="w-[15px] h-[15px] bg-[#FE8E38] rounded-full mx-2"></div>
					<div className="w-[280px] h-[1px] bg-gray-300"></div>
				</div>
			</div>

			{/* Product Slider */}
			<Slider {...sliderSettings}>
				{products.map((item) => (
					<div key={item.id} className="px-3">
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
								className={`absolute inset-0 bg-black bg-opacity-75 rounded-[8px] transition-all duration-300 h-[467px]
                  ${
										hoveredCard === item.id
											? "opacity-100 pointer-events-auto"
											: "opacity-0 pointer-events-none"
									}`}
							>
								<div className="flex flex-col justify-between gap-72">
									<div className="flex justify-end m-[30px]">
										<div className="text-white p-2 rounded-full cursor-pointer bg-[#FE8E38] transition">
											<FiArrowUpRight size={20} />
										</div>
									</div>
									<div className="flex justify-center items-center">
										<p className="portfolioHoverText font-Inter text-white">
											{item.name}
										</p>
									</div>
								</div>
								{/* <div className="absolute bottom-6 md:bottom-[-10px] right-4">
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="border border-gray-300 p-2 rounded-full cursor-pointer hover:bg-gray-100 transition"
                  >
                    <IoCloseOutline size={20} />
                  </button>
                </div> */}
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default OurPortfolio;
