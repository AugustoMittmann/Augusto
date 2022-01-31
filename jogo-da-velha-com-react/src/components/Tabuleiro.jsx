import React, { useState } from "react"
import './Style.css'
import Icone from "./Icone"

let historicoDeJogos = []
let qntdVencedores = [0, 0]

const Tabuleiro = () => {
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
    historicoDeJogos.push({situacaoDoJogo, winner})
    console.table(historicoDeJogos)
  }

  function callBackGame() {
    setSituacaoDoJogo(historicoDeJogos[historicoDeJogos.length-1].situacaoDoJogo)
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
    console.table(historicoDeJogos)
  }
  const winner = verificaVencedor(situacaoDoJogo)

  return (
    <>
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
      </div>
      <input className='newGame' type="button" value="Novo jogo" onClick={NovoJogo}/>
      <input className='newGame' type="button" value="Mostrar jogo anterior" onClick={callBackGame}/>
      {
        winner ? <h1>Vencedor: {winner} </h1> : null
      }

      <input list='oldGames' />
      <datalist id='oldGames'>
        <option value='jogo 1'/>
        <option value='jogo 2'/>
        <option value='jogo 3'/>
      </datalist>
    </>
  )
}

export default Tabuleiro