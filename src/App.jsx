
import { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('./layouts'));
const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog'));

export const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
