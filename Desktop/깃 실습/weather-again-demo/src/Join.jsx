import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PacmanLoader } from 'react-spinners';

function Home() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    isStudent: false,
    UserName: '',
  });
  const [loading, setLoading] = useState(false);
  const [emailValid, setEmailValid] = useState(null);
  const [passwordsMatch, setPasswordsMatch] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const isFormValid = emailValid && passwordsMatch && form.password !== '' && form.confirmPassword !== '' && form.UserName !== '';
    setIsButtonDisabled(!isFormValid);
  }, [emailValid, passwordsMatch, form.password, form.confirmPassword, form.UserName]);

  useEffect(() => {
    setPasswordsMatch(form.password === form.confirmPassword);
  }, [form.password, form.confirmPassword]);

  const handleLogin = () => {
    setLoading(true);
  };

  const handleChangeForm = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setForm({
      ...form,
      [name]: fieldValue,
    });

    if (name === 'email') {
      if (value.endsWith('@naver.com')) {
        setEmailValid(true);
      } else {
        setEmailValid(false);
      }
    }
  };

  return (
    <HomeContainer>
      <LoginTitle>회원가입</LoginTitle>

      <LoginInput
        type="email"
        placeholder="Email"
        name="email"
        value={form.email}
        onChange={handleChangeForm}
      />
      {emailValid === true && <ValidationMessage>형식이 맞습니다.</ValidationMessage>}
      {emailValid === false && <ValidationMessage>형식이 틀렸습니다.</ValidationMessage>}

      <LoginInput
        type="password"
        placeholder="비밀번호"
        name="password"
        value={form.password}
        onChange={handleChangeForm}
      />
      <LoginInput
        type="password"
        placeholder="비밀번호 재입력"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChangeForm}
      />
      {passwordsMatch === true && form.password && form.confirmPassword && <ValidationMessage>비밀번호가 똑같습니다</ValidationMessage>}
      {passwordsMatch === false && <ValidationMessage>비밀번호가 틀렸습니다</ValidationMessage>}

      <LoginInput
        type="text"
        placeholder="이름"
        name="UserName"
        value={form.UserName}
        onChange={handleChangeForm}
      />

      <label>
        <input
          type="checkbox"
          name="isStudent"
          checked={form.isStudent}
          onChange={handleChangeForm}
        />
        학생입니까?
      </label>
      <LoginButton onClick={handleLogin} disabled={isButtonDisabled}>회원가입</LoginButton>
      {loading && <PacmanLoader color="#36d7b7" />}
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
  background-color: ${props => props.disabled ? '#ccc' : '#007BFF'};
  color: ${props => props.disabled ? '#666' : 'white'};
  border: none;
  border-radius: 4px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

const LoginTitle = styled.p`
  font-size: 36px;
  font-weight: bolder;
  display: flex;
  align-items: center;
  padding-bottom: 60px;
`;

const ValidationMessage = styled.p`
  color: red;
  margin-bottom: 15px;
`;