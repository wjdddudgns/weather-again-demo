import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Search from "./Search"

export default function App() {
  return (
   <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search/>} />
    </Routes>
  );
}