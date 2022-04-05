import { useDispatch } from "react-redux";
import { increment, decrement } from "../actions/orderactions";
export default function CartList(props) {
  const dispatch = useDispatch();
  // console.log(props);

  // each coffee item (obj) in cartlist
  const item = props.item;
  // console.log(item);

  // increase amount of coffee
  function handleplus() {
    dispatch(increment(item));
  }
  // decrease amount of coffee

  function handleminus() {
    dispatch(decrement(item));
  }
  return (
    <li className="cartItem--li">
      <section className="item--info">
        <p className="item--title">{props.item.title}</p>
        <div className="item--dots"></div>
        <p className="item--price">{props.item.price} kr</p>
      </section>

      <section className="amount--section">
        <button onClick={handleplus} className="add--button">
          <img src="/graphics/arrow-up.svg" alt="add" />
        </button>
        <p className="value--section">{props.item.amount}</p>
        <button onClick={handleminus} className="sub--button">
          <img src="/graphics/arrow-down.svg" alt="sub" />
        </button>
      </section>
    </li>
  );
}
