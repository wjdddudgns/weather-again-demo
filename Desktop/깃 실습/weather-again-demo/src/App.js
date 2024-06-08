import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Search from "./Search"
import Join from "./Join"

export default function App() {
  return (
   <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/Join" element={<Join />} />
    </Routes>
  );
}