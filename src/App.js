import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import MovieList from './Components/MovieList';
import MovieDetails from './Components/MovieDetails';

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='movie/:id' element={<MovieDetails/>}></Route>
          <Route path='/movies/:type' element={<MovieList/>}></Route>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
