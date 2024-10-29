import React from "react";

export const users = [
  {
    username: "fatih",
    password: "1",
  },
  {
    username: "aysenur",
    password: "2",
  },
];

function Login() {
  return (
    //Fragment
    <div>
      <div>
        <p>Kullanıcı Adınız</p>
        <input type="text" />
      </div>
      <div>
        <p>Şifreniz</p>
        <input type="text" />
      </div>
    </div>
  );
}

export default Login;
