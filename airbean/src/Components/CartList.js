function handleplus() {
  console.log("plus");
}
function handleminus() {
  console.log("minus");
}
export default function CartList(props) {
  console.log(props);
  return (
    <li>
      {props.item.title}
      <button onClick={handleplus}>+</button>
      <button onClick={handleminus}>-</button>
    </li>
  );
}
