import { useDispatch } from "react-redux";
import { addItemToOrder } from "../actions/orderactions";

export default function Coffeeitem(props) {
  const dispatch = useDispatch();
  let coffee = props.menuitem;

  function handleClick() {
    console.log("clicked");
    console.log(coffee);
    dispatch(addItemToOrder(coffee));
  }

  console.log(coffee);
  return (
    <article className="coffee--section">
      <button className="btn" onClick={handleClick}>
        <img src="/graphics/add.svg" alt="add" height="20px" />
      </button>
      <p className="coffee--id">{coffee.id}</p>
      <h1 className="coffee--title">{coffee.title}</h1>
      <h2 className="coffee--desc">{coffee.desc}</h2>
      <h3 className="coffee-price">{coffee.price} kr</h3>
    </article>
  );
}
