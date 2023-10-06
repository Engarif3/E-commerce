import { useEffect, useState } from "react";
import Product from "./Product";
import "./App.css"

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="flex justify-center "> 
      <div>
        <h2 className="text-center text-5xl">Total Products: {products.length}</h2>
        <div className="shop-container">
          <div className="grid grid-cols-4 gap-12 my-12">
          {products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
          </div>
          <div className="bg-orange-200 my-12 rounded-md">
            <h2 className="text-center font-bold my-12">Order Summary</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
