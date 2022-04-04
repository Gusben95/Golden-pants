import { useState } from "react";
import Shopingcart from "./Shopingcart";
import NavList from "./NavList";

export default function Navbar({ navlist, shopingcart }) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  console.log(shopingcart);
  const [amount, setAmount] = useState(0);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <section className="navbar--section">
      <div className="nav-con">
        {/*  if navlist is set to true then display icon/button */}
        {navlist && (
          <div className="navIcon" onClick={toggleHamburger}>
            <div
              className={hamburgerOpen ? "openBurger" : "closedBurger"}
            ></div>
          </div>
        )}
      </div>
      {/*  if navlist is set to true then display icon/button */}

      {shopingcart && (
        <div className="cart" onClick={toggleCart}>
          <section className="cartAmount--section">
            <p>{amount ? amount : 0}</p>
          </section>
          <figure className="bag--figure">
            <img src="/graphics/bag.svg" alt="nav" />
          </figure>
        </div>
      )}

      <section className={cartOpen ? "cartOpen" : "cartClosed"}>
        <Shopingcart setAmount={setAmount} />
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
