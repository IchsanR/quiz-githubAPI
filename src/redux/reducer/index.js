import { combineReducers } from "redux";
import gitReducer from "./git";

const rootReducer = combineReducers({
	git: gitReducer,
});

export default rootReducer;
