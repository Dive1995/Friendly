import { combineReducers } from "redux";
import { currentId } from "./currentId";
import postReducer from "./posts";
import authReducer from './auth'
import errorReducer from "./error";

const allReducers = combineReducers({
    posts: postReducer,
    currentId: currentId,
    auth: authReducer,
    error: errorReducer
})

export default allReducers;