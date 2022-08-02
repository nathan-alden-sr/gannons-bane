import { Route } from "react-router-dom";
import { customAlphabet } from "nanoid";
import { alphanumeric } from "nanoid-dictionary";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import TrackedSeedPage from "../pages/TrackPage/TrackedSeedPage";
import isDefined from "../functions/isDefined";

const idLength = 10;
const idRegExp = new RegExp(`^[a-z0-9]{${idLength}}$`, "iu");
const generateId = customAlphabet(alphanumeric, idLength);

// Not found

export function createNotFoundRoute(): React.ReactElement {
  return <Route path="*" element={<NotFoundPage />} />;
}

// Home

export function buildHomeRouteUrl(): string {
  return "/";
}

export function createHomeRoute(): React.ReactElement {
  return <Route path="/" element={<HomePage />} />;
}

// Tracked seed

export function buildTrackedSeedWithIdRouteUrl(id: string): string {
  return `/tracked-seed/${id}`;
}

export function buildTrackedSeedWithNewIdRouteUrl(): string {
  return buildTrackedSeedWithIdRouteUrl(generateId());
}

export function createTrackedSeedRoute(): React.ReactElement {
  return <Route path="/tracked-seed/:id" element={<TrackedSeedPage />} />;
}

// Validation

export function isValidId(id: string | undefined | null, allowUndefined: boolean = false): boolean {
  const isIdDefined = isDefined(id);

  return (!isIdDefined && allowUndefined) || (isIdDefined && idRegExp.test(id));
}
