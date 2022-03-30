import { useSelector } from "react-redux";
import CartList from "./CartList";
export default function Cart() {
  const order = useSelector((state) => {
    return state.order;
  });

  let displayOrder = order?.map((item, index) => {
    return <CartList item={item} key={index} />;
  });
  return (
    <section>
      <h1>CART CART CART</h1>
      {displayOrder}
    </section>
  );
}
