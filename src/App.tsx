import styles from "./App.module.scss";
import { Routes, Route } from "react-router-dom";
import { BaseRoutes } from "./types/constants/routes";
import GameRoom from "./pages/GameRoom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className={styles.container}>
      <Routes>

        <Route
          path={BaseRoutes.ROOM}
        >
          <GameRoom />
        </Route>

        <Route
          path={BaseRoutes.HOME}
        >
          <HomePage />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
