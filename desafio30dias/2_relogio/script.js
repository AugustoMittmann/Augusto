function criaRelogio() {    //função que cria os números e ponteiros do relógio
<<<<<<< HEAD
  for(let i = 1; i <= 12; i++) {  //laço que cria os números
      const newNumeros = document.createElement('div')
      newNumeros.innerHTML = `<div id='a${i}' class='numeros'>${i}</div>`
      document.getElementById('relogio').appendChild(newNumeros)
  }
  const newPonteiros = document.createElement('div')
  newPonteiros.innerHTML = `
  <div id='horas' class='design'></div>
  <div id='minutos' class='design'></div>
  <div id='segundos' class='design'></div>
  `
  document.getElementById('relogio').appendChild(newPonteiros)
}
function relogio (){
  let data = new Date()   //import para poder usar os get's
  let diff    //adicional para girar o ponteiro da hora e não pular de hora em hora
  switch(Math.round(data.getMinutes()/12)){
      case 0:
          diff = 0
          break
      case 1:
          diff = 5
          break
      case 2:
          diff = 10
          break
      case 3:
          diff = 15
          break
      case 4:
          diff = 20
          break
      case 5:
          diff = 25
          break
  }
  
  // gira os ponteiros usando o "transform" 
  document.getElementById('horas').style.transform = `rotate(${90+diff+(data.getHours()*360/12)}deg)`
  document.getElementById('minutos').style.transform = `rotate(${90+(data.getMinutes()*360/60)}deg)`
  document.getElementById('segundos').style.transform = `rotate(${90+(data.getSeconds()*360/60)}deg)`
}

criaRelogio()
setInterval(relogio, 1000)  //intervalo de 1 em 1 segundo para atualizar o relógio
=======
    for(let i = 1; i <= 12; i++) {  //laço que cria os números
        const newNumeros = document.createElement('div')
        newNumeros.innerHTML = `<div id='a${i}' class='numeros'>${i}</div>`
        document.getElementById('relogio').appendChild(newNumeros)
    }
    const newPonteiros = document.createElement('div')
    newPonteiros.innerHTML = `
    <div id='horas' class='design'></div>
    <div id='minutos' class='design'></div>
    <div id='segundos' class='design'></div>
    `
    document.getElementById('relogio').appendChild(newPonteiros)
}
function relogio (){
    let data = new Date()   //import para poder usar os get's
    let diff    //adicional para girar o ponteiro da hora e não pular de hora em hora
    switch(Math.round(data.getMinutes()/12)){
        case 0:
            diff = 0
            break
        case 1:
            diff = 5
            break
        case 2:
            diff = 10
            break
        case 3:
            diff = 15
            break
        case 4:
            diff = 20
            break
        case 5:
            diff = 25
            break
    }
    
    // gira os ponteiros usando o "transform" 
    document.getElementById('horas').style.transform = `rotate(${90+diff+(data.getHours()*360/12)}deg)`
    document.getElementById('minutos').style.transform = `rotate(${90+(data.getMinutes()*360/60)}deg)`
    document.getElementById('segundos').style.transform = `rotate(${90+(data.getSeconds()*360/60)}deg)`
}

criaRelogio()
setInterval(relogio, 1000)  //intervalo de 1 em 1 segundo para atualizar o relógio
>>>>>>> 4e350228ba59731fbbeea024fe2b25de09989bc2
