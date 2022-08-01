import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import RouteUrls from "./resources/RouteUrls";
import "./assets/styles/base.scss";

const RootComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path={RouteUrls.homePage} element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default RootComponent;
