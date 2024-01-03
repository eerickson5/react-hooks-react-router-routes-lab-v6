
export default function DirectorCard({name, movies}) {
  return (
    <article>
        <h2>{name}</h2>
        <ul>
            {
                movies.map( mov => <p key={mov}>{mov}</p>)
            }
        </ul>
        
    </article>
  );
};