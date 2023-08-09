import { createBrowserRouter } from 'react-router-dom';
import App from '../src/App';
import Home from '../src/components/Home';
import Detail from '../src/components/Detail';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: ':postId',
                element: <Detail />,
            }
        ]
    }
])

export default router; 