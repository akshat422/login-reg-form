import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const Sform=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-up: 6rem;
    padding:3rem;
   .row{
    border-spacing:0 20px;
   }
   .form{
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
const Center=styled.div`
display: felx;
justify-content: center;
align-items: center;
.heading{
    padding:4rem;
}
.submit{
    height:30px;
    width:50px;
}

`;

function SignUp(){
    return(
        <>
            <Navbar/>
            <form>
            <Sform>
            <div className="form"><Center><h2 class ="heading">Sign Up Form </h2></Center>           
                
                <table className ="row">
                    
                    <tr>
                        <td><label htmlFor="UserName">User Name</label></td>
                        <td><input type="text" size ="33"/></td>
                    </tr>
                   
                    
                   
                    <tr  className="row">
                        <td><label htmlFor="Mobile number">Mobile Number</label></td>
                        <td><input type="tel" size ="33" /></td>
                    </tr>              
                    
                    
                    
                    <tr className="row">
                        <td><label htmlFor="Address">Current Address</label></td>
                        <td><textarea name="address" id="address" cols="33" rows="4"></textarea></td>
                    </tr>
                    
                   
                    <tr className="row">
                        <td><label htmlFor="Password">Password</label></td>
                        <td><input type="password" size ="33" /></td>
                    </tr>
                    
                   
                    <tr >
                        <td><label htmlFor="conPass">Confirm Password</label></td>
                        <td><input type="password" size ="33" /></td>
                    </tr>                     
                    
                </table>
               
                <Center><button className="submit" type ="submit"><Link to="/signupNext">Next</Link></button></Center>
                </div>
            </Sform>            
            </form>
        </>        
    );
};

export default SignUp;