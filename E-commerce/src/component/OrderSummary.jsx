import React from "react";

const OrderSummary = ({ cart }) => {
  return (
    <div>
      <h2 className="text-center font-bold my-12">Order Summary</h2>
      <div className="mx-6">
        <p>{cart}</p>
      </div>
    </div>
  );
};

export default OrderSummary;
