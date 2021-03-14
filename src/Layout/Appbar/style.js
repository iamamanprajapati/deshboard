import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 230;
const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up("sm")]: { paddingLeft: drawerWidth }
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    title: {
        marginRight: "auto"
    },
    appBar: {
        [theme.breakpoints.up("sm")]: {
            width: '100%'
        },
        zIndex: theme.zIndex.drawer + 1
    },
}));

export default useStyles;