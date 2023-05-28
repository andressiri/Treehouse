import { FC } from "react";
import { Layout, CreateOrEditPage } from "../../../components/Templates";
import { useGetCreateRoomComponentsProps } from "../../../utils/hooks";

const CreateRoom: FC = () => {
  const componentsProps = useGetCreateRoomComponentsProps();

  return (
    <Layout>
      <CreateOrEditPage {...componentsProps} />
    </Layout>
  );
};

export default CreateRoom;
