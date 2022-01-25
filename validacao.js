function string(originalString) {
    let pilha = []
  
    for(let a = 0; a < originalString.length; a++) {
  
<<<<<<< HEAD
      if(!isNaN(originalString[a]) && originalString[a] !== ' ') {
          return `String inválida`
      } else {
      if(originalString[a] === `{`) {
          pilha.push('{')
      }
      if(originalString[a] === `}`) {
          if(pilha[pilha.length-1] === '{'){
=======
      if(!isNaN(originalString[a]) && originalString[a] != ' ') {
          return `String inválida`
      } else {
      if(originalString[a] == `{`) {
          pilha.push('{')
      }
      if(originalString[a] == `}`) {
          if(pilha[pilha.length-1] == '{'){
>>>>>>> 4e350228ba59731fbbeea024fe2b25de09989bc2
              pilha.pop()
          } else {
              return 'String Inválida'
          }
      }
<<<<<<< HEAD
      if(originalString[a] === `(`) {
          pilha.push('(')
      }
      if(originalString[a] === `)`) {
          if(pilha[pilha.length-1] === '('){
=======
      if(originalString[a] == `(`) {
          pilha.push('(')
      }
      if(originalString[a] == `)`) {
          if(pilha[pilha.length-1] == '('){
>>>>>>> 4e350228ba59731fbbeea024fe2b25de09989bc2
              pilha.pop()
          } else {
              return 'String Inválida'
          }
      }
<<<<<<< HEAD
      if(originalString[a] === `[`) {
          pilha.push('[')
      }
      if(originalString[a] === `]`) {
          if(pilha[pilha.length-1] === '['){
=======
      if(originalString[a] == `[`) {
          pilha.push('[')
      }
      if(originalString[a] == `]`) {
          if(pilha[pilha.length-1] == '['){
>>>>>>> 4e350228ba59731fbbeea024fe2b25de09989bc2
              pilha.pop()
          } else {
              return 'String Inválida'
          }
      }
    }
  }
<<<<<<< HEAD
  if(pilha.length === 0) {
=======
  if(pilha == '') {
>>>>>>> 4e350228ba59731fbbeea024fe2b25de09989bc2
    return `String válida`
  } else {
    return `String inválida`
  }
<<<<<<< HEAD
=======
  pilha = []
  
>>>>>>> 4e350228ba59731fbbeea024fe2b25de09989bc2
}
  
  
  console.log(string(`[ (abc) ]`))
  console.log(string(`[{(a)}bc{}()]`))
  console.log(string(`[(abc]`))
  console.log(string(`[{)x}]`))
  console.log(string(`[ (1) ]`))
  console.log(string('([)]'))
  console.log(string('(([]))'));