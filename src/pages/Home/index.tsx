import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

export default function Home() {
  const nav = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <Title>Code Owner</Title>
      <Text></Text>
      <Button onClick={() => nav("/code-editor")}>立即进入</Button>
    </div>
  );
}
