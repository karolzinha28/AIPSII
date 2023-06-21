let corrida, porcentagem, dinheiro

corrida1 = Number(prompt("Qual o lucro da primeira corrida: "))
corrida2 = Number(prompt("Qual o lucro da segunda corrida: "))
corrida3 = Number(prompt("Qual o lucro da terceira corrida: "))
corrida4 = Number(prompt("Qual o lucro da quarta corrida: "))
corrida5 = Number(prompt("Qual o lucro da quinta corrida: "))

corrida = corrida1 + corrida2 + corrida3 + corrida4 + corrida5

porcentagem = (corrida*0.25)
dinheiro = corrida - porcentagem


alert("Lucro final: " + dinheiro)