const contenedorMain = document.getElementById('contenedor-main');
const btn=document.querySelectorAll('button');

btn.forEach(button => { 
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (button.id === 'Pasteleria') {
            contenedorMain.innerHTML =  `
            <button id="recetas-container_Cuadraditos"><a href="hojaDeImpresion.html?sector=Cuadraditos" target="_blank">Cuadraditos</a></button></button>
            <button id="recetas-container_Budines"><a href="hojaDeImpresion.html?sector=Budines" target="_blank">Budines</a></button></button>
            <button id="recetas-container_Masa"><a href="hojaDeImpresion.html?sector=Masa" target="_blank">Masa</a></button>
            <button id="recetas-container_Masa de chocolate"><a href="hojaDeImpresion.html?sector=Masa de chocolate" target="_blank">Masa de chocolate</a></button></button>
            `;
        }
    });
});