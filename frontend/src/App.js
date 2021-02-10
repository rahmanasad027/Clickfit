import React from 'react';
// import Product from './components/products';
// import data from './data';
import ProductScreen from './components/Screens/ProductScreen';
import HomeScreen from './components/Screens/HomeScreen';
import { BrowserRouter, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link to='/' className='brand'>clickFit</Link>
            {/* <a className="brand" href="/">
              clickFit
          </a> */}
          </div>
          <div>
            <Link to='/cart'>Cart</Link>
            <Link to='/signin'>Sign in</Link>
            {/* <a href="/cart">Cart</a> */}
            {/* <a href="/signin">Sign In</a> */}
          </div>
        </header>
        <main>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          {/* <div>
            <div className="row center">
              {data.products.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </div>
          </div> */}
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;