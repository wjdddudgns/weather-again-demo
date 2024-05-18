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
  });
  const [loading, setLoading] = useState(false);
  const [emailValid, setEmailValid] = useState(null);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const isFormValid = emailValid && form.password === form.confirmPassword && form.password !== '' && form.confirmPassword !== '' && form.isStudent;
    setIsButtonDisabled(!isFormValid);
  }, [emailValid, form.password, form.confirmPassword, form.isStudent]);

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      if (emailValid && form.password === form.confirmPassword) {
        setLoading(false);
        navigate('/search');
      } else {
        setLoading(false);
        if (!emailValid) {
          alert('입력한 정보가 유효하지 않습니다.');
        }
      }
    }, 3000);
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

    if (name === 'confirmPassword') {
      setPasswordsMatch(value === form.password);
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
      {emailValid === false && <ValidationMessage valid={emailValid}>형식이 틀렸습니다.</ValidationMessage>}

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
            {!passwordsMatch && <ValidationMessage valid={passwordsMatch}>비밀번호가 틀렸습니다</ValidationMessage>}
      
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
  color: ${props => (props.valid ? 'green' : 'red')};
  margin-bottom: 15px;
`;
