import React from "react";
import styled from "styled-components";
const Nav=styled.div`
 display: flex;
  justify-content: left;
  align-items: center;
  padding : 1rem;
  width: 100%;
  flex-wrap:rows;
  `;
const Navbar=()=>{
    return(
        <>
             <Nav>
            <h2>Your Buddy</h2>
            </Nav>
            <hr />
        </>
    );
};