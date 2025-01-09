import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
import Prod from "./Prod";
import { Link } from "react-router-dom";

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("src/data.json") // Path relative to the `public` directory
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Error fetching JSON data:", error);
      });
  }, []);

  console.log(data);

  return (
    <div>
      <h1>Name slip</h1>
      <div className="product-grid" id="container">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <Link
      className="product-card"
      id={product.name}
      to={"/product"}
      state={{ product }}
    >
      <img src={product.source} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>Price: Rs . {product.price}</p>
    </Link>
  );
};

export default Main;
