import React from 'react';

const Product = ({product}) => {
    const {id, title, price, description, category, image, rating}= product;
    return (
        <div className='border rounded-md h-96 w-80 flex flex-col items-center'>
            <div className='my-4'>
            <img className='h-56 px-4' src={image} alt="" />
            </div>
            <h2 className='my-4 text-lg font-bold px-4'>{title}</h2>
        </div>
    );
};

export default Product;