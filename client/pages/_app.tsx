import { FC } from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";
import createEmotionCache from "../utils/createEmotionCache";
import {
  GeneralContextProvider,
  RoomsContextProvider,
  StudentsContextProvider,
  TeachersContextProvider,
} from "../contexts";
import { HeadSetup } from "../components";
import "../styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

interface IAppProps extends AppProps {
  emotionCache: EmotionCache;
}

const App: FC<IAppProps> = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) => {
  return (
    <GeneralContextProvider>
      <RoomsContextProvider>
        <StudentsContextProvider>
          <TeachersContextProvider>
            <CacheProvider value={emotionCache}>
              <HeadSetup />
              <ThemeProvider theme={theme}>
                <Component {...pageProps} />
              </ThemeProvider>
            </CacheProvider>
          </TeachersContextProvider>
        </StudentsContextProvider>
      </RoomsContextProvider>
    </GeneralContextProvider>
  );
};

export default App;
