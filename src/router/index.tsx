import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import CodeEditor from "../pages/CodeEditor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "code-editor",
    element: <CodeEditor />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
