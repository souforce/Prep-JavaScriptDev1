//Object, Functions e Classes
//--------------------
//Functions
//--------------------
var func = function() { 
    console.log('olá mundo!');
}
func();

var func2 = function namedFunction() {
    console.log('Sou uma funcao nomeda');
}

func2();

(function() {
console.log('Auto executar');
})();

//--------------------
//Class
//--------------------
class myClass {
    minhaPropriedade = 'Sou uma propriedade';

    //function
    novaFunction() { 
        return this.minhaPropriedade;       
    }

    //Getter
    get propriedade() {
        return this.minhaPropriedade;
    }
}

var minhaInstancia = new myClass();
console.log(minhaInstancia.novaFunction());
console.log(minhaInstancia.propriedade);

///Class
class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    getArea() {
        return this.largura * this.altura;
    }
}

var myRec = new Retangulo(2, 2);
console.log(myRec.getArea());

class RetanguloBoladao extends Retangulo {
    
    constructor(largura, altura) {
        super(largura * 2, altura * 2);
        this.propriedade = largura * altura;
    }

    get area() {
        return this.getArea();
    }
}

//--------------------
//Objetos
//--------------------
var myRecBoladao = new RetanguloBoladao(5, 5);
console.log(myRecBoladao.area);

//Prototype
RetanguloBoladao.prototype.metadeDaArea = function() {
    return (this.largura / 2) * (this.altura / 2);
}

var recBoladao = new RetanguloBoladao(5, 5);
console.log(recBoladao.metadeDaArea());

console.log(Object.keys(recBoladao));
console.log(Object.values(recBoladao));

var props = Object.keys(recBoladao);
for (let i = 0; i < props.length; i++) {
    console.log(recBoladao[props[i]]);
}
console.log(recBoladao.largura);
console.log(recBoladao['largura']);

console.log(typeof recBoladao);

var meuJson = {};
meuJson.nome = 'Fernando';
meuJson.idade = 25;

console.log(typeof meuJson);
console.log(meuJson);


recBoladao.nome = 'Arthur';
recBoladao.idade = 23;
console.log(recBoladao);

var novoBoladao = Object.assign({}, recBoladao);
console.log(novoBoladao);

var meuJsonClone = Object.assign({}, meuJson);
meuJsonClone.nome = 'Clone';
console.log(meuJsonClone);