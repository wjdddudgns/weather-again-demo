import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Nav() {
    const handleClickButton=() => {
        navigate("/home");
    }
    const UserName = localStorage.getItem("LoginId");
    const navigate=useNavigate();
    return (
    <Navigation>
        <div>
          <button onClick={handleClickButton}>Home</button>
        </div>
        <div>
          {UserName}
        </div>
      </Navigation>
    )
}

export default Nav;

const Navigation = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: aqua;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;