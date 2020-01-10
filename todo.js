var local = document.querySelector('#corpo ul');
var input = document.querySelector('#corpo div div input');
var botao = document.querySelector('#corpo  div div button');

var todos = JSON.parse(localStorage.getItem('tarefas')) || [];


botao.onclick = addItem;


//adiciona item com enter
console.log(input.value);
input.addEventListener('keyup', function(e){
    var key = e.which || e.keyCode;
    if (key == 13) { // codigo da tecla enter
      addItem();
    }
  });


function addItem(){
    if(input.value !=''){
        todos.push(input.value);
        input.value = '';
        criarLista(todos);
        salvarLista();
    }
    
}

function removeItem(indice){
    todos.splice(indice,1);
    criarLista(todos);
    salvarLista();
}



function criarLista(item){

    local.innerHTML = '';

    for(let listagem of item){
    //criar li e definir classe
    var elemento = document.createElement('li');
    elemento.setAttribute('class','list-group-item d-flex justify-content-between align-items-center');
    //incluir o texto do li
    var textoItem = document.createTextNode(listagem);
    elemento.appendChild(textoItem);
    //incluir botao no li
    var botaoLi = document.createElement('button');
    botaoLi.setAttribute('class','btn btn-danger btn-sm');
    var botaoLiTexto = document.createTextNode('Excluir');
    botaoLi.appendChild(botaoLiTexto);
    elemento.appendChild(botaoLi);
    //descobrir index do item
    var pos = item.indexOf(listagem);
    botaoLi.setAttribute('onclick','removeItem('+pos+')');
    
    //incluir no html
    local.appendChild(elemento)
    }
}

function salvarLista(){
    localStorage.setItem('tarefas',JSON.stringify(todos));

}

criarLista(todos);
