import { FC } from "react";
import { FormBottomNavigationText } from "../../Atoms";
import { CreateOrEditPage } from "../../Templates";
import { Container, BottomTextContainer } from "./styledComponents";
import { FormsComponentsProps } from "../../../typings/forms";
import { LOGIN } from "../../../config/constants";

const RegisterPage: FC<FormsComponentsProps> = (props) => {
  const loginPath = `/${LOGIN}`;
  const loginText = "Already have an account? Login";

  return (
    <Container>
      <CreateOrEditPage {...props} />
      <BottomTextContainer>
        <FormBottomNavigationText href={loginPath} text={loginText} />
      </BottomTextContainer>
    </Container>
  );
};

export default RegisterPage;
