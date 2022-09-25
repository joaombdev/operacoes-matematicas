// Média aritmética
function media() {
    var qnt_num = parseInt(document.getElementById('qnt-num').value)
}

// Área do retângulo
function area_retangulo() {
    var lado = parseInt(document.getElementById('lado').value);
    var altura = parseInt(document.getElementById('altura-retangulo').value);

    let resultado = lado * altura;

    document.querySelector('.area-retangulo').innerHTML = resultado;
    console.log('Lado = ' + lado)
    console.log('Altura = ' + altura)
    console.log('A área do retângulo é: ' + resultado);
}

// Quatro operações
function calcular() {
    var num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)

    let soma = num1 + num2
    let menos = num1 - num2
    let mult = num1 * num2
    let divi = num1 / num2

    document.querySelector('#soma').innerHTML = num1 + ' + ' + num2 + ' = ' + soma
    document.querySelector('#menos').innerHTML = num1 + ' - ' + num2 + ' = ' + menos
    document.querySelector('#mult').innerHTML = num1 + ' × ' + num2 + ' = ' + mult
    document.querySelector('#divi').innerHTML = num1 + ' ÷ ' + num2 + ' = ' + divi

    console.log('Valor 1 = ' + num1)
    console.log('Valor 2 = ' + num2)
    console.log('Soma dos valores = ' + soma)
    console.log('Subtração dos valores =' + menos)
    console.log('Multiplicação dos valores = ' + mult)
    console.log('Divisão dos valores = ' + divi)
}

// Conversão de tempo
function horas() {
    const hora = parseInt(document.getElementById('hora').value)
    const min = parseInt(document.getElementById('min').value)
    const seg = parseInt(document.getElementById('seg').value)

    console.log('Quantidade de horas = ' + hora)
    console.log('Quantidade de minutos = ' + min)
    console.log('Quantidade de segundos = ' + seg)

    // let qnt_horas = hora
    let qnt_min = min / 60
    let qnt_seg = seg / 3600

    let resultado = hora + qnt_min + qnt_seg

    if (resultado < 2) {
        document.querySelector('.tempo').innerHTML = hora + 'h ' + min + 'min ' + seg + 'seg = ' + resultado + ' hora'
        console.log(hora + 'h ' + min + 'min ' + seg + 'seg = ' + resultado + ' hora')
    } else {
        document.querySelector('.tempo').innerHTML = hora + 'h ' + min + 'min ' + seg + 'seg = ' + resultado + 'horas'
        console.log(hora + 'h ' + min + 'min ' + seg + 'seg = ' + resultado + 'horas')
    }

    // document.querySelector('.aaa').innerHTML = hora + 'h ' + min + 'min ' + seg + 'seg = ' + resultado + 'horas'
    // document.querySelector('.aaa').innerHTML = hora + 'h ' + min + 'min ' + seg + 'seg = ' + hora + qnt_min + qnt_seg
}

function minutos() {
    const hora = parseInt(document.getElementById('hora').value)
    const min = parseInt(document.getElementById('min').value)
    const seg = parseInt(document.getElementById('seg').value)

    console.log('Quantidade de horas = ' + hora)
    console.log('Quantidade de minutos = ' + min)
    console.log('Quantidade de segundos = ' + seg)

    let qnt_horas = hora * 60
    // let qnt_min = min
    let qnt_seg = seg / 60

    let resultado = qnt_horas + min + qnt_seg

    if (resultado < 2) {
        document.querySelector('.tempo').innerHTML = hora + 'h ' + min + 'min ' + seg + 'seg = ' + resultado + ' minuto'
        console.log(hora + 'h ' + min + 'min ' + seg + 'seg = ' + resultado + ' minuto')
    } else {
        document.querySelector('.tempo').innerHTML = hora + 'h ' + min + 'min ' + seg + 'seg = ' + resultado + 'minutos'
        console.log(hora + 'h ' + min + 'min ' + seg + 'seg = ' + resultado + 'minutos')
    }
}

function segundos() {
    const hora = parseInt(document.getElementById('hora').value)
    const min = parseInt(document.getElementById('min').value)
    const seg = parseInt(document.getElementById('seg').value)

    console.log('Quantidade de horas = ' + hora)
    console.log('Quantidade de minutos = ' + min)
    console.log('Quantidade de segundos = ' + seg)

    let qnt_horas = hora * 60
    let qnt_min = min * 60
    // let qnt_seg = seg / 60

    let resultado = qnt_horas + qnt_min + seg

    if (resultado < 2) {
        document.querySelector('.tempo').innerHTML = hora + 'h ' + min + 'min ' + seg + 'seg = ' + resultado + ' segundo'
        console.log(hora + 'h ' + min + 'min ' + seg + 'seg = ' + resultado + ' segundo')
    } else {
        document.querySelector('.tempo').innerHTML = hora + 'h ' + min + 'min ' + seg + 'seg = ' + resultado + 'segnundos'
        console.log(hora + 'h ' + min + 'min ' + seg + 'seg = ' + resultado + 'segundos')
    }
}

// Calculo quadrado da soma de dois termos
function produtos() {
    let var_a = parseInt(document.getElementById('a').value)
    let var_b = parseInt(document.getElementById('b').value)

    console.log('Valor de "a" = ' + var_a)
    console.log('Valor de "b" = ' + var_b)

    // Quadrado de 'a', 'b'. a * b e soma dos valores
    let qda = var_a ** 2
    let qdb = var_b ** 2
    let ab = 2 * var_a * var_b
    let soma = qda + qdb + ab // soma dos valores

    document.querySelector('.produtos').innerHTML = 'Resposta = ' + soma
    console.log('O resultado da operação é ' + soma)
}