import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import * as RouteHelper from "./helpers/RouteHelper";
import "./assets/styles/app.scss";

const App: React.FC = () => {
  const defaultTitle = "Gannon's Bane - Zelda 1 Randomizer Tracker";

  return (
    <HelmetProvider>
      <Helmet titleTemplate={`%s - ${defaultTitle}`} defaultTitle={defaultTitle} />
      <RecoilRoot>
        <Router>
          <Routes>
            {RouteHelper.createNotFoundRoute()}
            {RouteHelper.createHomeRoute()}
            {RouteHelper.createNewTrackedSeedRoute()}
            {RouteHelper.createTrackedSeedRoute()}
          </Routes>
        </Router>
      </RecoilRoot>
    </HelmetProvider>
  );
};

export default App;
