import "./stylesheets/Status.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import drone from "../assets/graphics/drone.svg";
function Status() {
  const [eta, setEta] = useState("");
  const navigate = useNavigate();
  //Fetch från api tilldelat och spara det i data
  const order = async () => {
    let response = await fetch(
      `https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/order`
    );
    const data = await response.json();
    console.log(data, "Status.js");
    // Så att data kan nås nedanför
    setEta(data);
  };
  useEffect(() => {
    order();
  }, []);

  function backTomenu() {
    navigate("/");
  }
  // Gör att sidan inte kan nås om något inte är beställt ****
  //skriv ut värdet i dataObjektet "eta.eta och eta.orderNr"
  return (
    <div class="orderStatusContainer">
      <p class="ordernummer">
        ordernummer #{eta.orderNr}
        <br></br>
      </p>
      <img src={drone} alt="drone" />
      <h3> Din beställning är påväg </h3>
      <p>{eta.eta} minuter </p> <br></br>
      <button onClick={backTomenu}> Ok, Cool! </button>
    </div>
  );
}
export default Status;

// https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/order

