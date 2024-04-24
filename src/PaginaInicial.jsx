import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './App.css'
import axios from 'axios'
import './PaginaInicial.css'


function PaginaInicial() {
  const dataAtual = new Date().toISOString().split('T')[0]

  const [listaAsteroides, setListaAsteroides] = useState([]);

  const requisicao = async () => {
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dataAtual}&end_date=${dataAtual}&api_key=70nCOEf3HrKx7N9JRsxEwTZR7GcSaXuJsOPBXQUW&date`;

    const listaAsteroides = await axios.get(url)
    console.log(listaAsteroides)
    console.log(dataAtual)
    setListaAsteroides(listaAsteroides.data.near_earth_objects[dataAtual])
  }

  useEffect(() => {
    requisicao()
  }, [])


  return (
    <>    
      <h1>Asteroides Próximo da Terra</h1>
      {listaAsteroides.map((asteroide) => (
      <div className="boxInicial">        
        <Link key={asteroide.id} to={`/asteroide/${asteroide.id}`}>
          <div key={asteroide.id}>
            <h2>{asteroide.name}</h2>
            
            <p>Diâmetro MÁXIMO estimado em quilômetros: {asteroide?.estimated_diameter?.kilometers?.estimated_diameter_max}  </p>
            <p className="perigoso">É potencialmente perigoso? {asteroide?.is_potentially_hazardous_asteroid ? 'Sim' : 'Não'}</p>
          </div>
        </Link>
      </div>
      ))}
    </>
  );
};

export default PaginaInicial;