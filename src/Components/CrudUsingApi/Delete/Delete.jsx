import React,{useEffect, useState} from 'react';
import { Button, FormGroup, Grid, Paper, TextField } from "@mui/material";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import Navbar from '../Navbar/Navbar';

const Delete = (props1) => {
  const paperStyle = { padding: '30px 20px', width: 400, margin: '20px auto' }
  const headerStyle = { margin: '0px' }
  const marginTop = { marginTop: '10px' }
    

   function handleSubmit(){
    fetch("https://crudcrud.com/api/3260088d0fad40e7a9de4a2f856d81e5/unicorns",{
      method:'DELETE'
    }).then((result)=>{
      result.json().then((resp)=>{
        console.log(resp);
      })
    })
   }

    return (
      <>
        <Navbar/>
        <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <h2 style={headerStyle}> Delete User Deatails</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="User Name" name="username" variant="standard" value={props1?.data?.username}/>
          <TextField fullWidth label="Email" name="email" variant="standard" value={props1?.data?.email} />
          <TextField fullWidth label="Age" name="age" variant="standard" value={props1?.data?.age}/>
          <FormControl component="fieldset" style={marginTop} >
            <FormLabel component="legend" variant="standard">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
              <FormControlLabel value="female" name="gender"control={<Radio />} label="Female" checked={props1?.data?.gender==='female'}/>
              <FormControlLabel value="male" name="gender" control={<Radio />} label="Male" checked={props1?.data?.gender==='male'}/>
            </RadioGroup>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">Education</InputLabel>
            <NativeSelect name="education" style={{ display: 'initial' }} value={props1?.data?.education}>
              <option>Select your option</option>
              <option>Btech</option>
              <option>BCA</option>
              <option>MCA</option>
            </NativeSelect>
          </FormControl>

          <FormControl style={marginTop}>
            <FormLabel component="legend">Subjects</FormLabel>
            <FormGroup name="subjects" style={{ display: 'initial' }}>
              <FormControlLabel name="subjects" checked={props1?.data?.subjects.includes('Data Structure')} control={<Checkbox />} value="Data Structure" label="Data Structure" />
              <FormControlLabel name="subjects" checked={props1?.data?.subjects.includes('ReactJs')} control={<Checkbox/>} value="ReactJs" label="ReactJs" />
              <FormControlLabel name="subjects" checked={props1?.data?.subjects.includes('Java')} control={<Checkbox />} value="Java" label="Java" />
            </FormGroup>
          </FormControl>
          <Button type='submit' variant="contained" color='primary'>Delete</Button>
        </form>
      </Paper>
    </Grid>
      </>
    );
}
export default Delete;