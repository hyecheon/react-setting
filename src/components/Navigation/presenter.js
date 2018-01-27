import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import {Link} from "react-router-dom";

const Navigation = (props, context) => (
	<div>
		<div>
			<Link to="/">
				{context.t("HOME")}
			</Link>
		</div>
		<div>
			<Link to="/sample">
				{context.t("SAMPLE")}
			</Link>
		</div>
	</div>
);
Navigation.contextTypes = {
	t: PropTypes.func.isRequired
};

export default Navigation;
