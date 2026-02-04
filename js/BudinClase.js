import { budines } from "../JSON/BUDINES.js";
import { contenedorMain, hojaImpresionContainer } from "./CONST.js";

let cantidadCuadraditos;

export class BudinClase {
    constructor() { }
    renderBudines() {

        contenedorMain.innerHTML = '<section id="recetas-lista"></section>';
        const listaRecetas = document.getElementById("recetas-lista");
        budines.forEach(receta => {
            listaRecetas.innerHTML += `
            <section class="receta-budin-item">
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
                    const recetaElegida = budines.find(receta => receta.mercaderia === e.target.id);
                    const crumble = recetaElegida.crumble;
                    const agregados=recetaElegida.agregados
                    const mermelada=recetaElegida.mermelada                     
                    hojaImpresionContainer.innerHTML += `  
                                <section class="descripcion-producto-item">
                                  <h3>Receta para ${e.target.id} </h3> <p> ${e.target.value}Budines </p>
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
                    if (crumble) {
                        hojaImpresionContainer.innerHTML += `  
                                <section class="descripcion-producto-item">
                                  <h3 class="titulo-crumble">Crumble para ${e.target.id} </h3> 
                                </section> `;
                        crumble.forEach(ingrediente => {
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
                    if(agregados){
                         hojaImpresionContainer.innerHTML += `  
                                <section class="descripcion-producto-item">
                                  <h3 class="titulo-agregados">Agregados para budines ${e.target.id} </h3> 
                                </section> `;
                        agregados.forEach(ingrediente => {
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
                    if (mermelada){
                         hojaImpresionContainer.innerHTML += `  
                                <section class="descripcion-producto-item">
                                  <h3 class="titulo-mermelada">Mermelada de frutos rojos ${e.target.id} </h3> 
                                </section> `;
                        mermelada.forEach(ingrediente => {
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
                }
            });
        });
    }
}