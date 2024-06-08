// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import { PacmanLoader } from 'react-spinners';

// function Home() {
//   const [form, setForm] = useState({
//     email: '',
//     password: '',
//     confirmPassword: '',
//     isStudent: false,
//     UserName: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [emailValid, setEmailValid] = useState(null);
//   const [passwordsMatch, setPasswordsMatch] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setPasswordsMatch(form.password === form.confirmPassword);
//   }, [form.password, form.confirmPassword]);

//   const handleLogin = () => {
//     setLoading(true);
//   };

//   const handleChangeForm = (e) => {
//     const { name, value, type, checked } = e.target;
//     const fieldValue = type === 'checkbox' ? checked : value;

//     setForm({
//       ...form,
//       [name]: fieldValue,
//     });

//     if (name === 'email') {
//       if (value.endsWith('@naver.com')) {
//         setEmailValid(true);
//       } else {
//         setEmailValid(false);
//       }
//     }
//   };

//   return (
//     <HomeContainer>
//       <LoginTitle>회원가입</LoginTitle>

//       <LoginInput
//         type="email"
//         placeholder="Email"
//         name="email"
//         value={form.email}
//         onChange={handleChangeForm}
//       />
//       {/* {emailValid === true && <ValidationMessage>형식이 맞습니다.</ValidationMessage>}
//       {emailValid === false && <ValidationMessage>형식이 틀렸습니다.</ValidationMessage>} */}
//       {form.email ? (
//         emailValid ? (
//           <ValidationMessage valid={true}>형식이 맞습니다.</ValidationMessage>
//         ):(<ValidationMessage valid={false}>형식이 틀렸습니다.</ValidationMessage>)
//       ): (<></>)}

//       <LoginInput
//         type="password"
//         placeholder="비밀번호"
//         name="password"
//         value={form.password}
//         onChange={handleChangeForm}
//       />
//       <LoginInput
//         type="password"
//         placeholder="비밀번호 재입력"
//         name="confirmPassword"
//         value={form.confirmPassword}
//         onChange={handleChangeForm}
//       />
//       {/*비밀번호 재입력을 하였을때, 기존에 입력한 값이랑 같으면 같다 출력 아니면 아니다 출력*/}
//       {form.confirmPassword ? (
//         passwordsMatch ? (<ValidationMessage valid={true}>비밀번호가 똑같습니다.</ValidationMessage>):(<ValidationMessage valid={false}>비밀번호가 틀렸습니다.</ValidationMessage>)
//       ):(<></>)}

//       <LoginInput
//         type="text"
//         placeholder="이름"
//         name="UserName"
//         value={form.UserName}
//         onChange={handleChangeForm}
//       />

//       <label>
//         <input
//           type="checkbox"
//           name="isStudent"
//           checked={form.isStudent}
//           onChange={handleChangeForm}
//         />
//         학생입니까?
//       </label>
//       <LoginButton onClick={handleLogin} disabled={form.email='' || form.password == '' || form.confirmPassword == '' || form.UserName == ''}>회원가입</LoginButton>
//       {loading && <PacmanLoader color="#36d7b7" />}
//     </HomeContainer>
//   );
// }
// export default Home;

// const HomeContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 30%;
// `;

// const LoginInput = styled.input`
//   width: 100%;
//   height: 40px;
//   margin-bottom: 15px;
//   text-align: left;
//   padding-left: 10px;
// `;

// const LoginButton = styled.button`
//   width: 100%;
//   height: 40px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: ${props => props.disabled ? '#ccc' : '#007BFF'};
//   color: ${props => props.disabled ? '#666' : 'white'};
//   border: none;
//   border-radius: 4px;
//   cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
// `;

// const LoginTitle = styled.p`
//   font-size: 36px;
//   font-weight: bolder;
//   display: flex;
//   align-items: center;
//   padding-bottom: 60px;
// `;

// const ValidationMessage = styled.p`
//   color: ${(props) => props.valid ?"green":"red"};
//   margin-bottom: 15px;
// `;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PacmanLoader } from "react-spinners";
import { SignupData } from "./ServerData";
import { LoginData } from "./ServerData";

function Home() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    isStudent: "admin",
    UserName: "",
  });
  const [loading, setLoading] = useState(false);
  const [emailValid, setEmailValid] = useState(null);
  const [passwordsMatch, setPasswordsMatch] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setPasswordsMatch(form.password === form.confirmPassword);
  }, [form.password, form.confirmPassword]);

  const handleJoin = () => {
    if ( SignupData.message === "ok" ) {
      alert("회원가입에 성공했습니다");
      navigate("/Home");
    }else {
      alert("회원가입에 실패했습니다.");
    }
  };

  const handleChangeForm = (e) => {
    const { name, value, type, checked } = e.target;
    
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked ? "student" : "admin" : value
    });

    if (name === "email") {
      if (value.endsWith("@naver.com")) {
        setEmailValid(true);
      } else {
        setEmailValid(false);
      }
    }
  };

  return (  
    <HomeContainer>
      <LoginTitle>회원가입</LoginTitle>
      {/* 이메일 input */}
      <LoginInput
        type="email"
        placeholder="Email"
        name="email"
        value={form.email}
        onChange={handleChangeForm}
      />
      {/* 이메일 형식 유효성 검사 */}
      {form.email ? (
        emailValid ? (
          <ValidationMessage color="green">형식이 맞습니다.</ValidationMessage>
        ) : (
          <ValidationMessage>형식이 틀렸습니다.</ValidationMessage>
        )
      ) : (
        <></>
      )}

      {/* 비밀번호 input */}
      <LoginInput
        type="password"
        placeholder="비밀번호"
        name="password"
        value={form.password}
        onChange={handleChangeForm}
      />
      {/* 비밀번호 재입력 */}
      <LoginInput
        type="password"
        placeholder="비밀번호 재입력"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChangeForm}
      />
      {/* 비밀번호 일치 여부 */}
      {form.confirmPassword ? (
        passwordsMatch ? (
          <ValidationMessage color="green">비밀번호 일치</ValidationMessage>
        ) : (
          <ValidationMessage>비밀번호 불일치</ValidationMessage>
        )
      ) : (
        <></>
      )}

      {/* 이름 input */}
      <LoginInput
        type="text"
        placeholder="이름"
        name="UserName"
        value={form.UserName}
        onChange={handleChangeForm}
      />
      <CheckStudent>
        <input
          type="checkbox"
          name="isStudent"
          value={form.isStudent}
          onChange={handleChangeForm}
        />
        <span>학생입니까?</span>
      </CheckStudent>
      <LoginButton
        onClick={handleJoin}
        disabled={
          form.email == '' ||
          emailValid == false ||
          form.password == '' ||
          form.confirmPassword == '' ||
          passwordsMatch == false ||
          form.UserName == ''
        }
      >
        회원가입
      </LoginButton>
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
  background-color: ${(props) => (props.disabled ? "#ccc" : "#007BFF")};
  color: ${(props) => (props.disabled ? "#666" : "white")};
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const LoginTitle = styled.p`
  font-size: 36px;
  font-weight: bolder;
  display: flex;
  align-items: center;
  padding-bottom: 60px;
`;

const ValidationMessage = styled.p`
  color: ${(props) => (props.color ? props.color : "red")};
  margin-bottom: 15px;
`;

const CheckStudent = styled.div`
  display: flex;
  align-items: center; 
  margin-bottom: 15px;
  & span {
    margin-left: 10px;
  }
  & input {
    width: 20px;
    height: 20px;
  }
`;