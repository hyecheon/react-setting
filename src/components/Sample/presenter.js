import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const Sample = (props, context) => (
	<div>
		{console.log(props)}
		{"hello"}
		<button onClick={props.clickHandler}>{props.sampleState}</button>
	</div>
);

Sample.propTypes = {
	clickHandler:PropTypes.func.isRequired,
};

Sample.contextTypes = {
	t: PropTypes.func.isRequired
};

export default Sample;
