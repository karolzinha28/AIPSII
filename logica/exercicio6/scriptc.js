let Eleitores, VB, VN, VV, total, PB, PN, PV

Eleitores = Number(prompt("Quantos eleitores: "))
VB = Number(prompt("Quantos votos brancos? "))
VN = Number(prompt("Quantos votos nulos? "))
VV = Number(prompt("Quantos votos válidos? "))

total = VB+ VN + VV

PB = VB/total*100
PN = VN/total*100
PV = VV/total*100

alert ( "Brancos: " + PB.toFixed(1) + "\nNulo: " + PN.toFixed(1) + "\nVálidos: " +  PV.toFixed(1))

