class JogoDaVelha {
    ColocaNaTabela(movimento){
        let click = document.getElementById(movimento)
        if(movimento[0] == 'a'){
            if(movimento[1] == '1'){
                if(jogoAtual[0][0] == ''){
                    movimento[2] == 'x' ? jogoAtual[0][0] = 'x' : jogoAtual[0][0] = 'o'
                    click.style.display = 'block'
                } else {aux = !aux; JDV.InvalidOperationException()}
            }
            if(movimento[1] == '2'){
                if(jogoAtual[0][1] == ''){
                    movimento[2] == 'x' ? jogoAtual[0][1] = 'x' : jogoAtual[0][1] = 'o'
                    click.style.display = 'block'
                } else {aux = !aux; JDV.InvalidOperationException()}
            }
            if(movimento[1] == '3'){
                if(jogoAtual[0][2] == ''){
                    movimento[2] == 'x' ? jogoAtual[0][2] = 'x' : jogoAtual[0][2] = 'o'
                    click.style.display = 'block'
                } else {aux = !aux; JDV.InvalidOperationException()}
            }
        }
        if(movimento[0] == 'b'){
            if(movimento[1] == '1'){
                if(jogoAtual[1][0] == ''){
                    movimento[2] == 'x' ? jogoAtual[1][0] = 'x' : jogoAtual[1][0] = 'o'
                    click.style.display = 'block'
                } else {aux = !aux; JDV.InvalidOperationException()}
            }
            if(movimento[1] == '2'){
                if(jogoAtual[1][1] == ''){
                    movimento[2] == 'x' ? jogoAtual[1][1] = 'x' : jogoAtual[1][1] = 'o'
                    click.style.display = 'block'
                } else {aux = !aux; JDV.InvalidOperationException()}
            }
            if(movimento[1] == '3'){
                if(jogoAtual[1][2] == ''){
                    movimento[2] == 'x' ? jogoAtual[1][2] = 'x' : jogoAtual[1][2] = 'o'
                    click.style.display = 'block'
                } else {aux = !aux; JDV.InvalidOperationException()}
            }
        }
        if(movimento[0] == 'c'){
            if(movimento[1] == '1'){
                if(jogoAtual[2][0] == ''){
                    movimento[2] == 'x' ? jogoAtual[2][0] = 'x' : jogoAtual[2][0] = 'o'
                    click.style.display = 'block'
                } else {aux = !aux; JDV.InvalidOperationException()}
            }
            if(movimento[1] == '2'){
                if(jogoAtual[2][1] == ''){
                    movimento[2] == 'x' ? jogoAtual[2][1] = 'x' : jogoAtual[2][1] = 'o'
                    click.style.display = 'block'
                } else {aux = !aux; JDV.InvalidOperationException()}
            }
            if(movimento[1] == '3'){
                if(jogoAtual[2][2] == ''){
                    movimento[2] == 'x' ? jogoAtual[2][2] = 'x' : jogoAtual[2][2] = 'o'
                    click.style.display = 'block'
                } else {aux = !aux; JDV.InvalidOperationException()}
            }
        }
        JDV.VerificaVencedor()
    }
    Jogar(x, y) {
        if (aux == 0) {
            atualJogador = 'x'
            aux = 1
        } else {
            atualJogador = 'o'
            aux = 0
        }
        let movimento = x + y + atualJogador
        JDV.ColocaNaTabela(movimento)
        console.log(jogoAtual)
    }
    
    VerificaVencedor() { //logica para verificar se há vencedor
        for(let a = 0; a < jogoAtual.length; a++){
            if(jogoAtual[0][a] == jogoAtual[1][a] && jogoAtual[1][a] == jogoAtual[2][a] && jogoAtual[2][a] != ''){  //verifica as linhas
                alert(`Vencedor: ${jogoAtual[0][a]}`)
                vencedor = jogoAtual[0][a]
            }
            if(jogoAtual[a][0] == jogoAtual[a][1] && jogoAtual[a][1] == jogoAtual[a][2] && jogoAtual[a][2] != ''){  //verifica as colunas
                alert(`Vencedor: ${jogoAtual[a][0]}`)
                vencedor = jogoAtual[a][0]
            }
        }
        if(jogoAtual[0][0] == jogoAtual [1][1] && jogoAtual [1][1] == jogoAtual[2][2] && jogoAtual[2][2] != ''){
            alert(`Vencedor: ${jogoAtual[0][0]}`)
            vencedor = jogoAtual[0][0]
        }
        if(jogoAtual[0][2] == jogoAtual [1][1] && jogoAtual[1][1] == jogoAtual[2][0] && jogoAtual[2][0] != ''){
            alert(`Vencedor: ${jogoAtual[0][2]}`)
            vencedor = jogoAtual[0][2]
        }
    }
    NovoJogo(){
        location.reload()
    }
    InvalidOperationException() {
        alert('Posição já ocupada')
    }
    ArgumentOutRangeExeption() {
        alert('Posição fora do tabuleiro')
    }
    ObterVencedor() {    //string que retorna 'o', 'x', ou 'null'
        return vencedor
    }
}

let jogoAtual = [   //casas ocupadas
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]
let vencedor = ''   //recebe o vencedor
let atualJogador = ''   //alterna para x ou o
let aux = 0     //alterna para x ou o
let JDV = new JogoDaVelha()