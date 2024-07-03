import React from 'react';
import Product from './Product';

const products = [
  { id: 1, title: 'Redmi', price: '18.00', image: 'msedge_a07Y7vsBp6.png' },
  { id: 2, title: 'Oneplus', price: '20.00', image: 'msedge_EA9QF3gBsS.png' },
  { id: 3, title: 'IQOO', price: '15.00', image: 'msedge_f11dMngoNs.png' },
  { id: 4, title: 'Samsung', price: '40.00', image: 'msedge_FELwzO9F98.png' },
  { id: 5, title: 'NARZO', price: '12.00', image: 'msedge_GLH07XlxRr.png' },
  { id: 6, title: 'IPhone', price: '80.00', image: 'msedge_Xzkw6Imz7l.png' },
  // Add more products as needed
];

const ProductList = ({ addToCart, removeFromCart, cartItems }) => {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 justify-content-center">
          {products.map(product => (
            <Product
              key={product.id}
              product={product}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              isInCart={cartItems.some(item => item.id === product.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
