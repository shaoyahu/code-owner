import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const nav = useNavigate();
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <Result
        status="404"
        title="404"
        subTitle="你访问的页面已消失"
        extra={
          <Button type="primary" onClick={() => nav("/")}>
            回到首页
          </Button>
        }
      />
    </div>
  );
}
