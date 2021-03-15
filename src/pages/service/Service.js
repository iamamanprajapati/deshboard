import React, { useState } from 'react';
import { Table, TablePagination, Container, Toolbar, Button, Input } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import useStyles from './style'
import { Paper, Box, TextField, Typography, InputAdornment } from '@material-ui/core';
import CategoryIcon from '@material-ui/icons/Category';
import { useSelector } from 'react-redux'


export default function Service() {
    const classes = useStyles();
    const services = useSelector((state) => state.services);
    const serviceList = services.service

    const [page, setpage] = useState(0)
    const [rowsperpage, setrowsperpage] = useState(10)

    const [open, setOpen] = React.useState(false);


    const handleClose = () => {
        setOpen(false);
    };

    const onChangePage = (event, nextPage) => {
        setpage(nextPage)
    }

    const onChangeRowsPerPage = (event) => {
        setrowsperpage(event.target.value)
    }

    return (
        <Container className={classes.root}>
            <Toolbar />
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Paper component={Box} className={classes.paper} mx="auto" p={2} >
                        <Typography>Add Service</Typography>
                        <Box component="form" mt={0} >
                            <TextField
                                fullWidth
                                required={true}
                                type="text"
                                placeholder="Enter Service Name"
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true
                                }}
                                InputProps={{
                                    className: classes.input,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <CategoryIcon color="secondary" />
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <Input disableUnderline color="secondary" style={{ marginBottom: 10 }} type="file" />
                            <Button variant="contained" fullWidth color="secondary" onClick={() => alert('hello')}>
                                Add
                        </Button>
                        </Box>
                    </Paper>
                </Fade>
            </Modal>
            <Button onClick={() => setOpen(true)}>
                <AddCircleIcon color="primary" style={{ position: 'fixed', bottom: 40, right: 40, fontSize: 50, zIndex: 100000 }} />
            </Button>
            <TableContainer WithStyles component={Paper} classes={{ root: classes.customTableContainer }}>
                <Table stickyHeader>
                    <TableHead >
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell >Title</TableCell>
                            <TableCell>Image</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {serviceList.length && serviceList.slice(page * rowsperpage, page * rowsperpage + rowsperpage).map((row) => (
                            <TableRow key={row.id}>
                                <TableCell  >
                                    {row.id}
                                </TableCell>
                                <TableCell >
                                    {row.name}
                                </TableCell>
                                <TableCell >
                                    <Avatar alt="Remy Sharp" src={`http://147.139.33.186/uploads/services/${row.serviceImage}`} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[10, 20, 50, 100]}
                    count={serviceList.length}
                    rowsPerPage={rowsperpage}
                    page={page}
                    onChangePage={onChangePage}
                    onChangeRowsPerPage={onChangeRowsPerPage}
                />
            </TableContainer>
        </Container>
    );
}