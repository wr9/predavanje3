import { useEffect } from "react";

const Games = () => {
  useEffect(() => {
    fetch("http://localhost:3001/games").then((response) =>
      response.json().then((data) => console.log(data))
    );
  }, []);

  return <div>ac2</div>;
};

export default Games;
