import {useEffect, useState} from "react";

import { getTrends } from 'api/movies-api';

import './HomePage.scss';
import {Link} from "react-router-dom";


const HomePager = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrends().then((moviesData) => {
      setMovies(moviesData.results);
    });
  }, []);

  return (
    <div className="home-page">
      <ul>
        {
          movies && (
            movies.map((movie) => (
              <li key={movie.id}>
                <Link to={`movie/${movie.id}`}>
                  <span>{movie.title}</span>
                </Link>
              </li>
            ))
          )
        }
      </ul>
    </div>
  )
}

export default HomePager;
