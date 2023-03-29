import React, {
  createContext,
  FC,
  useCallback,
  useEffect,
  useState,
} from "react";
import { getWindowDimensions } from "../../utils/helpers";

interface IContext {
  viewportWidth: number;
  viewportHeight: number;
}

export const GeneralContext = createContext<IContext>({
  viewportWidth:
    typeof window !== "undefined" ? getWindowDimensions().width : 0,
  viewportHeight:
    typeof window !== "undefined" ? getWindowDimensions().height : 0,
});

interface Props {
  children: React.ReactNode;
}

export const GeneralContextProvider: FC<Props> = ({ children }) => {
  const [viewportWidth, setViewportWidth] = useState<number>(
    typeof window !== "undefined" ? getWindowDimensions().width : 0
  );
  const [viewportHeight, setViewportHeight] = useState<number>(
    typeof window !== "undefined" ? getWindowDimensions().height : 0
  );

  const addResizeEvent = useCallback(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        const windowDimensions = getWindowDimensions();
        setViewportWidth(windowDimensions.width);
        setViewportHeight(windowDimensions.height);
      });
    }
  }, []);

  useEffect(() => {
    addResizeEvent();
  }, [addResizeEvent]);

  return (
    <GeneralContext.Provider
      value={{
        viewportWidth,
        viewportHeight,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
