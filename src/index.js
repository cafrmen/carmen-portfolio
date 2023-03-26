const menuButton = document.getElementById('menu');
const divMenu = document.getElementById('div-menu');

function toggleButton() {
    divMenu.classList.toggle('show');
}

menuButton.addEventListener('click', toggleButton);

// The JS magic for the menu