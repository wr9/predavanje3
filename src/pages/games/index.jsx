import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/games").then(({ data }) => setGames(data));
  }, []);

  return (
    <div>
      {games.map((game) => (
        <div key={game.id}>{game.time}</div>
      ))}
      <Link href="/games/create">Add</Link>
    </div>
  );
};

export default Games;
