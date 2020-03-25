var renderArea = document.getElementById('renderArea1');
var ctx = renderArea.getContext("2d");

function drawPixel(x, y) {
    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, 1, 1);
}

drawPixel(10, 10);
drawPixel(20, 20);
drawPixel(30, 30);
drawPixel(40, 40);
drawPixel(50, 50);