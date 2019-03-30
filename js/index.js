// Funções da calculadora
function calcular(tipo, valor) {
  //tratamento caso seja digitado uma ação
  if (tipo === 'açao') {
    if ( valor === 'c' ) { //clear
      document.getElementById('resultado').value = ''
    }
    if ( valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.' ) { //adicionar um apos o outro
      document.getElementById('resultado').value += valor
    }
    if( valor === '=' ) {
      var valor_input = document.getElementById('resultado').value

      //verificando se o valor do campo não é 0, se for n precisa de operação alguma
      if(valor_input == '0' || valor_input == '') {
        document.getElementById('resultado').value = 0
      }
      // fazendo a operação
      else { 
        var valor_total = eval(document.getElementById('resultado').value)
        document.getElementById('resultado').value = valor_total
      }
    }
  }

  //tratamento caso seja digitado um numero. (basicamente adicionar um apos o outro).
  else if (tipo === 'valor') {
    document.getElementById('resultado').value +=  valor
  }
}

// Typed.JS
$(document).ready(function () {
  var bemVindo = new Typed('#ola', {
    strings: ['^1000 Olá! ^1000 sou uma simples calculadora em JavaScript!'],
    smartBackspace: true,
    typeSpeed: 60,
    backSpeed: 50,
    fadeOut: false,
    loop: false,
  });
})  