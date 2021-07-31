import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';




const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
export default function ShowStudent() {
    const classes = useStyles();
    const [studentsList, setStudentList ] = useState([]);

   
    useEffect(() => {
        axios.get("http://localhost:5000/students/").then(allStudents => {
            setStudentList(allStudents.data);
        });
    }, [])


    return (
        <>
        <h2>All Student</h2>
        
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Registeration Number</TableCell>
                        <TableCell align="right">Grade</TableCell>
                        <TableCell align="right">Section</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {studentsList.map((student, key) => (
                        <TableRow key={key}>
                            <TableCell component="th" scope="row">
                                {student.studentName}
                            </TableCell>
                            <TableCell align="right">{student.regNo}</TableCell>
                            <TableCell align="right">{student.grade}</TableCell>
                            <TableCell align="right">{student.section}</TableCell>
                            <TableCell align="right">
                                
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
}
