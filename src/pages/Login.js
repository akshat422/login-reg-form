import React from "react";
import styled from "styled-components";
const Navbar=styled.div`
 display: flex;
  justify-content: left;
  align-items: center;
  padding : 1rem;
  width: 100%;
  flex-wrap:rows;
  `;
  const LForm=styled.div`
  text-align:center;
  padding: 7rem;
  `;
  const Radbutt=styled.div`
  font-size: 1rem;
  `;
const Login = () => {
  return (<>

  <Navbar>
     <h2>Your Buddy</h2>
    </Navbar>
    <hr />
    
    <LForm>
      <div>
      <h2>LOGIN</h2>
    <br /><br /><br />
    <label htmlFor="username">UserName  </label>
    <input type="text" name="username"/>
    <br /><br />
    <label htmlFor="password">Password  </label>
    <input type="password" name="password"/>
      </div>
      <br />
      <Radbutt><input type="radio" id="MessOwner"  name="radioButt" value="Mess Owner"/>
      <label htmlFor="MessOwner">Mess Owner</label>
      <input type="radio" id="Customer"  name="radioButt" value="customer"/>
      <label htmlFor="customer">Customer</label>    
      </Radbutt><br />
      </LForm>      
  </>
  
    );
};

export default Login;
