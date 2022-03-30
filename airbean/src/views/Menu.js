import { useEffect, useState } from "react";
import Coffeeitem from "../Components/Coffeeitem";
import Shopingcart from "../Components/Shopingcart";
export default function Menu() {
  //  fetching menu, saving menu(data) to a state in useeffect, because I want to render it once before displaying  teh menu

  const [menu, setMenu] = useState(null);
  useEffect(() => {
    const fetchmenu = async () => {
      let response = await fetch(
        "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/airbean/menu"
      );

      const data = await response.json();

      setMenu(data);
    };
    fetchmenu();
  }, []);

  console.log(menu);

  return (
    <section className="Menu--section">
      <h1 className="menu--title">This is where the menu will be</h1>
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

      <Shopingcart className="shopingcart--section" />
    </section>
  );
}
