import { useSelector } from "react-redux";
import CartList from "./CartList";
export default function ShopingCart() {
  //  get order data from reduxstore
  const order = useSelector((state) => {
    return state.order;
  });

  // get data from redux store and get an array with amount ? price so we have total sum of each coffee item

  let totalPriceList = order.map((obj) => {
    return obj.amount * obj.price;
  });
  // sum it up with reduce

  const initTotalValue = 0;
  const totalsum = totalPriceList.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initTotalValue
  );

  // map data and return each item and pass into element
  
  let displayOrder = order?.map((item, index) => {
    return <CartList item={item} key={index} />;
  });
  return (
    <section className="cart--section">
      <h1> Order</h1>
      {displayOrder}
      <div>
        {/* if we have item in our list diplay otherwise show text */}
        {order.length ? (
          <section className="total--info">
            <p className="item--total">Total</p>
            <div className="item--dots"></div>
            {/* pass in the total sum from items in cart */}
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
