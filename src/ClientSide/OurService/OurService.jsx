/* eslint-disable react/prop-types */

import { useState } from "react";

const services = [
	{
		id: 1,
		title: "Shower Encloser",
		description:
			"Transform your bathroom into a modern and stylish space with a shower enclosure from A Z Traders.",
		image: "/service-img-1.png",
		icon: "/service-icon.svg",
	},
	{
		id: 2,
		title: "Lighting Solution",
		description:
			"Transform your bathroom into a modern and stylish space with a lighting solution from A Z Traders.",
		image: "/service-img-2.png",
		icon: "/service-icon.svg",
	},
	{
		id: 3,
		title: "Shower Encloser",
		description:
			"Transform your bathroom into a modern and stylish space with a shower enclosure from A Z Traders.",
		image: "/service-img-3.png",
		icon: "/service-icon.svg",
	},
	{
		id: 4,
		title: "Shower Encloser",
		description:
			"Transform your bathroom into a modern and stylish space with a shower enclosure from A Z Traders.",
		image: "/service-img-4.png",
		icon: "/service-icon.svg",
	},
	{
		id: 5,
		title: "Lighting Solution",
		description:
			"Transform your bathroom into a modern and stylish space with a lighting solution from A Z Traders.",
		image: "/service-img-5.png",
		icon: "/service-icon.svg",
	},
	{
		id: 6,
		title: "Shower Encloser",
		description:
			"Transform your bathroom into a modern and stylish space with a shower enclosure from A Z Traders.",
		image: "/service-img-6.png",
		icon: "/service-icon.svg",
	},
];

const Modal = ({ service, isOpen, onClose }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed   inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="bg-white rounded-lg  p-[50px] max-w-[80%] relative">
				<button
					className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
					onClick={onClose}
				>
					X
				</button>
				<h3 className="globalHead mb-[30px]">{service.title}</h3>
				<div className="flex flex-col lg:flex-row gap-[50px]  justify-center items-center">
					<img
						src={service.image}
						alt={service.title}
						className="h-[200px] md:h-[290px] object-cover  rounded-[16px]"
					/>
					<p className="heroPara text-[#131212]/[.6]"> {service.description}</p>
				</div>
			</div>
		</div>
	);
};

const ServicesSection = () => {
	const [selectedService, setSelectedService] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = (service) => {
		setSelectedService(service);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setSelectedService(null);
		setIsModalOpen(false);
	};

	return (
		<div className="sectionGap">
			<h2 className="globalHead text-center">Our services</h2>
			<div className="flex justify-center items-center mt-[12px] mb-[76px]">
				<div className="w-[280px] h-[1px] bg-gray-300"></div>
				<div className="w-[15px] h-[15px] bg-[#FE8E38] rounded-full mx-2"></div>
				<div className="w-[280px] h-[1px] bg-gray-300"></div>
			</div>
			<div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{services.map((service) => (
					<div
						key={service.id}
						className="border rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 px-8 cursor-pointer"
						onClick={() => openModal(service)}
					>
						<div className="my-8">
							<img
								src={service.icon}
								alt={service.title}
								className="w-14 h-14 mb-5"
							/>
						</div>
						<div className="">
							<h3 className="text-xl font-Inter font-semibold mb-4">
								{service.title}
							</h3>
							<img
								src={service.image}
								alt={service.title}
								className="w-full h-48 object-cover mb-4 rounded-xl"
							/>
							<p className="heroPara text-[#131212]/[.6]">
								{service.description}
							</p>
							<div className="flex justify-start">
								<button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:border-orange-500 text-gray-600 hover:text-orange-500 transition my-7 cursor-pointer z-[100]">
									→
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
			{/* Modal */}
			<Modal
				service={selectedService}
				isOpen={isModalOpen}
				onClose={closeModal}
			/>
		</div>
	);
};

export default ServicesSection;
