import { combineReducers } from "redux";
import { currentId } from "./currentId";
import postReducer from "./posts";

const allReducers = combineReducers({
    posts: postReducer,
    currentId: currentId
})

export default allReducers;