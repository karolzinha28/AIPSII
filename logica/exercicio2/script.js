let salario, dias, salario_diario

salario = prompt("Digite seu salario:")
salario = Number(salario)

dias = Number(prompt("quantos dias: "))

salario_diario = salario / dias

alert("Salário diário R$" + salario_diario.toFixed(2))


