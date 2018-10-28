import { connect } from "react-redux";

import * as actions from "../actions";

import Admin from "./Admin";

import {
    getQuestions,
    isLoading
} from "../selectors";

const mapStateToProps = state => ({
    isLoading: isLoading(state),
    questions: getQuestions(state)
});

const mapDispatchToProps = dispatch => ({
    onInit() {
        dispatch(actions.reqQuestions());
    }
});

const AdminContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Admin);

export default AdminContainer;
