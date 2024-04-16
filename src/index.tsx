import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
const LandingPage = lazy(() => import("./LandingPage/landingPage"));
const Home = lazy(() => import("./HomeListing/home"));
const Contact = lazy(()=> import("./Contact/contact"));
const About = lazy(()=> import("./About/about"));
const Blog = lazy(()=> import("./Blog/blog"));
const Services = lazy(()=> import("./Services/services"));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/" Component={Home} />
        <Route path="/contact" Component={Contact} />
        <Route path="/about" Component={About} />
        <Route path="/blog" Component={Blog} />
        <Route path="/services" Component={Services}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
