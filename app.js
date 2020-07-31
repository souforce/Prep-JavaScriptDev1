//Variables, Types, and Collections: 23%


//Variable
var fruta = 'Banana';
fruta = true;
//console.log(typeof fruta);

let x = 'algumacoisa';

//Boolean
var souVerdeiro = true;
var seraQueSouVerdareiro = 'true';
//Numero > 0 = Verdadeiro
//true = Verdadeiro
// 'asd' = verdadeiro
//undefined = false
//null = false
//0 = false

// if (souVerdeiro === seraQueSouVerdareiro) {
//     console.log(typeof souVerdeiro);
//     console.log(typeof seraQueSouVerdareiro);
//     console.log('sou sim');
// } else {
//     console.log('Verdade, não sou');
// }


function exibirSoma(valor1, valor2) {
    var result = valor1 + valor2;
    return result;
}

//var soma = exibirSoma(10, 5);
//console.log(soma);
//console.log(result);
// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }
//console.log(i);
//hoisted
//LET

let numeros = 0;
for (let i = 0; i < 5; i++) {
    numeros = i;   
}
console.log(numeros);


//var | mutavel | Context Global
//let | mutavel | Contexto de Bloco
//const | imutavel | Contexto de bloco


const minhaInstancia = 'Nome';
//minhaInstancia = 'Novo nome';


//String
//Boolean
//Number
//Date
//Object != SObject

let st = 'Banana';
let bol = true;
let num = 1;
let num1 = 1.5;
let dt = new Date();

console.log(dt.getDate());
const obj = {};
console.log(obj);
obj.Nome = 'João';
obj.Idade = 19;
obj.Idiomas = [];

obj.Idiomas.push('Português');
obj.Idiomas.push('Inglês');
//obj.Idiomas.pop();
obj.Idiomas.unshift('Alemão');
//obj.Idiomas.shift();

// for (let i = 0; i < obj.Idiomas.length; i++) {
//    console.log(obj.Idiomas[i]);
    
// }

let contador = 0;
// while(contador < obj.Idiomas.length) {
//     console.log(obj.Idiomas[contador]);
//     if (contador > 0)
//         break;
//     contador++;
// }

do {
    console.log(obj.Idiomas[contador]);
    contador++;
} while(contador < 1)
console.log(obj);
console.log('----------');

obj.Idiomas.forEach(function(i) {
    console.log(i);
});

console.log('----------');
let js = JSON.stringify(obj);
console.log(js);

let obj2 = JSON.parse(js);
obj2.Sexo = 'Masculino';
console.log(obj2);