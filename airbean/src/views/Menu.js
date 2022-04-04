import { useEffect, useState } from "react";
import Coffeeitem from "../Components/Coffeeitem";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Menu() {
  //  fetching menu, saving menu(data) to a state in useeffect, because I want to render it once before displaying  the menu

  const [menu, setMenu] = useState(null);
  useEffect(() => {
    const fetchmenu = async () => {
      let response = await fetch(
        "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/menu"
      );

      const data = await response.json();
      data.forEach((element) => {
        element.amount = 1;
      });
      console.log(data);
      setMenu(data);
    };
    fetchmenu();
  }, []);

  console.log(menu);

  return (
    <section className="Menu--section">
      <Navbar navlist={true} shopingcart={true} />;
      <h1 className="menu--title">Menu</h1>
      {menu &&
        menu.map((menuItem) => {
          return (
            <Coffeeitem
              menuitem={menuItem}
              key={menuItem.id}
              className="coffeeItem"
            />
          );
        })}
      <Footer />
    </section>
  );
}
