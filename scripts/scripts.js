function numJogos() {

    let quantjogos = Number(prompt("Com quantas cartas você deseja jogar? (observação digitar um número par de cartas mior que 4 e menor do que 14!)"));
    let minhalista = [];

    while(quantjogos % 2 !== 0 || quantjogos < 4 || quantjogos > 14) {
        alert("Por favor, algo de errado não está certo!")
        quantjogos = Number(prompt("Com quantas cartas você deseja jogar?"));
    }  
    for(let i = 0; i < quantjogos; i++) {
        minhalista.push(i)
    }
    return minhalista.sort(comparador) 
}
function comparador() { 
	return Math.random() - 0.5; 
}
function gerarCartas() {
    const cartas = document.querySelector(".cartas");
    const quantidade = numJogos()
    for(let i = 0; i < quantidade.length; i ++) {
        cartas.innerHTML += ` <div class="carta"><img src="/images/front.png">${quantidade[i]}</div>`
    }
}

gerarCartas()
