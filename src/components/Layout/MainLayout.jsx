import { Outlet } from "react-router-dom";
import { MainLayoutWrapper } from "../../assets/styles/mainLayout/mainLayout";
import Header from "../Header";

function MainLayout() {
  return (
    <MainLayoutWrapper>
      <header>
      <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </MainLayoutWrapper>
  );
}

export default MainLayout;
