import { combineReducers } from "redux";
import postReducer from "./posts";

const allReducers = combineReducers({
    posts: postReducer
})

export default allReducers;