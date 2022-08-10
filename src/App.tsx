import React, { Suspense } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Delay from "./components/Delay/Delay";
import * as RouteHelper from "./helpers/RouteHelper";
import Fallback from "./pages/Fallback/Fallback";
import "./App.scss";

const App: React.FC = () => {
  const defaultTitle = "Gannon's Bane - Zelda 1 Randomizer Tracker";

  return (
    <HelmetProvider>
      <Helmet titleTemplate={`%s - ${defaultTitle}`} defaultTitle={defaultTitle} />
      <RecoilRoot>
        <Suspense
          fallback={
            <Delay delayInMilliseconds={1000}>
              <Fallback />
            </Delay>
          }
        >
          <Router>
            <Routes>
              <Route path="/test" element={<Fallback />} />
              {RouteHelper.createNotFoundRoute()}
              {RouteHelper.createHomeRoute()}
              {RouteHelper.createOverworldMapExplorerRoute()}
              {RouteHelper.createNewTrackedSeedRoute()}
              {RouteHelper.createTrackedSeedRoute()}
            </Routes>
          </Router>
        </Suspense>
      </RecoilRoot>
    </HelmetProvider>
  );
};

export default App;
