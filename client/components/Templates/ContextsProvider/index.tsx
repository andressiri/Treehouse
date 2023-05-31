import { FC } from "react";
import {
  GeneralContextProvider,
  RoomsContextProvider,
  StudentsContextProvider,
  TeachersContextProvider,
  UsersContextProvider,
} from "../../../contexts";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ContextsProvider: FC<Props> = ({ children }) => {
  return (
    <GeneralContextProvider>
      <UsersContextProvider>
        <RoomsContextProvider>
          <StudentsContextProvider>
            <TeachersContextProvider>{children}</TeachersContextProvider>
          </StudentsContextProvider>
        </RoomsContextProvider>
      </UsersContextProvider>
    </GeneralContextProvider>
  );
};

export default ContextsProvider;
