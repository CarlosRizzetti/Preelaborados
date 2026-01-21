import { Masa } from "../JSON/MASA.js";
import { MasaDeChocolate } from "../JSON/MASA_DE_CHOCOLATE.js";
import { CuadraditosClase } from "./CuadraditosClase.js";
import { header, hojaImpresionContainer, inputCantidadMasa, contenedorMain } from "./CONST.js";
import { mostrarRecetaDeMasa } from "./FUCIONES.js";
import { BudinClase } from "./BudinClase.js";
import { MasaClase } from "./MasaClase.js";




document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const sector = params.get("sector");
    header.innerHTML = `<section id="titulo-receta">Receta de ${sector}</section>
    <button id="btn-reinicio">Reiniciar</button> 
    <button onclick="window.print()" id="btnImprimir">Imprimir</button> `;
    const btnReiniciar = document.querySelectorAll("button")
    console.log(btnReiniciar);

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