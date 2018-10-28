import { connect } from "react-redux";

import * as actions from "../actions";

import AddEditQuestion from "./AddEditQuestion";

import {
    getQuestion,
    isLoading
} from "../selectors";

const mapStateToProps = state => ({
    isLoading: isLoading(state),
    question: getQuestion(state)
});

const mapDispatchToProps = dispatch => ({
    onInit() {
        dispatch(actions.reqQuestion());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddEditQuestion);
