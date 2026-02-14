
import { flanesReceta } from "../JSON/FLANES.js";
import { contenedorMain, hojaImpresionContainer } from "./CONST.js";
export class Flanes {
    constructor() { }

    renderFlanes(postres) {
        contenedorMain.innerHTML = '<section id="recetas-lista"></section>';
        const listaRecetas = document.getElementById("recetas-lista");
        postres.forEach(postre => {
            listaRecetas.innerHTML += `
                    <section class="receta-${postre.nombre}-item">
                        <div class="btn-receta-item">${postre.nombre}</div>
                        <input type="number" id="${postre.nombre}" placeholder="Cantidad ">
                    </section>
                        `;
        });
        contenedorMain.appendChild(hojaImpresionContainer);
        const cantidadPostres = document.querySelectorAll("input[type='number']");
        hojaImpresionContainer.innerHTML = '';
        cantidadPostres.forEach(input => {
            input.addEventListener("change", (e) => {
                e.preventDefault();
                if (e.target.value === '') {
                    hojaImpresionContainer.innerHTML = '';
                    return;
                } if (e.target.value > 0) {
                    const cantidad = e.target.value;
                    const recetaElegida = postres.find(flan => flan.nombre === e.target.id);
                    hojaImpresionContainer.innerHTML += `  
                                        <section class="descripcion-producto-item">
                                          <h3>${e.target.id} </h3><h2>Cantidad</h2>
                                        </section> `;
                    recetaElegida.ingredientes.forEach(ingrediente => {
                        let total = Number(ingrediente.cantidad) * Number(cantidad);
                        hojaImpresionContainer.innerHTML += ` <section class="receta-item">
                                                    <label>${ingrediente.articulo}</label>
                                                    <p>${total.toFixed(2)}</p>
                                                 </section>                
                                           `;
                    });
                }
            });
        });
    }
}