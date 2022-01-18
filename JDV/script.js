class JogoDaVelha {
    constructor(){
        this.jogoAtual = [   //casas ocupadas
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]
        this.aux = 0    //variavel auxiliar para alternar a vez de quem joga
    }

    Jogar(posicao) {
        let atualJogador = ''   //recebe 'x' ou 'o', mostrando a vez de quem joga
        this.aux = !this.aux
        this.aux == 0 ? atualJogador = 'o' : atualJogador = 'x'

        this.jogoAtual[posicao[0]][posicao[1]] = atualJogador   //atribui para a tabela o caractere correspondente
        document.getElementById(`${posicao[0]+posicao[1]}`).innerHTML = `<img 
        src='imagens/${atualJogador}.png' class='icones'>`  //adiciona a imagem no HTML
        
        JDV.ObterVencedor()
    }
    NovoJogo() {
        location.reload()
    }
    InvalidOperationException() {
        alert('Posição já ocupada')
    }
    ObterVencedor() {    //string que retorna 'o', 'x', ou 'null'
        let vencedor = ''   //recebe o vencedor
        for(let a = 0; a < this.jogoAtual.length; a++){ //dentro do loop verifica linha ou coluna
            if(this.jogoAtual[0][a] == this.jogoAtual[1][a] && this.jogoAtual[1][a] == this.jogoAtual[2][a] && this.jogoAtual[2][a] != ''){  //verifica as linhas
                alert(`Vencedor: ${this.jogoAtual[0][a]}`)
                vencedor = this.jogoAtual[0][a]
            }
            if(this.jogoAtual[a][0] == this.jogoAtual[a][1] && this.jogoAtual[a][1] == this.jogoAtual[a][2] && this.jogoAtual[a][2] != ''){  //verifica as colunas
                alert(`Vencedor: ${this.jogoAtual[a][0]}`)
                vencedor = this.jogoAtual[a][0]
            }
        }

        //condicionais abaixo verificam as diagonais
        if(this.jogoAtual[0][0] == this.jogoAtual [1][1] && this.jogoAtual [1][1] == this.jogoAtual[2][2] && this.jogoAtual[2][2] != ''){
            alert(`Vencedor: ${this.jogoAtual[0][0]}`)
            vencedor = this.jogoAtual[0][0]
        }
        if(this.jogoAtual[0][2] == this.jogoAtual [1][1] && this.jogoAtual[1][1] == this.jogoAtual[2][0] && this.jogoAtual[2][0] != ''){
            alert(`Vencedor: ${this.jogoAtual[0][2]}`)
            vencedor = this.jogoAtual[0][2]
        }

        return vencedor
    }
    CriarJogo() {
        const newGame = document.createElement('div')
        newGame.classList.add('tabuleiro')
        newGame.innerHTML = `
            <div id='00' class='item'></div>
            <div id='01' class='item'></div>
            <div id='02' class='item'></div>
            <div id='10' class='item'></div>
            <div id='11' class='item'></div>
            <div id='12' class='item'></div>
            <div id='20' class='item'></div>
            <div id='21' class='item'></div>
            <div id='22' class='item'></div>
        `
        document.getElementById('espaco').appendChild(newGame)
    }
}

let JDV = new JogoDaVelha()
JDV.CriarJogo()

const pegaBotoesNoHTML = document.querySelectorAll('.item') //pega as DIVs correspondentes a cada quadrado no tabuleiro

pegaBotoesNoHTML.forEach(function(teste) {
    teste.addEventListener('click', function(event) {
        //condicional que verifica se já tem algo dentro antes de enviar o ID onde clicou no HTML
        event.target.id != '' ? JDV.Jogar(event.target.id) : JDV.InvalidOperationException()
    })
})