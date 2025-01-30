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
import Vendors from './components/Vendors.jsx';
import EventDetails from './pages/EventDetails.jsx';
import Category from './pages/Category.jsx';

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
      {
        path: '/vendors',
        element: (
          <ProtectedRoute>
            <Vendors />
          </ProtectedRoute>
        )
      },
      {
        path: '/events/:title',
        element: (
          <ProtectedRoute>
            <EventDetails />
          </ProtectedRoute>
        )
      },
      {
        path: '/categories/:name',
        element: (
          <ProtectedRoute>
            <Category />
          </ProtectedRoute>
        )
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);