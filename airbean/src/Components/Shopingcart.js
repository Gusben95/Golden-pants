import { useSelector } from "react-redux";
import CartList from "./CartList";
export default function ShopingCart({ cartOpen, setCartOpen }) {
  const order = useSelector((state) => {
    return state.order;
  });

  let displayOrder = order?.map((item, index) => {
    return <CartList item={item} key={index} />;
  });
  return (
    <section className="cart--section">
      <h1> Order</h1>
      {displayOrder}
    </section>
  );
}
