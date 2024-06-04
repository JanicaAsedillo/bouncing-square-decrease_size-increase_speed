const square = document.getElementById('square');
const container = document.getElementById('container');

let positionX = 0;
let positionY = 0;
let velocityX = 2;
let velocityY = 2;
let size = 50; // Initial size
let speedIncrement = 1; // Speed increment when clicked
let sizeDecrement = 5; // Size decrement when clicked

let animationFrameId;

function update() {
    positionX += velocityX;
    positionY += velocityY;

    // Check for collisions with the container boundaries
    if (positionX + square.clientWidth > container.clientWidth || positionX < 0) {
        velocityX = -velocityX;
    }
    if (positionY + square.clientHeight > container.clientHeight || positionY < 0) {
        velocityY = -velocityY;
    }

    // Apply the new position
    square.style.left = positionX + 'px';
    square.style.top = positionY + 'px';

    // Continue the animation
    animationFrameId = requestAnimationFrame(update);
}

function startBouncing() {
    // Reset the initial position and velocity
    positionX = Math.random() * (container.clientWidth - size);
    positionY = Math.random() * (container.clientHeight - size);
    velocityX += Math.sign(velocityX) * speedIncrement;
    velocityY += Math.sign(velocityY) * speedIncrement;

    // Decrease the size of the square
    size -= sizeDecrement;
    if (size < 10) size = 10; // Prevent the square from becoming too small
    square.style.width = size + 'px';
    square.style.height = size + 'px';

    // Ensure no previous animation is running
    cancelAnimationFrame(animationFrameId);

    // Start the animation
    update();
}

// Add event listener to start the bouncing on click
square.addEventListener('click', startBouncing);

// Initialize the position
square.style.left = positionX + 'px';
square.style.top = positionY + 'px';
