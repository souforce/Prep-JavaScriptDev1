let div = document.createElement('div');
div.style = "border: solid 4px red; width: 500px; height: 50px;text-align:center; line-height:50px";
document.body.appendChild(div);

let button = document.createElement('button');
button.innerHTML = "Salvar";
div.appendChild(button);

let button2 = document.createElement('button');
button2.innerHTML = "Ler";
div.appendChild(button2);

let button3 = document.createElement('button');
button3.innerHTML = "Remover";
div.appendChild(button3);

let button4 = document.createElement('button');
button4.innerHTML = "Limpar";
div.appendChild(button4);


let button5 = document.createElement('button');
button5.innerHTML = "Função";
div.appendChild(button5);

button.addEventListener('click', function(e){
    let d = {"dado" : "Usuário clicou"};
    window.localStorage.setItem("dados", JSON.stringify(d));
    window.localStorage.setItem("dados2", 123);
    window.localStorage.setItem("dados3", true);

    window.sessionStorage.setItem("session1", "Olá mundo");
});

button2.addEventListener('click', function(e){
    let row = window.localStorage.getItem("dados");
    window.console.log(JSON.parse(row));


    let row2 = window.sessionStorage.getItem("session1");
    window.console.log(row2);
});

button3.addEventListener('click', function(e){
    window.localStorage.removeItem("dados2");

    window.sessionStorage.removeItem("session1");
});

button4.addEventListener('click', function(e){
    window.localStorage.clear();
    window.sessionStorage.clear();
});

button5.addEventListener('click', function(e){
    let nome = window.prompt('Qual o seu nome?');
    window.console.log(nome);
    // let confirmacao = window.confirm('Você tem certeza que já assinou o canal?');
    // if (confirmacao) {
    //     window.console.log('Legal!!! Parabéns!!!');
    // }
});


window.meuTimeout = window.setTimeout(function() {
    //window.console.log('Se passaram dois segundos desde que a página foi carrega.');

    window.clearInterval(window.meuIntervalo);
}, 6000);

window.meuIntervalo = window.setInterval(function() {
    window.console.log('Já se passou mais um segundo...');
}, 1000);

window.clearTimeout(window.meuTimeout);

// div.addEventListener('click', function(e) {
//     window.console.log('Cliquei na div');
// })

// let button1 = document.getElementById('button1');
// button1.addEventListener('click', function(e) {
//     window.console.log('Cliquei no botão');
// });

// let divMain = document.getElementById('divMain');
// divMain.addEventListener('click', function(e) {
//     window.console.log('Cliquei na div Main');
// });

function buttonClick(e) {
    window.console.log(window.location);
    //window.location.href = "http://salesforce.com";

    e.stopPropagation();
    //e.stopImmediatePropagation();
    window.console.log('Usuário clicou no botão');
}

