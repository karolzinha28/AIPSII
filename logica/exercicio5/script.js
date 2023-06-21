let HT, VH, PD, SB, TD, SL

HT = Number (prompt ("Quantas horas você trabalha? "))
VH = Number (prompt ("Quanto você ganha por hora? "))
PD = Number (prompt ("Qual o seu percentual de desconto? "))

SB = HT * VH
TD = (PD/100)*SB
SL = SB-TD

alert ("Horas trabalhadas " + HT +
"\nsalario bruto R$: " + SB.toFixed(2)+ 
"\nDesconto: " + TD.toFixed(2) +
"\nSalario liquido: " + SL.toFixed(2))
