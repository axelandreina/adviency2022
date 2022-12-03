function App() {
  const listOfRegalos = [
    {
      nombre: "Medias de colores",
      image:"../src/assets/img/3.png",
      background: "bg-[#c9e062]"
    },
    {
      nombre: "Aspiradora robot",
      image: "../src/assets/img/2.png",
      background: "bg-[#f4095f]"
    },
    {
      nombre: "Sub de GitHub Copilot",
      image: "../src/assets/img/1.png",
      background: "bg-[#6f39f5]"
    },
    {
      nombre: "Standing desk",
      image: "../src/assets/img/4.png",
      background: "bg-[#c3acf1]"
    },
  ]

  return (
    <div className="flex flex-col  h-screen justify-between">
      <div className="p-10">
        <h1 className="text-[#f9d2f0] text-5xl font-bold p-10 text-center">Regalos para Axi</h1>
        <div className="grid gap-4 grid-cols-2 grid-rows-2 justify-center">
          {listOfRegalos.map(regalo =>
            <div className={`${regalo.background} mb-4 rounded-xl cursor-pointer font-bold p-4 flex flex-wrap justify-center content-between hover:animate-bounce`}>
              <img src={regalo.image} alt="" className="w-[50%]"/>
              <p className="text-black">
                {regalo.nombre}
              </p>
            </div>)}
        </div>
      </div>
      <p className="text-white text-sm p-4 italic">
        Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
      </p>
     
    </div>
  )
}

export default App;
