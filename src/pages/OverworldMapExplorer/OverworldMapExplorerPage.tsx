import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useRecoilState } from "recoil";
import { isNil } from "lodash-es";
import Nav from "../../components/Nav/Nav";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import overworldMapHelper from "../../helpers/OverworldMapHelper";
import questHelper from "../../helpers/QuestHelper";
import { usePreloadedImages } from "../../hooks/usePreloadedImages";
import jsonOverworldFeaturesData, { JsonOverworldFeatureType } from "../../resources/jsonOverworldFeaturesData";
import overworldMapExplorerFeatureAtom from "../../state/atoms/overworldMapExplorerFeatureAtom";
import overworldMapExplorerTileHighlightBlueImage from "../../assets/images/overworld-map-explorer-tile-highlight-blue.png";
import overworldMapExplorerTileHighlightCyanImage from "../../assets/images/overworld-map-explorer-tile-highlight-cyan.png";
import overworldMapExplorerTileHighlightGrayImage from "../../assets/images/overworld-map-explorer-tile-highlight-gray.png";
import overworldMapExplorerTileHighlightGreenImage from "../../assets/images/overworld-map-explorer-tile-highlight-green.png";
import overworldMapExplorerTileHighlightMagentaImage from "../../assets/images/overworld-map-explorer-tile-highlight-magenta.png";
import overworldMapExplorerTileHighlightOrangeImage from "../../assets/images/overworld-map-explorer-tile-highlight-orange.png";
import overworldMapExplorerTileHighlightRedImage from "../../assets/images/overworld-map-explorer-tile-highlight-red.png";
import overworldMapExplorerTileHighlightWhiteImage from "../../assets/images/overworld-map-explorer-tile-highlight-white.png";
import overworldMapExplorerTileHighlightYellowImage from "../../assets/images/overworld-map-explorer-tile-highlight-yellow.png";
import zelda1OverworldMapFirstQuestImage from "../../assets/images/zelda-1-overworld-map-first-quest.png";
import zelda1OverworldMapSecondQuestImage from "../../assets/images/zelda-1-overworld-map-second-quest.png";
import zelda1OverworldMapMixedQuestImage from "../../assets/images/zelda-1-overworld-map-mixed-quest.png";
import "./OverworldMapExplorerPage.scss";

const preloadedImages = [
  overworldMapExplorerTileHighlightBlueImage,
  overworldMapExplorerTileHighlightCyanImage,
  overworldMapExplorerTileHighlightGrayImage,
  overworldMapExplorerTileHighlightGreenImage,
  overworldMapExplorerTileHighlightMagentaImage,
  overworldMapExplorerTileHighlightOrangeImage,
  overworldMapExplorerTileHighlightRedImage,
  overworldMapExplorerTileHighlightWhiteImage,
  overworldMapExplorerTileHighlightYellowImage,
  zelda1OverworldMapFirstQuestImage,
  zelda1OverworldMapSecondQuestImage,
  zelda1OverworldMapMixedQuestImage
];
const jsonOverworldFeatures = jsonOverworldFeaturesData();

