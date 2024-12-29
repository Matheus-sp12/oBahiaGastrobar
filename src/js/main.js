// Variáveis para armazenar posição inicial e flag para o evento de rolagem
let isDown = false;
let startX;
let scrollLeft;

const scrollContainer = document.getElementById("scrollContainer");

// Evento de mouse down
scrollContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    scrollContainer.classList.add("active");
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
});

// Evento de mouse leave
scrollContainer.addEventListener("mouseleave", () => {
    isDown = false;
});

// Evento de mouse up
scrollContainer.addEventListener("mouseup", () => {
    isDown = false;
});

// Evento de mouse move
scrollContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2; // Velocidade do scroll
    scrollContainer.scrollLeft = scrollLeft - walk;
});