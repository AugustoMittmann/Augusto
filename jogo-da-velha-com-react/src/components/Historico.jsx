import React, { useState} from "react";
import './Style.css'
import Icone from "./Icone";

const Historico = props => {

  const [estado, setEstado] = useState([[],[],[]])
  setEstado(props.historico)

  return (
    <div className="historicoDeJogos">
      <div className="tabuleiro littleIcons">
        {
          estado.map((valor, indice) => {
            return estado[indice].map((linha, i) => {
              return linha.map((celula, j) => {
                return <div key={i+j} className='item' > 
                  <Icone id={celula} />
                  {console.log('oi')}
                </div>
              })
            })
          })
        }
      </div>
    </div>
  )
}

export default Historico
 