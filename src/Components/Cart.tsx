import { createPortal } from "react-dom";
import { useEffect } from "react";

const Cart: React.FC = ({ handleClick, isClosing }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <div className={`cart ${isClosing ? "cart--slide-out" : ""}`}>
        <div className="cart__header">
          <p>Cart</p>
          <button
            className="cart__close-button"
            onClick={handleClick}
            disabled={isClosing}
          >
            &times;
          </button>
        </div>
        <div className="cart__empty-message">
          <p>Your cart is empty</p>
        </div>
      </div>
      {createPortal(
        <div
          className={`cart__overlay-background ${
            isClosing ? "cart__overlay--appear-out" : ""
          }`}
        ></div>,
        document.body
      )}
    </>
  );
};

export default Cart;
