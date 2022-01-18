function string(originalString) {
    let pilha = []
  
    for(let a = 0; a < originalString.length; a++) {
  
      if(!isNaN(originalString[a]) && originalString[a] != ' ') {
          return `String inválida`
      } else {
      if(originalString[a] == `{`) {
          pilha.push('{')
      }
      if(originalString[a] == `}`) {
          if(pilha[pilha.length-1] == '{'){
              pilha.pop()
          } else {
              return 'String Inválida'
          }
      }
      if(originalString[a] == `(`) {
          pilha.push('(')
      }
      if(originalString[a] == `)`) {
          if(pilha[pilha.length-1] == '('){
              pilha.pop()
          } else {
              return 'String Inválida'
          }
      }
      if(originalString[a] == `[`) {
          pilha.push('[')
      }
      if(originalString[a] == `]`) {
          if(pilha[pilha.length-1] == '['){
              pilha.pop()
          } else {
              return 'String Inválida'
          }
      }
    }
  }
  if(pilha == '') {
    return `String válida`
  } else {
    return `String inválida`
  }
  pilha = []
  
}
  
  
  console.log(string(`[ (abc) ]`))
  console.log(string(`[{(a)}bc{}()]`))
  console.log(string(`[(abc]`))
  console.log(string(`[{)x}]`))
  console.log(string(`[ (1) ]`))
  console.log(string('([)]'))
  console.log(string('(([]))'));