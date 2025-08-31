// Select the color palette dropdown and color preview elements
const paletteSelector = document.getElementById('palette');
const colorPreview = document.getElementById('color-preview');

// Define color palettes with their corresponding colors
const palettes = {
    palette1: '#1e1e1e', // Dark gray
    palette2: '#2e2e2e', // Medium gray
    palette3: '#3e3e3e', // Light gray
};

// Update the color preview based on the selected palette
function updatePreview() {
    const selectedPalette = paletteSelector.value;
    // Set the background color of the preview element based on the selected palette
    colorPreview.style.backgroundColor = palettes[selectedPalette];
}

// Listen for changes in the palette selector to update the preview
paletteSelector.addEventListener('change', updatePreview);
// Set initial preview based on the default selected palette
updatePreview();