import { FC, useContext } from "react";
import {
  RoomsContext,
  StudentsContext,
  TeachersContext,
} from "../../../contexts";
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
  errorText?: string;
  successText: string;
  open: boolean;
  onClose: () => void;
  noAction?: () => void;
  onSuccess: () => void;
  confirmContext: "RoomsContext" | "StudentsContext" | "TeachersContext";
}

const ConfirmModal: FC<Props> = ({
  text,
  confirmAction,
  errorText = "Oops! Something went wrong, please try again.",
  successText,
  open,
  onClose,
  noAction,
  onSuccess,
}) => {
  const {
    isError,
    setIsError,
    isSuccess,
    setIsSuccess,
    setMessage,
    isLoading,
  } = useContext(StudentsContext);

  const handleClose = () => onClose();

  const handleError = () => {
    setIsError(false);
    setMessage("");
    onClose();
  };

  const handleSuccess = () => {
    setIsSuccess(false);
    setMessage("");
    onClose();
    onSuccess();
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
