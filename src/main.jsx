import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PaginaInicial from "./PaginaInicial"
import DetalheAsteroide from "./DetalheAsteroide"
import Menu from "./Menu"
import SobreMim from "./SobreMim"
import "./Menu.css"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        
          <Route path="/asteroide/:id" element={<DetalheAsteroide />} />
       
        <Route path="/SobreMim" element={<SobreMim />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
