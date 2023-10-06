import React from "react";

const Product = ({ product, handleAddToCart }) => {
  const { id, title, price, description, category, image, rating} = product;
  return (
    <div className="border rounded-md h-[30rem] w-80 relative ">
      <div className="flex flex-col items-center">
        <div className="my-2">
          <img className="h-56 px-4" src={image} alt="" />
        </div>
        <h2 className="my-4 text-md font-bold px-2 ">{title}</h2>
      </div>
      <div className="ml-4 absolute bottom-16 text-cyan-800">
        <p>
          <span className="text-md font-serif">Price:</span> {price}&euro;
        </p>
        <p>
          <span className="text-md font-serif">Category:</span> {category}
        </p>
        <p>
          <span className="text-md font-serif">Rating:</span> {rating.rate}
        </p>
      </div>
      <a className="absolute bottom-14 right-4 underline cursor-pointer text-orange-700">
        Details
      </a>
      <button onClick={handleAddToCart} className="py-2 border-x rounded-b-md bg-orange-400 absolute w-full bottom-0 text-white font-bold hover:bg-orange-700">ADD TO CART</button>
    </div>
  );
};

export default Product;
