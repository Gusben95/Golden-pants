import { useState } from "react";
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
          <li>Meny</li>
          <li>Vårt Kaffe</li>
          <li>Orderstatus</li>
        </ul>
      </section>
    </section>
  );
}
