import { useSelector } from "react-redux";
import CartList from "./CartList";
export default function ShopingCart({ cartOpen, setCartOpen }) {
  const order = useSelector((state) => {
    return state.order;
  });

  function handleClick() {
    setCartOpen(!cartOpen);
  }

  let displayOrder = order?.map((item, index) => {
    return <CartList item={item} key={index} />;
  });
  return (
    <section className="cart--section">
      <button onClick={handleClick}>back</button>
      <h1> Order</h1>
      {displayOrder}
    </section>
  );
}
