import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <Outlet />
      <h1>About</h1>
      <p>This is the about page.</p>
      <Link to={"/"}>Go to Home </Link>
    </div>
  );
}

export default About;
