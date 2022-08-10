import { useEffect, useState } from "react";

export default function useImageCache(srcs: string[]) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const images = srcs.map(async (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();

        img.src = src;
        img.onload = () => resolve(null);
        img.onerror = (e) => reject(e);
      });
    });

    Promise.all(images).then(() => setIsLoading(false));
  });

  return [isLoading];
}
