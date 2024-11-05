import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/service">Serice</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Outlet />
    </nav>
  );
}

export default Navbar;
