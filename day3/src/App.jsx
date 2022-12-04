import { useState, useEffect } from "react";
import { Card } from '../src/components/Card';

const listaDeRegalos = [
  {
    id: 1,
    nombre: "Medias de colores",
    img: "./assets/img/1.png",
    background: "bg-[#]"
  },
  {
    id: 2,
    nombre: "Libros",
    img: "./assets/img/1.png",
    background: "bg-[#]"
  },
  {
    id: 3,
    nombre: "Suscripcion de Copilot",
    img: "./assets/img/1.png",
    background: "bg-[#]"
  },
  {
    id: 4,
    nombre: "Aspiradora robot",
    img: "./assets/img/1.png",
    background: "bg-[#]"
  },
  {
    id: 5,
    nombre: "Medias de colores",
    img: "./assets/img/1.png",
    background: "bg-[#]"
  },
  {
    id: 6,
    nombre: "Medias de colores",
    img: "./assets/img/1.png",
    background: "bg-[#]"
  },
]

function App() {
  const [cards, setCards] = useState([]);
  const [cardText, setCardText] = useState("");
  
  const handleSubmit = e => {
    e.preventDefault();
    setCards([...cards, cardText]);
    setCardText("");
  };

  useEffect(() => {
    if (localStorage.getItem("cards")) {
      setCards(JSON.parse(localStorage.getItem("cards")));
    }
  }, [])

  useEffect(() => {
    if (cards.length > 0) {
      localStorage.setItem("cards", JSON.stringify(cards));
    }
    
    // const data = JSON.parse(localStorage.getItem("cards"));
    
    console.log(cards);
  }, [cards])

  return (
    <>
      <h1 className="text-3xl text-white font-bold">Regalos para Axi</h1>
      {/* {listaDeRegalos.map(regalo => {
        return (
          <div key={regalo.id}>
            <Card nombre={regalo.nombre} />
          </div>
        
        )
      })} */}
      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add new gift</button>   */}
      <form onSubmit={handleSubmit}>
        <input type="text" value={cardText} onChange={e => setCardText(e.target.value)} />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Add card</button>
      </form>
      <div>
        {cards.map(card => (
          <div className="text-white" key={card}>{card}</div>
        ))}
      </div>
    </>
  )
}

export default App
