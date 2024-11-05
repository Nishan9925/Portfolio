import { Outlet } from "react-router-dom";
import Navbar from "../NavBar";

function MainLayout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        
      </main>
      <footer>
        
      </footer>
      
    </>
  );
}

export default MainLayout;
