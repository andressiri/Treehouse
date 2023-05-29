import { FC } from "react";
import { useGetCreateRoomComponentsProps } from "../../../utils/hooks";
import { Layout, CreateOrEditPage } from "../../../components/Templates";

const CreateRoom: FC = () => {
  const componentsProps = useGetCreateRoomComponentsProps();

  return (
    <Layout>
      <CreateOrEditPage {...componentsProps} />
    </Layout>
  );
};

export default CreateRoom;
