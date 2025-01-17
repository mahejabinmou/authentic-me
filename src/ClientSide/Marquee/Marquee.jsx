import React, { useEffect, useRef, useState } from "react";

const Marquee = () => {
	const marqueeRef = useRef(null);
	const [highlightedWord, setHighlightedWord] = useState(null);

	useEffect(() => {
		const marquee = marqueeRef.current;
		let animationFrameId;

		const startMarquee = () => {
			if (marquee) {
				const scrollAmount = 1;
				marquee.scrollLeft += scrollAmount;
				if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
					marquee.scrollLeft = 0;
				}
				animationFrameId = requestAnimationFrame(startMarquee);
			}
		};

		startMarquee();

		return () => {
			cancelAnimationFrame(animationFrameId);
		};
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setHighlightedWord(entry.target.dataset.word);
					}
				});
			},
			{ root: marqueeRef.current, threshold: 1 }
		);

		const words = marqueeRef.current.querySelectorAll(".marquee-word");
		words.forEach((word) => observer.observe(word));

		return () => {
			words.forEach((word) => observer.unobserve(word));
		};
	}, []);

	const words = ["CONSTRUCTION", "SIMULATOR", "INTERIOR", "BUILD", "DESIGN"];

	return (
		<div
			ref={marqueeRef}
			className="sectionGap relative w-full h-40 flex justify-center items-center overflow-hidden whitespace-nowrap border border-gray-200 bg-gray-50"
		>
			<div
				className="flex space-x-20 animate-marquee"
				style={{ width: "200%" }}
			>
				{Array.from({ length: 2 }).map((_, i) => (
					<React.Fragment key={i}>
						{words.map((word, index) => (
							<span
								key={`${word}-${index}`}
								data-word={word}
								className={`marquee-word text-9xl font-Barlow font-bold ${
									highlightedWord === word
										? "text-orange-500 fill-current transition-all"
										: "text-slate-300 outline-2 outline-gray-950"
								}`}
							>
								{word}
							</span>
						))}
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default Marquee;
