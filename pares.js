function pares(string) {
    let newString = string.replace(/ /g, ``)//remove os espaços
    //newString = newString.normalize(`NFD`).replace(/[\u0300-\u036f]/g,``)   //remove acentos
    newString = newString.replace(/[^a-z]/gi,``)//remove o caractere que tem acento
    newString = newString.toLowerCase() //case insensitive 
    
    var stringPares = []
    
    for(let a = 0; a < newString.length-1 ; a++) {//divide a string em um array de sílabas
        stringPares.push(newString[a] + newString[a+1])
    }

    var final = []  //será retornada com arrays de 3 elementos indicando [repetições, sílaba, porcentagem]
    var repeticoes = 0
    var aux = 0

    stringPares.sort()  //organiza o array em ordem

    for(let a = 0; a < stringPares.length; a++){    //bloco responsável por verificar o número de repetições de cada sílaba
        if(stringPares[a] === stringPares[a+1]){
            aux = a
            do{
                aux++
                repeticoes++
            } while(stringPares[a] == stringPares[aux])
            final.push([repeticoes, stringPares[a], (repeticoes/stringPares.length*100).toFixed(2)])
            a += repeticoes-1
            repeticoes = 0
        }
    }
    final.sort((a, b)=> { //organiza por ordem de %
        if(a > b) return -1;
        if(a < b) return 1;
        return 0
    })
    return final
}

console.log(pares(`Grêmio campeão da américa`))