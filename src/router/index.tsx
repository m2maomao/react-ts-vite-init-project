import React, {lazy} from 'react';
import { Navigate } from "react-router-dom";

const Home = lazy(() => import('../views/Home'));

const withLoadingComponent = (comp:JSX.Element) => (
  <React.Suspense fallback={<div>Loading</div>}>
    {comp}
  </React.Suspense>
)

const routes = [
  {
    path: '/',
    element: <Navigate to={'/home'} />
  },
  {
    path: '/home',
    element: withLoadingComponent(<Home />)
  }
]

export default routes;