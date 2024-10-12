/*import React, { useEffect } from "react";
import { useSwiper } from "swiper/react";
import { useState } from "react";
import styles from "../Carousel.module.css";
import { ReactComponent as RightArrow } from "../../../assets/images/RightArrow.svg";

const CarouselRightNavigation = () => {
	const swiper = useSwiper();

	const [isEnd, setIsEnd] = useState(swiper.isEnd);

	useEffect(() => {
		swiper.on("slideChange", () => {
			setIsEnd(swiper.isEnd);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={styles.rightNavigation}> 
			{!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
		</div>
	);
};

export default CarouselRightNavigation;*/

import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "../Carousel.module.css";
import { ReactComponent as RightArrow } from "../../../assets/images/RightArrow.svg";

const CarouselRightNavigation = () => {
	const swiper = useSwiper();
	const [isEnd, setIsEnd] = useState(swiper.isEnd);

	useEffect(() => {
		const updateIsEnd = () => {
			setIsEnd(swiper.isEnd); // Track if we are at the end
		};

		swiper.on("slideChange", updateIsEnd);
		return () => swiper.off("slideChange", updateIsEnd); // Cleanup listener
	}, [swiper]);

	return (
		<div className={styles.rightNavigation}>
			{!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
		</div>
	);
};

export default CarouselRightNavigation;

