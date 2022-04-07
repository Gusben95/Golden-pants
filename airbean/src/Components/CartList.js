import { useDispatch } from "react-redux";
import { increment, decrement } from "../actions/orderactions";
import "../views/stylesheets/coffelist.css";
import upp from "../assets/graphics/arrow-up.svg"
import down from "../assets/graphics/arrow-down.svg"
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
          <img src={upp} alt="add" />
        </button>
        <p className="value--section">{props.item.amount}</p>
        <button onClick={handleminus} className="sub--button">
          <img src={down} alt="sub" />
        </button>
      </section>
    </li>
  );
}
