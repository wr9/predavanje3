import { useRouter } from "next/router";
import { useEffect } from "react";

const SpecificPlayer = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3001/players/${id}`).then((response) =>
        response.json().then((data) => console.log(data))
      );
    }
  }, [id]);

  return <div>Ante {id}</div>;
};

export default SpecificPlayer;
