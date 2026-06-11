let pontos = 0;

function respostaCorreta(){
    document.getElementById("resultado").innerHTML =
    "✅ Muito bem! Você ajudou o planeta.";
}

function respostaErrada(){
    document.getElementById("resultado").innerHTML =
    "❌ Essa atitude prejudica o meio ambiente.";
}

function somarPontos(){
    pontos++;

    document.getElementById("pontos").innerHTML = pontos;
}