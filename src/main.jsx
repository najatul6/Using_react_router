
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';
import React from 'react';
import Users from './components/Pages/Users/Users';
import Photos from './components/Pages/Photos/Photos';
import UserDetails from './components/Pages/UserDetails/UserDetails';
import HomeFeed from './components/HomeFeed/HomeFeed';
import ErrorPage from './components/ErrrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/about",
        loader:() => fetch('https://jsonplaceholder.typicode.com/users/1/todos'),
        element: <About></About>
      },
      {
        path: "/photos",
        loader: () => fetch('https://jsonplaceholder.typicode.com/albums/1/photos'),
        element: <Photos></Photos>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/user/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
        path:'/',
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users/1/posts'),
        element:<HomeFeed></HomeFeed>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
