import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./Product";
import Container from "./Container";

function App() {
  const productName = "Buzdolabı";
  return (
    <div>
      {/* <Product productName="ayakkabı" price={3200} />
      <hr />
      <Product productName="Pantolon" price={900} />
      <hr />
      <Product productName={productName} price={900} /> */}

      <Container>
        <Product productName="Pantolon" price={900} />
      </Container>
    </div>
  );
}

export default App;
