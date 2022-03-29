export default function Coffeeitem(props) {
  let coffee = props.menuitem;

  function handleClick() {
    console.log("clicked");
    console.log(coffee);
  }

  console.log(coffee);
  return (
    <article>
      <button className="btn" onClick={handleClick}>
        <img src="/graphics/add.svg" alt="add" height="20px" />
      </button>
      <p>{coffee.id}</p>
      <h1>{coffee.title}</h1>
      <h2>{coffee.desc}</h2>
      <h3>{coffee.price} kr</h3>
    </article>
  );
}
