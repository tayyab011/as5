

import './App.css'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./page/Home.jsx";
import RegisterPage from "./page/RegisterPage.jsx";
import LoginPage from "./page/LoginPage.jsx";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./component/PrivateRoute.jsx";
import Nopageforview from "./component/Nopageforview.jsx";
import AboutPage from "./page/AboutPage.jsx";
import Contact from "./page/Contact";
import ProductPage from "./page/ProductPage";
import Dashboard from "./component/Dashboard.jsx";
import BlogPage from './page/BlogPage.jsx';
import ServicePage from './page/ServicePage.jsx';
import UpdateTeam from './component/UpdateTeam.jsx';
import UpdateBlog from './component/UpdateBlog.jsx';
import UpdateService from './component/UpdateService.jsx';
function App() {


  return (
    <>
      <BrowserRouter>
        <Toaster position="bottom-center" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/about"
            element={
              <PrivateRoute>
                <AboutPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          />
          <Route
            path="/product"
            element={
              <PrivateRoute>
                <ProductPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/blog"
            element={
              <PrivateRoute>
                <BlogPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/service"
            element={
              <PrivateRoute>
                <ServicePage />
              </PrivateRoute>
            }
          />
          <Route path="/update-team/:id" element={<UpdateTeam />} />
          <Route path="/update-blog/:id" element={<UpdateBlog />} />
          <Route path="/update-service/:id" element={<UpdateService />} />
          <Route path="*" element={<Nopageforview />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
