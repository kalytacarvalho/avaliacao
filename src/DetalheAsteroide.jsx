import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './App.css'
import axios from "axios"
import './Detalhe.css'


const DetalheAsteroide = () => {
    const { id } = useParams()
    const [asteroide, setAsteroide] = useState(null)
    
    const requisicao = async () => {
        const asteroideConsulta = await axios.get(
            `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=70nCOEf3HrKx7N9JRsxEwTZR7GcSaXuJsOPBXQUW&date`
        )
        setAsteroide(asteroideConsulta.data)
    }

    useEffect(() => {
        requisicao()
    }, [])

    return (
        <>
          <h1>Detalhes do asteróide</h1>
            <div className="box">
               <li className="textBox" style={{margin: '30px'}}>
                
                <h2>Nome: {asteroide?.name}</h2>               
                
               
                <p>Velocidade relativa do objeto por hora: {asteroide?.close_approach_data?.[0]?.relative_velocity?.kilometers_per_hour} </p>
                
                <p>Magnitude absoluta: {asteroide?.absolute_magnitude_h}</p>
            
                
                </li>
        </div>
        </>
    )
}

export default DetalheAsteroide;