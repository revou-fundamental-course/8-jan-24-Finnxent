function calculate() {
    var sideLength = parseFloat(document.getElementById('sideLength').value);
    var area = sideLength * sideLength;
    var perimeter = 4 * sideLength;

    document.getElementById('resultArea').value = area.toFixed(2);
    document.getElementById('resultPerimeter').value = perimeter.toFixed(2);
}

function reset() {
    document.getElementById('sideLength').value = '';
    document.getElementById('resultArea').value = '';
    document.getElementById('resultPerimeter').value = '';
}