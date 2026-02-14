import { header }  from "./CONST.js";
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
            header.innerHTML +=`<button id="btn-reinicio"><a href="index.html">Inicio</a></button>`;
        }
        if (button.id === 'Pastas') {
            contenedorMain.innerHTML =  `
            <button id="recetas-container_Rellenos para pastas"><a href="hojaDeImpresion.html?sector=Rellenos para pastas" target="_blank">Rellenos para pastas</a></button></button>
            <button id="recetas-container_Masa_Ravioles"><a href="hojaDeImpresion.html?sector=Masa de Ravioles" target="_blank">Masa para ravioles</a></button>
            <button id="recetas-container_Masa_Pascualina"><a href="hojaDeImpresion.html?sector=Masa de Pascualina" target="_blank">Masa para pascualina</a></button>            
            `;
            header.innerHTML +=`<button id="btn-reinicio"><a href="index.html">Inicio</a></button>`;
        }
        if (button.id === 'Flanes') {
            contenedorMain.innerHTML =  `
            <button id="recetas-container_Flanes"><a href="hojaDeImpresion.html?sector=Flanes" target="_blank">Flanes</a></button>
            <button id="recetas-container_Gelatinas"><a href="hojaDeImpresion.html?sector=Gelatinas" target="_blank">Gelatinas</a></button>
            <button id="recetas-container_Postres"><a href="hojaDeImpresion.html?sector=Postres" target="_blank">Postres</a></button>
            <button id="recetas-container_Cremosos"><a href="hojaDeImpresion.html?sector=Cremosos" target="_blank">Cremosos</a></button>   
            `;
            header.innerHTML +=`<button id="btn-reinicio"><a href="index.html">Inicio</a></button>`;
        }
    });
});