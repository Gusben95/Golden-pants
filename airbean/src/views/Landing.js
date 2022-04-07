import "./stylesheets/Landing.css";
import "../App.css";
import landing from "../assets/graphics/airbean-landing.svg";
import left from "../assets/graphics/intro-graphic-left.svg";
import right from "../assets/graphics/intro-graphic-right.svg";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  function navigateToMenu() {
    navigate("/");
  }
  return (
    <section id="landingContainer" onClick={navigateToMenu}>
      <img
        src={landing}
        alt="landing main "
        id="mainLanding"
        onClick={navigateToMenu}
      />
      <img
        src={left}
        alt=" landing left "
        id="leftLanding"
        onClick={navigateToMenu}
      />
      <img
        src={right}
        alt=" landing right"
        id="rightLanding"
        onClick={navigateToMenu}
      />
    </section>
  );
}

export default Landing;
