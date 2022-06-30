import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { StyledButton } from '../styles/Styled.button'
import { Container } from '../styles/Styled.container'
import { StyledForm } from '../styles/Styled.form'
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import axios from 'axios'
import { registerRoute } from '../utils/APIRoutes'

function Register() {
    const navigate=useNavigate()
    const [values,setValues]=useState({
        email:"",
        username:"",
        password:""

    })

    const handleValidation=()=>{
        const {email,password,username}=values;
        if(!email){
            toast.error("email is required")
            return false;
        } else if(username.length<3){
            toast.error("username should be greater than 3 characters")
            return false
        } else if(password.length<5){
            toast.error("password should be greater than 5 characters")
            return false;
        }
        return true;

    }
    const generateError=(err)=>{
        return toast.error(err)
    }
    const handleSubmit= async(e)=>{
        e.preventDefault()
        if(handleValidation()){
            toast.success("details submitted")
            try{
                const {password,username,email}= values
                const {data}= await axios.post(registerRoute,
                {
                    username,email,password
                },
                {withCredentials:true})

                if(data.status===false){
                    toast.error(data.msg)
                }
                if(data.status===true){
                    localStorage.setItem('chat-app-user',JSON.stringify(data.user))
                }
                navigate("/secret")
            } catch(e){
                console.log(e.message);
            }
           

        }
       
      
    
    }
    const handleChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
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
    <ToastContainer />
    </Container>
    
  )
}

export default Register