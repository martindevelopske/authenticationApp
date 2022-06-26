import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { StyledButton } from '../styles/Styled.button'
import { Container } from '../styles/Styled.container'
import { StyledForm } from '../styles/Styled.form'

function Register() {
    const [values,setValues]=useState({
        email:"",
        username:"",
        password:""
    })
    const handleChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(values);
    }
  return (
    <Container>
        <StyledForm onSubmit={handleSubmit}>
            REGISTER
        <input type="text" name="username" placeholder="username" onChange={handleChange}></input>
        <input type="email" name="email" placeholder="email" onChange={handleChange}></input>
        <input type="password" name="password" placeholder="password" onChange={handleChange}></input>
        <StyledButton type='submit'> register</StyledButton>
        <div>
            Already have an account? <Link to="/login">Login</Link>
        </div>
    </StyledForm>
    </Container>
    
  )
}

export default Register