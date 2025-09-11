import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Edit from '../pages/Edit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [],
  },
  {
    path: 'code-editor',
    element: <Edit />,
  },

  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
