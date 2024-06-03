import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Service from './pages/Service.jsx';
import Review from './pages/Review.jsx';
import Contact from './pages/Contact.jsx';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Layout from './layout/layout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />
      },
      {
        path: "/service",
        element: <Service />
      },
      {
        path: "/review",
        element: <Review />
      },
      {
        path: "/contact-us",
        element: <Contact/>
      }
    ]
  },
  {
    path: "*",
    element: <div>404 Not Found</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
