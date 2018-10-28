import * as ACTIONS from "constants/actions";

const initialState = [];

const questionsReducer = (state=initialState, action) => {
    switch(action.type) {
        case ACTIONS.REQ_QUESTIONS_OK:
            return action.value || initialState;
    }
    return state;
};

export default questionsReducer;
