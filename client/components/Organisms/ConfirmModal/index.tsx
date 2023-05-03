import { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import CheckIcon from "@mui/icons-material/Check";
import { Spinner, StyledButton } from "../../Atoms";
import {
  StyledBackdrop,
  InnerContainer,
  CloseContainer,
  StyledIconButton,
  Text,
  ButtonsContainer,
} from "./styledComponents";

interface Props {
  text: string;
  confirmAction: () => void;
  open: boolean;
  onClose: () => void;
  noAction?: () => void;
  isLoading?: boolean;
}

const ConfirmModal: FC<Props> = ({
  text,
  confirmAction,
  open,
  onClose,
  noAction,
  isLoading,
}) => {
  const handleClose = () => onClose();

  return (
    <StyledBackdrop open={open}>
      {isLoading ? <Spinner /> : <></>}
      <InnerContainer>
        <CloseContainer>
          <StyledIconButton onClick={handleClose}>
            <CloseIcon />
          </StyledIconButton>
        </CloseContainer>
        <Text>{text}</Text>
        <ButtonsContainer>
          <StyledButton
            BGType="primaryOutlined"
            sx={{ width: "160px" }}
            endIcon={<NotInterestedIcon />}
            onClick={noAction || handleClose}
          >
            {noAction ? "No" : "Cancel"}
          </StyledButton>
          <StyledButton
            sx={{ width: "160px" }}
            endIcon={<CheckIcon />}
            onClick={confirmAction}
          >
            {noAction ? "Yes" : "Confirm"}
          </StyledButton>
        </ButtonsContainer>
      </InnerContainer>
    </StyledBackdrop>
  );
};

export default ConfirmModal;
