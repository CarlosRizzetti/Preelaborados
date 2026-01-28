import { Masa } from "../JSON/MASA.js";
import { MasaDeChocolate } from "../JSON/MASA_DE_CHOCOLATE.js";
import { CuadraditosClase } from "./CuadraditosClase.js";
import { header, hojaImpresionContainer, inputCantidadMasa } from "./CONST.js";
import { mostrarRecetaDeMasa } from "./FUCIONES.js";
import { BudinClase } from "./BudinClase.js";
import { MasaClase } from "./MasaClase.js";




document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const sector = params.get("sector");
    header.innerHTML = `
    <button id="btn-inicio"><a href="index.html" target="_blank">Inicio</a></button>
    <section id="titulo-receta">Receta de ${sector}</section>
    <button id="btn-reinicio">Reiniciar</button> 
    <button onclick="window.print()" id="btnImprimir">Imprimir</button> `;
    const btnReiniciar = document.querySelectorAll("button")
    const btnInicio= document.getElementById("btn-inicio")
    
    if (sector === "Masa") {
        const masa = new MasaClase();
        masa.renderMasa();
        mostrarRecetaDeMasa(inputCantidadMasa);
    }
    if (sector === "Masa de chocolate") {
        const masa = new MasaClase();
        masa.renderMasaDeChocolate();
        mostrarRecetaDeMasa(inputCantidadMasa);
    }


    if (sector === "Cuadraditos") {
        const cuadraditos = new CuadraditosClase();
        cuadraditos.renderCuadraditos();

    }
        
    if (sector === "Budines") {
        const budin = new BudinClase();
        budin.renderBudines();
       
    }
    btnReiniciar.forEach(element => {
        element.addEventListener("click", (e) => {
            e.preventDefault();
            if (element.id === "btn-reinicio") {
                hojaImpresionContainer.innerHTML = '';
                limpiarinput(cantidadCuadraditos);
            }

        });
    });
    btnInicio.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "index.html";
    });
});

function botonReinicio(inputQueLimpiar) {
    if (inputQueLimpiar.length === 1) {
        mostrarRecetaDeMasa(inputQueLimpiar);
    } else {
        limpiarinput(inputQueLimpiar);
    }
}

function limpiarinput(inputs) {
    inputs.forEach(input => {
        input.value = '';
    });

}