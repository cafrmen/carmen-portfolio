const menuButton = document.getElementById('menu');
const divMenu = document.getElementById('div-menu');

const titleText = document.querySelector('.stopShowing');
const granulatorText = document.querySelector('.granulator');
const nasaText = document.querySelector('.nasa');
const rotText = document.querySelector('.rot');
const calculatorText = document.querySelector('.calculator');
const granulatorButton = document.getElementById('theGranular');
const nasaButton = document.getElementById('theNasaPost');
const rotButton = document.getElementById('theRot');
const calculatorButton = document.getElementById('theCalculator');

const granulator = (e) => {
    e.preventDefault()
    titleText.classList.add('hide');
    granulatorText.classList.remove('hide');
    nasaText.classList.add('hide');
    rotText.classList.add('hide');
    calculatorText.classList.add('hide');
}
granulatorButton.addEventListener('pointerdown', granulator);

const nasa = (e) => {
    e.preventDefault();
    titleText.classList.add('hide');
    granulatorText.classList.add('hide');
    nasaText.classList.remove('hide');
    rotText.classList.add('hide');
    calculatorText.classList.add('hide');
}
nasaButton.addEventListener('pointerdown', nasa);

const rot = (e) => {
    e.preventDefault();
    titleText.classList.add('hide');
    granulatorText.classList.add('hide');
    nasaText.classList.add('hide');
    rotText.classList.remove('hide');
    calculatorText.classList.add('hide');
}
rotButton.addEventListener('pointerdown', rot);

const calculator = (e) => {
    e.preventDefault();
    titleText.classList.add('hide');
    granulatorText.classList.add('hide');
    nasaText.classList.add('hide');
    rotText.classList.add('hide');
    calculatorText.classList.remove('hide');
}
calculatorButton.addEventListener('pointerdown', calculator);

function toggleButton() {
    divMenu.classList.toggle('show');
    if (menuButton.style.color != 'white') {
        menuButton.style.color = 'white';
    } else {
        menuButton.style.color = '#1D5C63';
    }
}
menuButton.addEventListener('click', toggleButton);