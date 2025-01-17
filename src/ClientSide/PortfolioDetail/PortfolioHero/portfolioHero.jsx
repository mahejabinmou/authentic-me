// /img-trial/img1.jpg
import { CiShoppingTag } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";

const PortfolioHero = () => {
	return (
		<div className="text-black font-Inter sectionGap">
			{/* Image Section */}
			<div className="grid grid-cols-1 gap-6 md:grid-cols-1">
				{/* Main Image */}
				<div className="rounded-lg overflow-hidden">
					<img
						src="/img-trial/img1.jpg" // Placeholder for main image
						alt="Main Design"
						className="w-full h-[300px] md:h-[500px] lg:h-[700px] xl:h-[900px] object-cover"
					/>
				</div>

				{/* Side Images */}
				<div className="grid grid-cols-2 gap-6">
					<div className="rounded-lg overflow-hidden">
						<img
							src="/img-trial/img2.jpg" // Placeholder for side image 1
							alt="Side Design 1"
							className="w-full h-auto object-cover"
						/>
					</div>
					<div className="rounded-lg overflow-hidden">
						<img
							src="/img-trial/img3.jpg" // Placeholder for side image 2
							alt="Side Design 2"
							className="w-full h-auto object-cover"
						/>
					</div>
				</div>
			</div>

			{/* Title and Text Section */}
			<div className="my-20 grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* Title */}
				<div>
					<h2 className="text-2xl md:text-3xl font-bold mb-4">
						Creating authentic and character for most Luxury Residential project
					</h2>
				</div>

				{/* Description */}
				<div>
					<p className="text-gray-600 text-sm leading-relaxed md:text-base">
						We are passionate, knowing that people live, work, play and inhabit
						the spaces and places we imagine and envision for our clients. To
						those wanting to make an impact with design. We are passionate,
						knowing that people live, work, play and inhabit the spaces and
						places we imagine and envision for our clients. To those wanting to
						make an impact with design.
					</p>
				</div>
			</div>

			{/* Details Section */}
			<div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-6">
				{/* Client Info */}
				<div className="bg-gray-200/35 p-4 rounded-lg text-center">
					<span className="text-orange-500 text-2xl flex justify-center">
						<RxAvatar />
					</span>
					<p className="font-bold text-gray-950 my-2">Client</p>
					<p className="text-gray-600 text-sm">Modern Designers</p>
				</div>

				{/* Category Info */}
				<div className="bg-gray-200/35 p-4 rounded-lg text-center">
					<span className="text-orange-500 text-2xl flex justify-center">
						<CiShoppingTag />
					</span>
					<p className="font-bold text-gray-950 my-2">Category</p>
					<p className="text-gray-600 text-sm">Residential Design</p>
				</div>

				{/* Start Date Info */}
				<div className="bg-gray-200/35 p-4 rounded-lg text-center">
					<span className="text-orange-500 text-2xl flex justify-center">
						<IoCalendarOutline />
					</span>
					<p className="font-bold text-gray-950 my-2">Start Date</p>
					<p className="text-gray-600 text-sm">17th Dec 2022</p>
				</div>

				{/* End Date Info */}
				<div className="bg-gray-200/35 p-4 rounded-lg text-center">
					<span className="text-orange-500 text-2xl flex justify-center">
						<IoCalendarOutline />
					</span>
					<p className="font-bold text-gray-950 my-2">End Date</p>
					<p className="text-gray-600 text-sm">21st Feb 2016</p>
				</div>

				{/* Project Value */}
				<div className="bg-gray-200/35 p-4 rounded-lg text-center">
					<span className="text-orange-500 text-2xl flex justify-center">
						<CiShoppingTag />
					</span>
					<p className="font-bold text-gray-950 my-2">Project Value</p>
					<p className="text-gray-600 text-sm">20,000</p>
				</div>
			</div>
		</div>
	);
};

export default PortfolioHero;
