// Dark mode toggle
function toggleMode() {
    const body = document.body;

    if (body.style.backgroundColor === "white") {
        body.style.backgroundColor = "#0f172a";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
}

// Show alert when page loads
window.onload = function () {
    console.log("Welcome to Mujtaba's Portfolio ");
};
