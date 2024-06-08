import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
const Home = lazy(() => import("./Pages/Home/home"));
const Destination = lazy(() => import("./Pages/Destination/destination"));
const Contact = lazy(()=> import("./Pages/Contact/contact"));
const About = lazy(()=> import("./Pages/About/about"));
const Blog = lazy(()=> import("./Pages/Blog/blog"));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" Component={Home} />
        <Route path="/home" Component={Home} />   
        <Route path="/destinations" Component={Destination} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/blog" Component={Blog} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
