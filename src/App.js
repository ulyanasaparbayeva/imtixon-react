import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from "./components/Nav/Nav";
import BannerContainer from "./components/banner-container/BannerContainer";
import ProductList from "./components/product-list/ProductList";
import Genres from "./components/genres/Genres";
import AnimatedMovies from "./components/animted-movies/AnimatedMovies";
import ComedyMovies from "./components/comedy-movies/ComedyMovies";
import AdventureMovies from "./components/adventure-movies/AdventureMovies";
import Partners from "./components/partners/Partners";
import MoviesDetails from "./components/movies-details/MoviesDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>

          <Route path="/" element={
            <>
              <BannerContainer/>
              <ProductList/>
              <Genres/>
              <AdventureMovies/>
              <ComedyMovies/>
              <AnimatedMovies/>
            </>
          } />

          <Route path="/partners" element={<Partners />} />
          <Route path="/moviesdetails/:id" element={<MoviesDetails/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
