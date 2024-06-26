import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Celebriry from './pages/Celebrity';
import Tv from './pages/Tv';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:title" element={<MovieDetail />} />
          <Route path="/person" element={<Celebriry />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
