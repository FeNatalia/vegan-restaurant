// NPM package
import { Link } from "react-router-dom";
// Project files
import Logo from "../assets/icons/Logo.png";

export default function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/dishes">Dishes</Link>
      <Link to="/desserts">Desserts</Link>
      <Link to="/">
        <img
          src={Logo}
          alt="logotype with a cutlery and a restaurant name From Farm to Table"
        />
      </Link>
      <Link to="/drinks">Drinks</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
