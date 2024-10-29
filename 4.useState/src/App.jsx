import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//useState: hooks
//useState: Bir state'in değerini set metodunu kullanarak değiştirdiğinde component yeniden render edilir.
function App() {
  // const [firstName, setFirstname] = useState("Fatih");
  // const [lastName, setLastName] = useState("İnce");
  // const [names, setNames] = useState(["Enes", "Adem", "Yakup", "Ali"]);
  // const [userInfo, setUserInfo] = useState({
  //   username: "fince",
  //   password: "1212",
  // });
  // const [show, setShow] = useState(false);

  // const handleChange = () => {
  //   setFirstname("Ayşenur");
  // };

  const [count, setCount] = useState(0);

  const arttir = () => {
    setCount(count + 1);
  };

  return (
    <>
      {/* {firstName} {lastName}
      <div>{firstName}</div>
      <div>
        <button onClick={()=>{setFirstname("Melisa")}}>İsmi Değiştir</button>
        <button onClick={handleChange}>İsmi Değiştir</button>
      </div> */}
      {/* {names.map((name, index) => (
        <div key={index}>{name}</div>
      ))} */}
      {/* {userInfo.username} {userInfo.password} */}
      {/* {show ? (
        <div>
          {userInfo.username} {userInfo.password}
        </div>
      ) : (
        <div>bilgileri gösterme</div>
      )} */}

      <div>{count}</div>
      <div>
        <button onClick={arttir}>Arttır</button>
      </div>
    </>
  );
}

export default App;
