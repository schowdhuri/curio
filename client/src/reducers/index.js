import { combineReducers } from "redux";

import question from "./question";
import questions from "./questions";

const rootReducer = combineReducers({
    question,
    questions
});

export default rootReducer;
