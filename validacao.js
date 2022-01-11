function string(originalString) {
    let chave = 0, colchete = 0, parenteses = 0

    for(let a = 0; a < originalString.length; a++) {
        if(!isNaN(originalString[a]) && originalString[a] != ' '){
            return `String inválida`
        } else {
            if(originalString[a] == `{`){chave++}
            if(originalString[a] == `}`){chave--}
            if(originalString[a] == `(`){parenteses++}
            if(originalString[a] == `)`){parenteses--}
            if(originalString[a] == `[`){colchete++}
            if(originalString[a] == `]`){colchete--}
            if(chave < 0 || parenteses < 0 || colchete < 0 ){ return `String inválida` }
        }
    }
    if(chave == 0 && colchete == 0 && parenteses == 0){return `String válida`} else{return `String inválida`}
}


console.log(string(`[ (abc) ]`))
console.log(string(`[{(a)}bc{}()]`))
console.log(string(`[(abc]`))
console.log(string(`[{)x}]`))
console.log(string(`[ (1) ]`))