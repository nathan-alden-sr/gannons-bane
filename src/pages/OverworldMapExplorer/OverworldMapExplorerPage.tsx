import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { isNil } from "lodash-es";
import Nav from "../../components/Nav/Nav";
import { usePreloadedImages } from "../../hooks/usePreloadedImages";
import overworldMapHelper from "../../helpers/OverworldMapHelper";
import { overworldFeatures } from "../../helpers/ResourceHelper";
import questHelper from "../../helpers/QuestHelper";
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
const features = overworldFeatures();

const MapExplorerPage: React.FC = () => {
  usePreloadedImages(preloadedImages);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tileHighlightImages = {
    blue: {
      image: overworldMapExplorerTileHighlightBlueImage,
      imageElementRef: useRef<HTMLImageElement>(null)
    },
    cyan: {
      image: overworldMapExplorerTileHighlightCyanImage,
      imageElementRef: useRef<HTMLImageElement>(null)
    },
    gray: {
      image: overworldMapExplorerTileHighlightGrayImage,
      imageElementRef: useRef<HTMLImageElement>(null)
    },
    green: {
      image: overworldMapExplorerTileHighlightGreenImage,
      imageElementRef: useRef<HTMLImageElement>(null)
    },
    magenta: {
      image: overworldMapExplorerTileHighlightMagentaImage,
      imageElementRef: useRef<HTMLImageElement>(null)
    },
    orange: {
      image: overworldMapExplorerTileHighlightOrangeImage,
      imageElementRef: useRef<HTMLImageElement>(null)
    },
    red: {
      image: overworldMapExplorerTileHighlightRedImage,
      imageElementRef: useRef<HTMLImageElement>(null)
    },
    white: {
      image: overworldMapExplorerTileHighlightWhiteImage,
      imageElementRef: useRef<HTMLImageElement>(null)
    },
    yellow: {
      image: overworldMapExplorerTileHighlightYellowImage,
      imageElementRef: useRef<HTMLImageElement>(null)
    }
  };
  const tileHighlightImageElementRefsByFeatureType: Record<string, React.RefObject<HTMLImageElement>> = {
    armos: tileHighlightImages.cyan.imageElementRef,
    bomb: tileHighlightImages.blue.imageElementRef,
    candle: tileHighlightImages.red.imageElementRef,
    graveMarker: tileHighlightImages.gray.imageElementRef,
    item: tileHighlightImages.green.imageElementRef,
    open: tileHighlightImages.white.imageElementRef,
    powerBracelet: tileHighlightImages.magenta.imageElementRef,
    raft: tileHighlightImages.orange.imageElementRef,
    recorder: tileHighlightImages.yellow.imageElementRef
  } as const;
  const overworldMapImagesByQuest: Record<string, string> = {
    first: zelda1OverworldMapFirstQuestImage,
    second: zelda1OverworldMapSecondQuestImage,
    mixed: zelda1OverworldMapMixedQuestImage
  } as const;

  const tileHighlightImageElements = Object.entries(tileHighlightImages).map(([key, value]) => {
    return (
      <img
        key={key}
        className={`OverworldMapExplorerPage-TileHighlightImage OverworldMapExplorerPage-TileHighlightImage_${key}`}
        src={value.image}
        ref={value.imageElementRef}
      />
    );
  });

  const defaultQuest: string = questHelper.quests[0].key;

  const questOptions = questHelper.quests.map((quest) => (
    <option key={quest.key} value={quest.key}>
      {quest.description}
    </option>
  ));

  const [quest, setQuest] = useState(defaultQuest);
  const questImageElement = overworldMapImagesByQuest[quest];

  useEffect(() => {
    const canvasContext = canvasRef.current?.getContext("2d");

    if (isNil(canvasContext)) {
      return;
    }

    canvasContext.clearRect(0, 0, overworldMapHelper.mapSizeInPixels.width, overworldMapHelper.mapSizeInPixels.height);

    features
      .filter((feature) => !isNil(feature.tile) && feature.quests.includes(quest))
      .forEach((feature) => {
        const imageElementRef = tileHighlightImageElementRefsByFeatureType[feature.type];

        if (isNil(imageElementRef)) {
          console.log(feature.type);
        }

        const imageElement = tileHighlightImageElementRefsByFeatureType[feature.type].current;

        if (isNil(imageElement)) {
          return;
        }

        const location = overworldMapHelper.mapTileCoordinateToAbsolutePixelCoordinates(
          feature.screen.x,
          feature.screen.y,
          feature.tile!.x,
          feature.tile!.y
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
            <label htmlFor="quest">Quest: </label>
            <select id="quest" onChange={(event) => setQuest(event.target.value)} defaultValue={defaultQuest}>
              {questOptions}
            </select>
          </div>
          <div className="OverworldMapExplorerPage-MapContainer">
            <img className="OverworldMapExplorerPage-OverworldMapImage" src={questImageElement} />
            <canvas
              className="OverworldMapExplorerPage-Canvas"
              ref={canvasRef}
              width={overworldMapHelper.mapSizeInPixels.width}
              height={overworldMapHelper.mapSizeInPixels.height}
            />
            {tileHighlightImageElements}
          </div>
        </main>
      </div>
    </>
  );
};

export default MapExplorerPage;
