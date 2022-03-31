import { useState } from "react";
import NavList from "./NavList";
import Shopingcart from "./Shopingcart";
export default function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <section className="navbar--section">
      <div className="nav-con">
        <div className="navIcon" onClick={toggleHamburger}>
          <div className={hamburgerOpen ? "openBurger" : "closedBurger"}> </div>
        </div>
      </div>
      <div className="cart" onClick={toggleCart}>
        <section className="cartAmount--section">
          <p>0</p>
        </section>
        <figure className="bag--figure">
          <img src="/graphics/bag.svg" alt="nav" />
        </figure>
      </div>
      <section className={cartOpen ? "cartOpen" : "cartClosed"}>
        <Shopingcart setCartOpen={setCartOpen} cartOpen={cartOpen} />
      </section>

      <section className={hamburgerOpen ? "open nav" : "closed nav"}>
        <NavList
          setHamburgerOpen={setHamburgerOpen}
          hamburgerOpen={hamburgerOpen}
        />
      </section>
    </section>
  );
}
