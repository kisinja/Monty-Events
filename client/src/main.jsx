import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import PublicRoute from './components/PublicRoute.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Login from './pages/Login.jsx';
import Concerts from './pages/Concerts.jsx';
import Sports from './pages/Sports.jsx';
import Festivals from './pages/Festivals.jsx';
import Theatre from './pages/Theatre.jsx';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/login',
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        )
      },
      {
        path: '/concerts',
        element: (
          <ProtectedRoute>
            <Concerts />
          </ProtectedRoute>
        )
      },
      {
        path: '/sports',
        element: (
          <ProtectedRoute>
            <Sports />
          </ProtectedRoute>
        )
      },
      {
        path: '/theatre',
        element: (
          <ProtectedRoute>
            <Theatre />
          </ProtectedRoute>
        )
      },
      {
        path: '/festivals',
        element: (
          <ProtectedRoute>
            <Festivals />
          </ProtectedRoute>
        )
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);