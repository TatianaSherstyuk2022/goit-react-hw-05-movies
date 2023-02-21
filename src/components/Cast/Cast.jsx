import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchCast } from 'services/api';

export function* Cast() {
  const [loading, setLoading] = useState(false);
  const { movieId } = useSearchParams();
  const [actors, setActors] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetchCast(movieId);
        setActors(response);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData(movieId);
  }, [movieId]);

  const { cast } = actors;
  return (
    <>
      {cast.map(actor => (
        <div key={actor.id}>
          {/* <img src={actor.profile_path} alt={actor.name} width="200" /> */}
          <p>{actor.name}</p>
        </div>
      ))}
    </>
  );
}