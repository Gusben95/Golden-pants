import { useDispatch } from "react-redux";
import { increment, decrement } from "../actions/orderactions";
export default function CartList(props) {
  const dispatch = useDispatch();
  // console.log(props.item);
  const obj = {
    item: props.item,
    value: 1,
  };
  // console.log(props);
  function handleplus() {
    dispatch(increment(obj));

    console.log("plus");
  }
  function handleminus() {
    dispatch(decrement(obj));
    console.log("minus");
  }
  console.log(props);
  return (
    <li>
      {props.item.title}
      <button onClick={handleplus}>+</button>
      <button onClick={handleminus}>-</button>
    </li>
  );
}
