import { Link } from "react-router-dom";
export default function NavList({ setHamburgerOpen, hamburgerOpen }) {
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
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
  );
}
