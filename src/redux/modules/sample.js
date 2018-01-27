// imports

// actions

const SAMPLE = "SAMPLE";

// action creators

function setSample(input) {
	return {
		type: SAMPLE,
		input
	};
}

// API Actions

function sampleApi(input, message) {
	return (dispatch, getState) => {
		/*fetch(`/sample/${input}/comments/`, {
			method: "POST",
			headers: {
				"Content-Type": 'application/json'
			},
		}).then(response => response.json())
			.then(json => {
				dispatch(setSample(json));
			});*/
		dispatch(setSample(input))
	};
}

// Initial State

const initialState = {};

// Reducer

function reducer(state = initialState, action) {
	switch (action.type) {
		case SAMPLE:
			return applySetSample(state, action);
		default:
			return state;
	}
}

// Reducer Functions

function applySetSample(state, action) {
	return {
		...state,
	};
}

// Exports

const actionCreators = {
	sampleApi
};

export {actionCreators};

// Export reducer by default

export default reducer;
