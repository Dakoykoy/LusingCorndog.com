const video = document.getElementById("video-background");


function calculateCircle() {
    const radius = parseFloat(document.getElementById("circleRadius").value);
    const diameter = 2 * radius;
    const area = Math.PI * Math.pow(radius, 2);
    const circumference = 2 * Math.PI * radius;

    document.getElementById("circleDiameter").textContent = diameter.toFixed(2);
    document.getElementById("circleArea").textContent = area.toFixed(2);
    document.getElementById("circleCircumference").textContent = circumference.toFixed(2);
}

function calculateRectangle() {
    const length = parseFloat(document.getElementById("rectLength").value);
    const width = parseFloat(document.getElementById("rectWidth").value);
    const area = length * width;
    const perimeter = 2 * (length + width);

    document.getElementById("rectArea").textContent = area.toFixed(2);
    document.getElementById("rectPerimeter").textContent = perimeter.toFixed(2);
}

function calculateSquare() {
  const side = parseFloat(document.getElementById("squareSide").value);
  const area = Math.pow(side, 2);
  const perimeter = 4 * side;

  document.getElementById("squareArea").textContent = area.toFixed(2);
  document.getElementById("squarePerimeter").textContent = perimeter.toFixed(2);
}
