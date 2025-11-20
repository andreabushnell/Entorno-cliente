document.addEventListener("mousemove" , (event) =>{
    document.getElementById('pos-raton').innerHTML = `X: ${event.clientX} Y:${event.clientY}`;
});