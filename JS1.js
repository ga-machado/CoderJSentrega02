let nome = prompt("Seja bem vindo à atividade 02 do grupo da Erica, Gabriel e Warlen! Qual o seu nome?")
let numero

if (nome == "Erica" || nome == "Gabriel" || nome == "Warlen") {
    numero = prompt("Curiosamente, você possui o nome de um dos integrantes do nosso grupo. Coincidência! Agora, escolha um número de 0 a 100.")
} 

else {
    numero = prompt("O seu nome é diferente dos nomes dos integrantes do nosso grupo. Agora, escolha um número de 0 a 100.")
} 

if (numero < 46 && numero >=0) {
alert("Nosso grupo escolheu o número 46. Portanto, o número que você escolheu (" + numero + ") é menor que o nosso.")
}

else if (numero == 46) {
alert("Nosso grupo escolheu o número 46. Portanto, o número que você escolheu (" + numero + ") é igual ao nosso. Coincidência!")
}

else if (numero > 46 && numero <=100) {
alert("Nosso grupo escolheu o número 46. Portanto, o número que você escolheu (" + numero + ") é maior que o nosso.")
}

else {
alert("Você não cumpriu com as regras e escolheu um número fora do intervalo pedido! Tente novamente =)")
}