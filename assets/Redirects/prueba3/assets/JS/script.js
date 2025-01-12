number1 = document.getElementById('number1');
number2 = document.getElementById('number2');
number3 = document.getElementById('number3');
ingresar = document.getElementById('ingresar');
resultado = document.getElementById('resultado');

ingresar.addEventListener('click', revisar);

function revisar() {
    if (number1.value + number2.value + number3.value === '911') {
        resultado.innerHTML = 'Password 1 correcto.';
    } else if (number1.value + number2.value + number3.value === '714') {
        resultado.innerHTML = 'Password 2 correcto.';
    } else {
        resultado.innerHTML = 'Password incorrecto.';
    }
}