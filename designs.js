// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
// Use input from height and width variables to make grid

    for (let i = 0; i <height.value; i++) {
		const row = pixelCanvas.insertRow(0);
		for (let j = 0; j < width.value; j++) {
			row.insertCell(0);
		}
	}
}

// Set variables
const form = document.getElementById('sizePicker');	
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const colorPicker = document.getElementById('colorPicker');
const pixelCanvas = document.getElementById('pixelCanvas');

// Add a max input size for the height and width of the grid
document.getElementById('inputHeight').setAttribute("max", 100);
document.getElementById('inputWidth').setAttribute("max", 100);


// Select size of grid by choosing width and height and submit button is pressed, call makeGrid();
// Also reset grid to blank state
form.addEventListener('submit', function(event) {
	pixelCanvas.innerHTML = '';
	event.preventDefault();
	makeGrid();
});

// Choose colour and add to grid in clicked location
pixelCanvas.addEventListener('click', function(event) {
	if (event.target.nodeName === 'TD') {
		event.target.style.backgroundColor = colorPicker.value;
	}
});
