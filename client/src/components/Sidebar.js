import React from "react";
import { Link } from "react-router-dom";
import BarChartIcon from "@material-ui/icons/BarChart";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";
import { withStyles } from "@material-ui/core/styles";

import { drawerWidth } from "constants/theme";

const styles = theme => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        }
    },
    drawerPaper: {
        width: drawerWidth
    }
});

const items = [{
    name: "Dashboard",
    icon: <DashboardIcon />,
    href: "/"
}, {
    name: "Leaderboard",
    icon: <BarChartIcon />,
}, {
    name: "Admin",
    icon: <SettingsIcon />,
    href: "/admin"
}];

const drawer = (<div>
    <List>
        {items.map(item => (item.href
            ? (<ListItem key={item.name} component={Link} to={item.href}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
            </ListItem>)
            : (<ListItem button key={item.name}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
            </ListItem>)
        ))}
    </List>
    <Divider />
    <List>
        <ListItem button>
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText primary="Logout" />
        </ListItem>
    </List>
</div>);

const Sidebar = ({ classes, open, onClose }) => {
    return (<nav className={classes.drawer}>
        <Hidden smUp implementation="css">
            <Drawer
                variant="temporary"
                anchor="left"
                open={open}
                onClose={onClose}
                classes={{
                    paper: classes.drawerPaper,
                }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                {drawer}
            </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
            <Drawer
                classes={{
                    paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
            >
                {drawer}
            </Drawer>
        </Hidden>
    </nav>);
};

export default withStyles(styles)(Sidebar);
