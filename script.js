let moon = document.getElementById("moon");
let text = document.getElementById("text");
let train = document.getElementById("train");

let desertm_moon = document.getElementById("desert-moon");
let man = document.getElementById("man");

let scrollProgress = document.getElementById("progress");

// Movimento dos elementos durante o scroll
window.addEventListener("scroll", () => {
    let value = window.scrollY;
    moon.style.top = value * 0.9 + "px"; 
    text.style.top = 80 + value * -0.2 + '%';
    train.style.left = value * 1.5 + "px";

    desertm_moon.style.top = value * .3 + "px";
    man.style.left = value * .6 + "px";
});

// Função para atualizar o progresso da rolagem e exibir a barra
let calcScrollvalue = () => {
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    // Aplica o progresso circular
    scrollProgress.style.background = `conic-gradient(#194eb9 ${scrollValue}%, #67ccff ${scrollValue}%)`;

    // Mostra ou esconde o progresso
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
};

// Evento de clique para rolar até o topo
if (scrollProgress) {
    scrollProgress.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Rolagem suave
        });
    });
}

window.onscroll = calcScrollvalue;
window.onload = calcScrollvalue;
