import { Button, notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
function App() {
  const openNotification = () => {
    notification.open({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };
  return (
    <div>
      <Button
        className="!m-5"
        type="primary"
        onClick={openNotification}
        icon={<SmileOutlined />}
      >
        Button
      </Button>
    </div>
  );
}

export default App;
