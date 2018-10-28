import { connect } from "react-redux";

import App from "./App";

import { reqLoginStatus, setupInvalidateSession } from "../actions";

import { isLoading } from "../selectors";

const mapStateToProps = state => ({
    isLoading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
    onInit() {
        dispatch(setupInvalidateSession());
        dispatch(reqLoginStatus());
    }
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
