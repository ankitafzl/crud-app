import React from 'react';
import "./Navbar.css"
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
        <Button component={Link} to="/homeApi" color="inherit">
         Home
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
        <Button component={Link} to="/viewAll" color="inherit">
          Delete 
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;




// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Grid,
//   Tabs,
//   Tab
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import "./Navbar.css"

// function Navbar() {
//   const [list, setlist] = useState()
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Grid container sx={{ placeItems: "center" }}>
//           <Grid item xs={1}>
//             <Typography>
//               <Link to="/">
//                 CrudApp
//               </Link>
//             </Typography>
//           </Grid>
      
//           <Grid xs={11}>
//             <Tabs value={list} indicatorColor="primary" onChange={(e, val) => setlist(val)}>
//               <Tab label={<Link to="/">Home</Link>} />
//               <Tab label={<Link to="/addUser">Add User</Link>} />
//               <Tab label={<Link to="/viewAll">View User</Link>} />
//               <Tab label={<Link to="/viewAll">Update User</Link>} />
//               <Tab label={<Link to="/viewAll">Delete User</Link>} />
//               {/* <Tab label={<Link to="/addsession">Add-Session</Link>} />
//               <Tab label={<Link to="/view">View-Session</Link>} />
//               <Tab label={<Link to="/view">Update-Session</Link>} />
//               <Tab label={<Link to="/view">Delete-Session</Link>} /> */}
//             </Tabs>
//           </Grid>
//         </Grid>
//       </Toolbar>
//     </AppBar>
//   );
// }
// export default Navbar;