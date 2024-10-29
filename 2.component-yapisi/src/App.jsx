import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Fatih, { users } from "./Login";
import Hello from "./Hello";

function App() {
  console.log(users);

  return (
    <div>
      {/* <Fatih /> */}
      <Hello />
    </div>
  );
}

export default App;
