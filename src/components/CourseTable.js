import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function CourseTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Course Id</TableCell>
            <TableCell align="right">Course Name</TableCell>
            <TableCell align="right">Course Location</TableCell>
            <TableCell align="right">Course Content</TableCell>
            <TableCell align="right">Teacher id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.courses.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index}
              </TableCell>
              <TableCell align="right">{row.courseName}</TableCell>
              <TableCell align="right">{row.courseLocation}</TableCell>
              <TableCell align="right">{row.courseContent}</TableCell>
              <TableCell align="right">{row.teacherId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}