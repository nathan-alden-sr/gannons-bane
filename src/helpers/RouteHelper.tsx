import { Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import NewTrackedSeedPage from "../pages/NewTrackedSeed/NewTrackedSeedPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
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
