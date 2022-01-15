function string(originalString) {
    let chave = 0
    let colchete = 0
    let parenteses = 0
    let pilha = []
  
    for(let a = 0; a < originalString.length; a++) {
  
      if(!isNaN(originalString[a]) && originalString[a] != ' ') {
          return `String inválida`
      } else {
      if(originalString[a] == `{`) {
          chave++
          pilha.push('{')
      }
      if(originalString[a] == `}`) {
          chave--
          if(pilha[pilha.length-1] == '{'){
              pilha.pop()
          } else {
              return 'String Inválida'
          }
      }
      if(originalString[a] == `(`) {
          pilha.push('(')
          parenteses++
      }
      if(originalString[a] == `)`) {
          parenteses--
          if(pilha[pilha.length-1] == '('){
              pilha.pop()
          } else {
              return 'String Inválida'
          }
      }
      if(originalString[a] == `[`) {
          pilha.push('[')
          colchete++
      }
      if(originalString[a] == `]`) {
          colchete--
          if(pilha[pilha.length-1] == '['){
              pilha.pop()
          } else {
              return 'String Inválida'
          }
      }
      if(chave < 0 || parenteses < 0 || colchete < 0 ){ return `String inválida` }
      }
  }
  pilha = []
  
    if(chave == 0 && colchete == 0 && parenteses == 0){return `String válida`} else{return `String inválida`}
  }
  
  
  console.log(string(`[ (abc) ]`))
  console.log(string(`[{(a)}bc{}()]`))
  console.log(string(`[(abc]`))
  console.log(string(`[{)x}]`))
  console.log(string(`[ (1) ]`))
  console.log(string('([)]'))