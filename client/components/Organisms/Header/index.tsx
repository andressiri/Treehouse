import { FC, useContext, useEffect, useState } from "react";
import { UsersContext } from "../../../contexts";
import { useRouter } from "next/router";
import Link from "next/link";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { StyledButton } from "../../../components/Atoms";
import { Container, StyledList } from "./styledComponents";
import { IAuthUser } from "../../../typings/users";
import { LOGIN, REGISTER } from "../../../config/constants";

const Header: FC = () => {
  const [shouldRender, setShouldRender] = useState(false);
  const { authUser, setAuthUser } = useContext(UsersContext);
  const userRole = (authUser as IAuthUser)?.roleId;
  const registerPath = `/${REGISTER}`;
  const loginPath = `/${LOGIN}`;
  const { pathname } = useRouter();
  const isRegisterPage = pathname === registerPath;
  const isLoginPage = pathname === loginPath;

  const handleLogout = () => setAuthUser({});

  useEffect(() => {
    setShouldRender(true);
  }, []);

  if (!shouldRender) return <></>;

  return (
    <Container component="header">
      <StyledList>
        {!isRegisterPage && !userRole && (
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
        {!isLoginPage && !userRole && (
          <li>
            <Link href={loginPath}>
              <StyledButton endIcon={<LoginIcon />} sx={{ width: "160px" }}>
                Login
              </StyledButton>
            </Link>
          </li>
        )}
        {userRole && (
          <li>
            <Link href={loginPath} onClick={handleLogout}>
              <StyledButton
                endIcon={<LogoutIcon />}
                BGType="primaryOutlined"
                transparent={true}
                sx={{ width: "160px" }}
              >
                Logout
              </StyledButton>
            </Link>
          </li>
        )}
      </StyledList>
    </Container>
  );
};

export default Header;
