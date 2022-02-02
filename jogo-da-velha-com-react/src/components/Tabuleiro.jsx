import React, { useState , useEffect} from "react"
import './Style.css'
import Icone from "./Icone"


const Tabuleiro = ({atualizaHistorico}) => {
  const estadoInicial = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]
  const [situacaoDoJogo, setSituacaoDoJogo] = useState(estadoInicial)
  const [currentPlayer, setCurrentPlayer] = useState('x')
  const [flag, setFlag] = useState(false) //verifica se o usuário já salvou o jogo atual, evita que ele salve 2 vezes o mesmo jogo
  const [idDoJogo, setIdDoJogo] = useState(1)
  const [historicoDeVencedores, setHistoricoDeVencedores] = useState({  //salva as vitorias e empates em cada round
    x: 0,
    empate: 0,
    o: 0
  })
  
  function verificaVencedor(e) {
    for(let a = 0; a < 3; a++) {
      if(e[0][a] === e[1][a] && e[1][a] === e[2][a] && e[2][a] !== '') {    //coluna
        return e[0][a]
      }
      if(e[a][0] === e[a][1] && e[a][1] === e[a][2] && e[a][2] !== '') {  //linha
        return e[a][0]
      }
    }
    if(e[0][0] === e[1][1] && e[1][1] === e[2][2] && e[0][0] !== '') { //diagonal
      return e[0][0]
    }
    if(e[0][2] === e[1][1] && e[1][1] === e[2][0] && e[1][1] !== '') {  //diagonal
      return e[0][2]
    }
    let verificaEmpate = 0  //soma 1 cada vez que encontra uma div não vazia, se chegar a 9 e a função não retornar vencedor, retorna empate
    e.map(linha => {
       return linha.map(celula => {
        return celula !== '' ? verificaEmpate++ : null
      })
    })
    if(verificaEmpate === 9) return 'empate'
  }
  
  function NovoJogo() {
    setSituacaoDoJogo(estadoInicial) 
    setCurrentPlayer('x')
    setIdDoJogo(idDoJogo + 1)
    setFlag(false)
  }
  
  function salvarJogo() {
    setFlag(true)
    if(flag === false) {
      atualizaHistorico({situacaoDoJogo, resultados, idDoJogo}) //envia para o componen Historico o {jogo, se alguem venceu e quem venceu, id}
    }
  }
  
  function onClick(x, y) {
    if(situacaoDoJogo[x][y] === '') {
      setSituacaoDoJogo(situacaoDoJogo => situacaoDoJogo.map((linha, i) => { 
        return linha.map((celula, j) => {
          if(x === i && y === j) {
            return currentPlayer
          }
          return celula
        })
      }))
      setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x') //alterna o jogador cada rodada
    } else {
      console.log('This position already was click')
    }
  }
  const resultados = verificaVencedor(situacaoDoJogo) //verifica se alguem venceu no atual round

  useEffect(() => {
    if(resultados) {
      setHistoricoDeVencedores(historicoDeVencedores => ({...historicoDeVencedores, [resultados]:historicoDeVencedores[resultados]+1})) //adiciona +1 no x, empate ou o
    }
  }, [resultados])

  return (
    <>
    <div className="section">
      <div className="tabuleiro">
        {
          situacaoDoJogo.map((linha, i) => {
            return linha.map((celula, j) => {
              return <div key={i+j} className='item' onClick={() => resultados !== undefined ? null : onClick(i, j)}> 
                <Icone id={celula} />
              </div>
            })
          })
        }
        <div className="_botao_novojogo">
          <input className='newGame' type="button" value="Novo jogo" onClick={NovoJogo}/>
        </div>
        <div className="botao_salvarjogo">
          <input className="newGame" type="button" value="Salvar Jogo" onClick={() => salvarJogo()} />
        </div>
        <div className="vencedor_">
          <h3>Vencedor: </h3>
          {
            resultados ? <h3 className="icone_vencedor">{resultados}</h3> : null
          }
        </div>

        <div className="vencedor_">
          <h3>Vitórias x</h3>
          {
            <h3>{historicoDeVencedores.x}</h3>
          }
        </div>
        <div className="vencedor_">
          <h3>Empates</h3>
          {
            <h3>{historicoDeVencedores.empate}</h3>
          }
        </div>
        <div className="vencedor_">
          <h3>Vitórias o</h3>
          {
            <h3>{historicoDeVencedores.o}</h3>
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default Tabuleiro
