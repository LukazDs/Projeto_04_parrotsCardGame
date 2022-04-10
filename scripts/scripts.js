let quantjogos = Number(prompt("Com quantas cartas você deseja jogar? (observação digitar um número par de cartas mior que 4 e menor do que 14!)"));
const cartas = document.querySelector(".cartas")
const imagens = [
    "img0.gif",
    "img1.gif",
    "img2.gif",
    "img3.gif",
    "img4.gif",
    "img5.gif",
    "img6.gif",
]

let cartasColocada = "";

for(let i = 0; i < quantjogos / 2; i++){
    cartasColocada += `
    <div class="carta">
        <img class="face-levantada" src="images/img${i}.gif" />
        <img class="face-abaixada" src="images/front.png" />
    </div>
    `
};

cartas.innerHTML = cartasColocada + cartasColocada;


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

/* function gerarCartas() {
    const cartas = document.querySelector(".cartas");
   
    for(let i = 0; i < quantjogos; i ++) {
        cartas.innerHTML += `<div class="carta" onclick="selecionarCarta(this)"> 
        <img class="imginicial" src="/images/front.png"> 
        <img class="imgescondida restrita" src="/images/img${imglista[i % (quantjogos/2)]}.gif">
        </div>`
    }
}
 */




checarJogos()

let imglista = [0, 1, 2, 3, 4, 5, 6];
imglista.sort(comparador);
let enderecolista = [];
let listadepares = [];
gerarCartas();

