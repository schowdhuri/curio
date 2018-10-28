import React from "react";
import { hot } from "react-hot-loader";

import App from "components/AppContainer";
import EditQuestion from "components/AddEditQuestion";

const EditQuestionPage = props => {
    return (<App navId="editQuestion">
        <Admin questionId={props.questionId} />
    </App>);
};

export default hot(module)(EditQuestionPage);
