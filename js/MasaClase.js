import { Masa } from "../JSON/MASA.js";
import { MasaDeChocolate } from "../JSON/MASA_DE_CHOCOLATE.js";
import { hojaImpresionContainer } from "./CONST.js";

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
}

