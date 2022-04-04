import { Link } from "react-router-dom";
export default function NavList({ setHamburgerOpen, hamburgerOpen }) {
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <ul className="navlist--ul">
      <li>
        <Link to={"/"} onClick={toggleHamburger}>
          Menu
        </Link>
        <div className="line" />
      </li>

      <li>
        {/* callking in toggle because we want to close it  after we clicked on a new route */}
        <Link to={"/about"} onClick={toggleHamburger}>
          Vårt Kaffe
        </Link>
        <div className="line" />
      </li>
      <li>
        <Link to={"/status"} onClick={toggleHamburger}>
          Orderstatus
        </Link>
        <div className="line" />
      </li>
    </ul>
  );
}
