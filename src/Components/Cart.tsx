import { createPortal } from "react-dom";
import { useState, useEffect } from "react";

const Cart: React.FC = ({ handleClick, isClosing }) => {
  const portalRoot = document.getElementById("root");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className={`cart ${isClosing ? "cart--slide-out" : ""}`}>
      <div className="cart__header">
        <p>Cart</p>
        <button className="cart__close-button" onClick={handleClick}>&times;</button>
      </div>
      <div className="cart__empty-message"><p>Your cart is empty</p></div>
      {createPortal(<div className="cart__overlay-background"></div>, portalRoot)}
    </div>
  );
};

export default Cart;
