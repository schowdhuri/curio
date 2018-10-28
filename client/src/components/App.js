import React from "react";
import PropTypes from "prop-types";
import Alert from "react-s-alert";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Grow from "@material-ui/core/Grow";
import Hidden from '@material-ui/core/Hidden';
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import Sidebar from "./Sidebar";
import Header from "./Header";
import LoadingOverlay from "./LoadingOverlay";
import { contentWidth, largeScreen, drawerWidth } from "constants/theme";

import "./App.css"

const Wrapper = styled.div`
    display: flex;
`;
const Main = styled.main`
    padding: 10px;
    ${largeScreen(`
        flex-grow: 1;
    `)}
`;

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        }
    },
    drawerPaper: {
        width: drawerWidth
    },
    toolbar: theme.mixins.toolbar
});

class App extends React.Component {
    state = {
        sidebarOpen: false
    }
    constructor() {
        super();
        this.handleCloseSidebar = this.handleCloseSidebar.bind(this);
        this.handleOpenSidebar = this.handleOpenSidebar.bind(this);
    }
    componentDidMount() {
        this.props.onInit();
    }
    handleCloseSidebar() {
        this.setState({ sidebarOpen: false });
    }
    handleOpenSidebar() {
        this.setState({ sidebarOpen: true });
    }
    render() {
        const { classes, navId } = this.props;
        const { sidebarOpen } = this.state;
        return (<Wrapper>
            <Header
                navId={navId}
                onOpenSidebar={this.handleOpenSidebar}
                onCloseSidebar={this.handleCloseSidebar} />
            <Sidebar open={sidebarOpen} onClose={this.handleCloseSidebar} />
            <Main>
                <div className={classes.toolbar} />
                {this.props.children}
                <Alert position="top" effect="stackslide" stack={{ limit: 2 }} />
                <LoadingOverlay loading={this.props.isLoading} />
            </Main>
        </Wrapper>);
    }
}
App.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.array
    ]),
    isLoading: PropTypes.bool.isRequired,
    navId: PropTypes.string,
    onInit: PropTypes.func.isRequired
};

export default withStyles(styles)(App);
