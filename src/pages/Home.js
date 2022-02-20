import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
`;

const Home = () => {
  return (
    <HomeStyled>
      <ul>
        <div>Welcome to Your buddy</div>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </HomeStyled>
  );
};

export default Home;
