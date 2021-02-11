import React from 'react';
// import Product from '../products';
import Product from '../products'
<<<<<<< HEAD
import data from '../data';
=======
import data from '../../data';
>>>>>>> f8605d5bed583f95a9ff664c9fd33a727fc4001c

export default function HomeScreen() {
  return (
    <div>
      <div className="row center">
        {data.products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
    /* <div>
            <div className="row center">
              {data.products.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </div>
          </div> */
  );
}