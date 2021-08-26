const container = document.querySelector(`.container`);
const reset = document.querySelector(`.reset`);
let size = 1;

ResetButton();
createGrid();

function sizePrompt(){
    size = parseInt(prompt(`Grid Size (1 - 50):`, `20`));
    if(size >= 50) size = 50; 
}

function createGrid(){
    sizePrompt();
    let square = ``;
    for(i = 0; i < (size*size); i++){
        square = document.createElement(`div`);
        square.classList.add(`square`);
        container.appendChild(square);
    }
    gridLayout();
}

function gridLayout(){
    let squareStyle = Array.from(document.querySelectorAll(`.square`));
    squareStyle.forEach(element => {
        element.style.backgroundColor = `black`;
        element.style.height = `calc(600px/${size})`;
        element.style.width = `calc(600px/${size})`;
    });
    container.style.display = `flex`;
    container.style.flexWrap = `wrap`;
    addEvents();
}

function addEvents(){
    let squareEvents = Array.from( document.querySelectorAll(`.square`));
    squareEvents.forEach(listeners => {
        listeners.addEventListener(`mouseover`, addcolor);
    });
}

function addcolor(){
    let colorGenerator = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = `#` + colorGenerator;
}

function ResetButton(){
    reset.style.height = `20px`;
    reset.style.width = `60px`;
    reset.style.border = `1px solid white`;
    reset.textContent = `Reset`;
    reset.style.display = `flex`;
    reset.style.alignContent = `center`;
    reset.style.justifyContent = `center`;
    reset.style.margin = `10px 0 10px`;
    reset.style.cursor = `pointer`;
    reset.addEventListener(`click`, clearBoard);
}

function clearBoard(){
    let clear = Array.from(document.querySelectorAll(`.square`));
    clear.forEach(wipe => wipe.remove());
    createGrid();
}