/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PacmanLoader } from 'react-spinners';
import { LoginData } from './ServerData';

function Login() {
  const [loginForm, setLoginForm] = useState({
    id: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    
    // if (loginForm.id === 'jyh' && loginForm.password === '1234') {
    //   setLoading(true);

    //   setTimeout(() => {
    //     // setLoading(false);
    //     navigate('/search');
    //   }, 3000);
    // } else {
    //   alert('아이디 또는 비밀번호가 잘못되었습니다.');
    // }

    if (LoginData.message === "ok") {
      localStorage.setItem('LoginId',"정영훈"); //해석: localStorage를 통해서 데이터를 저장하는데, 무엇을 저장하냐!? UserId라는 키와 loginForm(id, password)중 id를 가져온다~~
      alert("로그인에 성공했습니다.");
      navigate("/user/search");
    }else{
      alert("로그인에 실패했습니다.");
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

export default Login;

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
`;*/

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PacmanLoader } from 'react-spinners';
import { LoginData } from './ServerData';

function Login() {
  const [loginForm, setLoginForm] = useState({
    id: '',
    password: '',
    rememberLogin: false, // 사용자가 처음 로그인할 때 자동으로 로그인되지 않고, 사용자가 직접 "로그인 상태 유지" 옵션을 선택 == true로 냅두면 자동로그인이 되어 있는 혼란스러운 상황이 발생할 수 있어서
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedLoginId = localStorage.getItem('LoginId');
    if (savedLoginId) {
      setLoginForm({ ...loginForm, id: savedLoginId, rememberLogin: true });
      navigate('/search');
    }
  }, []);

  const handleLogin = () => {
    if (LoginData.message === 'ok') {
      if (loginForm.rememberLogin) {
        localStorage.setItem('LoginId', loginForm.id);
      } else {
        localStorage.removeItem('LoginId');
      }
      alert('로그인에 성공했습니다.');
      navigate('/user/search');
    } else {
      alert('로그인에 실패했습니다.');
    }
  }; // -> LoginData.message === 'ok'면서 사용자가 채크박스를 활성화 한 상태라면 localStorage를 통해 저장 -> 아니면 removeItem을 사용해 정보를 삭제 -> 그리고 메시지가 ok면 성공 팝업창을 띄우고 실패하면 실패 찹업창을 띄움

  const handleChangeLoginForm = (e) => {
    const { name, value, checked } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: name === 'rememberLogin' ? checked : value,
    });
  }; // -> e.target에서 name, value, checked속성 추출 -> LoginForm을 불러옴 -> 변경된 name 속성에 따라 loginForm의 해당 속성값을 업데이트 -> name이 rememberLogin이면 check사용, 그게 아미녀 value를 사용

  return (
    <HomeContainer>
      {loading ? (
        <PacmanLoader color="#36d7b7" />
      ) : (
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
          <RememberLogin>
            <input
              type="checkbox"
              name="rememberLogin"
              checked={loginForm.rememberLogin}
              onChange={handleChangeLoginForm}
            />
            <label>로그인 상태 유지</label>
          </RememberLogin>
          <LoginButton onClick={handleLogin}>로그인</LoginButton>
        </>
      )}
    </HomeContainer>
  );
}

export default Login;

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

const RememberLogin = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 14px;
  label {
    margin-left: 5px;
  }
`;