import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = useNavigate();

  const handleLogin = () => {
    if (username === 'jyh' && password === '1234') {
    login.push('/search');
    } else {
      alert('아이디 또는 비밀번호가 잘못되었습니다.');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="아이디"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
}

export default Home;

// 버튼 스타일드-컴포넌트로 스타일 입혀오기!