// Get the dropdown selector element
const colorSelector = document.getElementById('colorSelector');

// Define the color combinations for each gradient option
const gradients = {
    gradient1: 'linear-gradient(to bottom right, #8360c3, #2ebf91)',
    gradient2: 'linear-gradient(to bottom right, #2c3e50, #4ca1af)',
    gradient3: 'linear-gradient(to bottom right, #649173, #dbd5a4)'
};

// Function to update the background gradient based on the selected value
function updateBackgroundGradient() {
    const selectedValue = colorSelector.value;
    document.body.style.background = gradients[selectedValue];
}

// Event listener to detect changes in the dropdown selection
colorSelector.addEventListener('change', updateBackgroundGradient);

// Call the updateBackgroundGradient function initially to set the default gradient
updateBackgroundGradient();
