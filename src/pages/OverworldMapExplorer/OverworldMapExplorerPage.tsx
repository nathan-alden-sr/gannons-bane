import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { isNil } from "lodash-es";
import Nav from "../../components/Nav/Nav";
import { overworldFeatures } from "../../helpers/ResourceHelper";
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

const overworldMapSizeInPixels = {
  width: 4096,
  height: 1408
} as const;

const screenSizeInTiles = {
  width: 16,
  height: 11
} as const;

const tileSizeInPixels = {
  width: 16,
  height: 16
} as const;

const features = overworldFeatures();

function tileLocation(screenX: number, screenY: number, tileX: number, tileY: number) {
  const [x1, y1] = [
    screenX * screenSizeInTiles.width * tileSizeInPixels.width + tileX * tileSizeInPixels.width,
    screenY * screenSizeInTiles.height * tileSizeInPixels.height + tileY * tileSizeInPixels.height
  ];
  const [x2, y2] = [x1 + tileSizeInPixels.width, y1 + tileSizeInPixels.height];

  return {
    topLeft: { x: x1, y: y1 },
    topRight: { x: x2, y: y1 },
    bottomRight: { x: x2, y: y2 },
    bottomLeft: { x: x1, y: y2 },
    center: { x: x1 + tileSizeInPixels.width / 2, y: y1 + tileSizeInPixels.height / 2 }
  };
}

const MapExplorerPage: React.FC = () => {
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
  const tileHighlightImgElementRefsByFeatureType: Record<string, React.RefObject<HTMLImageElement>> = {
    armos: tileHighlightImages.cyan.imageElementRef,
    bomb: tileHighlightImages.blue.imageElementRef,
    candle: tileHighlightImages.red.imageElementRef,
    graveMarker: tileHighlightImages.gray.imageElementRef,
    item: tileHighlightImages.green.imageElementRef,
    open: tileHighlightImages.white.imageElementRef,
    powerBracelet: tileHighlightImages.magenta.imageElementRef,
    raft: tileHighlightImages.orange.imageElementRef,
    recorder: tileHighlightImages.yellow.imageElementRef
  };

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

  const [quest, setQuest] = useState("mixed");

  let questImageElement;

  switch (quest) {
    case "first":
      questImageElement = zelda1OverworldMapFirstQuestImage;
      break;
    case "second":
      questImageElement = zelda1OverworldMapSecondQuestImage;
      break;
    case "mixed":
      questImageElement = zelda1OverworldMapMixedQuestImage;
      break;
    default:
      throw new Error(`Unexpected quest ${quest}`);
  }

  useEffect(() => {
    const canvasContext = canvasRef.current?.getContext("2d");

    if (isNil(canvasContext)) {
      return;
    }

    canvasContext.clearRect(0, 0, overworldMapSizeInPixels.width, overworldMapSizeInPixels.height);

    features
      .filter((feature) => !isNil(feature.tile) && feature.quests.includes(quest))
      .forEach((feature) => {
        const imgElementRef = tileHighlightImgElementRefsByFeatureType[feature.type];

        if (isNil(imgElementRef)) {
          console.log(feature.type);
        }

        const imgElement = tileHighlightImgElementRefsByFeatureType[feature.type].current;

        if (isNil(imgElement)) {
          return;
        }

        const location = tileLocation(feature.screen.x, feature.screen.y, feature.tile!.x, feature.tile!.y);

        canvasContext.drawImage(imgElement, location.center.x - imgElement.width / 2, location.center.y - imgElement.height / 2);
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
            <select id="quest" onChange={(event) => setQuest(event.target.value)}>
              <option value="first">First</option>
              <option value="second">Second</option>
              <option value="mixed">Mixed</option>
            </select>
          </div>
          <div className="OverworldMapExplorerPage-MapContainer">
            <img className="OverworldMapExplorerPage-OverworldMapImage" src={questImageElement} />
            <canvas
              className="OverworldMapExplorerPage-Canvas"
              ref={canvasRef}
              width={overworldMapSizeInPixels.width}
              height={overworldMapSizeInPixels.height}
            />
            {tileHighlightImageElements}
          </div>
        </main>
      </div>
    </>
  );
};

export default MapExplorerPage;
