import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom'

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      {/* <a href={`/product/${product._id}`}> */}
      <Link to={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </Link>
      {/* </a> */}
      <div className="card-body">
        {/* <a href={`/product/${product._id}`}> */}
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        {/* </a> */}
        <Rating
          rating={product.rating}
          numReviews={product.numReviews} />
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
}