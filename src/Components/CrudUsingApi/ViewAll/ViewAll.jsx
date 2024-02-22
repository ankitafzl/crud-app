import React, { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Grid } from "@mui/material";
import { useNavigate } from 'react-router';
import Navbar from "../Navbar/Navbar";

//const ViewAll = ({setUpdateValue}) => {

const ViewAll = () => {
  const navigate=useNavigate();
  const [data, setData] = useState([]);

  // const [props, setProps] = useState(false);
  // const [props1, setProps1] = useState();

  // const handleEditClick = (id) => {
  //   navigate(`/edit/${id}`);
  // };

  const fetchData = async () => {
    try {
      await fetch(
        "https://crudcrud.com/api/3260088d0fad40e7a9de4a2f856d81e5/unicorns"
      ).then((result) => {
        result.json().then((resp) => {
          setData(resp);
        });
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleEdit = (data) => {
    navigate('/updateDetails', { state: data }); 
  };

  // const handleDelete = async () => {
  //   try {
  //     await fetch('https://crudcrud.com/api/3260088d0fad40e7a9de4a2f856d81e5/unicorns', {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //   }catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

    const handleDelete = (id) =>{
      fetch(`https://crudcrud.com/api/3260088d0fad40e7a9de4a2f856d81e5/unicorns/${id}`, {
         method: "DELETE"
      }).then(() => {
      const updatedData = data.filter(user => user._id !== id);
      setData(updatedData);
    }).catch((error) => console.error('Error deleting user:', error));
    };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <Navbar/>
        <TableContainer component={Paper}>
          <Grid align="center">
            <h2> View All Data</h2>
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
              {data.map((post, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{post.username}</TableCell>
                  <TableCell align="center">{post.email}</TableCell>
                  <TableCell align="center">{post.age}</TableCell>
                  <TableCell align="center">{post.gender}</TableCell>
                  <TableCell align="center">{post.education}</TableCell>
                  <TableCell align="center">{post.subjects}</TableCell>
                  <TableCell align="center">
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ marginRight: 4 }}
                        onClick={() => handleEdit(post)}
                      >
                        Edit
                      </Button>
                    <Button variant="contained" color="secondary" onClick={() => handleDelete(post._id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </>
  );
};

export default ViewAll;
