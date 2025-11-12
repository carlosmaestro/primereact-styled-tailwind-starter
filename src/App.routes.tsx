import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    // middleware:[authenticated(true)],
    element: <Home />,
  }
]);

export default router;