import React,{useState} from 'react';
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
//import FormHelperText from "@mui/material/FormHelperText";

const AddInStorage = () =>{
    const paperStyle = { padding: '30px 20px', width: 400, margin: '20px auto' }
    const headerStyle = { margin: '0px' }
    const marginTop = { marginTop: '10px' }

    // const initialValues = {
    //     username: '',
    //     email: '',
    //     age: '',
    //     gender: '',
    //     education: '',
    //     subjects: [],
    //   }
    const [addData, setAddData] = useState({
      username: '',
      email: '',
      age: '',
      gender: '',
      education: '',
      subjects: [],
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setAddData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
  };
  
  const handleSubmit = (e) => {
      e.preventDefault();
      const storedData = JSON.parse(sessionStorage.getItem('addData')) || [];
      storedData.push(addData);
      sessionStorage.setItem('addData', JSON.stringify(storedData));

  // Clear form data
    setAddData({
      username: '',
      email: '',
      age: '',
      gender: '',
      education: '',
      subjects: [],
    });
  };

    return (
        <>
        <Navbar/>
          <Grid>
          <Paper elevation={20} style={paperStyle}>
            <Grid align="center">
              <h2 style={headerStyle}> Add Details In Session Storage</h2>
            </Grid>
            <form onSubmit={handleSubmit}>
               <TextField fullWidth label="User Name" name="username" variant="standard" value={addData.username} onChange={handleChange}/>
              <TextField fullWidth label="Email" name="email" variant="standard" value={addData.email} onChange={handleChange} />
              <TextField fullWidth label="Age" name="age" variant="standard" value={addData.age} onChange={handleChange} />
              <FormControl component="fieldset" style={marginTop} >
                <FormLabel component="legend" variant="standard">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                  <FormControlLabel value="female" name="gender" onChange={handleChange} control={<Radio />} label="Female" checked={addData.gender==='female'} />
                  <FormControlLabel value="male" name="gender" onChange={handleChange} control={<Radio />} label="Male" checked={addData.gender==='male'}/>
                </RadioGroup>
              </FormControl>
    
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">Education</InputLabel>
                <NativeSelect name="education" onChange={handleChange} style={{ display: 'initial' }} value={addData.education}>
                  <option>Select your option</option>
                  <option>Btech</option>
                  <option>BCA</option>
                  <option>MCA</option>
                </NativeSelect>    
              </FormControl>
    
              <FormControl style={marginTop}>
                <FormLabel component="legend">Subjects</FormLabel>
                <FormGroup name="subjects" style={{ display: 'initial' }}>
                  <FormControlLabel name="subjects" onChange={handleChange} checked={addData.subjects.includes('Data Structure')} control={<Checkbox />} value="Data Structure" label="Data Structure" />
                  <FormControlLabel name="subjects" onChange={handleChange} checked={addData.subjects.includes('ReactJs')} control={<Checkbox />} value="ReactJs" label="ReactJs" />
                  <FormControlLabel name="subjects" onChange={handleChange} checked={addData.subjects.includes('Java')} control={<Checkbox />} value="Java" label="Java" />
                </FormGroup>

              </FormControl>
              <Button type='submit' variant="contained" color='primary'>Submit</Button>
            </form>
          </Paper>
        </Grid>
        </>
      );
} 

export default AddInStorage;