import React, { useState } from "react";
import {
    Button,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import { useDispatch } from 'react-redux'
import { drawerAction } from "../../actions/drawer.action";
import useStyles from './style'


const Appbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()

    const changeDrawer = (e) => {
        setOpen(e)
        dispatch(drawerAction(e));
    }


    return (
        <div className={classes.root}>
            <AppBar
                position="fixed"
                color="secondary"
                className={classes.appBar}
                style={{ backgroundColor: "#477EFA", }}
            >
                <Toolbar variant="dense">
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        onClick={() => changeDrawer(!open)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Digital Aman
          </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Appbar;
