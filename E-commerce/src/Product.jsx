import React from "react";

const Product = ({ product }) => {
  const { id, title, price, description, category, image, rating } = product;
  return (
    <div className="border rounded-md h-[30rem] w-80 relative ">
      <div className="flex flex-col items-center">
        <div className="my-4">
          <img className="h-56 px-4" src={image} alt="" />
        </div>
        <h2 className="my-4 text-lg font-bold px-4">{title}</h2>
      </div>
      <div className="ml-4 absolute bottom-12 text-cyan-800">
        <p><span className="text-md font-serif">Price:</span> {price} Euro</p>
        <p><span className="text-md font-serif">Category:</span> {category}</p>
        <p><span className="text-md font-serif">Rating:</span> {rating.rate}</p>
      </div>
      <button className="btn absolute bottom-4 right-4">Details</button>
    </div>
  );
};

export default Product;
