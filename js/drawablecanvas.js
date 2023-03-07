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