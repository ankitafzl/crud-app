import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
//import { makeStyles } from '@mui/styles';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
         
        <Button component={Link} to="/" color="inherit">
         CrudApp
        </Button>
        <Button component={Link} to="/addUser" color="inherit">
          Add User
        </Button>
        <Button component={Link} to="/viewAll" color="inherit">
          View All
        </Button>
        <Button component={Link} to="/viewAll" color="inherit">
          Update
        </Button>
        <Button component={Link} to="/delete" color="inherit">
          Delete 
        </Button>
        <Button component={Link} to="/addInStorage" color="inherit">
          AddInStorage 
        </Button>
        <Button component={Link} to="/viewStorage" color="inherit">
          ViewFromStorage 
        </Button>
        <Button component={Link} to="/editInStorage" color="inherit">
          EditInStorage 
        </Button>
        <Button component={Link} to="/deleteFromStorage" color="inherit">
          DeleteFromStorage
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;