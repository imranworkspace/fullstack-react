import React, { useEffect, useState } from 'react'
import axios from 'axios'
// for material ui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const GetApi = () => {
  
  const [data,seTableCellata] = useState([])
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/students/')
    .then(res=>{seTableCellata(res.data)})
    .catch(err=>{console.log(err)})

  })
  return (
    <>
      <h3>Get By Axios Using Django api</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidTableCell: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{borderStyle:'solid',color:'green'}}>  
              <TableCell align="center">First Name</TableCell>
              <TableCell align="center">Last Name</TableCell>
              <TableCell align="center">Stream</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((d,i)=>(
                <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">{d.f_name}</TableCell>
                  <TableCell align="center">{d.l_name}</TableCell>
                  <TableCell align="center">{d.stream}</TableCell>
                </TableRow>  
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default GetApi
