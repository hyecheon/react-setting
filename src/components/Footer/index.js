import React from 'react'
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Footer = (props, context) => (
	<footer>
		<div>
			<span>{context.t("copyright")}{" by "}{context.t("lee hye choen")}</span>
		</div>
	</footer>
);
Footer.contextTypes = {
	t: PropTypes.func.isRequired
};

export default Footer;
