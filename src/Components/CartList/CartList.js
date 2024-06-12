import "./CartList.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import { useContext } from "react";

export default function CartList() {
  const { products, cart, setCart } = useContext(AppContext);

  function onQuantityChange(product, qty) {
    setCart({
      ...cart,
      [product.id]: qty
    })
  }

  function onItemRemove(product) {
    const newCart = { ...cart };
    delete newCart[product.id];
    setCart(newCart);
  }

  const productIds = Object.keys(cart);

  const output = products
    .filter((product) => productIds.includes(product.id))
    .map((product) => (
      <div className="cartItem" key={product.id}>
        <Link to={"/products/" + product.slug}>
          <img src={product.img} alt={product.name} />
        </Link>
        <div className="productDetails">
          <Link to={"/products/" + product.slug}>{product.name}</Link>
          <div className="inputs">
            <input
              type="number"
              value={cart[product.id]}
              min={1}
              onChange={(event) => onQuantityChange(product, +event.target.value)} />
            <span>${(cart[product.id] * product.price)}</span>
          </div>
        </div>
        <button className="removeButton" onClick={() => onItemRemove(product)}>
          х
        </button>
      </div>
    ));

  const totalPrice = products
    .filter((product) => productIds.includes(product.id))
    .reduce((total, product) => total + (product.price * cart[product.id]), 0)
    .toFixed(2);

  return (
    <div className="CartList">
      {output}
      <div className="totalPrice">Total Price: ${totalPrice}</div>
    </div>
  )
}
