let idade, anos, meses, dias

anos = Number(prompt("Quantos anos? "))

meses = Number(prompt("Quantos meses? "))

dias = Number (prompt("Quantos dias? "))

anos = anos*365
meses = meses*30

idade = anos + meses + dias
alert ("Sua idade em dias: " + idade )
