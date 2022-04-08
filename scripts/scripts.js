function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function checarJogos() {
    while(quantjogos % 2 !== 0 || quantjogos < 4 || quantjogos > 14) {
        alert("Por favor, algo de errado não está certo!")
        quantjogos = Number(prompt("Com quantas cartas você deseja jogar?"));
    }  
}

function comparador() { 
	return Math.random() - 0.5; 
}

function gerarCartas() {
    const cartas = document.querySelector(".cartas");
   
    for(let i = 0; i < quantjogos; i ++) {
        cartas.innerHTML += `<div class="carta" onclick="selecionarCarta(this)"> 
        <img class="imginicial" src="/images/front.png"> 
        <img class="imgescondida restrita" src="/images/img${imglista[i % (quantjogos/2)]}.gif">
        </div>`
    }
}

function selecionarCarta(elemento) {
    //let param = elemento.querySelector(".virada").src
    console.log(enderecolista)

    //if(enderecolista.length === 0) {
    //    enderecolista.push(param)
    //}

    //if(enderecolista.indexOf(param) !== -1) {
    //    console.log("true")
    //    enderecolista.push(param)
    //}
    
    const cartaescondida = document.querySelector(".carta-selecionada");
    if(cartaescondida !== null) {
        cartaescondida.classList.remove("carta-selecionada")
        cartaescondida.querySelector(".imginicial").classList.remove("restrita")
        cartaescondida.querySelector(".imgescondida").classList.add("restrita")
    }

    elemento.classList.add("carta-selecionada")
    elemento.querySelector(".imginicial").classList.add("restrita")
    elemento.querySelector(".imgescondida").classList.remove("restrita")
    
}

function levantarCartas() {

}

let quantjogos = Number(prompt("Com quantas cartas você deseja jogar? (observação digitar um número par de cartas mior que 4 e menor do que 14!)"));

checarJogos()

let imglista = [0, 1, 2, 3, 4, 5, 6]
imglista.sort(comparador)
let enderecolista = []

gerarCartas()
