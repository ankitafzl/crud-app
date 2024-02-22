
import React,{useState,useEffect} from 'react';
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
import Navbar from '../Navbar/Navbar';

const EditInStorage = () => {
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

//   const handleChange = (e) => {
//     setUpdateData({...updateData,[e.target.name]:e.target.value})
//   }



//   const handleSubmit = async (e) => {
//     e.preventDefault();

//       setUpdateData({
//         username: '',
//         email: '',
//         age: '',
//         gender: '',
//         education: '',
//         subjects: []
//       });
   
//   };

 //const storedData = JSON.parse(sessionStorage.getItem('addData')) || {};
  //const [addData, setAddData] = useState(storedData);

  useEffect(() => {
    sessionStorage.setItem('addData', JSON.stringify(updateData));
  }, [updateData]);

  const handleChange = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
          setUpdateData({
        username: '',
        email: '',
        age: '',
        gender: '',
        education: '',
        subjects: []
      });
  }; 

    return (
      <>
      <Navbar/>
      <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <h2 style={headerStyle}> Update User Deatails</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
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
              <FormControlLabel name="subjects" checked={updateData.subjects.includes("Data Structure")} control={<Checkbox />} value="Data Structure" label="Data Structure" onChange={handleChange}/>
              <FormControlLabel name="subjects" checked={updateData.subjects.includes("ReactJs")} control={<Checkbox />} value="ReactJs" label="ReactJs" onChange={handleChange}/>
              <FormControlLabel name="subjects" checked={updateData.subjects.includes("Java")} control={<Checkbox />} value="Java" label="Java" onChange={handleChange}/>
            </FormGroup>
          </FormControl>
          <Button type='submit' variant="contained" color='primary' onClick={handleSubmit}>Update</Button>
        </form>
      </Paper>
    </Grid>
      </>
    );
}

export default EditInStorage;