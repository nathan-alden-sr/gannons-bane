import { Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import NewTrackedSeedPage from "../pages/NewTrackedSeed/NewTrackedSeedPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import OverworldMapExplorerPage from "../pages/OverworldMapExplorer/OverworldMapExplorerPage";
import TrackedSeedPage from "../pages/TrackedSeed/TrackedSeedPage";

// Not found

export function createNotFoundRoute() {
  return <Route path="*" element={<NotFoundPage />} />;
}

// /

export function buildHomeRouteUrl() {
  return "/";
}

export function createHomeRoute() {
  return <Route path="/" element={<HomePage />} />;
}

// /overworld-map-explorer

export function buildOverworldMapExplorerRouteUrl() {
  return "/overworld-map-explorer";
}

export function createOverworldMapExplorerRoute() {
  return <Route path="/overworld-map-explorer" element={<OverworldMapExplorerPage />} />;
}

// /tracked-seed/new

export function buildNewTrackedSeedUrl() {
  return "/tracked-seed/new";
}

export function createNewTrackedSeedRoute() {
  return <Route path="/tracked-seed/new" element={<NewTrackedSeedPage />} />;
}

// /tracked-seed/:id

export function buildTrackedSeedWithIdRouteUrl(id: string) {
  return `/tracked-seed/${id}`;
}

export function createTrackedSeedRoute() {
  return <Route path="/tracked-seed/:id" element={<TrackedSeedPage />} />;
}
