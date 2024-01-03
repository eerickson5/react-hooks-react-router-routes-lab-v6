import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const id = useParams().id
  const [movie, setMovie] = useState({})

  useEffect( ()=> {
    fetch(`http://localhost:4000/movies/${id}`)
    .then(res => res.json())
    .then(data => setMovie(data))
  }, [id])


  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time} minutes</p>
        {
          movie.genres.map( genre => <span key={genre}>{genre}</span>)
        }
      </main>
    </>
  );
};

export default Movie;
