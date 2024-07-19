// hooks/useScrollAnimation.js
import { useEffect, useRef, useState } from "react";
import {
	useAnimation,
	useInView,
	useViewportScroll,
	useTransform,
} from "framer-motion";

const useScrollAnimation = () => {
	const controls = useAnimation();
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: "0px 0px -120px 0px" });
	const [currentStep, setCurrentStep] = useState(0);

	useEffect(() => {
		if (inView) {
			setCurrentStep(1);
		}
	}, [inView]);

	useEffect(() => {
		if (currentStep === 1) {
			controls.start("step1").then(() => {
				setCurrentStep(2);
			});
		} else if (currentStep === 2) {
			controls.start("step2").then(() => {
				setCurrentStep(3);
			});
		} else if (currentStep === 3) {
			controls.start("step3").then(() => {
				setCurrentStep(4);
			});
		}
	}, [currentStep, controls]);

	const { scrollY } = useViewportScroll();
	const yPos = useTransform(scrollY, [0, 1000], [0, 100]);

	useEffect(() => {
		yPos.onChange((latest) => {
			document.documentElement.style.setProperty("--bg-pos", `${latest}px`);
		});
	}, [yPos]);

	const containerVariants = {
		step1: {
			transition: {
				staggerChildren: 0.325,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 50 },
		step1: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 50 },
		step1: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				ease: "easeOut",
			},
		},
	};

	const imageVariants = {
		hidden: {
			opacity: 0,
			y: 50,
			transformOrigin: "center",
		},
		step1: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.725,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
		step2: {
			scale: 1.25,
			transformOrigin: "top",
			transition: {
				duration: 1.225,
				ease: "easeOut",
			},
		},
	};

	return {
		ref,
		controls,
		containerVariants,
		itemVariants,
		yPos,
		cardVariants,
		imageVariants,
	};
};

export default useScrollAnimation;
