import json from "./overworld-features.json";

export enum JsonOverworldFeatureType {
  armos = "armos",
  bomb = "bomb",
  candle = "candle",
  graveMarker = "graveMarker",
  item = "item",
  open = "open",
  powerBracelet = "powerBracelet",
  dock = "dock",
  recorder = "recorder"
}

export interface JsonOverworldFeature {
  type: JsonOverworldFeatureType;
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

export default function jsonOverworldFeaturesData() {
  const features: JsonOverworldFeature[] = json as any;

  return features;
}
