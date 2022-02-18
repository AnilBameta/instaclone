import React ,{useEffect, useState} from 'react';
import styled from "styled-components";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CollectionsOutlined } from '@mui/icons-material';
import { connectStorageEmulator } from 'firebase/storage';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
 
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Linked = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;





const Login = () => {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState(""); 
  const [formErrors,setFormErrors] = useState({});
  const navigate = useNavigate();

   function LoginButton(e) {
    e.preventDefault();
    const error = {};
     if(!username)
     {
      error.username = 'username';
     }
     if(!password)
     {
       error.password = 'password';
     }
     setFormErrors(error);
     if(Object.keys(formErrors).length === 0)
      {
        axios.post('http://localhost:5000/api/users/login',{
          username,
          password
        })
        .then(res => {
          localStorage.setItem("token",res.data.accessToken) 
          localStorage.setItem("user",res.data.user.username)
          navigate('/');  
        }
        
        )
        .catch(err =>{
          console.log(err)
          alert("Please enter valid credentials")
        } 
        )
        console.log("api")
      }
      else {
        console.log(formErrors)
      }
    }

 

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e)=>setUsername(e.target.value)}
          />
          { (formErrors.username) &&
          <p style ={{color:'red',fontSize:'10px'}}>{`Please enter ${formErrors.username}`}</p>
          }
          <Input
            placeholder="password"
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
          />
          { (formErrors.password) &&
          <p style ={{color:'red',fontSize:'10px'}}>{`Please enter ${formErrors.password}`}</p>
           } 
          <Button onClick={(e)=>LoginButton(e)}>
            LOGIN
          </Button>
          <Linked>DO NOT YOU REMEMBER THE PASSWORD?</Linked>
          <Linked>CREATE A NEW ACCOUNT</Linked>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;