let primeiro;
let segundo;
let sinal;

function enviaSete(){
    document.getElementById("visor").value += "7"
}
function enviaOito(){
    document.getElementById("visor").value += "8"
}
function enviaNove(){
    document.getElementById("visor").value += "9"
}
function enviaQuatro(){
    document.getElementById("visor").value += "4"
}

function enviaCinco(){
    document.getElementById("visor").value += "5"
}

function enviaSeis(){
    document.getElementById("visor").value += "6"
}
function enviaUm(){
    document.getElementById("visor").value += "1"
}

function enviaDois(){
    document.getElementById("visor").value += "2"
}

function enviaTres(){
    document.getElementById("visor").value += "3"
}
function enviaZero(){
    document.getElementById("visor").value += "0"
}
function adicao(){
    primeiro = document.getElementById("visor").value
    document.getElementById("visor").value = ''
    sinal = "+"
}
function atualizaVisor(){
    primeiro = document.getElementById("visor").value
    document.getElementById("visor").value = ''
}
function igual(){
    segundo =  document.getElementById("visor").value
    let result
    if(sinal == "p"){
        result = Math.pow(parseInt(primeiro), parseInt(segundo))
        document.getElementById("visor").value = result
    }
    if(sinal == "r"){
         result = Math.sqrt(parseInt(primeiro))
         document.getElementById("visor").value = result
    }
    if(sinal == "x²"){
        result = Math.sqrt(parseInt(primeiro))
         document.getElementById("visor").value = result
    }
    if(sinal == "+"){
         result = parseInt(primeiro) + parseInt(segundo)
         document.getElementById("visor").value = result
    }
    if(sinal == "-"){
         result = parseInt(primeiro) - parseInt(segundo)
         document.getElementById("visor").value = result
    }
   
    if(sinal == "X"){
         result = parseInt(primeiro) * parseInt(segundo)
         document.getElementById("visor").value = result
    }
  
    if(sinal == "/"){
         result = parseInt(primeiro) / parseInt(segundo)
         document.getElementById("visor").value = result
}

}
function subtracao(){
    atualizaVisor()
    sinal = "-"
}

function multiplicacao(){
    atualizaVisor()
    sinal = "X"
}
function divisao(){
    atualizaVisor()
    sinal = "/"
}
function apaga(){
    document.getElementById("visor").value = ''
    primeiro = ''
    segundo = ''
}
function raizQuad(){
    atualizaVisor()
    sinal = "r"
    igual()
}
function potencia(){
    atualizaVisor()
    sinal = "p"
   
}