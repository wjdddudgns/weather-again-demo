import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PacmanLoader } from 'react-spinners';

function Home() {
  const [loginForm, setLoginForm] = useState({
    id: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // setLoading(true);

    // setTimeout(() => {
    //   if (loginForm.id === 'jyh' && loginForm.password === '1234') {
    //     setLoading(false);
    //     <PacmanLoader color="#36d7b7" />
    //     navigate('/search');
    //   } else {
    //     setLoading(false);
    //     alert('아이디 또는 비밀번호가 잘못되었습니다.');
    //   }
    // }, 3000);

    if (loginForm.id === 'jyh' && loginForm.password === '1234') {
      setLoading(true);

      setTimeout(() => {
        // setLoading(false);
        navigate('/search');
      }, 3000);
    } else {
      alert('아이디 또는 비밀번호가 잘못되었습니다.');
    }
  };

  const handleChangeLoginForm = (e) => {
    const { name, value } = e.target;

    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  return (
    <HomeContainer>
      {loading ? <PacmanLoader color="#36d7b7" /> : (
        <>
              <LoginTitle>LOGIN</LoginTitle>

              <LoginInput
                type="text"
                placeholder="아이디"
                name="id"
                value={loginForm.id}
                onChange={handleChangeLoginForm}
              />
              <LoginInput
                type="password"
                placeholder="비밀번호"
                name="password"
                value={loginForm.password}
                onChange={handleChangeLoginForm}
              />
              <LoginButton onClick={handleLogin}>로그인</LoginButton>
         </>
      )}
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
`;

const LoginInput = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
  text-align: left;
  padding-left: 10px;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginTitle = styled.p`
  font-size: 36px;
  font-weight: bolder;
  display: flex;
  align-items: center;
  padding-bottom: 60px;
`;