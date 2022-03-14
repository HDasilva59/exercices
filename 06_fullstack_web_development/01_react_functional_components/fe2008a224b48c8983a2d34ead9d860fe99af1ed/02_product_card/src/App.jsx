import React from "react";

import ProductCard from "./components/product-card";
import "./styles/app.css";

export const App = () => {
  return (
    <div id="app" className="container default-flex">
      <ProductCard />
    </div>
  );
};
