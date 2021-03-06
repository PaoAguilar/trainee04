import React, { useState } from "react";
import GameDetail from "./components/GameDetail/GameDetail";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import ListOfGames from "./components/ListOfGames/ListOfGames";
import "./styles/App.scss";

function App() {
  const [activePage, setActivePage] = useState("Home");
  const [game, setGame] = useState(null);

  function renderContent() {
    if (activePage === "Home") {
      return <Home changePage={setActivePage} />;
    } else if (activePage === "ListOfGames") {
      return <ListOfGames changeGame={setGame} changePage={setActivePage} />;
    } else if (activePage === "GameDetail") {
      return <GameDetail game={game} changePage={setActivePage} />;
    }
  }
  return (
    <div className="App">
      <Layout changePage={setActivePage}>{renderContent()}</Layout>
    </div>
  );
}

export default App;
