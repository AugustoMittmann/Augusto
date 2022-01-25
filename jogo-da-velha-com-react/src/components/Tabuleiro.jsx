import React, { useState } from "react";
import './Style.css'
import Icone from './Icone'

let aux = false


function verificaVencedor(e) {
  for(let a = 0; a < 3; a++) {
    if(e[0][a] === e[1][a] && e[1][a] === e[2][a] && e[2][a] !== '') {
      console.log(`Vencedor: ${e[0][a]}`)
      return true
    }
    if(e[a][0] === e[a][1] && e[a][1] === e[a][2] && e[a][2] !== '') {
      console.log(`Vencedor: ${e[a][0]}`)
      return true
    }
    if(e[0][0] === e[1][1] && e[1][1] === e[2][2] && e[0][0] !== '') {
      console.log(`Vencedor: ${e[0][0]}`)
      return true
    }
    if(e[0][2] === e[1][1] && e[1][1] === e[2][0] && e[1][1] !== '') {
      console.log(`Vencedor: ${e[1][1]}`)
      return true
    }
  }
}

function atualizaInterface(element) {
  element.forEach(function(e, index) {
    for(let a = 0; a < 3; a++) {
      if(e[a] !== '') {
        document.getElementById(e[a] + index + a).style.display = 'block'
      } else {
        document.getElementById('x' + index + a).style.display = 'none'
        document.getElementById('o' + index + a).style.display = 'none'
      }
    }
  })
}

export default () => {
  let turno
  const estadoInicial = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]
  let [situacaoDoJogo, setSituacaoDoJogo] = useState(estadoInicial)
  
  function NovoJogo() {
    console.log(situacaoDoJogo);
    setSituacaoDoJogo(estadoInicial)
    console.log(situacaoDoJogo);
    atualizaInterface(situacaoDoJogo)
    aux = false
  }

  function click(e) {
    aux === true ? turno = 'o' : turno = 'x'
    
    if(verificaVencedor(situacaoDoJogo) === true) {
      console.log('caiu aq');
    } 
    else {
      const divPressionada = document.getElementById(turno + e.target.id)
      if(divPressionada === null) {
        console.log('ja clicou aqui');
        aux = !aux
      } else {
        setSituacaoDoJogo(situacaoDoJogo => [...situacaoDoJogo], situacaoDoJogo[e.target.id[0]][e.target.id[1]] = turno)
      }
      aux = !aux
      atualizaInterface(situacaoDoJogo)
    }
  }

  return (
    <div className="tabuleiro">

      <div id='00' className='item' onClick={click}>
        <Icone idx='x00' ido='o00'/>
      </div>
      <div id='01' className='item' onClick={click}>
        <Icone idx='x01' ido='o01'/>
      </div>
      <div id='02' className='item' onClick={click}>
        <Icone idx='x02' ido='o02'/>
      </div>

      <div id='10' className='item' onClick={click}>
        <Icone idx='x10' ido='o10'/>
      </div>
      <div id='11' className='item' onClick={click}>
        <Icone idx='x11' ido='o11'/>
      </div>
      <div id='12' className='item' onClick={click}>
        <Icone idx='x12' ido='o12'/>
      </div>

      <div id='20' className='item' onClick={click}>
        <Icone idx='x20' ido='o20'/>
      </div>
      <div id='21' className='item' onClick={click}>
        <Icone idx='x21' ido='o21'/>
      </div>
      <div id='22' className='item' onClick={click}>
        <Icone idx='x22' ido='o22'/>
      </div>

      {verificaVencedor(situacaoDoJogo)
      ? <div>
          <div className='win'>Temos um ganhador<br/>Novo Jogo?</div>
          <input type="button" value="Sim" onClick={NovoJogo}/>
        </div>
      : <></>
    }
    </div>
  )
}