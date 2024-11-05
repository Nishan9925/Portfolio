import { Route, Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/protfolio" element={<Protfolio />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;
