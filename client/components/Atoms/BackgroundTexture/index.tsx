import React, { FC } from "react";
import { TextureContainer } from "./styledComponents";

interface Props {
  imageSrc: string;
  zIndex?: number;
  bgWidth?: string;
  bgHeight?: string;
  opacity?: string;
}

const BackgroundTexture: FC<Props> = ({
  imageSrc,
  zIndex = -5,
  bgWidth = "300px",
  bgHeight = "300px",
  opacity = "1",
}) => {
  return (
    <TextureContainer
      imageSrc={imageSrc}
      zIndex={zIndex}
      bgWidth={bgWidth}
      bgHeight={bgHeight}
      opacity={opacity}
    />
  );
};

export default BackgroundTexture;
