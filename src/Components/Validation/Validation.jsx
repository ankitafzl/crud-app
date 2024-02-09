//import React from 'react'

const Validation = (value) =>{
    const errors=[];
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    if(!value.username){
      errors.username='Username is required';
    }
    if(!value.email){
      errors.email='Email is required';
    }
    else if(!regex.test(value.email)){
      errors.email='Email address is invalid';
    }

    if (!value.age.trim() || isNaN(value.age) || value.age < 0) {
        errors.age = 'Enter a valid age';
    }
  
    if (!value.gender.trim()) {
        errors.gender = 'Gender is required';
    }
    return errors;
}

export default Validation;