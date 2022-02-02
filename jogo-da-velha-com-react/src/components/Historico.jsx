import React, { useState} from "react";
import './Style.css'
import Icone from "./Icone";

const Historico = ({historico, removeJogo}) => {

  function excluir(id) {
    removeJogo(id)
  }
  return (
    <div className="historicoDeJogos">
      {
        historico.map(array => {
            return <div key={array.idDoJogo} className="littleIcons mini_tabuleiro">
            <h4 className="mini_vencedor">Vencedor: {array.resultados}</h4>
            <img src='https://cdn.icon-icons.com/icons2/1489/PNG/512/rubbishbin_102620.png'className="lixeira" onClick={() => excluir(array.idDoJogo)}/>
              {
              array.situacaoDoJogo.map((linha, i) => {
                return linha.map((celula, j) => {
                  return <div key={i+j} className='mini_item' >
                    <Icone id={celula} />
                  </div>
                })
              })  
            }
            </div>
        })
      }
    </div>
  )
}

export default Historico
 