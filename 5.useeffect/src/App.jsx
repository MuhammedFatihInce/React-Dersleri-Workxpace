import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    console.log("her zaman çalışır");
  });

  useEffect(() => {
    console.log("ilk render edildiğinde çalışır.");
  }, []);

  useEffect(() => {
    console.log(
      "ilk render edildiğinde ve firstName veya lastName state değeri değiştiğinde çalışır."
    );
  }, [firstName, lastName]);

  // useEffect(() => {
  //   console.log(
  //     "ilk render edildiğinde ve firstName state değeri değiştiğinde çalışır."
  //   );
  // }, [firstName]);

  // useEffect(() => {
  //   console.log(
  //     "ilk render edildiğinde ve lastName state değeri değiştiğinde çalışır."
  //   );
  // }, [lastName]);

  return (
    <>
      <div>
        <button onClick={() => setFirstname("Fatih")}>Adı Değiştir</button>
      </div>
      <div>
        <button onClick={() => setLastName("İnce")}>Soyismi Değiştir</button>
      </div>
    </>
  );
}

export default App;
