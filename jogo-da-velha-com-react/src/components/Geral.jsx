import React, { useState } from "react";
import './Style.css'
import Tabuleiro from "./Tabuleiro";
import Historico from "./Historico";

const Geral = props => {

  const [historico, setHistorico] = useState([])

  const atualizaHistorico = (situacaoDoJogo) => {
    setHistorico(historico => [...historico, situacaoDoJogo])
  }
  const removeJogo = id => {
    setHistorico([...historico].filter(historico => historico.idDoJogo !== id))
  }

  return (
    <div className="blocos">
      <div className="tabuleiro_">
        <h1>Jogo Da Velha</h1>
        <Tabuleiro atualizaHistorico={atualizaHistorico}/>
      </div>

      <div className="historico">
        <h1>Histórico</h1>
        <Historico historico={historico} removeJogo={removeJogo}/>
      </div>
    </div>
  )
}

export default Geral