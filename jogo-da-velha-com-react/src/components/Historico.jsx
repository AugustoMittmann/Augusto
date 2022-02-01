import React, { useState} from "react";
import './Style.css'
import Icone from "./Icone";

const Historico = props => {
  const estadoInicial = [
      ['x', '', ''],
      ['', 'x', ''],
      ['x', 'x', '']
    ]

  const [situacaoDoJogo, setSituacaoDoJogo] = useState(estadoInicial)

  const historico = props.historico
  const teste = () => console.log(historico);
  

  return (
    <div className="historicoDeJogos">
      <div className="tabuleiro littleIcons">
        {
          historico.map((linha, i) => {
            return linha.map((celula, j) => {
              return <div key={i+j} className='item' > 
                <Icone id={celula} />
              </div>
            })
          })
        }
      </div>
      <input type="button" value="oi" onClick={teste}/>
    </div>
  )
}

export default Historico
 