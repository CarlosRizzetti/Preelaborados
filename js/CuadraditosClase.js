import { recetas } from "../JSON/CUADRADITOS.js";
import { contenedorMain, hojaImpresionContainer } from "./CONST.js";

let cantidadCuadraditos;

export class CuadraditosClase {
    constructor() { }


    renderCuadraditos() {
        contenedorMain.innerHTML = '<section id="recetas-lista"></section>';
        const listaRecetas = document.getElementById("recetas-lista");
        recetas.forEach(receta => {
            listaRecetas.innerHTML += `
                    <section class="receta-cuadradito-item">
                        <div class="btn-receta-item">${receta.mercaderia}</div>
                        <input type="number" id="${receta.mercaderia}" placeholder="Cantidad ">
                    </section>
                        `;
        });
        contenedorMain.appendChild(hojaImpresionContainer);
        cantidadCuadraditos = document.querySelectorAll("input[type='number']");
        hojaImpresionContainer.innerHTML = '';
        cantidadCuadraditos.forEach(input => {
            input.addEventListener("change", (e) => {
                e.preventDefault();
                if (e.target.value === '') {
                    hojaImpresionContainer.innerHTML = '';
                    return;
                } if (e.target.value > 0) {
                    const cantidad = e.target.value;
                    const recetaElegida = recetas.find(receta => receta.mercaderia === e.target.id);
                    hojaImpresionContainer.innerHTML += `  
                                        <section class="descripcion-producto-item">
                                          <h3>RELLENO PARA CUADRADITOS DE ${e.target.id} </h3><p> ${e.target.value}Unid </p>
                                        </section> `;
                    recetaElegida.ingredientes.forEach(ingrediente => {
                        let ing = ingrediente.cantidad;
                        let total = Number(ing) * Number(cantidad);
                        hojaImpresionContainer.innerHTML += `  
                                                               
                                        <section class="receta-item">
                                           <label>${ingrediente.nombre}</label> 
                                           <p>${total.toFixed(2)}</p>
                                         </section>                
                                           `;
                    });
                }
            });
        });
    }
}    
