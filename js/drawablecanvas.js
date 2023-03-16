/*
window.addEventListener('load', () =>{
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext('2d');

    //Resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //variables
    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e);
    }
    function endPosition() {
        painting = false;
        ctx.beginPath();
    }
    function draw(e) {
        if(!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = "round";

        ctx.lineTo(e.layerX - (this.offsetLeft + 0), e.layerY - (this.offsetTop + 0));
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.layerX - (this.offsetLeft + 0), e.layerY - (this.offsetTop + 0));
    }
    //EventListeners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);
});

document.getElementById('clear').onclick = function(){
    context.clearRect(0, 0, canvas.width, canvas.height);
};

document.querySelectorAll(".colorChange").forEach((e) => {
    e.onclick = function () {
        context.strokeStyle = e.style.backgroundColor;
    };
});
*/

const canvas = document.getElementById('drawing-board');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');

let canvasOffsetX = canvas.offsetLeft;
let canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let lineWidth = 5;
let startX;
let startY;

toolbar.addEventListener('click', e => {
    if (e.target.id === 'clear') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

toolbar.addEventListener('change', e => {
    if(e.target.id === 'stroke') {
        ctx.strokeStyle = e.target.value;
    }

    if(e.target.id === 'lineWidth') {
        lineWidth = e.target.value;
    }
    
});

const draw = (e) => {
    if(!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.beginPath(); // start a new path
    ctx.moveTo(startX, startY);
    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY - canvasOffsetY);
    ctx.stroke();

    startX = e.clientX - canvasOffsetX;
    startY = e.clientY - canvasOffsetY;
}

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX - canvasOffsetX;
    startY = e.clientY - canvasOffsetY;
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);

window.addEventListener('resize', () => {
    canvasOffsetX = canvas.offsetLeft;
    canvasOffsetY = canvas.offsetTop;
    canvas.width = window.innerWidth - canvasOffsetX;
    canvas.height = window.innerHeight - canvasOffsetY;
});