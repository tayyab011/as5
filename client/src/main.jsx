import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './page/Home.jsx';
import RegisterPage from './page/RegisterPage.jsx';
import LoginPage from "./page/LoginPage.jsx";
import  { Toaster } from "react-hot-toast";
import PrivateRoute from './component/PrivateRoute.jsx';
import Nopageforview from './component/Nopageforview.jsx';
import AboutPage from './page/AboutPage.jsx';
import Contact from './page/Contact';
import ProductPage from './page/ProductPage';
import Dashboard from './component/Dashboard.jsx';
import App from './App.jsx';
createRoot(document.getElementById("root")).render(
  <StrictMode>
   <App/>
  </StrictMode>
);
