import React from "react";
import { hot } from "react-hot-loader";

import App from "components/AppContainer";
import Admin from "components/AdminContainer";

const ImportQuestionsPage = props => {
    return (<App navId="importQuestions">
        <Admin />
    </App>);
};

export default hot(module)(ImportQuestionsPage);
