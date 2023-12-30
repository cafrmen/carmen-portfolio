const menuButton = document.getElementById('menu');
const divMenu = document.getElementById('div-menu');

const titleText = document.querySelector('.stopShowing');
const granulatorText = document.querySelector('.granulator');
const nasaText = document.querySelector('.nasa');
const rotText = document.querySelector('.rot');
const artistText = document.querySelector('.artist');
const granulatorButton = document.getElementById('theGranular');
const nasaButton = document.getElementById('theNasaPost');
const rotButton = document.getElementById('theRot');
const artistButton = document.getElementById('theArtist');

const granulator = (e) => {
    e.preventDefault()
    titleText.classList.add('hide');
    granulatorText.classList.remove('hide');
    nasaText.classList.add('hide');
    rotText.classList.add('hide');
    artistText.classList.add('hide');
}
granulatorButton.addEventListener('pointerdown', granulator);

const nasa = (e) => {
    e.preventDefault();
    titleText.classList.add('hide');
    granulatorText.classList.add('hide');
    nasaText.classList.remove('hide');
    rotText.classList.add('hide');
    artistText.classList.add('hide');
}
nasaButton.addEventListener('pointerdown', nasa);

const rot = (e) => {
    e.preventDefault();
    titleText.classList.add('hide');
    granulatorText.classList.add('hide');
    nasaText.classList.add('hide');
    rotText.classList.remove('hide');
    artistText.classList.add('hide');
}
rotButton.addEventListener('pointerdown', rot);

const artist = (e) => {
    e.preventDefault();
    titleText.classList.add('hide');
    granulatorText.classList.add('hide');
    nasaText.classList.add('hide');
    rotText.classList.add('hide');
    artistText.classList.remove('hide');
}
artistButton.addEventListener('pointerdown', artist);

function toggleButton() {
    divMenu.classList.toggle('show');
    if (menuButton.style.color != 'aliceblue') {
        menuButton.style.color = 'aliceblue';
    } else {
        menuButton.style.color = '#1D5C63';
    }
}
menuButton.addEventListener('click', toggleButton);