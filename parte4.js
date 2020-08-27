//try catch
var data ;

window.console.log('passei aqui');
try {
    //throw "Texto";
    //throw 123;
    //throw new UserExeption("Mensagem customizada de erro");
    if (data.age > 10) {
        showConsole();
    } 
} catch(ex) {
    //alert('Ops! Parece que temos um erro no sistema.');
    window.console.error(ex);
    window.console.info('Informativo');
    window.console.warn('Informativo');
} finally {
    //alert('Olá mundo!');
}

function showConsole() {
    window.console.log('Sou maior que 10');
}

function UserExeption(message) {
    this.message = message;
    this.name = 'UserExeption';
}