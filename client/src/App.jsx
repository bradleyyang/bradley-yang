import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Haneco from './components/Haneco';
import Memo from './components/Memo';
import SparkSense from './components/SparkSense';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/projects',
            element: <Projects />
        },
        {
            path: '/experience',
            element: <Experience />
        },
        {
            path: '/experience/haneco',
            element: <Haneco />
        },
        {
            path: '/projects/sparksense',
            element: <SparkSense />
        },
        {
            path: '/projects/memo',
            element: <Memo />
        }

    ]);

    return (
        <RouterProvider router={router} />
    );
}

export default App;
