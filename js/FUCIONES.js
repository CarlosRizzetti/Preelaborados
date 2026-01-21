import { Masa } from "../JSON/MASA.js";
import { hojaImpresionContainer } from "./CONST.js";

export function mostrarRecetaDeMasa(cantidad) {
    cantidad.addEventListener("input", (e) => {
        e.preventDefault();        
        hojaImpresionContainer.innerHTML = `
        <section class="descripcion-producto-item">
           <label>Cantidad de masa </label><p> ${e.target.value} Kilos</p>
        </section>`;
        Masa.forEach(ingrediente => {
            const cantidad = e.target.value;
            let ing = ingrediente.cantidad;
            let total = Number(ing) * Number(cantidad);
            hojaImpresionContainer.innerHTML += `
                    <section class="receta-item">
                        <label>${ingrediente.nombre}</label> 
                        <p>${total.toFixed(2)}</p>
                    </section>` ;
        });
    });
}
