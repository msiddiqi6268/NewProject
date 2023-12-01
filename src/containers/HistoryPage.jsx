import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
function createData(date, filename, snapChart, diffChart, placeholder1, placeholder2, 
  analysisReport, placeholder3) {
  return { date, filename, snapChart, diffChart, placeholder1, placeholder1, 
    analysisReport, placeholder2 };
}

const rows = [
  createData('01/12/2023', 'filename', 6.0, 24, 4.0, 6.0, 24, 4.0),
  createData('01/12/2023', 'filename', 9.0, 37, 4.3, 9.0, 37, 4.3),
  createData('01/12/2023', 'filename', 16.0, 24, 6.0, 16.0, 24, 6.0),
  createData('01/12/2023', 'filename', 3.7, 67, 4.3, 3.7, 67, 4.3),
  createData('01/12/2023', 'filename', 16.0, 49, 3.9, 16.0, 49, 3.9),
  createData('01/12/2023', 'filename', 16.0, 49, 3.9, 16.0, 49, 3.9),
  createData('01/12/2023', 'filename', 16.0, 49, 3.9, 16.0, 49, 3.9),
  createData('01/12/2023', 'filename', 16.0, 49, 3.9, 16.0, 49, 3.9),
  createData('01/12/2023', 'filename', 16.0, 49, 3.9, 16.0, 49, 3.9),
  createData('01/12/2023', 'filename', 16.0, 49, 3.9, 16.0, 49, 3.9),
  createData('01/12/2023', 'filename', 16.0, 49, 3.9, 16.0, 49, 3.9),
  createData('01/12/2023', 'filename', 16.0, 49, 3.9, 16.0, 49, 3.9),
  createData('01/12/2023', 'filename', 16.0, 49, 3.9, 16.0, 49, 3.9),
  createData('01/12/2023', 'filename', 16.0, 49, 3.9, 16.0, 49, 3.9),
  createData('01/12/2023', 'filename', 16.0, 49, 3.9, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <div>
      <Navbar />
      <Box className="dashboard">
      
        <Sidebar className="dashboard-sidebar" />
        <Box>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          
            <TableCell>Date</TableCell>
            <TableCell align="right">File Name</TableCell>
            <TableCell align="right">Snap Chart</TableCell>
            <TableCell align="right">Diff Chart</TableCell>
            <TableCell align="right">Placeholder</TableCell>
            <TableCell align="right">Analysis Report</TableCell>
            <TableCell align="right">Placeholder</TableCell>
            <TableCell align="right">Placeholder</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* , filename, snapChart, diffChart, placeholder1, placeholder2, 
  analysisReport, placeholder3 */}
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{`${row.filename} ${index+1}`}</TableCell>
              <TableCell align="right">{row.snapChart}</TableCell>
              <TableCell align="right">{row.diffChart}</TableCell>
              <TableCell align="right">{row.placeholder1}</TableCell>
              <TableCell align="right">{row.placeholder2}</TableCell>
              <TableCell align="right">{row.analysisReport}</TableCell>
              <TableCell align="right">{row.placeholder3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Box>
      </Box>
    </div>
  );
}
