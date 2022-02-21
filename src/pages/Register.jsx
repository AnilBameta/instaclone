import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 80%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Reg = styled.span`
  font-size: 12px;
  margin: 02px 0px;
`;

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const RegisterBtn = (e) => {
    e.preventDefault();
    const retError = checkError(username, email, password, cPassword);
    setFormErrors(retError);
    if (Object.keys(formErrors).length === 0) {
      axios
        .post("http://localhost:5000/api/users/register", {
          username,
          email,
          password,
        })
        .then((res) => {
          console.log(res);
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
          alert("Please enter valid credentials");
        });
    } else {
      console.log(formErrors);
    }
  };

  const checkError = (username, password, email, cPassword) => {
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const error = {};
    if (!username) {
      error.username = "username";
    }
    if (!password) {
      error.password = "password";
    }
    if (!email) {
      error.email = "email";
    } else if (!regex.test(email)) {
      error.email = "in right format";
    }
    if (!cPassword) {
      error.cPassword = "confirm password";
    } else if (password.localeCompare(cPassword) !== 0) {
      error.Cpassword = "same password";
    }
    return error;
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          {formErrors.username && (
            <p
              style={{ color: "red", fontSize: "10px" }}
            >{`Please enter ${formErrors.username}`}</p>
          )}
          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {formErrors.email && (
            <p
              style={{ color: "red", fontSize: "10px" }}
            >{`Please enter ${formErrors.email}`}</p>
          )}
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {formErrors.password && (
            <p
              style={{ color: "red", fontSize: "10px" }}
            >{`Please enter ${formErrors.password}`}</p>
          )}
          <Input
            placeholder="confirm password"
            type="password"
            onChange={(e) => setCPassword(e.target.value)}
          />
          {formErrors.cPassword && (
            <p
              style={{ color: "red", fontSize: "10px" }}
            >{`Please enter ${formErrors.cPassword}`}</p>
          )}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={RegisterBtn}>CREATE</Button>
        </Form>
        <Reg>Already a User?</Reg>
        <Link to={`/login`}> Login</Link>
      </Wrapper>
    </Container>
  );
};

export default Register;
