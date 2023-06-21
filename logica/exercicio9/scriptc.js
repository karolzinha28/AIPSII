
let dias, multa, VD, conta

dias = Number(prompt("Quantos dias você pretende ficar no albergue? "))
D = Number(0.25)
multa = Number(150)

if(dias <= 5){
   VD = (100*dias)  
}
if(dias >5 && dias <= 10){
    VD = (90*dias)
}
if(dias >10){
    VD = (80*dias)
}
conta = VD*0.75 + multa
alert("Conta: " + conta)