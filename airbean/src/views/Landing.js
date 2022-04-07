import landing from "../Assets/graphics/airbean-landing.svg"
import graphicleft from "../Assets/graphics/intro-graphic-left.svg"
import graphicright from "../Assets/graphics/intro-graphic-right.svg"
export default function Landing() {
  return (
    <section>

      <img src={landing}      alt="landing"/>
      <img src={graphicleft}  alt="graphic left"/>
      <img src={graphicright} alt="graphic right"/>
      
      <h1>AIR BEAN</h1>
      
      <h3>DRONEDELIVERED COFFEE</h3>

    </section>
  );
}
