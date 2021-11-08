import { useEffect, useState } from "react";
import styles from "./MainPage.module.scss";
import webSocket, { Socket } from 'socket.io-client';
import { CurrentPages } from "../types/enums/main_page";
import JoinRoom from "./JoinRoom";
import GameRoom from "./GameRoom";
import ErrorPage from "./ErrorPage";

const MainPage = () => {
  const [ws, setWs] = useState<Socket | null>(null);
  const [currentPage, setCurrentPage] = useState<CurrentPages>(CurrentPages.joinRoom);

  const connectWebSocket = () => {
    setWs(webSocket('http://localhost:5000'));
  }

  const initWebSocket = () => {
    if (ws) {
      ws.on('getMessage', message => {
          console.log(message)
      });
    }
  }

  useEffect(() => {
    if (ws) {
      console.log('success')
    }
  }, [ws]);

  const sendMessage = () => {
    if (ws) { 
      ws.emit('getMessage', 'sent from client');
    }
  }

  const getRenderPage = (currentPage: CurrentPages) => {
    switch (currentPage) {
      case CurrentPages.joinRoom:
        return <JoinRoom />;
      case CurrentPages.gameRoom:
        return <GameRoom />;
      default:
        return <ErrorPage /> 
    }
  }


  return (
    <div className={styles.container}>
      {getRenderPage(currentPage)}
    </div>
  );
}

export default MainPage;