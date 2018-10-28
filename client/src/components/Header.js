import React from "react";
import { Link, Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { drawerWidth } from "constants/theme";

const styles = theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: "none"
        }
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        }
    }
});

class Header extends React.PureComponent {
    render() {
        const {
            classes,
            navId,
            onOpenSidebar,
            onCloseSidebar
        } = this.props;
        return (<AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="Menu"
                    aria-haspopup="true"
                    onClick={onOpenSidebar}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" className={classes.grow}>
                    Curio
                </Typography>
                <Route path="/admin" component={() => (
                    <React.Fragment>
                        <Button component={Link} to="/admin/question/add" color="inherit">Add</Button>
                        <Button component={Link} to="/admin/question/import" color="inherit">Import</Button>
                    </React.Fragment>
                    )} />
            </Toolbar>

        </AppBar>);
    }
};
Header.propTypes = {

};

export default withStyles(styles)(Header);
