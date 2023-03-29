import React, { FC } from "react";
import { TextureContainer } from "./styledComponents";

interface Props {
  imageSrc: string;
  zIndex?: number;
}

const BackgroundTexture: FC<Props> = ({ imageSrc, zIndex = -5 }) => {
  return <TextureContainer imageSrc={imageSrc} zIndex={zIndex} />;
};

export default BackgroundTexture;
