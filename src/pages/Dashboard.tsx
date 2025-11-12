import router from "../App.routes";
import { RouterProvider } from "react-router";
import { AuthProvider, useAuth } from "../context/AuthContext";

export const Dashboard = (props) => {
  console.log("Dashboard props", props);
  const auth = useAuth();
  console.log("Dashboard", auth);
  return (
    <AuthProvider>
      <h1>Dashboard Page 👌🐲👏😊</h1>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};
