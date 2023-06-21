let danos, critico, bonus

danos = prompt("Qual o seu dano: ")
danos = Number(danos)
bonus = prompt("Qual o seu bonus: ")
 bonus = Number (bonus)

critico = (danos*1.5 + bonus)

alert("danos: " + critico)