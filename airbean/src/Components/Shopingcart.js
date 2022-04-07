import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {reset} from "../actions/orderactions"
import CartList from "./CartList";
import "../views/stylesheets/shopingcart.css";


export default function ShopingCart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function toStatus(){
    dispatch(reset());
    navigate("/Status");
      };
  //  get order data from reduxstore
  const order = useSelector((state) => {
    return state.order;
  });

  // get data from redux store and get an array with amount ? price so we have total sum of each coffee item

  let totalPriceList = order?.map((obj) => {
    return obj.amount * obj.price;
  });
  // sum it up with reduce

  const initTotalValue = 0;
  let totalsum = totalPriceList?.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initTotalValue
  );

  // filter out obj with amount < 0

  let list = order?.filter((obj) => obj.amount > 0);
  // Then we save to localstorage

  localStorage.setItem("cart", JSON.stringify(list));
  console.log(list);

  let a = false;
  let b = false;
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === 1) {
      a = true;
      console.log("we have bryggkaffe");
    } else if (list[i].id === 7) {
      b = true;
      console.log("we have kaka");
    }
  }
  console.log(a);
  console.log(b);

  let testPasses = false;
  if (a === true && b === true) {
    testPasses = true;
    console.log("we passed the test");
    totalsum = totalsum - 39;
  } else console.log("test failed");
  console.log(testPasses);

  let item = localStorage.getItem("cart");
  const itemParsed = JSON.parse(item);

  // map data and return each item and pass into element

  let displayOrder = itemParsed?.map((item, index) => {
    return <CartList item={item} key={index} />;
  });

  return (
    <section className="cart--section">
      <div class="orderContainer">
      <h1 id="order"> Order</h1>
      {displayOrder}
      </div>
      <div>
        {/* if we have item in our list diplay otherwise show text */}
        <section className="total--info">
          <p className="item--total">Total</p>
          <div className="item--dots"></div>
          {/* pass in the total sum from items in cart */}
          <p className="item--sum">{totalsum ? totalsum : 0}kr</p>
          <p className="item--ink">ink moms + drönarleverans</p>
        </section>
      </div>

      <button className="takemyMoney" onClick={toStatus}>Take my money!</button>
    </section>
  );
}
