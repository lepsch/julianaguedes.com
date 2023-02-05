import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'

import Home from './pages/Home'
import reportWebVitals from './reportWebVitals'
import './index.css'
import About from './pages/About'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/sobre',
    element: <About />,
  },
]);

root.render(
  <React.StrictMode>
    <ParallaxProvider>
      <RouterProvider router={ router } />
    </ParallaxProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
