let média

média1 = prompt("Qual a sua média1: ")
média1 = Number(média1)
médiap1 = prompt("Qual a sua médiap2: ")
médiap1 = Number (médiap1)
média2 = prompt("Qual a sua média2: ")
média2 = Number(média2)
médiap2 = prompt("Qual a sua médiap2: ")
médiap2 = Number (médiap2)

média = ((média1 * médiap1) + (média2 * médiap2))/(médiap1 + médiap2)

alert("média" + média.toFixed(2))
