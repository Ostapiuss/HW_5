import { NavLink, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getMovie } from "../../api/movies-api";

import { IMAGE__API } from "constants/common";

import './MovieDetailsPage.scss';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [pathname, setPathName] = useState();
  const params = useParams();

  const location = useLocation();

  useEffect(() => {
    const fetchMovie = async () => {
      const movie = await getMovie(params.id);
      setPathName(location.pathname)
      setMovie(movie)
    }

    fetchMovie();
  }, []);

  return (
    <>
      {
        movie && (
          <div className="movieDetails">
            <button type="button">Go Back</button>
            <div className="movieDetails__poster poster">
              <img src={`${IMAGE__API}${movie?.poster_path}`} className="poster-img" alt="poster" />
              <div className="poster-info">
                <h3 className="poster-title">{movie.title} ({movie.release_date?.slice(0, movie.release_date?.indexOf('-'))})</h3>
                <p>Use score: {Math.round(movie.popularity)}%</p>
                <div>
                  <h4 className="subtitle">Overview</h4>
                  <p>{movie.overview}</p>

                  <h5>Generes</h5>
                  <div className="generes">
                    {
                      movie.genres?.map((genre) => (
                        <p className="genre" key={genre.id}>{genre.name}</p>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="movieDetails__additional-info additional-info">
              <NavLink
                to={`${pathname}/cast`}
              // state={location.state}
              >
                <button className="additional-info-btn">Cast</button>
              </NavLink>
              <NavLink
                to={`${pathname}/reviews`}
              // state={location.state}
              >
                <button className="additional-info-btn">Review</button>
              </NavLink>
            </div>

            {/* <div className="main-info">
        <Outlet context={[movie]} />
      </div> */}
          </div>
        )
      }
    </>
  )
}

export default MovieDetailsPage;
