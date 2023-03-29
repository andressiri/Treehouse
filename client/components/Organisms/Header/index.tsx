import { FC } from "react";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import { StyledButton } from "../../../components/Atoms";
import { Container, StyledList } from "./styledComponents";

const Header: FC = () => {
  return (
    <Container component="header">
      <StyledList aria-label="Login">
        <li>
          <StyledButton
            endIcon={<HowToRegIcon />}
            BGType="primaryOutlined"
            transparent={true}
            sx={{ width: "160px" }}
          >
            Register
          </StyledButton>
        </li>
        <li>
          <StyledButton endIcon={<LoginIcon />} sx={{ width: "160px" }}>
            Login
          </StyledButton>
        </li>
      </StyledList>
    </Container>
  );
};

export default Header;
