import { useDispatch } from "react-redux";
import { increment } from "../actions/orderactions";
import add from "../assets/graphics/add.svg"
// each item in menulist
export default function Coffeeitem(props) {
  const dispatch = useDispatch();
  let coffee = props.menuitem;

  function handleClick() {
    // console.log(coffee);
    // whn clicked, add to carten
    dispatch(increment(coffee));
  }

  // console.log(coffee);
  return (
    <article className="coffee--section">
      <button className="btn" onClick={handleClick}>
        <img
          src={add}
          alt="add"
          width="20px"
          className="addImg"
        />
      </button>
      <section className="coffee_title_desc--section">
        <h2 className="coffee--title">{coffee.title}</h2>
        <section className="dots"></section>
        <h3 className="coffee--price">{coffee.price} kr</h3>
      </section>
      <h2 className="coffee--desc text-small">{coffee.desc}</h2>
    </article>
  );
}
