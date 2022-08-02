import React from "react";
import { HashRouter as Router, Routes } from "react-router-dom";
import * as RouteHelper from "./helpers/RouteHelper";
import "./assets/styles/base.scss";

const RootComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        {RouteHelper.createNotFoundRoute()}
        {RouteHelper.createHomeRoute()}
        {RouteHelper.createTrackedSeedRoute()}
      </Routes>
    </Router>
  );
};

export default RootComponent;
