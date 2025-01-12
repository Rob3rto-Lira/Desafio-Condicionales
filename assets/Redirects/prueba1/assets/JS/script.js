const gatos = document.querySelector('.gatos');
gatos.addEventListener('click', border);


function border() {
    if (gatos.style.border === 'none') {
        gatos.style.border = '2px solid red';
    } else {
        gatos.style.border = 'none';
    }
}