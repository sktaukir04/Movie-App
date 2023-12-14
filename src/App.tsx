import './App.css';
import { Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import MovieList from './components/movieList/MovieList';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import Error from './pages/Error/Error';
import SearchResults from './pages/SearchResults/SearchResults';

function App() {
  return (
    <div className="App">
        <Header/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/movie/:id' element={<MovieDetail/>}/>
        <Route path='/movies/:type' element={<MovieList/>}/>
        <Route path='/search/' element={<SearchResults/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
