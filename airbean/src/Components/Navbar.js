import { useState } from "react";
import Shopingcart from "./Shopingcart";
import NavList from "./NavList";

export default function Navbar({ navlist, shopingcart }) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  console.log(shopingcart);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <section className="navbar--section">
      <div className="nav-con">
        {navlist && (
          <div className="navIcon" onClick={toggleHamburger}>
            <div
              className={hamburgerOpen ? "openBurger" : "closedBurger"}
            ></div>
          </div>
        )}
      </div>

      {shopingcart && (
        <div className="cart" onClick={toggleCart}>
          <section className="cartAmount--section">
            <p>0</p>
          </section>
          <figure className="bag--figure">
            <img src="/graphics/bag.svg" alt="nav" />
          </figure>
        </div>
      )}

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
