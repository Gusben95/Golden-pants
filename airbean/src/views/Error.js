import { useNavigate } from "react-router-dom";
import "./stylesheets/Error.css"
import left from '../assets/graphics/intro-graphic-left.svg';
import right from '../assets/graphics/intro-graphic-right.svg';

export default function Error() {
  const navigate = useNavigate();
  function backTomenu(){
    navigate(-1);
      };
  return (
    <section>
      <h1>OOPS CANT FIND PAGE!</h1>
            <img src={ left }    alt=" landing left " id="leftLanding"/>
            <img src={ right }   alt=" landing right" id="rightLanding" />
      <button id = "takeMeBack" onClick={backTomenu}> TAKE ME BACK </button>
    </section>
  );
}
