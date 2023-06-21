let poupança

salario = prompt ("Qual o seu salario: ")

moradia = prompt ("Qual o valor da moradia: ")
moradia = Number (moradia)
agua =  prompt ("Qual o valor da agua: ")
agua = Number (agua)
luz =  prompt ("Qual o valor da luz: ")
luz =  Number (luz)
internet =  prompt ("Qual o valor da internet: ")
internet =  Number (internet)
gasolina =  prompt ("Qual o valor da gasolina: ")
gasolina =  Number (gasolina)
netflix =  prompt ("Qual o valor da netflix: ")
netflix =  Number (gasolina)
telefone =  prompt ("Qual o valor do telefone: ")
telefone =  Number (telefone)
outros =  prompt ("Qual o valor de outras despesas: ")
outros =  Number (outros)

poupança = salario - (moradia+agua+luz+internet+gasolina+netflix+telefone+outros)

alert("poupança" + poupança.toFixed(2))