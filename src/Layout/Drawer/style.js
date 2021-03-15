import { makeStyles } from "@material-ui/core/styles";


const drawerWidth = 230;
const useStyles = makeStyles((theme) => ({
    list: {
        width: drawerWidth
    },
    drawer: {
        zIndex: theme.zIndex.drawer + 1
    },

    content: {
        padding: theme.spacing(0, 3)
    },
    toolbar: theme.mixins.toolbar,
    listitem: {
        width: '90%',
        height: 40,
        margin: 10,
        borderRadius: 4,
    },
    listitemtext: {
        fontFamily: "Open Sans"
    },
    typography: {
        fontFamily: theme.typography.fontFamily[3],
        color: 'white',
    },
    nestedItem: {
        paddingLeft: theme.spacing(8)
    },
    listTypography: {
        fontFamily: theme.typography.fontFamily[4],
    },
    header:{
        [theme.breakpoints.up('sm')]: {
            display:'none'
          },
    },
    toolbar1:{
        [theme.breakpoints.down('xs')]: {
            display: 'none'
          },
    }

}));


export default useStyles;