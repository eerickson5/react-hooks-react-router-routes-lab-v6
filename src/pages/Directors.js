import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import DirectorCard from "../components/DirectorCard";

function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect( () => {
    fetch("http://localhost:4000/directors")
    .then(res => res.json())
    .then(data => setDirectors(data))
    }, []
  )

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Directors Page</h1>
          {
            directors.map(dir => <DirectorCard name={dir.name} movies={dir.movies} key={dir.id}/>)
          }
      </main>
    </>
  );
};

export default Directors;
