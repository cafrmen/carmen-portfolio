const menuButton = document.getElementById('menu');
const divMenu = document.getElementById('div-menu');

function toggleButton() {
    divMenu.classList.toggle('show');
    if (menuButton.style.color != 'white') {
        menuButton.style.color = 'white';
    } else {
        menuButton.style.color = '#425F57';
    }
}
menuButton.addEventListener('click', toggleButton);