import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useAuth } from "../context/AuthContext";
import { CustomButton } from "../components/ui/CustomButton";

export const Home = () => {
  const [count, setCount] = useState(0);
  const auth = useAuth();
  console.log("Home remote", auth);
  return (
    <>
      <p>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo inline-block" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="logo react inline-block"
            alt="React logo"
          />
        </a>
      </p>
      <h1>Remote Starter Template 👌🐲👏😊</h1>
      <div>
        <h2>
          Demo app showing PrimeReact + Tailwind CSS in styled mode with
          PrimeReact Theme!
        </h2>
      </div>
      <div className="card">
        <Button
          icon="pi pi-plus"
          className="mr-2"
          label="Increment"
          onClick={() => setCount((count) => count + 1)}
        ></Button>
        <InputText value={count.toString()} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <CustomButton />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      ;
    </>
  );
};
