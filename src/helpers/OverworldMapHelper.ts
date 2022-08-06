const tileSizeInPixels = { width: 16, height: 16 } as const;
const screenSizeInTiles = { width: 16, height: 11 } as const;
const screenSizeInPixels = {
  width: screenSizeInTiles.width * tileSizeInPixels.width,
  height: screenSizeInTiles.height * tileSizeInPixels.height
} as const;
const mapSizeInScreens = { width: 16, height: 8 } as const;
const mapSizeInTiles = {
  width: mapSizeInScreens.width * screenSizeInTiles.width,
  height: mapSizeInScreens.height * screenSizeInTiles.height
} as const;
const mapSizeInPixels = {
  width: mapSizeInTiles.width * tileSizeInPixels.width,
  height: mapSizeInTiles.height * tileSizeInPixels.height
} as const;

const overworldMapHelper = {
  mapSizeInScreens,
  mapSizeInTiles,
  mapSizeInPixels,
  screenSizeInTiles,
  screenSizeInPixels,
  tileSizeInPixels,
  mapTileCoordinateToAbsolutePixelCoordinates(screenX: number, screenY: number, tileX: number, tileY: number) {
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
} as const;

export default overworldMapHelper;
