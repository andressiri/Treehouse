import { FC } from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";
import createEmotionCache from "../utils/createEmotionCache";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  GeneralContextProvider,
  RoomsContextProvider,
  StudentsContextProvider,
  TeachersContextProvider,
  UsersContextProvider,
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
      <UsersContextProvider>
        <RoomsContextProvider>
          <StudentsContextProvider>
            <TeachersContextProvider>
              <CacheProvider value={emotionCache}>
                <HeadSetup />
                <ThemeProvider theme={theme}>
                  <Component {...pageProps} />
                  <ToastContainer
                    position="bottom-right"
                    newestOnTop={true}
                    theme="colored"
                  />
                </ThemeProvider>
              </CacheProvider>
            </TeachersContextProvider>
          </StudentsContextProvider>
        </RoomsContextProvider>
      </UsersContextProvider>
    </GeneralContextProvider>
  );
};

export default App;
