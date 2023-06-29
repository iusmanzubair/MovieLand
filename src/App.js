import { useEffect, useState } from "react"
import "./App.css"
import SearchIcon from './search.svg'
import Movie from "./Movie"

const App = ()=> {

  const [films, setFilms] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  

  const SearchMovies = async (title)=> {
    const endpoint = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=4c247ea4&s=${title}`)
    const data = await endpoint.json();

    setFilms(data.Search);
  }

  useEffect(()=> {
    SearchMovies('spiderman');
  },[])

  return (
    <div className="app">
      <h1>MovieLand</h1>
    <div className="search">
      <input placeholder="seach for movies" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} />
      <img src={SearchIcon} alt="search" onClick={()=> SearchMovies(searchTerm)}/>
    </div>
    <div className="container">
      {
        films.length > 0 ?
        films.map((film)=>(
          <Movie movies={film}/>
        )) : (
          <h2>No Result Found</h2>
        )
      }
    </div>
    </div>
  );
}

export default App;
