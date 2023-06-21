let N1, N2, média 

N1 = Number(prompt("Digite a sua primeira nota: "))
N2 = Number(prompt("Digite a sua segunda nota: "))

média = (N1+N2)/2
if(média > 7){
    alert("Aprovado")
}else{
    alert("Reprovado")
}
alert("Sua média final é: " + média)