const OverworldMapExplorerPage: React.FC = () => {
  usePreloadedImages(preloadedImages);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const features = [
    {
      description: "Armos",
      featureState: useRecoilState(overworldMapExplorerFeatureAtom(JsonOverworldFeatureType.armos)),
      image: overworldMapExplorerTileHighlightCyanImage,
      imageElementRef: useRef<HTMLImageElement>(null),
      type: JsonOverworldFeatureType.armos
    },
    {
      description: "Bomb",
      featureState: useRecoilState(overworldMapExplorerFeatureAtom(JsonOverworldFeatureType.bomb)),
      image: overworldMapExplorerTileHighlightBlueImage,
      imageElementRef: useRef<HTMLImageElement>(null),
      type: JsonOverworldFeatureType.bomb
    },
    {
      description: "Candle",
      featureState: useRecoilState(overworldMapExplorerFeatureAtom(JsonOverworldFeatureType.candle)),
      image: overworldMapExplorerTileHighlightRedImage,
      imageElementRef: useRef<HTMLImageElement>(null),
      type: JsonOverworldFeatureType.candle
    },
    {
      description: "Dock",
      featureState: useRecoilState(overworldMapExplorerFeatureAtom(JsonOverworldFeatureType.dock)),
      image: overworldMapExplorerTileHighlightOrangeImage,
      imageElementRef: useRef<HTMLImageElement>(null),
      type: JsonOverworldFeatureType.dock
    },
    {
      description: "Grave Marker",
      featureState: useRecoilState(overworldMapExplorerFeatureAtom(JsonOverworldFeatureType.graveMarker)),
      image: overworldMapExplorerTileHighlightGrayImage,
      imageElementRef: useRef<HTMLImageElement>(null),
      type: JsonOverworldFeatureType.graveMarker
    },
    {
      description: "Item",
      featureState: useRecoilState(overworldMapExplorerFeatureAtom(JsonOverworldFeatureType.item)),
      image: overworldMapExplorerTileHighlightGreenImage,
      imageElementRef: useRef<HTMLImageElement>(null),
      type: JsonOverworldFeatureType.item
    },
    {
      description: "Open",
      featureState: useRecoilState(overworldMapExplorerFeatureAtom(JsonOverworldFeatureType.open)),
      image: overworldMapExplorerTileHighlightWhiteImage,
      imageElementRef: useRef<HTMLImageElement>(null),
      type: JsonOverworldFeatureType.open
    },
    {
      description: "Power Bracelet",
      featureState: useRecoilState(overworldMapExplorerFeatureAtom(JsonOverworldFeatureType.powerBracelet)),
      image: overworldMapExplorerTileHighlightMagentaImage,
      imageElementRef: useRef<HTMLImageElement>(null),
      type: JsonOverworldFeatureType.powerBracelet
    },
    {
      description: "Recorder",
      featureState: useRecoilState(overworldMapExplorerFeatureAtom(JsonOverworldFeatureType.recorder)),
      image: overworldMapExplorerTileHighlightYellowImage,
      imageElementRef: useRef<HTMLImageElement>(null),
      type: JsonOverworldFeatureType.recorder
    }
  ];

  const mapImagesByQuest: Record<string, string> = {
    first: zelda1OverworldMapFirstQuestImage,
    second: zelda1OverworldMapSecondQuestImage,
    mixed: zelda1OverworldMapMixedQuestImage
  } as const;

  const featureImageElements = features.map((a) => {
    return (
      <img
        key={a.type}
        className={`OverworldMapExplorerPage-FeatureImage OverworldMapExplorerPage-FeatureImage_${a.type}`}
        src={a.image}
        ref={a.imageElementRef}
      />
    );
  });

  const featureToggleButtons = features
    .sort((a, b) => a.type.localeCompare(b.type))
    .map((a) => {
      const [featureState, setFeatureState] = a.featureState;

      function onToggledChange(toggled: boolean) {
        setFeatureState({ ...featureState, visible: toggled });
      }

      return (
        <ToggleButton
          key={a.type}
          className="OverworldMapExplorerPage-FeatureOption"
          toggledClassName="OverworldMapExplorerPage-FeatureOption_visible"
          defaultToggled={featureState.visible}
          onToggledChange={onToggledChange}
        >
          <img key={a.type} className="OverworldMapExplorerPage-FeatureOptionImage" src={a.image} />
          {a.description}
        </ToggleButton>
      );
    });

  const defaultQuest: string = questHelper.quests[0].key;
  const questOptions = questHelper.quests.map((a) => (
    <option key={a.key} value={a.key}>
      {a.description}
    </option>
  ));
  const [quest, setQuest] = useState(defaultQuest);
  const questImageElement = mapImagesByQuest[quest];

  useEffect(() => {
    const canvasContext = canvasRef.current?.getContext("2d");

    if (isNil(canvasContext)) {
      return;
    }

    canvasContext.clearRect(0, 0, overworldMapHelper.mapSizeInPixels.width, overworldMapHelper.mapSizeInPixels.height);

    jsonOverworldFeatures
      .filter((a) => !isNil(a.tile) && a.quests.includes(quest))
      .forEach((overworldFeatureData) => {
        const feature = features.find((a) => a.type === overworldFeatureData.type);

        if (isNil(feature)) {
          throw new Error(`Unexpected overworld feature type ${overworldFeatureData.type}`);
        }

        const [featureState] = feature.featureState;

        if (!featureState.visible) {
          return;
        }

        const imageElement = feature.imageElementRef.current;

        if (isNil(imageElement)) {
          throw new Error(`Overworld feature data ${overworldFeatureData.type} image ref not found`);
        }

        const location = overworldMapHelper.mapTileCoordinateToAbsolutePixelCoordinates(
          overworldFeatureData.screen.x,
          overworldFeatureData.screen.y,
          overworldFeatureData.tile!.x,
          overworldFeatureData.tile!.y
        );

        canvasContext.drawImage(
          imageElement,
          location.center.x - imageElement.width / 2,
          location.center.y - imageElement.height / 2
        );
      });
  });

  return (
    <>
      <Helmet title="Overworld Map Explorer" />
      <div className="OverworldMapExplorerPage">
        <Nav className="OverworldMapExplorerPage-Nav" />
        <main className="OverworldMapExplorerPage-Content">
          <div className="OverworldMapExplorerPage-Options">
            <div>
              <label htmlFor="quest">Quest: </label>
              <select id="quest" onChange={(event) => setQuest(event.target.value)} defaultValue={defaultQuest}>
                {questOptions}
              </select>
            </div>
            <div className="OverworldMapExplorerPage-FeaturesOptions">
              Features (toggle to show/hide):
              {featureToggleButtons}
            </div>
          </div>
          <div className="OverworldMapExplorerPage-MapContainer">
            <img className="OverworldMapExplorerPage-OverworldMapImage" src={questImageElement} />
            <canvas
              className="OverworldMapExplorerPage-Canvas"
              ref={canvasRef}
              width={overworldMapHelper.mapSizeInPixels.width}
              height={overworldMapHelper.mapSizeInPixels.height}
            />
            {featureImageElements}
          </div>
        </main>
      </div>
    </>
  );
};

export default OverworldMapExplorerPage;
