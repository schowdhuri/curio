import React from "react";
import { hot } from "react-hot-loader";

import App from "components/AppContainer";
import Admin from "components/AdminContainer";

const AdminPage = props => {
    return (<App navId="admin" {...props}>
        <Admin {...props} />
    </App>);
};

export default hot(module)(AdminPage);
