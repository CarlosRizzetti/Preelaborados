import { contenedorMain, hojaImpresionContainer } from "./CONST.js";
import { rellenosParaPastas } from "../JSON/RELLENO_PARA_PASTAS.js";

let cantidadRavioles;
export class RellenoDeRavioles {
    constructor() { }
    renderRellenoDeRavioles() {
        contenedorMain.innerHTML = '<section id="recetas-lista"></section>';
        const listaRecetas = document.getElementById("recetas-lista");
        rellenosParaPastas.forEach(receta => {
            listaRecetas.innerHTML += `
                            <section class="receta-cuadradito-item">
                                <div class="btn-receta-item">${receta.mercaderia}</div>
                                <input type="number" id="${receta.mercaderia}" placeholder="Cantidad ">
                            </section>
                                `;
        });
        contenedorMain.appendChild(hojaImpresionContainer);
        cantidadRavioles = document.querySelectorAll("input[type='number']");
        hojaImpresionContainer.innerHTML = '';
        cantidadRavioles.forEach(input => {
            input.addEventListener("change", (e) => {
                e.preventDefault();
                if (e.target.value === '') {
                    hojaImpresionContainer.innerHTML = '';
                    return;
                } if (e.target.value > 0) {
                    const cantidad = e.target.value;
                    const recetaElegida = rellenosParaPastas.find(receta => receta.mercaderia === e.target.id);
                    let rehogo = recetaElegida.rehogo;
                    let verduras = recetaElegida.verduras;
                    hojaImpresionContainer.innerHTML += `  
                                                <section class="descripcion-producto-item">
                                                  <h3>Relleno para ravioles de ${e.target.id} </h3><p>Bruto</p><p>Limpio</p><p>Cocido</p>
                                                </section> `;
                    recetaElegida.ingredientes.forEach(ingrediente => {
                        let bruto = ingrediente.bruto;
                        let limpio = ingrediente.limpio;
                        let cocido = ingrediente.cocido;
                        let total = Number(bruto) * Number(cantidad);
                        hojaImpresionContainer.innerHTML += `                                                                      
                                                <section class="receta-item">
                                                   <label>${ingrediente.nombre}</label> 
                                                   <p>${total.toFixed(2)}</p>
                                                    <p>${(total - (total * ingrediente.limpio)).toFixed(2)}</p>
                                                    <p>${(total * ingrediente.cocido).toFixed(2)}</p>
                                                 </section>                
                                                   `;
                    });
                    if (rehogo) {
                        hojaImpresionContainer.innerHTML += `  
                                        <section class="descripcion-producto-item">
                                          <h3 class="titulo-crumble">Rehogo </h3> <p>Bruto</p><p>Limpio</p><p>Cocido</p>
                                        </section> `;
                        rehogo.forEach(ingrediente => {
                            let bruto = ingrediente.bruto;
                            let limpio = ingrediente.limpio;
                            let cocido = ingrediente.cocido;
                            let total = Number(bruto) * Number(cantidad);
                            hojaImpresionContainer.innerHTML += `                                                                      
                                                    <section class="receta-item">
                                                       <label>${ingrediente.nombre}</label> 
                                                       <p>${total.toFixed(2)}</p>
                                                        <p>${(total - (total * ingrediente.limpio)).toFixed(2)}</p>
                                                        <p>${(total * ingrediente.cocido).toFixed(2)}</p>
                                                     </section>                
                                                       `;
                        });
                    }
                    if (verduras) {
                        hojaImpresionContainer.innerHTML += `  
                                        <section class="descripcion-producto-item">
                                          <h3 class="titulo-crumble">Verduras cocidas </h3> <p>Bruto</p><p>Limpio</p><p>Cocido</p>
                                        </section> `;
                        verduras.forEach(ingrediente => {
                            let bruto = ingrediente.bruto;
                            let limpio = ingrediente.limpio;
                            let cocido = ingrediente.cocido;
                            let total = Number(bruto) * Number(cantidad);
                            hojaImpresionContainer.innerHTML += `                                                                      
                                                    <section class="receta-item">
                                                       <label>${ingrediente.nombre}</label> 
                                                       <p>${total.toFixed(2)}</p>
                                                        <p>${(total - (total * ingrediente.limpio)).toFixed(2)}</p>
                                                        <p>${(total * ingrediente.cocido).toFixed(2)}</p>
                                                     </section>                
                                                       `;
                        });

                    }
                }
            });
        });
    }
}