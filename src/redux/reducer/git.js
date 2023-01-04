const initialState = {
	data: [],
	isLoading: false,
	isError: false,
};

const gitReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_LIST_REPO_PENDING":
			return { ...state, isLoading: true };
		case "GET_LIST_REPO_REJECTED":
			return { ...state, isError: true };
		case "GET_LIST_REPO_FULLFILED":
			return { ...state, isLoading: false, data: action.payload.data };
		default:
			return state;
	}
};

export default gitReducer;
