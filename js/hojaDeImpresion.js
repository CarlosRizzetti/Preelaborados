import { Masa } from "../JSON/MASA.js";
import { MasaDeChocolate } from "../JSON/MASA_DE_CHOCOLATE.js";
import { CuadraditosClase } from "./CuadraditosClase.js";
import { header, hojaImpresionContainer, inputCantidadMasa } from "./CONST.js";
import { mostrarRecetaDeMasa } from "./FUCIONES.js";
import { BudinClase } from "./BudinClase.js";
import { MasaClase } from "./MasaClase.js";
import { MASA_DE_RAVIOLES } from "../JSON/MASA_PARA_PASTAS.js";
import { MASA_DE_PASCUALINA } from "../JSON/MASA_PARA_PASCUALINAS.js"; 
import { RellenoDeRavioles } from "./RellenoDeRavioles.js";  



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
        mostrarRecetaDeMasa(inputCantidadMasa, Masa);
    }
    if (sector === "Masa de chocolate") {
        const masa = new MasaClase();
        masa.renderMasaDeChocolate();
        mostrarRecetaDeMasa(inputCantidadMasa, MasaDeChocolate);
    }


    if (sector === "Cuadraditos") {
        const cuadraditos = new CuadraditosClase();
        cuadraditos.renderCuadraditos();

    }
        
    if (sector === "Budines") {
        const budin = new BudinClase();
        budin.renderBudines();
       
    }
    if (sector === "Masa de Ravioles") {
        const masa = new MasaClase();
        masa.renderMasaDeRavioles();
        mostrarRecetaDeMasa(inputCantidadMasa, MASA_DE_RAVIOLES);
    }
    if (sector === "Masa de Pascualina") {
        const masa = new MasaClase();
        masa.renderMasaDePascualina();
        mostrarRecetaDeMasa(inputCantidadMasa, MASA_DE_PASCUALINA);
    }
     if (sector === "Rellenos para pastas") {
        const relleno = new RellenoDeRavioles();
        relleno.renderRellenoDeRavioles();
    }
    btnReiniciar.forEach(element => {
        element.addEventListener("click", (e) => {
            e.preventDefault();
            if (element.id === "btn-reinicio") {
                location.reload();
            }

        });
    });
    btnInicio.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "index.html";
    });
});

