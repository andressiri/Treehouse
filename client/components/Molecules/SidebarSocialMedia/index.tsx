import { FC, useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  TWITTER_URL,
} from "../../../config/constants";
import { Tooltip } from "../../../components/Atoms";
import { Container, StyledAnchor } from "./styledComponents";

const SidebarSocialMedia: FC = () => {
  const [facebookTooltip, setFacebookTooltip] = useState<boolean>(false);
  const [instagramTooltip, setInstagramTooltip] = useState<boolean>(false);
  const [twitterTooltip, setTwitterTooltip] = useState<boolean>(false);

  return (
    <Container>
      <StyledAnchor
        href={FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setFacebookTooltip(true)}
        onMouseLeave={() => setFacebookTooltip(false)}
        aria-label={"Go to Facebook"}
      >
        {facebookTooltip ? (
          <Tooltip color="primaryContrast" width="100px">
            Go to Facebook
          </Tooltip>
        ) : (
          <></>
        )}
        <FacebookIcon />
      </StyledAnchor>
      <StyledAnchor
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setInstagramTooltip(true)}
        onMouseLeave={() => setInstagramTooltip(false)}
        aria-label={"Go to Intagram"}
      >
        {instagramTooltip ? (
          <Tooltip color="primaryContrast" width="100px">
            Go to Instagram
          </Tooltip>
        ) : (
          <></>
        )}
        <InstagramIcon />
      </StyledAnchor>
      <StyledAnchor
        href={TWITTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setTwitterTooltip(true)}
        onMouseLeave={() => setTwitterTooltip(false)}
        aria-label={"Go to Twitter"}
      >
        {twitterTooltip ? (
          <Tooltip color="primaryContrast" width="100px">
            Go to Twitter
          </Tooltip>
        ) : (
          <></>
        )}
        <TwitterIcon />
      </StyledAnchor>
    </Container>
  );
};

export default SidebarSocialMedia;
