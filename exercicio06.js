aluno1 = prompt("Digite o nome do aluno 1:")
notas = prompt("Digite as notas, separadas por vírgula")
notas1 = notas.split(",")
media1 = (parseFloat(notas1[0]) + parseFloat(notas1[1]) + parseFloat(notas1[2])) / 3

aluno2 = prompt("Digite o nome do aluno 2:")
notas = prompt("Digite as notas, separadas por vírgula")
notas2 = notas.split(",")
media2 = (parseFloat(notas2[0]) + parseFloat(notas2[1]) + parseFloat(notas2[2])) / 3

aluno3 = prompt("Digite o nome do aluno 3:")
notas = prompt("Digite as notas, separadas por vírgula")
notas3 = notas.split(",")
media3 = (parseFloat(notas3[0]) + parseFloat(notas3[1]) + parseFloat(notas3[2])) / 3

aluno4 = prompt("Digite o nome do aluno 4:")
notas = prompt("Digite as notas, separadas por vírgula")
notas4 = notas.split(",")
media4 = (parseFloat(notas4[0]) + parseFloat(notas4[1]) + parseFloat(notas4[2])) / 3

aluno5 = prompt("Digite o nome do aluno 5:")
notas = prompt("Digite as notas, separadas por vírgula")
notas5 = notas.split(",")
media5 = (parseFloat(notas5[0]) + parseFloat(notas5[1]) + parseFloat(notas5[2])) / 3

if(media1 >= 5) {
    alert(aluno1 + "Aprovado")
} else {
    alert(aluno1 + "Reprovado")
}
if (media2 >=5) {
    alert(aluno2 + "Aprovado")
} else {
    alert(aluno2 + "Reprovado")
}
if (media3 >=5) {
    alert(aluno3 + "Aprovado")
} else {
    alert(aluno3 + "Reprovado")
}
if (media4 >=5) {
    alert(aluno4 + "Aprovado")
} else {
    alert(aluno4 + "Reprovado")
}
if (media5 >=5) {
    alert(aluno5 + "Aprovado")
} else {
    alert(aluno5 + "Reprovado")
}

