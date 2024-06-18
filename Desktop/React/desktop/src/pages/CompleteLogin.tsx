import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const CompleteLogin: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Complete Login</h1>
      <nav className="flex space-x-4 mb-8">
        <Link to="Search" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Search</Link>
        <Link to="Read" className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">Read</Link>
        <Link to="Information" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Information</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default CompleteLogin;
