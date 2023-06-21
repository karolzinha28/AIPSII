let conta_cantina

cafe = Number(prompt("Qual o valor do café: "))
coxinha = Number(prompt("Qual o valor da coxinha: "))
halls = Number(prompt("Qual o valor do halls: "))
docedeleite = Number(prompt("Qual o valor do doce de leite: "))

conta = (3*cafe)+ coxinha + halls + (2*docedeleite)

alert("Conta cantina R$: " + conta)