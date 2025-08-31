// Select the color palette dropdown and color preview elements
const paletteSelector = document.getElementById('palette');
const colorPreview = document.getElementById('color-preview');

// Define color palettes
const palettes = {
    palette1: '#1e1e1e', // Dark gray
    palette2: '#2e2e2e', // Medium gray
    palette3: '#3e3e3e', // Light gray
};

// Update the color preview based on the selected palette
function updatePreview() {
    const selectedPalette = paletteSelector.value;
    colorPreview.style.backgroundColor = palettes[selectedPalette];
}

// Listen for changes in the palette selector
paletteSelector.addEventListener('change', updatePreview);
// Set initial preview
updatePreview();