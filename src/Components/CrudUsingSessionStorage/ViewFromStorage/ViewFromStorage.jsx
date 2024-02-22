import React,{useState,useEffect} from  'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Grid } from "@mui/material";
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router';

const ViewFromStorage = () =>{
  const [viewData, setViewData] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    const storedData = sessionStorage.getItem('addData');    
    // Check if there is data in sessionStorage
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setViewData(parsedData);
    }
  }, []);

  const handleEdit = (data) => {
    navigate('/editInStorage', { state: data }); 
  };

  return (
    <>
    <Navbar/>
    <TableContainer component={Paper}>
          <Grid align="center">
            <h2> View All Data From Session Storage</h2>
          </Grid>
          <Table sx={{ minWidth: 600 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">S_No.</TableCell>
                <TableCell align="center">User Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Age</TableCell>
                <TableCell align="center">Gender</TableCell>
                <TableCell align="center">Education</TableCell>
                <TableCell align="center">Subjects</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {viewData.map((post, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{post.username}</TableCell>
                  <TableCell align="center">{post.email}</TableCell>
                  <TableCell align="center">{post.age}</TableCell>
                  <TableCell align="center">{post.gender}</TableCell>
                  <TableCell align="center">{post.education}</TableCell>
                  <TableCell align="center">{post.subjects}</TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="primary" style={{ marginRight: 4 }} onClick={() => handleEdit(post)}>Edit</Button>
                    <Button variant="contained" color="secondary">Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </>
  );
} 

export default ViewFromStorage;