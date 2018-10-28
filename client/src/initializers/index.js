import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import createMiddleware from "redux-saga";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import configureStore from "utils/store"; // eslint-disable-line import/default
import reducer from "reducers/index";
import sagas from "sagas/index";

import DashboardPage from "pages/Dashboard";
import AdminHome from "pages/Admin";
import AddQuestion from "pages/AddQuestion";
import ImportQuestions from "pages/ImportQuestions";
import EditQuestion from "pages/EditQuestion";

import history from "utils/history";

const sagaMiddleware = createMiddleware();
const store = configureStore(reducer, sagaMiddleware);
sagaMiddleware.run(sagas);

const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    }
});

ReactDOM.render(<Provider store={store}>
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={DashboardPage} />
                <Route path="/admin" component={AdminHome} />
            </Switch>
        </Router>
    </MuiThemeProvider>
</Provider>, document.getElementById("app-root"));

/*
<Route path="/admin/question/add" exact component={AddQuestion} />
                <Route path="/admin/question/import" exact component={ImportQuestions} />
                <Route path="/admin/question/edit/:qid" exact component={EditQuestion} />
                */
