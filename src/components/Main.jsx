import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
import Prod from "./Prod";
import { Link } from "react-router-dom";

const Main = () => {
  const [data, setData] = useState([]);
  const [product, setproduct] = useState([
    {
      name: "RoseBK-FlowerTheme-Type1-ImageRight",
      id: "1",
      source:
        "public/images/DreamikAILabel-Rectangle-1080x1920px-HD-RoseBK-Type2-ImageLeft.png",
      price: 100,
      status: 1,
      props: ["white", "rose", "type1", "image", "right", "128dc1"],
      glossy: 60,
      template: "template1",
      productcode: "128dc1",
    },
    {
      name: "RoseBK-Type2-ImageLeft",
      id: "2",
      source:
        "public/images/DreamikAILabel-Rectangle-1080x1920px-HD-WhiteBK-BatmintonTheme-Type1-ImageLeft.png",
      price: 100,
      status: 1,
      props: ["flower", "type2", "image", "left", "rose", "34bace"],
      glossy: 60,
      template: "template2",
      productcode: "34bace",
    },
    {
      name: "WhiteBK-BatmintonTheme-Type1-ImageLeft",
      id: "3",
      source:
        "public/images/DreamikAILabel-Rectangle-1080x1920px-HD-WhiteBK-CricketTheme-Type1-ImageLeft.png",
      price: 100,
      status: 1,
      props: [
        "batminton",
        "white",
        "type1",
        "image",
        "left",
        "5801f3",
        "english",
      ],
      glossy: 60,
      template: "template3",
      productcode: "5801f3",
    },
  ]);
  useEffect(() => {
    // fetch("/src/data.json") // Path relative to the `public` directory
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! Status: ${response.status}`);
    //     }
    //     return response.json();
    //   })
    //   .then((jsonData) => {
    //     setData(jsonData);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching JSON data:", error);
    //   });
  }, []);



  return (
    <div>
      <h1>Name slip</h1>
      <div className="product-grid" id="container">
        {product.map((product) => (
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
