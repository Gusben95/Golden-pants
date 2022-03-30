import { Action } from "history";
import { useDispatch } from "react-redux";
import {increment,decrement} from "../actions/orderactions"
function handleplus() {
  dispatch(increment(1))

  console.log("plus");
}
function handleminus() {
  dispatch(decrement(1))
  console.log("minus");
}
export default function CartList(props) {
  const dispatch = useDispatch();
  console.log(props);
  return (
    <li>
      {props.item.title}
      <button onClick={handleplus}>+</button>
      <button onClick={handleminus}>-</button>
    </li>
  );
}
