import { RouterProvider } from "react-router";
import router from "./App.routes";
import { AuthProvider, useAuth } from "./context/AuthContext";
import useRemote from "./hooks/useRemote";
import { Suspense } from "react";
// import { Home } from 'starter_remote/Home';
function App() {
  const auth = useAuth();
  console.log(auth);
  // const Home2 = useRemote("starter_remote", "Home");
  const Dashboard = useRemote("starter_remote", "Dashboard");
  return (
    <AuthProvider>
      {/* <RouterProvider router={router} /> */}
      {/* <Home /> */}
      <Suspense fallback={<div>Loading remote component...</div>}>
        {/* <Home2 /> */}
        <Dashboard auth={{nome:"Host",authHost: auth}}/>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
