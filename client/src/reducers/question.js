import * as ACTIONS from "constants/actions";

const initialState = {};

const questionReducer = (state=initialState, action) => {
    switch(action.type) {
        case ACTIONS.CHANGE_QUESTION:
            return action.value || initialState;
        case ACTIONS.REQ_QUESTION_OK:
            return action.value || initialState;
    }
    return state;
};

export default questionReducer;
