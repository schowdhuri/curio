import { connect } from "react-redux";

import * as actions from "../actions";

import Dashboard from "./Dashboard";

import {
    getQuestions,
    isLoading
} from "../selectors";

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    onInit() {

    }
});

const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);

export default DashboardContainer;
