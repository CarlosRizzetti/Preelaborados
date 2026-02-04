import { Masa } from "../JSON/MASA.js";
import { MasaDeChocolate } from "../JSON/MASA_DE_CHOCOLATE.js";
import { hojaImpresionContainer } from "./CONST.js";
import { MASA_DE_PASCULINA } from "../JSON/MASA_PARA_PASCUALINAS.js";
import { MASA_DE_RAVIOLES } from "../JSON/MASA_PARA_PASTAS.js";

export class MasaClase {
    constructor() { }
    renderMasa() {
        Masa.forEach(ingrediente => {
            hojaImpresionContainer.innerHTML += `
                        <section class="receta-item">
                            <label>${ingrediente.nombre}</label> 
                            <p>${ingrediente.cantidad}</p>
                        </section>
                        `;
        });
    }
    renderMasaDeChocolate() {
        MasaDeChocolate.forEach(ingrediente => {
            hojaImpresionContainer.innerHTML += `
                <section class="receta-item">
                    <label>${ingrediente.nombre}</label> 
                    <p>${ingrediente.cantidad}</p>
                </section>
                `;
        });
    }
    renderMasaDePascualina() {
        MASA_DE_PASCULINA.forEach(ingrediente => {
            hojaImpresionContainer.innerHTML += `
                        <section class="receta-item">
                            <label>${ingrediente.nombre}</label> 
                            <p>${ingrediente.cantidad}</p>
                        </section>
                        `;
        });
    }
    renderMasaDeRavioles() {
        MASA_DE_RAVIOLES.forEach(ingrediente => {
            hojaImpresionContainer.innerHTML += `
                        <section class="receta-item">
                            <label>${ingrediente.nombre}</label> 
                            <p>${ingrediente.cantidad}</p>
                        </section>
                        `;
        });
    }
}

