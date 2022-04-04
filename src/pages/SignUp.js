import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
const Sform = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-up: 6rem;
  padding: 3rem;
  .row {
    border-spacing: 0 20px;
  }
  .form {
    background-color: #ebebeb;
    color: black;
    padding: 3rem;
    border: 2px solid black;
    border-radius: 1px 25px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  .form:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
  }
`;
const Center = styled.div`
  display: felx;
  justify-content: center;
  align-items: center;
  .heading {
    padding: 4rem;
  }
  .submit {
    height: 30px;
    width: 50px;
  }
`;

function SignUp() {
  const [name, setName] = useState("");
  const [mob, setMob] = useState("");
  const [add, setAdd] = useState("");
  const [pass, setPass] = useState("");
  const [conpass, setConPass] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (pass != conpass) {
      return setError("Password and confirm password should match");
    }

    console.log(name, mob, add, pass);
    const payload = {
      username: name,
      number: mob,
      address: add,
      password: pass,
    };

    const data = await fetch("http://localhost:4000/app/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const json = await data.json();
    console.log(json);

    if (json.error) {
      return setError(json.error);
    }

    if (json.user) {
      return (window.location.href = "/login");
    }
  };

  return (
    <>
      <Navbar />
      <form>
        <Sform>
          <div className="form">
            <Center>
              <h2 class="heading">Sign Up Form </h2>
            </Center>

            <table className="row">
              <tr>
                <td>
                  <label htmlFor="name">User Name</label>
                </td>
                <td>
                  <input
                    type="text"
                    size="33"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </td>
              </tr>

              <tr className="row">
                <td>
                  <label htmlFor="number">Mobile Number</label>
                </td>
                <td>
                  <input
                    type="tel"
                    size="33"
                    onChange={(e) => {
                      setMob(e.target.value);
                    }}
                  />
                </td>
              </tr>

              <tr className="row">
                <td>
                  <label htmlFor="address">Current Address</label>
                </td>
                <td>
                  <textarea
                    name="address"
                    id="address"
                    cols="33"
                    rows="4"
                    onChange={(e) => {
                      setAdd(e.target.value);
                    }}
                  ></textarea>
                </td>
              </tr>

              <tr className="row">
                <td>
                  <label htmlFor="password">Password</label>
                </td>
                <td>
                  <input
                    type="password"
                    size="33"
                    onChange={(e) => {
                      setPass(e.target.value);
                    }}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="conPass">Confirm Password</label>
                </td>
                <td>
                  <input
                    type="password"
                    size="33"
                    onChange={(e) => {
                      setConPass(e.target.value);
                    }}
                  />
                </td>
              </tr>
            </table>

            <div className="error">
              <p style={{ color: "red" }}>{error}</p>
            </div>

            <Center>
              <button className="submit" type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </Center>
          </div>
        </Sform>
      </form>
    </>
  );
}

export default SignUp;
