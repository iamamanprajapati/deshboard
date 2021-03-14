import React, { useState } from 'react';
import { Table, TablePagination, Container, Toolbar } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './style'
import { Paper } from '@material-ui/core';
import { useSelector } from 'react-redux'


export default function Booking() {
    const classes = useStyles();

    const [page, setpage] = useState(0)
    const [rowsperpage, setrowsperpage] = useState(10)
    const bookings = useSelector((state) => state.bookings);
    const bookingList = bookings.booking
    console.log(bookingList)

    const onChangePage = (event, nextPage) => {
        setpage(nextPage)
    }

    const onChangeRowsPerPage = (event) => {
        setrowsperpage(event.target.value)
    }


    return (

        <Container className={classes.root}>
            <Toolbar />
            <TableContainer component={Paper} classes={{ root: classes.customTableContainer }}>
                <Table stickyHeader>
                    <TableHead >
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell >Service</TableCell>
                            <TableCell >Address</TableCell>
                            <TableCell>Image</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bookingList.length && bookingList.slice(page * rowsperpage, page * rowsperpage + rowsperpage).map((row) => (
                            <TableRow key={row.id}>
                                <TableCell  >
                                    {row.id}
                                </TableCell>
                                <TableCell >
                                    {row.service.name}
                                </TableCell>
                                <TableCell >
                                    {row.address.street}
                                </TableCell>
                                <TableCell >
                                    <Avatar alt="Remy Sharp" src={`http://147.139.33.186/uploads/services/${row.service.serviceImage}`} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    WithStyles
                    rowsPerPageOptions={[10, 20, 50, 100]}
                    count={bookingList.length}
                    rowsPerPage={rowsperpage}
                    page={page}
                    onChangePage={onChangePage}
                    onChangeRowsPerPage={onChangeRowsPerPage}
                />
            </TableContainer>

        </Container>
    );
}