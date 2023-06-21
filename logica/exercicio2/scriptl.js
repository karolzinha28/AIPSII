let café_per_capita

café = Number(prompt("Qual a quantidade de cafés: "))
extra = Number (prompt("Qual a quantidade de extra: "))
alunos = Number (prompt("Qual a quantidade de alunos: "))

café_per_capita = (café+extra)/alunos
alert("Café para cada aluno: " + café_per_capita)