import { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('./layouts'));
const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog'));
const Product = lazy(() => import('./pages/Product'));
const Order = lazy(() => import('./pages/Order'));
const Processing = lazy(() => import('./pages/Processing'));

export const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="catalog/:type" element={<Catalog />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="order" element={<Order />} />
          <Route path="processing" element={<Processing />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
