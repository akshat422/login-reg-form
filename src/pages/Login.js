import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useState } from "react";
const LForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  .Main {
    background-color: #ebebeb;
    color: black;
    padding: 5rem;
    border: 2px solid black;
    border-radius: 1px 25px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  .Main:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
  }
  .hover:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  .submit {
    background-color: #e7e7e7;
    color: black;
    font-size: 16px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  .submitSign {
    margin-left: 18px;
    background-color: #555555;
    color: white;
    font-size: 16px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
  }
`;
const Radbutt = styled.div`
  font-size: 1rem;
  label {
    margin-right: 20px;
  }
`;

const Login = (props) => {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [password, setPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();   //used to prevent page from reloading
    const payload = {
      username: name,
      password: password,
    };

    const data = await fetch("http://localhost:4000/app/user/login", {
      method: "POST",       //specify which method we are using
      headers: {    //meta data
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),    //converting json to string
    });

    const json = await data.json();
    
    if (json.error) {
      return setError(json.error);
    }

    if (json.user) {
      return (window.location.href = "/next");    //used to direct to other next page
    }
  };
  return (
    <div>
      <Navbar />

      <LForm>
        <div class="Main">
          <div>
            <h2>LOGIN</h2>
            <br />
            <br />
            <br />
            <label htmlFor="name">UserName </label>
            <input
              type="text"
              class="hover"
              name="username"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br />
            <br />
            <label htmlFor="password">Password {"  "}</label>
            <input
              type="password"
              class="hover"
              name="password"
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </div>
          <br />
          <Radbutt>
            <input
              type="radio"
              id="MessOwner"
              name="radioButt"
              value="Mess Owner"
            />
            <label htmlFor="MessOwner">Mess Owner</label>
            <input
              class="cust_name"
              type="radio"
              id="Customer"
              name="radioButt"
              value="customer"
            />
            <label htmlFor="customer">Customer</label>
          </Radbutt>
          <br />
          <p style={{ color: "red" }}>{error}</p>
          <button class="submit" onClick={handleSubmit}>
            Login
          </button>
          <button class="submitSign">SignUp</button>
        </div>
      </LForm>
    </div>
  );
};

export default Login;
