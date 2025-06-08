const Cart: React.FC = () => {
  return (
    <div className="cart">
      <div className="cart__header">
        <p>Cart</p>
        <span>&times;</span>
      </div>
      <p className="cart__empty-message">You cart is empty</p>
      <div className="cart__overlay-background"></div>
    </div>
  );
};

export default Cart;
