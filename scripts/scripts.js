let quantjogos = Number(prompt("Com quantas cartas você deseja jogar? (observação digitar um número par de cartas mior que 4 e menor do que 14!)"));
const cartas = document.querySelector(".cartas")
const listaImagens = [
    "img0.gif",
    "img1.gif",
    "img2.gif",
    "img3.gif",
    "img4.gif",
    "img5.gif",
    "img6.gif",
]

listaImagens.sort(comparador)

let imagensUsadas = listaImagens.slice(0, quantjogos/2).sort(comparador)
listaImagensUsada = imagensUsadas.concat(imagensUsadas).sort(comparador)
console.log(listaImagensUsada)

let cartasColocada = "";

for(let i = 0; i < quantjogos / 2; i++){
    cartasColocada += `
    <div class="carta" data-carta="${listaImagensUsada[i]}">
        <img class="face-levantada" src="images/${listaImagensUsada[i]}" />
        <img class="face-abaixada" src="images/front.png" />
    </div>
    `
};

cartas.innerHTML = cartasColocada + cartasColocada;
    

const todasCartas = document.querySelectorAll(".carta")
let primeiraCarta;
let segundaCarta;
let cartaBloqueada = false;
const listaPares = []

function rotacionarCarta() {
    if(cartaBloqueada) {
        resetarCartas(cartasIguais);
    }
    this.classList.add("virada")
    //analizando se a primeira carta foi definida
    if(!primeiraCarta) {
        primeiraCarta = this;
        return false;
    }
    segundaCarta = this;

    compararCartas()
}

function compararCartas() {
    
    let cartasIguais = primeiraCarta.dataset.carta === segundaCarta.dataset.carta;
    if(cartasIguais) {
        listaPares.push("deu par")
        console.log(listaPares)
    }
    
    !cartasIguais ? desabilitarCartas() : resetarCartas(cartasIguais)

}

function desabilitarCartas() {
    cartaBloqueada = true
    setTimeout(() => {primeiraCarta.classList.remove("virada");
    segundaCarta.classList.remove("virada");
    resetarCartas()}, 1000);
}

function resetarCartas(cartasIguais = false) {
    if(cartasIguais) {
        primeiraCarta.removeEventListener("click", rotacionarCarta)
        segundaCarta.removeEventListener("click", rotacionarCarta)
    }
    primeiraCarta = null;
    segundaCarta = null;
    cartaBloqueada = false;
}

/* observou um click ativa o rotacionarCarta. ATENÇÃO*/
/* for(let i = 0; i < todasCartas.length; i++) {
    todasCartas[i].addEventListener("click", rotacionarCarta)
}
 */
todasCartas.forEach(carta => carta.addEventListener("click", rotacionarCarta))

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

checarJogos()
