import {connect} from 'react-redux';
import Container from "./container";
import React from 'react';
import {actionCreators as sample} from "../../redux/modules/sample"

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		_sampleApi: () => {
			dispatch(sample.sampleApi("input"));
		}
	}
};

const mapStateToProps = (state, ownProps) => {
	return {
		sample: "sample",
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
