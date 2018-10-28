import React from "react";

import Button from "common/images/google_signin.png";

import "./Home.css";

const HomeApp = () => (<div className="login">
    <section className="login-panel">
        {/*<img src={Logo} alt="Quiz App Logo" className="logo" />*/}
        <h1>Quiz App</h1>
        <p className="brief">

        </p>
        <a className="btn btn-login" href="/auth/google">
            <img src={Button} alt="Sign in with Google" />
        </a>
    </section>

    <footer>
        Code released under the <a href="https://github.com/schowdhuri/testman/blob/master/LICENSE">MIT License</a>
    </footer>
</div>);

export default HomeApp;
