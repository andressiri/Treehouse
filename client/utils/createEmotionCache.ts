import createCache from "@emotion/cache";

const createEmotionCache = () => {
  return createCache({ key: "css", prepend: true });
};

export default createEmotionCache;

/* This createEmotionCache function ensures that Emotion’s default settings
  will be replaced with our custom styles and that this information will be
  configured both on the client and server sides. The prepend option is set
  to be true, which will cause our custom styles to load first. */
