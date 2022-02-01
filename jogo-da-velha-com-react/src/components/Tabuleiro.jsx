import React, { useState } from "react"
import './Style.css'
import Icone from "./Icone"

let historicoDeJogos = []

const Tabuleiro = props => {
  const estadoInicial = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]
  const [situacaoDoJogo, setSituacaoDoJogo] = useState(estadoInicial)
  const [currentPlayer, setCurrentPlayer] = useState('x')
  
  function verificaVencedor(e) {
    for(let a = 0; a < 3; a++) {
      if(e[0][a] === e[1][a] && e[1][a] === e[2][a] && e[2][a] !== '') {    //coluna
        return e[0][a]
      }
      if(e[a][0] === e[a][1] && e[a][1] === e[a][2] && e[a][2] !== '') {  //linha
        return e[a][0]
      }
    }
    if(e[0][0] === e[1][1] && e[1][1] === e[2][2] && e[0][0] !== '') { 
      return e[0][0]
    }
    if(e[0][2] === e[1][1] && e[1][1] === e[2][0] && e[1][1] !== '') {
      return e[0][2]
    }
  }
  
  function NovoJogo() {
    setSituacaoDoJogo(estadoInicial)
    setCurrentPlayer('x')
    historicoDeJogos.push(situacaoDoJogo)
  }

  function salvarJogo() {
    props.passandoValor(historicoDeJogos)
  }
  
  function click(x, y) {
    if(situacaoDoJogo[x][y] === '') {
      setSituacaoDoJogo(situacaoDoJogo => situacaoDoJogo.map((linha, i) => {
        return linha.map((celula, j) => {
          if(x === i && y === j) {
            return currentPlayer
          }
          return celula
        })
      }))
      setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x')
    } else {
      console.log('This position already was click')
    }
  }
  const winner = verificaVencedor(situacaoDoJogo)

  return (
    <>
    <div className="section">
      <div className="tabuleiro">
        {
          situacaoDoJogo.map((linha, i) => {
            return linha.map((celula, j) => {
              return <div key={i+j} className='item' onClick={() => winner !== undefined ? null : click(i, j)}> 
                <Icone id={celula} />
              </div>
            })
          })
        }
        <input className='newGame' type="button" value="Novo jogo" onClick={NovoJogo}/>
        <input className="newGame" type="button" value="Salvar Jogo" onClick={() => salvarJogo()} />
        {
          winner ? <h1>Vencedor: {winner} </h1> : null
        }
      </div>
    </div>
    </>
  )
}

export default Tabuleiro