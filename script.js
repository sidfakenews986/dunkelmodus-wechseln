const paletteSelector = document.getElementById('palette');
const colorPreview = document.getElementById('color-preview');

const palettes = {
    palette1: '#1e1e1e',
    palette2: '#2e2e2e',
    palette3: '#3e3e3e',
};

function updatePreview() {
    const selectedPalette = paletteSelector.value;
    colorPreview.style.backgroundColor = palettes[selectedPalette];
}

paletteSelector.addEventListener('change', updatePreview);
// Set initial preview
updatePreview();