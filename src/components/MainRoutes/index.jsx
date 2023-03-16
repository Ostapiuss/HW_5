import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePager = lazy(() => import('../../pages/HomePager')); 
const MoviesPage = lazy(() => import('../../pages/MoviesPage')); 
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage'));

const MovieCast = lazy(() => import('../../pages/MovieDetailsPage/MovieCast')); 
const MovieReview = lazy(() => import('../../pages/MovieDetailsPage/MovieReview')); 

const NotFoundPage = lazy(() => import('../../pages/NotFoundPage')); 


const MainRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePager />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReview />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}

export default MainRoutes;
