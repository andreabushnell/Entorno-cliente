var intervalo;

document.getElementById("comenzar").addEventListener("click", () => {
    intervalo = setInterval(() => {
        alert("Hola");
    }, 3000);
});
document.getElementById("parar").addEventListener("click", () => {
    clearInterval(intervalo);
});
