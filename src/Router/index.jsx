import { Route, Router, Routes } from "react-router-dom";
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
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;
