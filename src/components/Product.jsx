import React from 'react';

const Product = ({ product, addToCart, removeFromCart, isInCart }) => {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img className="card-img-top" src={product.image} alt={product.title} />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{product.title}</h5>
            <p>${product.price}</p>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {!isInCart ? (
              <button className="btn btn-outline-dark mt-auto" onClick={() => addToCart(product)}>Add to cart</button>
            ) : (
              <button className="btn btn-outline-dark mt-auto" onClick={() => removeFromCart(product.id)}>Remove from cart</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
