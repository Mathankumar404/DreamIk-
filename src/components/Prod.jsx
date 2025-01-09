import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Prod = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {}; // Extract the product from route state

  if (!product) {
    // If no product is passed, navigate back to the main page
    navigate("/");
    return null;
  }

  return (
    <>
      <div className="product-page">
        <div>
          <img
            src={product.source}
            alt={product.name}
            className="stickerImage"
          />
        </div>
        <div className="imagedetails">
          <h1>{product.name}</h1>
          <p>
            <strong>Price:</strong> Rs . {product.price}
          </p>
          <p>
            <strong>Glossy:</strong> {product.glossy}%
          </p>
          <p>
            <strong>Template:</strong> {product.template}
          </p>
          <p>
            <strong>Product Code:</strong> {product.productcode}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            {product.status === 1 ? "Available" : "Unavailable"}
          </p>
          <p>
            <strong>Properties:</strong> {product.props.join(", ")}
          </p>
          <Link
            className="product-personalize"
            id={product.id}
            to={"/Personalize"}
            state={{ product }}
          >
            <button className="personalize-Btn">
              personalize and Add cart
            </button>
          </Link>
        </div>
      </div>
      <button onClick={() => navigate(-1)} className="back-btn">
        Go Back to shop
      </button>
    </>
  );
};

export default Prod;
