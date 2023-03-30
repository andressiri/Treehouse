import { FC, useContext } from "react";
import { RoomsContext } from "../../../contexts";
import Router from "next/router";
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
  confirmAction: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  errorText?: string;
  successText: string;
  open: boolean;
  onClose: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  confirmContext: "RoomsContext";
}

const ConfirmModal: FC<Props> = ({
  text,
  confirmAction,
  errorText = "Oops! Something went wrong, please try again.",
  successText,
  open,
  onClose,
  confirmContext,
}) => {
  const { isLoading, isError, setIsError, isSuccess, setMessage } = useContext(
    confirmContext === "RoomsContext" ? RoomsContext : RoomsContext
  );

  const handleClose = () => onClose();

  const handleError = () => {
    setIsError(false);
    setMessage("");
    onClose();
  };

  const handleSuccess = () => {
    Router.reload();
  };

  return (
    <StyledBackdrop open={open}>
      {isLoading ? <Spinner /> : <></>}
      <InnerContainer>
        <CloseContainer>
          <StyledIconButton onClick={handleClose}>
            <CloseIcon />
          </StyledIconButton>
        </CloseContainer>
        <Text>
          {!isError && !isSuccess ? text : isError ? errorText : successText}
        </Text>
        {!isError && !isSuccess ? (
          <ButtonsContainer>
            <StyledButton
              BGType="primaryOutlined"
              sx={{ width: "160px" }}
              endIcon={<NotInterestedIcon />}
              onClick={handleClose}
            >
              Cancel
            </StyledButton>
            <StyledButton
              sx={{ width: "160px" }}
              endIcon={<CheckIcon />}
              onClick={confirmAction}
            >
              Confirm
            </StyledButton>
          </ButtonsContainer>
        ) : isError ? (
          <StyledButton
            sx={{ width: "160px" }}
            endIcon={<CheckIcon />}
            onClick={handleError}
          >
            Close
          </StyledButton>
        ) : (
          <StyledButton
            sx={{ width: "160px" }}
            endIcon={<CheckIcon />}
            onClick={handleSuccess}
          >
            Close
          </StyledButton>
        )}
      </InnerContainer>
    </StyledBackdrop>
  );
};

export default ConfirmModal;
