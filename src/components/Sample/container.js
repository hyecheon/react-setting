import React, {Component} from 'react';
import Sample from "./presenter";

class Container extends Component {
	state = {
		sampleState: false
	};
	
	render() {
		return (
			<Sample
				{...this.props}
				{...this.state}
				clickHandler={this._onClick}
			/>
		);
	}
	
	_onClick = (event) => {
		const {_sampleApi} = this.props;
		this.setState({
			sampleState: true
		});
		_sampleApi();
		console.log(this.props);
		console.log(this.state);
	};
}

export default Container;

