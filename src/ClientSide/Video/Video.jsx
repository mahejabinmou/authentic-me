import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Video = () => {
	const logos = [
		{
			id: 1,
			name: "MNR",
			video: "https://www.youtube.com/embed/Ld_LFBFFEaw?si=qKKBB4CkngZrsJBF",
		},
		{
			id: 2,
			name: "MGH",
			video: "https://www.youtube.com/embed/7_NTgU05yL0?si=QvGWjCVRu2cgmFZ0",
		},
	];

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,

		responsive: [
			{
				breakpoint: 1535,
				settings: { slidesToShow: 2, slidesToScroll: 1 },
			},
			{
				breakpoint: 768,
				settings: { slidesToShow: 1, slidesToScroll: 1 },
			},
			{
				breakpoint: 480,
				settings: { slidesToShow: 1, slidesToScroll: 1 },
			},
		],
	};

	return (
		<div className="sectionTop overflow-hidden">
			{/* Title and Description */}
			{/* <div className="flex flex-col items-center justify-center mb-[76px]">
        <h2 className="globalHead text-center">Our clients</h2>
        <div className="flex items-center mt-[12px]">
          <div className="w-[280px] h-[1px] bg-gray-300"></div>
          <div className="w-[15px] h-[15px] bg-[#FE8E38] rounded-full mx-2"></div>
          <div className="w-[280px] h-[1px] bg-gray-300"></div>
        </div>
      </div> */}

			{/* Sliding Videos */}
			<div className="relative">
				<Slider {...settings}>
					{logos.concat(logos).map((logo, index) => (
						<div
							key={index}
							className="px-[10px]" // Adds horizontal spacing between slides
						>
							<div className="flex justify-center items-center">
								<iframe
									width="800"
									height="484"
									src={logo.video}
									title={logo.name}
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowFullScreen
									className="h-[484px] w-[700px] rounded-lg md:rounded-xl lg:rounded-2xl" // Optional: Add rounded corners to the iframe
								></iframe>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Video;
