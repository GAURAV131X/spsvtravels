import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
const LandingPage = lazy(()=> import ("./LandingPage/landingPage"));
const Home = lazy(() => import("./HomeListing/home"));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/home" Component={Home} />  
    <Route path="/" Component={LandingPage}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
