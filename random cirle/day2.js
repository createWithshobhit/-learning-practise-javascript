const btn = document.getElementById('btn'); // Get the button element
let clickCount = 0; // Initialize click counter

// Apply initial button styles
btn.style.backgroundColor = '#3498db';
btn.style.color = 'white';
btn.style.padding = '15px 30px';
btn.style.fontSize = '16px';
btn.style.border = 'none';
btn.style.borderRadius = '50px';
btn.style.cursor = 'pointer';
btn.style.outline = 'none';
btn.style.transition = 'transform 0.3s ease, background-color 0.3s ease';

// Add hover and active effects via JavaScript
btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = '#2980b9';
    btn.style.transform = 'scale(1.1)';
});

btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = '#3498db';
    btn.style.transform = 'scale(1)';
});

btn.addEventListener('mousedown', () => {
    btn.style.backgroundColor = '#1c598a';
    btn.style.transform = 'scale(0.95)';
});

btn.addEventListener('mouseup', () => {
    btn.style.backgroundColor = '#2980b9';
    btn.style.transform = 'scale(1.1)';
});

// Array of predefined colors
const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5', '#F5FF33', '#FF33A1',
    '#FF8C00', '#8A2BE2', '#5F9EA0', '#D2691E', '#FF4500', '#DA70D6', '#32CD32',
    '#8B4513', '#2E8B57', '#6A5ACD', '#FF1493', '#00BFFF', '#20B2AA',
    '#FFD700', '#ADFF2F', '#FF69B4', '#FF6347', '#00FA9A', '#4B0082', '#FF1493',
    '#00FF7F', '#8A2BE2', '#DAA520', '#7FFF00', '#D2691E', '#FF7F50', '#6495ED',
    '#DC143C', '#F0E68C', '#D8BFD8', '#00FFFF', '#FFDAB9', '#FF4500', '#F5F5F5',
    '#B22222', '#228B22', '#FF00FF', '#FFB6C1', '#7CFC00'
];


// Helper function to get a random color from the array
function getRandomColorFromArray() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Event listener for button clicks to create and style circles
btn.addEventListener('click', () => {
    clickCount++; // Increment click counter

    const circle = document.createElement('div');

    // Generate random width and height between 50px and 300px
    const randomSize = Math.floor(Math.random() * 251) + 50; // Random number between 50 and 300

    circle.style.width = `${randomSize}px`;
    circle.style.height = `${randomSize}px`;
    circle.style.borderRadius = '50%';
    circle.style.backgroundColor = getRandomColorFromArray(); // Set a random color from the array
    circle.style.position = 'absolute';
    circle.style.left = `${Math.random() * 100}%`; // Random left position
    circle.style.top = `${Math.random() * 100}%`;  // Random top position
    circle.style.transform = 'translate(-50%, -50%)'; // Center the circle relative to its position

    // Add animation to the circle
    circle.style.transition = 'opacity 0.5s ease';
    circle.style.opacity = '0';
    setTimeout(() => {
        circle.style.opacity = '1';
    }, 10);

    document.body.appendChild(circle); // Append the circle to the body

    // Check if it's the third click
    if (clickCount ===5) {
        // Reset functionality
        clickCount = 0; // Reset click counter
        // Remove all circles
        const circles = document.querySelectorAll('div');
        circles.forEach(c => document.body.removeChild(c));
    }
});
