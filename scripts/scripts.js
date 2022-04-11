/* Colocar as imagens */

let quantjogos = Number(prompt("Com quantas cartas você deseja jogar? (Observação digitar um número par de cartas maior que 4 e menor do que 14!)"));
const cartas = document.querySelector(".cartas")
let desejar = "sim"

function checarJogos() {
    while(quantjogos % 2 !== 0 || quantjogos < 4 || quantjogos > 14) {
        alert("Por favor, algo de errado não está certo!")
        quantjogos = Number(prompt("Com quantas cartas você deseja jogar?"));
    }  
}

function embaralharLista() {
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
    const imagensUsadas = listaImagens.slice(0, quantjogos/2)
    return imagensUsadas.concat(imagensUsadas).sort(comparador)

}

function imprimirCartas() {
    if(desejar === "sim") {lista = embaralharLista()
    let cartasColocada = "";
    for(let i = 0; i < quantjogos; i++){
        cartasColocada += `
        <div class="carta" data-carta="${lista[i]}">
            <img class="face-levantada" src="images/${lista[i]}" />
            <img class="face-abaixada" src="images/front.png" />
        </div>
        `
    }
    cartas.innerHTML = cartasColocada;}
}

checarJogos()
imprimirCartas()


/* análise de clique */
const todasCartas = document.querySelectorAll(".carta")
let primeiraCarta;
let segundaCarta;
let cartaBloqueada = false;
let listaPares = [];
let clique = 0;

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
    clique += 1;
}

function compararCartas() {
    
    let cartasIguais = primeiraCarta.dataset.carta === segundaCarta.dataset.carta;
    if(cartasIguais) {
        listaPares.push("deu par")
        console.log(listaPares)
    }
    
    
    !cartasIguais ? desabilitarCartas() : resetarCartas(cartasIguais)

    setTimeout(finalizarGame, 1000)
    
    
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

todasCartas.forEach(carta => carta.addEventListener("click", rotacionarCarta))

function comparador() { 
	return Math.random() - 0.5; 
}

function finalizarGame() {
    if(listaPares.length === quantjogos / 2) {
        alert(`Você ganhou em ${clique} jogadas! Em ${contador} segundos!`)
        setTimeout(resetarGame, 1000)    
    }
}

function resetarGame() {
    let desejoUsuario = prompt("Você gostaria de jogar novamente?")

    if(desejoUsuario === "Sim") {
        document.location.reload()
    } else {
        cartas.innerHTML = `
        <p class='creditos'>Autor: LukazDs</p>
        <img src=images/passarinho.gif />`
        
        relogio.classList.add("relogio-block")
    }
}

const relogio = document.querySelector(".relogio")
let contador = 0
relogio.innerHTML = contador

function tempoJogo() {

    contador += 1;
    if(listaPares.length < quantjogos / 2) {
        relogio.innerHTML = contador
    }
    else {
        relogio.innerHTML = ""
    }
    
}

setInterval(tempoJogo, 1000)
