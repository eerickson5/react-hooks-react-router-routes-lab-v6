import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ActorCard from "../components/ActorCard";

function Actors() {

  const [actors, setActors] = useState([])

  useEffect( () => {
    fetch("http://localhost:4000/actors")
    .then(res => res.json())
    .then(data => setActors(data))
  }, [])

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        {actors.map( actor => <ActorCard name={actor.name} movies={actor.movies} key={actor.id}/>)}
      </main>
    </>
  );
};

export default Actors;
