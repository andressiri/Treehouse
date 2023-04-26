import React, {
  createContext,
  FC,
  useCallback,
  useEffect,
  useState,
} from "react";
import { getWindowDimensions } from "../../utils/helpers";
import { IContextProviderProps, IGeneralContext } from "../../typings/contexts";

export const GeneralContext = createContext<IGeneralContext>({
  viewportWidth:
    typeof window !== "undefined" ? getWindowDimensions().width : 0,
  viewportHeight:
    typeof window !== "undefined" ? getWindowDimensions().height : 0,
});

export const GeneralContextProvider: FC<IContextProviderProps> = ({
  children,
}) => {
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
