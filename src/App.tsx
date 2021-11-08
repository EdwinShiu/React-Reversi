import styles from "./App.module.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { BaseRoutes } from "./types/constants/routes";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className={styles.container}>
      <MainPage />
    </div>
  );
}

export default App;
