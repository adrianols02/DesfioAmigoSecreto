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

function criarLista() {
    let lista = document.getElementById('listaAmigos'); 
    lista.innerHTML = ""; 
    for (let i = 0; i < amigos.length; i++) {
        let novoItem = document.createElement('li');
        novoItem.textContent = amigos[i];
        lista.appendChild(novoItem);
    }
}

function sortearAmigo (){
    let lista = document.getElementById('listaAmigos'); 
    lista.innerHTML = ""; 
    if (amigos.length === 0){
        adicionarAmigo();
    }else{
        let sorteado = parseInt(Math.random()*amigos.length);
        let lista = document.getElementById('resultado'); 
        lista.innerHTML = ""; 
        let novoItem = document.createElement('li');
        novoItem.textContent = "O seu amigo secreto sorteado foi: " + amigos[sorteado];
        lista.appendChild(novoItem);
    }
}