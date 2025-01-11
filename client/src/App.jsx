import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Haneco from './components/Haneco';
import Remitbee from './components/Remitbee';
import StockPredictor from './components/StockPredictor';
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
            element: <Projects />,
        },
        {
            path: '/experience',
            element: <Experience />,
        },
        {
            path: '/haneco',
            element: <Haneco />,
        },
        {
            path: '/remitbee',
            element: <Remitbee />,
        },
        {
            path: '/stock-predictor',
            element: <StockPredictor />,
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
}

export default App;
