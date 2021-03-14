import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    root: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: 230
        },

    },
    customTableContainer: {
        overflowX: "initial",
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        [theme.breakpoints.down('sm')]: {
            width: "80%"
        },
        [theme.breakpoints.up('md')]: {
            width: "20%",
            height:200
        },
        alignItems:'center'
    },
    input: {
        height: 40,
        width: "100%",
        fontSize:11,
        margin:'auto'
    },
    button:{
        
    }
}));

export default useStyles