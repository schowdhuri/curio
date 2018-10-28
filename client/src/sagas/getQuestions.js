import Alert from "react-s-alert";
import { call, put, takeEvery } from "redux-saga/effects";

import request from "utils/request";

import { REQ_QUESTIONS } from "constants/actions";
import {
    reqQuestionsOK,
    reqQuestionsERR,
    setLoading
} from "../actions";

function* getQ() {
    yield put(setLoading(REQ_QUESTIONS, true));
    try {
        const response = yield call(request, {
            url: "/api/question",
            type: "get",
            dataType: "json"
        });
        yield put(reqQuestionsOK(response.json));
    } catch(ex) {
        console.log(ex); // eslint-disable-line no-console
        Alert.error("Failed to fetch questions");
        yield put(reqQuestionsERR(ex));
    }
    yield put(setLoading(REQ_QUESTIONS, false));
}

export default function* () {
    yield takeEvery(REQ_QUESTIONS, getQ);
};
