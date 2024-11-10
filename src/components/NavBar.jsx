import { Link, Outlet } from "react-router-dom";
import { RouteLink } from "../UI/Link/Links.styles";
import { NavbarRoute } from "../assets/styles/navbar/navbarroute";

function Navbar () {
  return (
    <div className="divvv">
    <NavbarRoute>
      <RouteLink variant="navbarLink" to="/">Home</RouteLink>
      <RouteLink variant="navbarLink" to="/about">About</RouteLink>
      <RouteLink variant="navbarLink" to="/contact">Contact</RouteLink>
      <RouteLink variant="navbarLink" to="/service">Service</RouteLink>
      <RouteLink variant="navbarLink" to="/portfolio">Portfolio</RouteLink>
      <RouteLink variant="navbarLink" to="/blogs">Blogs</RouteLink>
    </NavbarRoute>
    {/* <Navbardiv>  */}
      {/* <Outlet /> */}
    {/* </Navbardiv> */}
    </div>
  );
}


export default Navbar;
