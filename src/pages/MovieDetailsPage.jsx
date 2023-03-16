import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import {getMovie} from "../api/movies-api";

import './MovieDetailsPage.scss';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await getMovie(params.id);
      console.log(response, 'respose')
      // setMovie()
    }

    fetchMovie();
  }, [params.id])

  return (
    <div className="movie-detail-page">
      Movies Details
    </div>
  )
}

export default MovieDetailsPage;
