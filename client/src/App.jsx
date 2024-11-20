import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Experience from './components/Experience';
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
        },
        {
            path: '/experience',
            element: <Experience />
        }

    ]);

    return (
        <RouterProvider router={router} />
    );
}

export default App;
