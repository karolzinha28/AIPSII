let café, coxinha, halls, doceDeLeite, conta_cantina

café = prompt("Qual o valor do café: " )
café = Number(café)
coxinha = prompt("Qual o valor da coxinha: ") 
coxinha = Number(coxinha)
halls = prompt("Qual o valor do halls: ")
halls = Number(halls)
doceDeLeite = prompt("Qual o valor do doceDeLeite: ")
doceDeLeite = Number(doceDeLeite)

conta_cantina = café + coxinha + halls + doceDeLeite

alert("conta cantina R$" + conta_cantina.toFixed(2))

