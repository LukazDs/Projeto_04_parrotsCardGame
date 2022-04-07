function numJogos() {
    let quantjogos = Number(prompt("Com quantas cartas você deseja jogar? (observação digitar um número par de cartas mior que 4 e menor do que 14!)"));
    while(quantjogos % 2 !== 0) {
        alert("Por favor, digite um número par de cartas!")
        quantjogos = Number(prompt("Com quantas cartas você deseja jogar?"));
    }
    while(quantjogos < 4) {
        alert("Por favor, o número digitado é menor que 4!")
        quantjogos = Number(prompt("Com quantas cartas você deseja jogar?"));
    }
    while(quantjogos > 14) {
        alert("Por favor, o número digitado é maior que 14!")
        quantjogos = Number(prompt("Com quantas cartas você deseja jogar?"));
    }
    return quantjogos; 
}
function gerarCartas() {
    const cartas = document.querySelector(".cartas");
    const quantidade = numJogos()
    for(let i = 0; i < quantidade; i ++) {
        cartas.innerHTML += ` <div class="carta"><img src="/images/front.png"></div>`
    }
}
gerarCartas()
