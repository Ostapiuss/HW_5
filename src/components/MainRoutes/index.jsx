import { Route, Routes } from 'react-router-dom';

import HomePager from "../../pages/HomePager";
import MoviesPage from "../../pages/MoviesPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePager />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movie/:id" element={<MovieDetailsPage />} />
    </Routes>
  )
}

export default MainRoutes;
