import { useNavigate } from "react-router-dom";


export default function Error() {
  const navigate = useNavigate();
  function backTomenu(){
    navigate("/");
      };
  return (
    <section>
      <h1>OOPS CANT FIND PAGE!</h1>
      <button onClick={backTomenu}> Ta mig tillbaka! </button>
    </section>
  );
}
