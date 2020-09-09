import React from "react";
import "./Checkout.css"
import SubTotal from "./SubTotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="https://christpottstown.org/images/images/amazon-smile-banner_2.jpg" alt="" />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* {BasketItem} */}
        </div>
      </div>

      <div className="checkout__right">
          <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
