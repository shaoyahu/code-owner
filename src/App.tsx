import router from "./router/index.tsx";
import { notification } from "antd";
import { ApiContext } from "./context";
import { RouterProvider } from "react-router-dom";

function App() {
  const [api, contextHolder] = notification.useNotification();
  return (
    <ApiContext.Provider value={api}>
      {contextHolder}
      <RouterProvider router={router} />
    </ApiContext.Provider>
  );
}

export default App;
