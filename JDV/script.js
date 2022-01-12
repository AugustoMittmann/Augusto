class JogoDaVelha {
    constructor(){
        this.aux = 0
        this.jogoAtual = [   //casas ocupadas
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]
    }
    ColocaNaTabela(movimento){
        let click = document.getElementById(movimento)
        if(movimento[0] == 'a'){
            if(movimento[1] == '1'){
                if(this.jogoAtual[0][0] == ''){
                    movimento[2] == 'x' ? this.jogoAtual[0][0] = 'x' : this.jogoAtual[0][0] = 'o'
                    click.style.display = 'block'
                } else {this.aux = !this.aux; JDV.InvalidOperationException()}
            }
            if(movimento[1] == '2'){
                if(this.jogoAtual[0][1] == ''){
                    movimento[2] == 'x' ? this.jogoAtual[0][1] = 'x' : this.jogoAtual[0][1] = 'o'
                    click.style.display = 'block'
                } else {this.aux = !this.aux; JDV.InvalidOperationException()}
            }
            if(movimento[1] == '3'){
                if(this.jogoAtual[0][2] == ''){
                    movimento[2] == 'x' ? this.jogoAtual[0][2] = 'x' : this.jogoAtual[0][2] = 'o'
                    click.style.display = 'block'
                } else {this.aux = !this.aux; JDV.InvalidOperationException()}
            }
        }
        if(movimento[0] == 'b'){
            if(movimento[1] == '1'){
                if(this.jogoAtual[1][0] == ''){
                    movimento[2] == 'x' ? this.jogoAtual[1][0] = 'x' : this.jogoAtual[1][0] = 'o'
                    click.style.display = 'block'
                } else {this.aux = !this.aux; JDV.InvalidOperationException()}
            }
            if(movimento[1] == '2'){
                if(this.jogoAtual[1][1] == ''){
                    movimento[2] == 'x' ? this.jogoAtual[1][1] = 'x' : this.jogoAtual[1][1] = 'o'
                    click.style.display = 'block'
                } else {this.aux = !this.aux; JDV.InvalidOperationException()}
            }
            if(movimento[1] == '3'){
                if(this.jogoAtual[1][2] == ''){
                    movimento[2] == 'x' ? this.jogoAtual[1][2] = 'x' : this.jogoAtual[1][2] = 'o'
                    click.style.display = 'block'
                } else {this.aux = !this.aux; JDV.InvalidOperationException()}
            }
        }
        if(movimento[0] == 'c'){
            if(movimento[1] == '1'){
                if(this.jogoAtual[2][0] == ''){
                    movimento[2] == 'x' ? this.jogoAtual[2][0] = 'x' : this.jogoAtual[2][0] = 'o'
                    click.style.display = 'block'
                } else {this.aux = !this.aux; JDV.InvalidOperationException()}
            }
            if(movimento[1] == '2'){
                if(this.jogoAtual[2][1] == ''){
                    movimento[2] == 'x' ? this.jogoAtual[2][1] = 'x' : this.jogoAtual[2][1] = 'o'
                    click.style.display = 'block'
                } else {this.aux = !this.aux; JDV.InvalidOperationException()}
            }
            if(movimento[1] == '3'){
                if(this.jogoAtual[2][2] == ''){
                    movimento[2] == 'x' ? this.jogoAtual[2][2] = 'x' : this.jogoAtual[2][2] = 'o'
                    click.style.display = 'block'
                } else {this.aux = !this.aux; JDV.InvalidOperationException()}
            }
        }
        JDV.ObterVencedor()
    }
    Jogar(x, y) {
        let atualJogador = ''   //alterna para x ou o
        if (this.aux == 0) {
            atualJogador = 'x'
            this.aux = 1
        } else {
            atualJogador = 'o'
            this.aux = 0
        }
        let movimento = x + y + atualJogador
        JDV.ColocaNaTabela(movimento)
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
        let vencedor = ''   //recebe o vencedor
        for(let a = 0; a < this.jogoAtual.length; a++){
            if(this.jogoAtual[0][a] == this.jogoAtual[1][a] && this.jogoAtual[1][a] == this.jogoAtual[2][a] && this.jogoAtual[2][a] != ''){  //verifica as linhas
                alert(`Vencedor: ${this.jogoAtual[0][a]}`)
                vencedor = this.jogoAtual[0][a]
            }
            if(this.jogoAtual[a][0] == this.jogoAtual[a][1] && this.jogoAtual[a][1] == this.jogoAtual[a][2] && this.jogoAtual[a][2] != ''){  //verifica as colunas
                alert(`Vencedor: ${this.jogoAtual[a][0]}`)
                vencedor = this.jogoAtual[a][0]
            }
        }
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
}

let JDV = new JogoDaVelha()