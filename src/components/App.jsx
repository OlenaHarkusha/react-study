import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { Gallery } from './Gallery';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Dogs = lazy(() => import('../pages/Dogs'));
const Dog = lazy(() => import('../pages/Dog'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dogs" element={<Dogs />} />
          <Route path="dogs/:dogId" element={<Dog />}>
            <Route path="subbreeds" element={<div>Subbreeds</div>} />
            <Route path="gallery" element={<Gallery />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
