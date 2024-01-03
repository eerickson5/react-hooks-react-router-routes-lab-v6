import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const params = useParams()
  const [movie, setMovie] = useState(null)

  useEffect( () => {
    console.log("hello?")
    fetch(`http://localhost:4000/movies/${params.id}`)
    .then(res => res.json())
    .then(data => setMovie(data))
  }, [params])



  if(movie === null ) return <h1>Loading...</h1>
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {
          movie.genres.map( genre => <span key={genre}>{genre}</span>)
        }
      </main>
    </>
  );
};

export default Movie;
