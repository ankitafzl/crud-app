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
import { useLocation } from 'react-router';

const Update = () => {
  const paperStyle = { padding: '30px 20px', width: 400, margin: '20px auto' }
  const headerStyle = { margin: '0px' }
  const marginTop = { marginTop: '10px' }
  const location = useLocation();

  const updateValues = ({
    username: location.state.username || '',
    email: location.state.email || '',
    age: location.state.age || '',
    gender: location.state.gender || '',
    education: location.state.education || '',
    subjects: location.state.subjects || []
  });
  const [updateData,setUpdateData]=useState(updateValues);

  const handleChange = (e) => {
    setUpdateData({...updateData,[e.target.name]:e.target.value})
  }


  const handleCheckboxChange = (subject) => {
    const updatedSubjects = updateData.subjects.includes(subject)
      ? updateData.subjects.filter((s) => s !== subject)
      : [...updateData.subjects, subject];

    setUpdateData({ ...updateData, subjects: updatedSubjects });
  };
    
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
    await fetch(`https://crudcrud.com/api/b0ba154660574efa9edffa0662440163/unicorns/${location.state._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateData),
      });
      setUpdateData({
        username: '',
        email: '',
        age: '',
        gender: '',
        education: '',
        subjects: []
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

    return (
      <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <h2 style={headerStyle}> Update User Deatails</h2>
        </Grid>
        <form>
          <TextField fullWidth label="User Name" name="username" variant="standard" onChange={handleChange} value={updateData.username}/>
          <TextField fullWidth label="Email" name="email" variant="standard" value={updateData.email} onChange={handleChange}/>
          <TextField fullWidth label="Age" name="age" variant="standard" value={updateData.age} onChange={handleChange}/>
          <FormControl component="fieldset" style={marginTop} >
            <FormLabel component="legend" variant="standard">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
              <FormControlLabel value="female" name="gender"control={<Radio />} label="Female" onChange={handleChange} checked={updateData.gender==='female'}/>
              <FormControlLabel value="male" name="gender" control={<Radio />} label="Male" onChange={handleChange} checked={updateData.gender==='male'}/>
            </RadioGroup>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">Education</InputLabel>
            <NativeSelect name="education" style={{ display: 'initial' }} value={updateData.education} onChange={handleChange}>
              <option>Select your option</option>
              <option>Btech</option>
              <option>BCA</option>
              <option>MCA</option>
            </NativeSelect>
          </FormControl>

          <FormControl style={marginTop}>
            <FormLabel component="legend">Subjects</FormLabel>
            <FormGroup name="subjects" style={{ display: 'initial' }}>
              <FormControlLabel name="subjects" checked={updateData.subjects.includes('Data Structure')} control={<Checkbox />} value="Data Structure" label="Data Structure" onChange={handleCheckboxChange}/>
              <FormControlLabel name="subjects" checked={updateData.subjects.includes('ReactJs')} control={<Checkbox />} value="ReactJs" label="ReactJs" onChange={handleCheckboxChange}/>
              <FormControlLabel name="subjects" checked={updateData.subjects.includes('Java')} control={<Checkbox />} value="Java" label="Java" onChange={handleCheckboxChange}/>
            </FormGroup>
          </FormControl>
          <Button type='submit' variant="contained" color='primary' onClick={handleSubmit}>Update</Button>
        </form>
      </Paper>
    </Grid>
    );
}

export default Update;