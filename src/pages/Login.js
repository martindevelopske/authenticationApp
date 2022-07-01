import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StyledButton } from '../styles/Styled.button'
import { Container } from '../styles/Styled.container'
import { StyledForm } from '../styles/Styled.form'
import {toast,ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

import axios from 'axios'
import { loginRoute } from '../utils/APIRoutes'

function Login() {
    const navigate=useNavigate()
    const [values,setValues]=useState({
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }

    const handleValidation=()=>{
        const {email,password}=values
        if(!email){
            toast.error("email and password is required")
            return false;
        } else if(password.length<5){
            toast.error("password length should be greater than 5")
            return false
        }
        return true
    }
    const handleSubmit= async(e)=>{
        e.preventDefault()
        if(handleValidation()){
            console.log("validated")
            try{
                const {email,password}=values
                const {data}= await axios.post("http://localhost:4000/login",{email,password }
                ,
                {withCredentials:true})
                console.log(data.email);

                if(data.status===false){
                    toast.error(data.msg)
                }
                if(data.status===true){
                    localStorage.setItem('chat-app user',JSON.stringify(data.user))
                    navigate("/secret")
                }
                
            } catch(e){
                console.log(e);
            }
    }
        
        //console.log(values);
    }
  return (
    <Container>
        <StyledForm onSubmit={handleSubmit}>
            LOGIN
        <input type="email" name="email" placeholder="email" onChange={(e)=> setValues({...values,[e.target.name]:e.target.value})}></input>
        <input type="password" name="password" placeholder="password" onChange={handleChange}></input>
        <StyledButton type='submit'> Login</StyledButton>
        <div>
            Don't have and account? <Link to="/register">register</Link>
        </div>
        </StyledForm>
        <ToastContainer />
    </Container>
  )
}

export default Login