import { spawn } from "redux-saga/effects";

import getQuestions from "./getQuestions";

function* rootSaga() {
    yield spawn(getQuestions);
}

export default rootSaga;
