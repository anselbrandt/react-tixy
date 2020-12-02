import { useEffect, useState } from "react";

export const useGetViewport = () => {
  const [width, setWidth] = useState<number | undefined>();
  const [height, setHeight] = useState<number | undefined>();
  const isBrowser = typeof window !== "undefined";

  useEffect(() => {
    if (isBrowser) {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [isBrowser]);

  return { width, height };
};
