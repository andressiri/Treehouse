import { FC } from "react";
import { FormBottomNavigationText, SectionTitle } from "../../Atoms";
import { BasicFormConstructor } from "../../Organisms";
import { Container } from "./styledComponents";
import { FormsComponentsProps } from "../../../typings/forms";
import { RememberMe } from "../../Molecules";
import { FORGOT_PASSWORD, REGISTER } from "../../../config/constants";

const LoginPage: FC<Omit<FormsComponentsProps, "imageProps">> = ({
  title,
  formProps,
}) => {
  const forgotPasswordPath = `/${FORGOT_PASSWORD}`;
  const forgotPasswordText = "Forgot password? Recover it";
  const registerPath = `/${REGISTER}`;
  const registerText = "Don't have an account? Register";

  return (
    <Container>
      <SectionTitle>{title}</SectionTitle>
      <BasicFormConstructor {...formProps} />
      <RememberMe />
      <FormBottomNavigationText
        href={forgotPasswordPath}
        text={forgotPasswordText}
      />
      <FormBottomNavigationText href={registerPath} text={registerText} />
    </Container>
  );
};

export default LoginPage;
