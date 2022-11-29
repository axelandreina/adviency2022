// import { useState } from 'react'

function App() {
  const categories= ["Medias", "Caramelos", "Vitel Tone"]
  const listCategories = categories.map((item) => <li>{item}</li>);


  return (
      <div className="p-3">
          <h1 className="text-4xl font-bold text-center text-white pb-3">
              Regalos:
          </h1>
          <ul className="text-center text-white">
              {listCategories}
          </ul>
      </div>
  );
}

export default App
