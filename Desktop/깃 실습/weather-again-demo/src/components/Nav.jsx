/*import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Nav() {
    const handleClickButton=() => {
        navigate("/home");
    }
    const handleLogoutButton=() => {
      localStorage.removeItem("LoginId");
      navigate("/login");
    }
    const UserName = localStorage.getItem("LoginId");
    const navigate=useNavigate();
    return (
    <Navigation>
        <div>
          <button onClick={handleClickButton}>Home</button>
        </div>
        <div>
          <button onClick={handleLogoutButton}>{UserName}</button>
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
`;*/

import axios from 'axios';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Nav() {
    const [showLogout, setShowLogout] = useState(false); //로그아웃 버튼을 보여줄지 여부를 묻기 위해 사용 -> true면 로그아웃 버튼이 보이고, fasle면 보이지 않음
    const handleClickButton = () => {
        navigate("/home");
    }
    const handleLogoutButton = () => {
      localStorage.removeItem("LoginId");
      navigate("/login");
    }
    const handleToggleLogout = () => { // setShowLogout함수를 통해서 기존에 정의된 showLogout의 불린값을 바꿔줌(초기엔 false로 설정했기에 저 함수가 실행되면 ture로 변환)
      setShowLogout(!showLogout);
    }
    const UserName = localStorage.getItem("LoginId");
    const navigate = useNavigate();
    return (
    <Navigation>
        <div>
          <Button onClick={handleClickButton}>Home</Button>
        </div>
        <UserNameContainer>
          <UserNameButton onClick={handleToggleLogout}>{UserName}</UserNameButton>
          {showLogout && (
            <LogoutContainer>
              <LogoutButton onClick={handleLogoutButton}>Logout</LogoutButton>
            </LogoutContainer>
          )}
        </UserNameContainer>
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

const UserNameContainer = styled.div` //비운 이유: 일단 UserNameContainer라는 부분을 선언은 해두어야 했었기 때문에
`;

const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const LogoutContainer = styled.div`
  animation: ${slideDown} 0.3s ease-in-out;
  margin-top: 5px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const UserNameButton = styled(Button)`
  background-color: gray;
  color: #333;
  margin-right: 10px;
`;

const LogoutButton = styled(Button)`
  background-color: red;
`;
