import React from "react";
import "./HomePage.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const HomePage = () => {

  const navigate = useNavigate();
  const handleClick1 = () => {
    navigate("/homeApi");
  };
  const handleClick2 = () => {
    navigate("/homeSession");
  };

  return (
<>
      <Box className="main">
        <Typography variant="h2">Welcome For The Crud Operation</Typography>
        <Typography variant="h6">
          A appication where you can add data, update data, delete data and view
          data.
        </Typography>
        <Typography variant="h6">
              
          <Button className="btn1" onClick={handleClick1}>Crud Using Api</Button>
          <Button className="btn2" onClick={handleClick2}>Crud Using Session Storage</Button>
        </Typography>
      </Box>
      </>
  );
};

export default HomePage;
