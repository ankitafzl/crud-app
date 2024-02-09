import React, { useState } from "react";
import './style.css';
import { Button, FormGroup, Grid, Paper, TextField } from "@mui/material";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import FormHelperText from "@mui/material/FormHelperText";

const AddUser = () => {

  //const paperStyle = { padding: '30px 20px', width: 400, margin: '20px auto' }
  //const headerStyle = { margin: '0px' }
  //const marginTop = { marginTop: '10px' }

  const initialValues = {
    username: '',
    email: '',
    age: '',
    gender: '',
    education: '',
    subjects: []
  }
  const [addData, setAddData] = useState(initialValues);
  //const [errors, setErrors] = useState({});
  const [nameErrors, setNameErrors] = useState([]);
  const [emailErrors, setEmailErrors] = useState([]);
  const [ageErrors, setAgeErrors] = useState([]);
  const [genderErrors, setGenderErrors] = useState([]);
  const [eduErrors, setEduErrors] = useState([]);
  const [subjectErrors, setSubErrors] = useState([]);

 // const [submit,setSubmit] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === 'subjects') {
      let copy = { ...addData }
      if (e.target.checked) {
        addData.subjects.push(e.target.value);
      }
      else {
        copy.subjects = copy.subjects.filter(element => element !== e.target.value)
      }
      setAddData(copy);
    }
    else {
      setAddData(() => ({
        ...addData, [e.target.name]: e.target.value
      }))
    }
  }


  const validate = () => {
    const name = addData.username;
    const email = addData.email.trim();
    const age = addData.age.trim();
    const gender = addData.gender.trim();
    const education = addData.education;
    const subjects = addData.subjects;

    const nameErrors = [];
    const emailErrors = [];
    const ageErrors = [];
    const genderErrors = [];
    const eduErrors = [];
    const subjectErrors = [];

    // for user name    
    if (name === '') {
      nameErrors.push('Name should not be empty.');
    } else if (name.length > 15) {
      nameErrors.push('Name should be less than or equal to 15 characters.');
    } else if (!/^[A-Z]/.test(name)) {
      nameErrors.push('First letter of the name should be capitalized.');
    }   

    //for email
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    if(email===''){
      emailErrors.push('Email should not be empty.')
    }else if(!regex.test(email)){
      emailErrors.push('Email address is invalid.') 
    }

    //for age
    if (age===''){
      ageErrors.push('Age should not be empty.')
    } else if(isNaN(age)) {
      ageErrors.push('Enter a valid age');
    }
    else if(age < 0 || age>100){
      ageErrors.push('Age should be between 1 to 100');
    }

    //for gender
    if(gender===''){
      genderErrors.push('Gender is required');
    }

    //for education
    if(!education){
      eduErrors.push('You need to select any option from dropdown');
    }

    //for subject

    if(subjects.length===0){
      subjectErrors.push('Please select atleast one technology');
    }

    setNameErrors(nameErrors);
    setEmailErrors(emailErrors);
    setAgeErrors(ageErrors);
    setGenderErrors(genderErrors);
    setEduErrors(eduErrors);
    setSubErrors(subjectErrors);

    return ((nameErrors.length === 0 && emailErrors.length === 0) && (ageErrors.length === 0 && genderErrors.length === 0)) && (eduErrors.length === 0 && subjectErrors.length === 0);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!validate()){
         return 
    }
    const allData = {
      username: addData.username,
      email: addData.email,
      age: addData.age,
      gender: addData.gender,
      education: addData.education,
      subjects: addData.subjects
    };

    try {
        const response=await fetch("https://crudcrud.com/api/b0ba154660574efa9edffa0662440163/unicorns", {
        method: "POST",
        headers: { "content-type": "application/JSON" },
        body: JSON.stringify(allData)
      });
      // if (response.ok) {
      //   console.log('Data submitted successfully!');
      // } else {
      //   console.error('Failed to submit data:');
      // }
      setAddData(initialValues);
    } catch (error) {
      console.log(error.message);
    }

  };


  return (
    <Grid>
      <Paper elevation={20} style={{padding: '30px 20px', width: 400, margin: '20px auto'}}>
        <Grid align="center">
          <h2 style={{ margin: '0px' }}> Add User</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="User Name" name="username" variant="standard" value={addData.username} onChange={handleChange}/>
          {nameErrors.map((error, index) => (
          <FormHelperText key={index} error>
            {error}
          </FormHelperText>
        ))}
          <TextField fullWidth label="Email" name="email" variant="standard" value={addData.email} onChange={handleChange} />
          {emailErrors.map((error, index) => (
          <FormHelperText key={index} error>
            {error}
          </FormHelperText>
        ))}
          <TextField fullWidth label="Age" name="age" variant="standard" value={addData.age} onChange={handleChange} />
          {ageErrors.map((error, index) => (
          <FormHelperText key={index} error>
            {error}
          </FormHelperText>
        ))}
          <FormControl component="fieldset" style={{ marginTop: '10px' }} >
            <FormLabel component="legend" variant="standard">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
              <FormControlLabel value="female" name="gender" onChange={handleChange} control={<Radio />} label="Female" checked={addData.gender==='female'} />
              <FormControlLabel value="male" name="gender" onChange={handleChange} control={<Radio />} label="Male" checked={addData.gender==='male'}/>
            </RadioGroup>
            {genderErrors.map((error, index) => (
          <FormHelperText key={index} error>
            {error}
          </FormHelperText>
        ))}
          </FormControl>

          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">Education</InputLabel>
            <NativeSelect name="education" onChange={handleChange} style={{ display: 'initial' }} value={addData.education}>
              <option>Select your option</option>
              <option>Btech</option>
              <option>BCA</option>
              <option>MCA</option>
            </NativeSelect>    
             {eduErrors.map((error, index) => (
                <FormHelperText key={index} error>
                  {error}
                </FormHelperText>
              ))}        
          </FormControl>

          <FormControl style={{ marginTop: '10px' }}>
            <FormLabel component="legend">Subjects</FormLabel>
            <FormGroup name="subjects" style={{ display: 'initial' }}>
              <FormControlLabel name="subjects" onChange={handleChange} checked={addData.subjects.includes('Data Structure')} control={<Checkbox />} value="Data Structure" label="Data Structure" />
              <FormControlLabel name="subjects" onChange={handleChange} checked={addData.subjects.includes('ReactJs')} control={<Checkbox />} value="ReactJs" label="ReactJs" />
              <FormControlLabel name="subjects" onChange={handleChange} checked={addData.subjects.includes('Java')} control={<Checkbox />} value="Java" label="Java" />
            </FormGroup>
             {subjectErrors.map((error, index) => (
               <FormHelperText key={index} error>
                 {error}
               </FormHelperText>
              ))}
          </FormControl>
          <Button type='submit' variant="contained" color='primary'>Submit</Button>
        </form>
      </Paper>
    </Grid>
  );
}

export default AddUser;
