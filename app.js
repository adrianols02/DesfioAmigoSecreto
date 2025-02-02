//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    let nomeAmigo = document.querySelector('input').value;
    if (nomeAmigo == ""){
        alert("Por favor, insira um nome!");
    }else{
        amigos.push(nomeAmigo);
        document.querySelector('input').value = "";
    }criarLista();
}