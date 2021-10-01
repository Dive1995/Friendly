import { combineReducers } from "redux";
import { currentId } from "./currentId";
import postReducer from "./posts";
import authReducer from './auth'

const allReducers = combineReducers({
    posts: postReducer,
    currentId: currentId,
    auth: authReducer
})

export default allReducers;