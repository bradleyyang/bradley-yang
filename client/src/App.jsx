import Home from './components/Home';
import Contact from './components/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },

  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App
