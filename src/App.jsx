import "./App.css";
import MainLayout from "./components/Layout/MainLayout";
import AppRouter from "../src/Router/index";
import "../src/assets/styles/variable.css";

function App() {
  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  );
}

export default App;
