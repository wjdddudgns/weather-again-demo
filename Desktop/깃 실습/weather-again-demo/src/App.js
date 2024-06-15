import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import CompleteLogin from "./pages/CompleteLogin";
import Information from "./pages/CompleteLogin/body/Information";
import Join from "./pages/Join"
import Search from './pages/CompleteLogin/body/Search';

export default function App() {
  return (
   <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/user" element={<CompleteLogin />}>
          <Route path="search" element={<Search />}/>
          <Route path="Information" element={<Information />} />
        </Route>
        <Route path="/Join" element={<Join />} />      
    </Routes>
  );
}