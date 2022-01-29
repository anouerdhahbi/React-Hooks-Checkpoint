import { useState } from 'react';
import './App.css';
import { Add } from './components/Add';
import Filter from './components/Filter';
import MovieList from './components/MovieList';


export const data = [
  {
    title: "Legend",
    posterURL: "https://flxt.tmsimg.com/assets/p11546075_p_v13_ak.jpg",
    description:
      "Identical twin gangsters Ronald and Reginald Kray terrorize London during the 1960s.",
    rating: 37,
    year: "2015",
    type: "Crime/Drame ",
    length: "2h 12m",
  },
  {
    title: "Inception",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    rating: 45,
    year: "2010",
    type: "Action/Sci-fi",
    length: "2h 42m",
  }
]



function App() {

  const [Movies, setMovies] = useState(data);
  const [Search, setSearch] = useState('');
  const handleSearch=(s)=>setSearch(s);
  const [frating,setFrating]=useState(0);
  const [adMovie,setAdMovie]=useState("");
const HandleAddMovie=(addMovie1)=>{
  setAdMovie(addMovie1);
  setMovies([...Movies,addMovie1])


}
const handelDelet=(titleDelet)=>{
  setMovies(Movies.filter(el=>el.title!=titleDelet))
}
  return (
    <div className="App">
      <Filter handleSearch={handleSearch} setFrating={setFrating} />
      <MovieList handelDelet={handelDelet} data={Movies} Search={Search} frating={frating}/>
      <Add addnewmovie={HandleAddMovie} />
    </div>
  );
}

export default App;
