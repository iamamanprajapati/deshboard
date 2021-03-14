import React, { useState } from "react";
import {
    Toolbar,
    Typography,
    List,
    ListItem,
    ListItemText,
    Hidden,
    Divider,
    SwipeableDrawer,
    Collapse,
} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useDispatch, useSelector } from 'react-redux'
import { drawerActionToFalse } from "../../actions/drawer.action";
import { Link } from "react-router-dom";
import BuildIcon from '@material-ui/icons/Build';
import useStyles from './style'
import CategoryIcon from '@material-ui/icons/Category';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

const Drawer = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [openlist, setOpenlist] = useState(false);
    const data = useSelector(state => state.drawer)
    const dispatch = useDispatch();

    const chargeDrawer = () => {
        dispatch(drawerActionToFalse(false))
    }


    const drawerItems = (
        <>
            <Toolbar variant="dense" />
            <Divider />
            <List disablePadding className={classes.list}>
                <ListItem button className={classes.listitem} style={{ backgroundColor: "#477EFA", }} alignItems="center" onClick={() => setOpenlist(!openlist)}>
                    <HomeIcon style={{ color: "white" }} fontSize="small" />
                    <Typography className={classes.typography} style={{ marginLeft: 15, marginRight: 55 }} >
                        Dashboard
          </Typography>
                    <ArrowRightIcon style={{ color: "white", }} fontSize="small" />
                </ListItem>

                <Collapse in={openlist} >
                    <List disablePadding >
                        <ListItem className={classes.nestedItem} divider={true} >
                            <ListItemText primary={<Typography className={classes.listTypography}>Home</Typography>} />
                        </ListItem>
                        <ListItem className={classes.nestedItem} divider={true}>
                            <ListItemText primary={<Typography className={classes.listTypography}>Contact</Typography>} />
                        </ListItem>
                        <ListItem className={classes.nestedItem} divider={true}>
                            <ListItemText primary={<Typography className={classes.listTypography}>About US</Typography>} />
                        </ListItem>
                        <ListItem className={classes.nestedItem}>
                            <ListItemText primary={<Typography className={classes.listTypography}>Privacy Policy</Typography>} />
                        </ListItem>
                    </List>
                </Collapse>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <ListItem button className={classes.listitem} style={{ backgroundColor: "#477EFA", }} alignItems="center" >
                        <CategoryIcon style={{ color: "white" }} fontSize="small" />
                        <Typography className={classes.typography} style={{ marginLeft: 15, marginRight: 55 }} >
                            Category
                        </Typography>
                    </ListItem>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="services">
                    <ListItem button className={classes.listitem} style={{ backgroundColor: "#477EFA", }} alignItems="center" >
                        <BuildIcon style={{ color: "white" }} fontSize="small" />
                        <Typography className={classes.typography} style={{ marginLeft: 15, marginRight: 55 }} >
                            Services
                        </Typography>
                    </ListItem>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="bookings">
                    <ListItem button className={classes.listitem} style={{ backgroundColor: "#477EFA", }} alignItems="center" >
                        <AddShoppingCartIcon style={{ color: "white" }} fontSize="small" />
                        <Typography className={classes.typography} style={{ marginLeft: 15, marginRight: 55 }} >
                            Bookings
                        </Typography>
                    </ListItem>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="partners">
                    <ListItem button className={classes.listitem} style={{ backgroundColor: "#477EFA", }} alignItems="center" >
                        <PeopleIcon style={{ color: "white" }} fontSize="small" />
                        <Typography className={classes.typography} style={{ marginLeft: 15, marginRight: 55 }} >
                            Partners
                        </Typography>
                    </ListItem>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="notifications">
                    <ListItem button className={classes.listitem} style={{ backgroundColor: "#477EFA" }} alignItems="center" >
                        <NotificationsActiveIcon style={{ color: "white" }} fontSize="small" />
                        <Typography className={classes.typography} style={{ marginLeft: 15, marginRight: 55 }} >
                            Notifications
                        </Typography>
                    </ListItem>
                </Link>
            </List>
        </>
    );

    return (
        <div>
            <Hidden smUp implementation="css" className={classes.drawer}>
                <SwipeableDrawer open={data.data} onOpen={() => { }} onClose={() => chargeDrawer()} >
                    {drawerItems}
                </SwipeableDrawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <SwipeableDrawer open={open} onOpen={() => { }} variant="permanent" onClose={() => setOpen(false)} >
                    {drawerItems}
                </SwipeableDrawer>
            </Hidden>
        </div>
    );
};

export default Drawer;