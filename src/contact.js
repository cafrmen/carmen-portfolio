const menuButton = document.getElementById('menu');
const divMenu = document.getElementById('div-menu');

function toggleButton() {
    divMenu.classList.toggle('show');
    if (menuButton.style.color != 'aliceblue') {
        menuButton.style.color = 'aliceblue';
    } else {
        menuButton.style.color = '#4C0033';
    }
}
menuButton.addEventListener('click', toggleButton);