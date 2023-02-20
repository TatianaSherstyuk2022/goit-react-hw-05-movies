import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingApi } from 'services/api';

export function HomePage() {
  const [trendings, setTrending] = useState([]);

  useEffect(() => {
    async function moviesFetch() {
      try {
        const { results } = await fetchTrendingApi();
        setTrending(results);
      } catch (err) {
        console.log(err);
      }
    }
    moviesFetch();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {trendings && (
        <ul>
          {trendings.map(trending => (
            <li key={trending.id}>
              <Link to={trending.id}>{trending.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
