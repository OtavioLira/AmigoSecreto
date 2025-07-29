//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let arr_amigos = [];
let numeros_sorteados = [];

const display_resultado = document.getElementById("resultado");
const element_list_amigos = document.getElementById("listaAmigos");
const input_amigo = document.getElementById("amigo");

function adicionarAmigo(){
    
    if (validarEntrada()) {
        
        // Salvar amigos na lista
        arr_amigos.push(input_amigo.value);
        
        // Criar elementos com a lista de amigos
        const novo_item = document.createElement("li");
        novo_item.textContent = String(arr_amigos.indexOf(input_amigo.value) + 1) + ". " + input_amigo.value;
        novo_item.className += input_amigo.value; // Adicionando Classe para identificar na lista
        
        element_list_amigos.appendChild(novo_item);
        
        // Limpar input
        input_amigo.value = "";
    } else {
        return;
    }
    
}

function sortearAmigo(){
    // Sorteia um numero
    let numero_sorteado = Math.floor(Math.random() * arr_amigos.length);
    
    // Limpar o array de números sorteados se todos os amigos já foram sorteados
    if (numeros_sorteados.length === arr_amigos.length){
        numeros_sorteados = [];
    }
    
    // Verificar se o numero já foi sorteado
    if (numeros_sorteados.includes(numero_sorteado)){
        numero_sorteado = sortearAmigo();
    } else {
        // Adicionar o número sorteado ao array de números sorteados
        numeros_sorteados.push(numero_sorteado);
        display_resultado.textContent = "Amigo Sorteado: " + arr_amigos[numero_sorteado];
        display_resultado.style.color = "#05DF05";
        
        // Marca o amigo na lista
        limparResultado();
        document.getElementsByClassName(arr_amigos[numero_sorteado])[0].style.color = "blue";
    }
    
}

function limparResultado(){
    // Reseta a cor dos amigos na lista
    for (let amigo of arr_amigos) {
        document.getElementsByClassName(amigo)[0].style.color = "black";
    }
}

function validarEntrada(){
    // Verifica se o input está vazio
    if (input_amigo.value.trim() === ""){
        display_resultado.style.color = "red";
        display_resultado.textContent = "Por favor, insira o nome de um amigo.";
        return false;
    }

    // Verifica se o amigo já foi adicionado
    if (arr_amigos.includes(input_amigo.value)) {
        display_resultado.style.color = "red";
        display_resultado.textContent = "Este amigo já foi adicionado.";
        return false;
    }

    return true;
}