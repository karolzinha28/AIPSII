let salario, PR, NS

salario = Number(prompt("Qual o seu salario? "))
PR = Number(prompt("Qual o percentual de reajuste? "))

NS = salario + (salario * PR) / 100
alert ("Novo salario: " + NS)