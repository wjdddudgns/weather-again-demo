import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/user');
  }

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Login Page</h1>
      <button onClick={handleLogin} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Login</button>
    </div>
  );
}

export default Login;
