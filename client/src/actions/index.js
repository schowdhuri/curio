import * as ACTIONS from "constants/actions";

export const setupInvalidateSession = () => ({
    type: ACTIONS.SETUP_SESSION_INV
});

export const reqLoginStatus = () => ({
    type: ACTIONS.REQ_LOGIN_STATUS
});

export const rcvLoginStatus = user => ({
    type: ACTIONS.RCV_LOGIN_STATUS,
    user
});

export const setLoading = (id, status) => ({
    type: ACTIONS.IS_LOADING,
    id,
    status
});

export const reqQuestions = () => ({
    type: ACTIONS.REQ_QUESTIONS
});

export const reqQuestionsOK = value => ({
    type: ACTIONS.REQ_QUESTIONS_OK,
    value
});

export const reqQuestionsERR = err => ({
    type: ACTIONS.REQ_QUESTIONS_ERR,
    err
});

export const reqQuestion = () => ({
    type: ACTIONS.REQ_QUESTION
});

export const reqQuestionOK = value => ({
    type: ACTIONS.REQ_QUESTION_OK,
    value
});

export const reqQuestionERR = err => ({
    type: ACTIONS.REQ_QUESTION_ERR,
    err
});
