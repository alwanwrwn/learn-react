import { useEffect, useState } from "react";
import Card from "./Card";

interface Props {
  status: string;
}

function Tab({ status }: Props) {
  const BASE_URL = `http://127.0.0.1:8000/api/get?status=${status}`;

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(BASE_URL)
        .then((Response) => Response.json())
        .then((data) => {
          setCards(data);
        });
    };

    fetchData();
  }, []);

  return (
    <div
      className="col card bg-secondary py-2 border-0 mx-2 h-100"
      key={status}
    >
      <h2 className="text-white">{status}</h2>
      <div className="card-body overflow-scroll p-0">
        {cards.map((card) => (
          <Card
            id={card.id}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Tab;
