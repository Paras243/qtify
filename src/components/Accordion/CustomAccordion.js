import React, { useState } from "react";
import styles from "./CustomAccordion.module.css";
import upArrow  from "../../assets/images/upArrow.png";
import downArrow  from "../../assets/images/downArrow.png";

const CustomAccordion = ({ data }) => {
	const [show, setShow] = useState(false);

	const _handleClick = () => {
		setShow(!show);
	};

	const { question, answer } = data;
	return (
		<div className={styles.wrapper}>
			<div className={styles.questionWrapper}>
				<h3>{question}</h3>
				<p onClick={_handleClick}>
					{show ? <upArrow /> : <downArrow />}
				</p>
			</div>
			{show && <p className={styles.answerWrapper}>{answer}</p>}
		</div>
	);
};

export default CustomAccordion;