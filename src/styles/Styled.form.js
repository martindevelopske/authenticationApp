import styled from "styled-components";

export const StyledForm=styled.form`
background-color: #8BC6EC;
background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
width:60%;
margin-top:40px;
display:flex;
flex-direction:column;
height:220px;
justify-content:space-between;
align-items:center;
border-radius:30px;
& input{
    margin:2px;
    height:30px;
    border:none;
    border-radius:10px;
    width:50%;
}
@media (max-width:700px){
    width:80%;
}`