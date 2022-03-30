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
        <img
          src="/graphics/add.svg"
          alt="add"
          width="20px"
          className="addImg"
        />
      </button>

      <section className="coffee_title_desc--section">
        <h2 className="coffee--title">{coffee.title}</h2>
        <h2 className="coffee--desc text-small">{coffee.desc}</h2>
      </section>
      <h3 className="coffee--price">{coffee.price} kr</h3>
    </article>
  );
}
