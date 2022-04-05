import { useState } from "react";
import { useSelector } from "react-redux";
import Shopingcart from "./Shopingcart";
import NavList from "./NavList";
// navbar takes 2 prop that determens if it should contain navlist or shopingcart(true or false)
export default function Navbar({ navlist, shopingcart }) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  // toggle -> maybe could be improved if  we have one function instead and call diffrent items to toggle

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  // get order data from redux-store
  const order = useSelector((state) => {
    return state.order;
  });

  // map out all amount-data from each item into one list
  let amountList = order.map((obj) => {
    return obj.amount;
  });
  // sum amount-data-list to get the total amount-value
  const initValue = 0;
  const sum = amountList.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initValue
  );

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
            {/* display amount */}
            <p>{sum}</p>
          </section>
          <figure className="bag--figure">
            <img src="/graphics/bag.svg" alt="nav" />
          </figure>
        </div>
      )}

      <section className={cartOpen ? "cartOpen" : "cartClosed"}>
        <Shopingcart />
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
