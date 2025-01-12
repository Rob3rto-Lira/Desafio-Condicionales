sticker1 = document.getElementById('stickers1');
sticker2 = document.getElementById('stickers2');
sticker3 = document.getElementById('stickers3');
confirm = document.getElementById('confirm');
respuesta = document.getElementById('respuesta');

confirm.addEventListener('click', result);

function result() {
    if (Number(sticker1.value) + Number(sticker2.value) + Number(sticker3.value) > 10) {
        respuesta.innerHTML = 'Llevas demasiado stickers!';
    } else {
        respuesta.innerHTML = `Llevas ${Number(sticker1.value) + Number(sticker2.value) + Number(sticker3.value)} stickers`
    }
}
