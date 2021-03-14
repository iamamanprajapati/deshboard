import React from 'react';
import { Paper, Box, TextField, Typography, Button, CssBaseline, InputAdornment } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';



export default function Login() {

    const submit = () => {
        localStorage.setItem('token', 'aman')
        console.log('run ')
    }
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <div className={classes.root}>
                <Paper component={Box} className={classes.paper} mx="auto" p={4} >
                    <Typography>Login</Typography>
                    <Box component="form" mt={2} >
                        <TextField
                            fullWidth
                            required={true}
                            type="email"
                            placeholder="Enter Your Email"
                            margin="normal"
                            variant="outlined"
                            label="Email"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MailIcon />
                                    </InputAdornment>
                                )
                            }}
                        />
                        <TextField
                            fullWidth
                            required={true}
                            placeholder="Enter Password"
                            type="password"
                            margin="normal"
                            variant="outlined"
                            label="Password"
                            helperText="atleast 8 characters"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircleIcon />
                                    </InputAdornment>
                                )
                            }} />


                        <Button variant="contained" fullWidth color="secondary" onClick={() => submit()}>
                            Signin
                        </Button>
                    </Box>
                </Paper>
            </div>
        </>
    );
}