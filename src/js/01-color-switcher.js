const CHANGE_COLOR_DELAY = 1000;
let idInt = null;

const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
    body: document.body,
}

refs.btnStart.addEventListener('click', onBtnStartChangeColor);
refs.btnStop.addEventListener('click', onBtnStopChangeColor);

function onBtnStartChangeColor() {
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;
    idInt = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor()
    }, CHANGE_COLOR_DELAY);
}

function onBtnStopChangeColor() {
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
    clearInterval(idInt);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}