import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
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
    {
      path: '/projects',
      element: <Projects />
    }

  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
