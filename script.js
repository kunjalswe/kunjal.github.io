const btn = document.getElementById("certificateBtn");
const img = document.getElementById("certificateImg");
const statusText = document.getElementById("statusText");

let visible = false;

// Toggle certificate
btn.addEventListener("click", () => {
    visible = !visible;

    if (visible) {
        img.classList.add("show");
        btn.textContent = "Hide Certificate";
        statusText.textContent = "Certificate loaded successfully ✅";
    } else {
        img.classList.remove("show");
        btn.textContent = "View My Certificate";
        statusText.textContent = "Certificate hidden";
    }

    createRipple(btn);
});

// Ripple effect
function createRipple(element) {
    const ripple = document.createElement("span");

    ripple.style.position = "absolute";
    ripple.style.width = ripple.style.height = "180px";
    ripple.style.background = "rgba(255,255,255,0.25)";
    ripple.style.borderRadius = "50%";
    ripple.style.left = "50%";
    ripple.style.top = "50%";
    ripple.style.transform = "translate(-50%, -50%) scale(0)";
    ripple.style.pointerEvents = "none";
    ripple.style.animation = "ripple 0.6s ease-out";

    element.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
}

// Add ripple animation dynamically
const style = document.createElement("style");
style.innerHTML = `
@keyframes ripple {
    to {
        transform: translate(-50%, -50%) scale(2.8);
        opacity: 0;
    }
}`;
document.head.appendChild(style);

// Welcome message
window.addEventListener("load", () => {
    statusText.textContent = "Welcome to my portfolio ✨";
});
