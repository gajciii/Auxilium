import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function UporabnikTable({ uporabniki }) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">Ime</TableCell>
                        <TableCell align="right">Priimek</TableCell>
                        {/* Dodajte dodatne stolpce, ki jih želite prikazati */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {uporabniki.map((uporabnik) => (
                        <TableRow
                            key={uporabnik.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {uporabnik.id}
                            </TableCell>
                            <TableCell align="right">{uporabnik.ime}</TableCell>
                            <TableCell align="right">{uporabnik.priimek}</TableCell>
                            {/* Dodajte dodatne celice, ki predstavljajo druge lastnosti uporabnika */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
