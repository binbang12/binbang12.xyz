// Center piece script
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

document.getElementById("center").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}

// Background
var canvas = document.getElementById('background');
var context = canvas.getContext('2d');

// Initial canvas size
var W = window.innerWidth;
var H = window.innerHeight;
canvas.width = W;
canvas.height = H;

var str = 'binbang12';
var fontSize = 16;

// Calculate columns
var columns = Math.round(W / fontSize + 0.5);
var drops = [];
for (var i = 0; i < columns; i++) {
    drops.push(0);
}

// Draw function to animate the canvas
function draw() {
    context.fillStyle = "rgba(0, 0, 0, 0.05)";
    context.fillRect(0, 0, W, H);
    context.fontSize = "700 " + fontSize + "px";  // Your original font syntax
    context.fillStyle = "#00cc33";

    for (var i = 0; i < columns; i++) {
        var index = Math.floor(Math.random() * str.length);
        var x = i * fontSize;
        var y = drops[i] * fontSize;
        context.fillText(str[index], x, y);

        if (y >= canvas.height && Math.random() > 0.99) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

draw();
setInterval(draw, 35);

// Function to update canvas size and columns
function updateCanvasSize() {
    W = window.innerWidth;  // Update global width
    H = window.innerHeight; // Update global height

    canvas.width = W; // Set the width of the canvas to window width
    canvas.height = H; // Set the height of the canvas to window height

    columns = Math.round(W / fontSize + 0.5); // Recalculate columns based on new width
    drops = []; // Reset drops array

    for (var i = 0; i < columns; i++) {
        drops.push(0); // Initialize drops for each column
    }
}

// Listen for window resize to update canvas size and reset the animation
window.addEventListener('resize', function () {
    console.log("Here");
    updateCanvasSize();
    draw(); // Re-draw the animation after resizing
});