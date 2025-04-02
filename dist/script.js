function respostaIdade(isOver18) {
  const inicio = document.getElementById("inicio");
  const selecaoCartas = document.getElementById("selecao-cartas");
  const cartas = document.querySelector(".cartas");

  if (isOver18) {
    inicio.style.display = "none";
    selecaoCartas.style.display = "block";
    setTimeout(() => cartas.classList.add("mostrar"), 100);
  } else {
    alert("Você precisa ter mais de 18 anos para jogar.");
  }
}

const cartas = {
  papel: "https://i.postimg.cc/cLxW8pSj/Papel.png",
  pedra: "https://i.postimg.cc/sgTrPTf2/Pedra.png",
  tesoura: "https://i.postimg.cc/hGhq2Vh1/Tesoura.png"
};

function escolherCarta(escolha) {
  const opcoes = ["papel", "pedra", "tesoura"];
  const escolhaAdversario = opcoes[Math.floor(Math.random() * 3)];
  const jogadorCarta = document.getElementById("carta-jogador");
  const adversarioCarta = document.getElementById("carta-adversario");
  const resultadoContainer = document.querySelector(".resultado");
  const mensagem = document.getElementById("mensagem-resultado");
  const emojis = ["✊", "🖐", "✌"]; // Emojis de pedra, papel e tesoura

  jogadorCarta.src = "https://i.postimg.cc/52hYw5xD/Fundo.png";
  adversarioCarta.src = "https://i.postimg.cc/52hYw5xD/Fundo.png";

  jogadorCarta.style.transition = "transform 0.9s ease-in-out";
  adversarioCarta.style.transition = "transform 0.9s ease-in-out";

  jogadorCarta.style.transform = "rotateY(180deg)";
  adversarioCarta.style.transform = "rotateY(180deg)";

  let resultado =
    escolha === escolhaAdversario
      ? "Empate!"
      : (escolha === "pedra" && escolhaAdversario === "tesoura") ||
        (escolha === "tesoura" && escolhaAdversario === "papel") ||
        (escolha === "papel" && escolhaAdversario === "pedra")
      ? "Vitoria!"
      : "Derrota!";
  
 mensagem.innerHTML = ""; // Limpa antes de mostrar a nova palavra

  resultado.split("").forEach((letra, i) => {
    let span = document.createElement("span");
    span.classList.add("letra");
    span.style.animationDelay = `${i * 0.2}s`;
    span.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    setTimeout(() => {
      span.innerHTML = letra; // Revela a letra correta
    }, 1200 + i * 200); // Adiciona um delay para parecer um caça-níquel
    mensagem.appendChild(span);
  });

  
  document.querySelector(".cartas").style.display = "none";
  document.getElementById("resultado").style.display = "flex";
  setTimeout(() => {
    resultadoContainer.classList.add("revelar");
    jogadorCarta.style.transform = "rotateY(0deg)";
    adversarioCarta.style.transform = "rotateY(0deg)";
  }, 250);
  setTimeout(() => {
    jogadorCarta.src = cartas[escolha];
    adversarioCarta.src = cartas[escolhaAdversario];
  }, 750);
}

function reiniciarJogo() {
  document.querySelector(".cartas").style.display = "flex";
  document.getElementById("resultado").style.display = "none";
}