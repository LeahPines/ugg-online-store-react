import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Delivery } from "../../redux/CartSlice";
import Checkout from "./Checkout";

const CartSummary = () => {

  const { total, deliveryAdded } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <div className="summary-card p-4">
      <h4>Order Summary</h4>
      <div className="summary-details">
        <div className="d-flex justify-content-between mb-3">
          <span>Delivery</span>
          <span>
            <input
              type="checkbox"
              checked={deliveryAdded}
              onChange={() => dispatch(Delivery())} />
            Add Delivery
          </span>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <strong>Total</strong>
          <strong>${total.toFixed(2)}</strong>
        </div>
      </div>
      <Checkout />
    </div>
  );
};

export default CartSummary;
