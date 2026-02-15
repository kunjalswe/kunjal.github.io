const button = document.getElementById('certificateBtn');
const image = document.getElementById('certificateImg');

// Hide the certificate initially
image.style.display = 'none';

// Show image when button is clicked
button.onclick = function() {
    image.style.display = 'block';
    image.scrollIntoView({ behavior: 'smooth' });
};