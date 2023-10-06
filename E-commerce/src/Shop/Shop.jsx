import { useEffect, useState } from "react";
import Product from "../Products/Product";
import "./Shop.css"
import OrderSummary from "../component/OrderSummary";


function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart]= useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = () => {
    console.log("product added")
    setCart("mission done")
  }
  
  return (
    <div className="flex justify-center "> 
      <div>
        <h2 className="text-center text-5xl">Total Products: {products.length}</h2>
        <div className="shop-container">
          <div className="grid grid-cols-4 gap-12 my-12">
          {products.map((product) => (
            <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>
          ))}
          </div>
          <div className="bg-orange-200 my-12 rounded-md">
            <OrderSummary cart={cart}></OrderSummary>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
