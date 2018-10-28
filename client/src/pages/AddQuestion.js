import React from "react";
import { hot } from "react-hot-loader";

import App from "components/AppContainer";
import AddQuestion from "components/AddEditQuestionContainer";

const AddQuestionPage = () => {
    return (<App navId="addQuestion">
        <AddQuestion />
    </App>);
};

export default hot(module)(AddQuestionPage);
