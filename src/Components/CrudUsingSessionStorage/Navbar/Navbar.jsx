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
       <Button component={Link} to="/homeSession" color="inherit">
         Home
        </Button>
        <Button component={Link} to="/addInStorage" color="inherit">
          AddInStorage 
        </Button>
        <Button component={Link} to="/viewStorage" color="inherit">
          ViewFromStorage 
        </Button>
        <Button component={Link} to="/viewStorage" color="inherit">
          EditInStorage 
        </Button>
        <Button component={Link} to="/viewStorage" color="inherit">
          DeleteFromStorage
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;