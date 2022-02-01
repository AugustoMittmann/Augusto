import React, { useState } from "react";
import './Style.css'
import Tabuleiro from "./Tabuleiro";
import Historico from "./Historico";

const Geral = props => {

  const [valorParaPassar, setValorParaPassar] = useState()

  const passandoValor = (situacaoDoJogo) => {
    setValorParaPassar(situacaoDoJogo)
  }

  return (
    <div className="blocos">
      <div className="tabuleiro_">
        <h1>Jogo Da Velha</h1>
        <Tabuleiro 
        passandoValor={passandoValor}/>
      </div>

      <div className="historico">
        <h1>Histórico</h1>
        <Historico historico={valorParaPassar}/>
      </div>

      <div className="vencedores">
        <h1>Vencedores</h1>
      </div>
    </div>
  )
}

export default Geral