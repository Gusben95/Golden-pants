import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <section className="navbar--section">
      <div className="nav-con">
        <div className="navIcon" onClick={toggleHamburger}>
          <div className={hamburgerOpen ? "openBurger" : "closedBurger"}> </div>
        </div>
      </div>
      <div className="cart">
        <section className="cartAmount--section">
          <p>0</p>
        </section>

        <figure className="bag--figure">
          <img src="/graphics/bag.svg" alt="nav" />
        </figure>
      </div>
      <section className={hamburgerOpen ? "open" : "closed"}>
        <ul>
          <li>
            <Link to={"/"} onClick={toggleHamburger}>
              Menu
            </Link>
          </li>
          <li>
            {/* callking in toggle because we want to close it  after we clicked on a new route */}
            <Link to={"/about"} onClick={toggleHamburger}>
              Vårt Kaffe
            </Link>
          </li>
          <li>
            <Link to={"/status"} onClick={toggleHamburger}>
              Orderstatus
            </Link>
          </li>
        </ul>
      </section>
    </section>
  );
}
