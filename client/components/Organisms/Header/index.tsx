import { useRouter } from "next/router";
import { FC } from "react";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import { StyledButton } from "../../../components/Atoms";
import { Container, StyledList } from "./styledComponents";
import Link from "next/link";

const Header: FC = () => {
  const { pathname } = useRouter();
  const registerPath = "/register";
  const loginPath = "/login";
  const isRegisterPage = pathname === registerPath;
  const isLoginPage = pathname === loginPath;

  return (
    <Container component="header">
      <StyledList aria-label="Login">
        {!isRegisterPage && (
          <li>
            <Link href={registerPath}>
              <StyledButton
                endIcon={<HowToRegIcon />}
                BGType="primaryOutlined"
                transparent={true}
                sx={{ width: "160px" }}
              >
                Register
              </StyledButton>
            </Link>
          </li>
        )}
        {!isLoginPage && (
          <li>
            <Link href={loginPath}>
              <StyledButton endIcon={<LoginIcon />} sx={{ width: "160px" }}>
                Login
              </StyledButton>
            </Link>
          </li>
        )}
      </StyledList>
    </Container>
  );
};

export default Header;
