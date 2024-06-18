import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import CompleteLogin from './pages/CompleteLogin';
import Information from './pages/CompleteLogin/body/Information';
import Join from './pages/Join';
import Search from './pages/CompleteLogin/body/Search';
import { FormProvider } from './contexts/FormContext';
import BookRead from './components/BookRead';

const App: React.FC = () => {
  return (
    <FormProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/Login" />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/user" element={<CompleteLogin />}>
            <Route path="Search" element={<Search />} />
            <Route path="Read" element={<BookRead />} />
            <Route path="Information" element={<Information />} />
          </Route>
          <Route path="/Join" element={<Join />} />
        </Routes>
      </BrowserRouter>
    </FormProvider>
  );
};

export default App;
