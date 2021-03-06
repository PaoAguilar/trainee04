import React, { useState, useEffect } from "react";
import GameCard from "../GameCard/GameCard";
import "../ListOfGames/listOfGames.scss";

const ListOfGames = ({ changePage, changeGame }) => {
  const [gameList, setGameList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getGames().then((result) => {
      setGameList(result);
    });
  }, [page]);

  const getGames = async () => {
    try {
      const res = await fetch(`http://localhost:3000/posts?_page=${page}`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>LIST OF GAMES (page {page})</h1>
      <div className="movie">
        {gameList.map((game) => {
          return (
            <GameCard
              key={game.id}
              changeGame={changeGame}
              changePage={changePage}
              game={game}
            />
          );
        })}
      </div>
      <div className="button-container">
        <button
          className="button-container__previous"
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        >
          Previous
        </button>
        <button
          className="button-container__next"
          onClick={() => {
            if ((page >= 1) & (page < 2)) {
              setPage(page + 1);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ListOfGames;
