import overworldFeaturesJson from "../resources/overworld-features.json";

export enum FeatureType {
  armos = "armos",
  bomb = "bomb",
  graveMarker = "graveMarker",
  item = "item",
  open = "open",
  powerBracelet = "powerBracelet",
  recorder = "recorder"
}

interface OverworldFeature {
  type: string;
  screen: {
    x: number;
    y: number;
  };
  tile: {
    x: number;
    y: number;
  } | null;
  quests: string[];
  powerBraceletPushTile: {
    x: number;
    y: number;
  } | null;
}

export function overworldFeatures() {
  const features: OverworldFeature[] = overworldFeaturesJson;

  return features;
}
