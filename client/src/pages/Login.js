import React, { useState } from 'react'
import { StyledButton } from '../styles/Styled.button'
import { Container } from '../styles/Styled.container'
import { StyledForm } from '../styles/Styled.form'

function Login() {
    const [values,setValues]=useState({
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(values);
    }
  return (
    <Container>
        <StyledForm onSubmit={handleSubmit}>
            LOGIN
        <input type="email" name="email" placeholder="email" onChange={handleChange}></input>
        <input type="password" name="password" placeholder="password" onChange={handleChange}></input>
        <StyledButton type='submit'> Login</StyledButton>
        </StyledForm>
    </Container>
  )
}

export default Login