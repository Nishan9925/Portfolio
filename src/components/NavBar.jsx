import { Link, Outlet } from "react-router-dom";
import { RouteLink } from "../UI/Link/Links.styles";
function Navbar() {
  return (
    <nav className="nav">
      <RouteLink variant="navbarLink" to="/">Home</RouteLink>
      <RouteLink variant="navbarLink" to="/about">About</RouteLink>
      <RouteLink to="/contact">Contact</RouteLink>
      <RouteLink to="/service">Service</RouteLink>
      <RouteLink to="/portfolio">Portfolio</RouteLink>
      <RouteLink to="/blogs">Blogs</RouteLink>
      <Outlet />
    </nav>
  );
}

export default Navbar;
