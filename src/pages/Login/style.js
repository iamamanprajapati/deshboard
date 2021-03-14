import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    root: {
        backgroundColor: theme.palette.grey[300],
        paddingTop: theme.spacing(5),
        height: '100vh',
    },
    paper: {
        [theme.breakpoints.down('sm')]: {
            width: "90%"
        },
        [theme.breakpoints.up('md')]: {
            width: "30%"
        },
    }
}));

export default useStyles;