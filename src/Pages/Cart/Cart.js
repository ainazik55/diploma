import { useContext, useState } from "react";
import CartList from "../../Components/CartList/CartList";
import OrderForm from "../../Components/OrderForm/OrderForm";
import { AppContext } from "../../App";
import './Cart.css';

export function Cart() {
  const [modalActive, setModalActive] = useState(false);
  const { cart, user } = useContext(AppContext);

  if (Object.keys(cart).length === 0) {
    return (
      <div className="Cart">
        <h1>Cart</h1>
        <CartList />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="Cart">
        <h1>Cart</h1>
        <CartList />
      </div>
    );
  }

  return (
    <div className="Cart">
      <h1>Cart</h1>
      <CartList />
      <button className="order" onClick={() => setModalActive(true)}>Order</button>
      <OrderForm active={modalActive} setActive={setModalActive} />
    </div>
  );
}
