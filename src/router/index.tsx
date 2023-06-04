import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { Character, Home } from '../pages';
import Layout from './Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route path="character/:id" element={<Character />}></Route>
    </Route>
  )
);

export default router;
