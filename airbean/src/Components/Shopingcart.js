import { useSelector } from "react-redux";
import { useEffect } from "react";
import CartList from "./CartList";
export default function ShopingCart(props) {
  const update = props.setAmount;

  const order = useSelector((state) => {
    return state.order;
  });

  let amountList = order.map((obj) => {
    return obj.amount;
  });

  const initValue = 0;
  const sum = amountList.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initValue
  );

  useEffect(() => {
    update(sum);
  });

  let totalPriceList = order.map((obj) => {
    return obj.amount * obj.price;
  });

  const initTotalValue = 0;
  const totalsum = totalPriceList.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initTotalValue
  );

  let displayOrder = order?.map((item, index) => {
    return <CartList item={item} key={index} />;
  });
  return (
    <section className="cart--section">
      <h1> Order</h1>
      {displayOrder}
      <div>
        {order.length ? (
          <section className="total--info">
            <p className="item--total">Total</p>
            <div className="item--dots"></div>
            <p className="item--sum">{totalsum ? totalsum : 0}kr</p>
            <p className="item--ink">ink moms + drönarleverans</p>
          </section>
        ) : (
          "no items in cart"
        )}
      </div>
      <button className="takemyMoney">Take my money!</button>
    </section>
  );
}
