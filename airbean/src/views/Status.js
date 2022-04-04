import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
function Status(){
  const [eta, setEta] = useState("");
  const navigate = useNavigate();
 const order = async () => {
    let response = await fetch(`https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/order`); 
    const data = await response.json(); 
    console.log(data , "Status.js");
    setEta(data);
  };
  useEffect(() => {
    order();
  },[]);

 function backTomenu(){
navigate("/");
  };



  return(<div><p>Hej Din kaffe kommer om <br></br> 
  {eta.eta}<br></br> Här är ditt ordernummer <br></br>
   {eta.orderNr}</p>
  <button onClick={backTomenu}> Tillbaka </button>
  
  </div>
  ); 
};
export default Status;

// https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/order


