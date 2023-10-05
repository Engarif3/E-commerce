import { useEffect, useState } from "react";
import Product from "./Product";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="flex justify-center mb-12"> 
      <div>
        <h2 className="text-center text-5xl my-12">Total Products: {products.length}</h2>
        <div className="grid grid-cols-5 gap-12">
          {products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
