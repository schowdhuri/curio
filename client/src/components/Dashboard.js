import React from "react";
import PropTypes from "prop-types";

class Dashboard extends React.PureComponent {
    componentDidMount() {
        this.props.onInit();
    }
    render() {
        return (<div>
            TODO: dashboard
        </div>);
    }
}
Dashboard.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onInit: PropTypes.func.isRequired
};

export default Dashboard;
