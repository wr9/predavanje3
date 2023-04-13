import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const SpecificPlayer = () => {
  const router = useRouter();
  const { id } = router.query;
  const [player, setPlayer] = useState({});
  const [games, setGames] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3001/players/${id}`)
        .then(({ data }) => setPlayer(data));
    }

    axios.get("http://localhost:3001/games").then(({ data }) => setGames(data));
    axios
      .get("http://localhost:3001/events")
      .then(({ data }) => setEvents(data));
  }, [id]);

  const onDelete = () => {
    if (
      games.findIndex(
        (game) =>
          game.teamA.includes(player.id) || game.teamB.includes(player.id)
      ) === -1
    ) {
      axios.delete(`http://localhost:3001/players/${id}`).then(() => {
        router.push("/players");
      });
    }
  };

  return (
    <div>
      <div>Ime: {player.name}</div>
      <div>
        Odigrao:{" "}
        {
          games.filter(
            (game) =>
              game.teamA.includes(player.id) || game.teamB.includes(player.id)
          ).length
        }
      </div>
      <div>
        Golova: {events.filter((event) => event.playerId === player.id).length}
      </div>
      <button onClick={onDelete}>Obrisi</button>
    </div>
  );
};

export default SpecificPlayer;
