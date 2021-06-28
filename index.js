let globalWidth = 1000;
let globalHeight = 1000;

function setup() {
  createCanvas(globalWidth, globalHeight);
}

function drawGridCell(xStart, yStart, cellWidth, cellHeight) {
    rect(xStart, yStart, xStart + cellWidth, yStart + cellHeight);
}

function defineGrid(xSteps, ySteps, canvasWidth, canvasHeight) {
    let cellWidth = canvasWidth / xSteps;
    let cellHeight = canvasHeight / ySteps;

    console.log(cellHeight);
    // draw a row
    for (let i = 0; i <= xSteps; i++) {
        //console.log(i);
        drawGridCell(cellWidth * i, cellHeight, cellWidth, cellHeight);
    }
}

function draw() {
    background(230);
    //ellipse(50, 50, 80, 80);
    defineGrid(10, 10, globalWidth, globalHeight)
}