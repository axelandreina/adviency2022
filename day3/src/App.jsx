import { useState, useEffect } from "react";
import { v4 } from "uuid";


function App() {
  const [cards, setCards] = useState([]);
  const [cardText, setCardText] = useState("");
  const [cardColor, setCardColor] = useState("");
  const [cardImage, setCardImage] = useState([
    {
      src: "../src/assets/img/3.png",
    },
    {
      src: "../src/assets/img/2.png",
    },
    {
      src: "../src/assets/img/1.png",
    },
    {
      src: "../src/assets/img/4.png",
    },
  ]);
  
  const handleSubmit = e => {
    e.preventDefault();
    const trimmedText = cardText.trim();
    if (trimmedText !== "") {
      setCards([...cards, { id: v4(), text: trimmedText, color: cardColor, img: cardImage}]);
      setCardText("");
      setCardColor("")
      setCardImage("")
    }
    
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
  }, [cards])

  // const addCard = card => {
  //   localStorage.setItem(card.id, JSON.stringify(card));
  //   setCards([...cards, card]);
  // };

  const removeCard = id => {
    localStorage.removeItem(id);
    setCards(cards.filter(card => card.id !== id));
  };


  return (
    <div className="flex flex-col  h-screen justify-between">
      <h1 className="text-[#f9d2f0] text-5xl font-bold p-10 text-center">Regalos para Axi</h1>
      
      <form onSubmit={handleSubmit}>
        <input type="text" value={cardText} onChange={e => setCardText(e.target.value)} className="py-2 px-4 rounded"/>
        <select className="py-2 px-4 rounded mx-2" value={cardColor} onChange={e => setCardColor(e.target.value)}>
          <option value="">Color</option>
          <option value="[#c9e062]">Green</option>
          <option value="[#f4095f]">Pink</option>
          <option value="[#00000]">Light pink</option>
          <option value="[#c3acf1]">Purple</option>
        </select>
        <button className="bg-[#f4095f] hover:bg-[#f9d2f0] hover:text-[#f4095f] text-white font-bold py-2 px-4 rounded" type="submit">Agregar regalo</button>
      </form>
      <div className="grid gap-4 grid-cols-2 grid-rows-2 justify-center">
        {cards.map(card => (
          <div key={card.id} className={`mb-4 rounded-xl cursor-pointer font-bold p-4 flex flex-wrap justify-center content-between bg-${card.color}`}>
          
              <img src="../src/assets/img/2.png" alt="Image" className="w-[10%] mr-2"/>
            
            <p className="text-white" key={card.text}>{card.text}</p>
            <button onClick={() => removeCard(card.id)}>x</button>
          </div>
        ))}
      </div>
      <p className="text-white text-sm p-4 italic">
        Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
      </p>
    </div>
  )
}

export default App
