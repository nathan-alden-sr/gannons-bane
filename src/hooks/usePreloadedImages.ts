import { useEffect } from "react";
import { generateId } from "../helpers/IdHelper";

interface CustomWindow extends Window {
  usePreloadImagesData?: Record<string, unknown[]>;
}

declare const window: CustomWindow;

export const usePreloadedImages = (srcs: string[]) => {
  useEffect(() => {
    const id = generateId();

    window.usePreloadImagesData = window.usePreloadImagesData ?? {};
    window.usePreloadImagesData[id] = [];

    for (const src of srcs) {
      const image = new Image();

      console.debug(`Preloading ${src}`);

      image.src = src;

      window.usePreloadImagesData[id].push(image);
    }

    return () => {
      delete window.usePreloadImagesData?.[id];
    };
  }, [srcs]);
};
