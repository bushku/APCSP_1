// Get a reference to the animation container element
const container = document.getElementById('animation-container');

// Define an array of image paths or filenames
const imagePaths = [
  'path/to/dog1.png',
  'path/to/dog2.png',
  'path/to/dog3.png',
  // Add more image paths as needed
];

// Set the animation duration and interval
const animationDuration = 1000; // in milliseconds
const frameInterval = 100; // in milliseconds

// Define variables for tracking the current frame and animation start time
let currentFrame = 0;
let startTime = null;

// Function to update the displayed image
function updateImage() {
  // Calculate the elapsed time since the animation started
  const elapsedTime = Date.now() - startTime;

  // Calculate the index of the current frame based on the elapsed time and frame interval
  currentFrame = Math.floor(elapsedTime / frameInterval) % imagePaths.length;

  // Set the image source to the current frame's path
  container.style.backgroundImage = `url(${imagePaths[currentFrame]})`;

  // Call the updateImage function again after the frame interval
  requestAnimationFrame(updateImage);
}

// Function to start the animation
function startAnimation() {
  // Set the animation start time to the current time
  startTime = Date.now();

  // Start the animation loop
  updateImage();
}

// Call the startAnimation function to begin the animation
startAnimation();
