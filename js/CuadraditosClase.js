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
                        <div class="btn-receta-item">${receta.Mercaderia}</div>
                        <input type="number" id="${receta.Mercaderia}" placeholder="Cantidad ">
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
                    const recetaElegida = recetas.find(receta => receta.Mercaderia === e.target.id);
                    const crumble = recetaElegida.Crumble
                    const pastelera = recetaElegida.Pastelera
                    hojaImpresionContainer.innerHTML += `  
                                        <section class="descripcion-producto-item">
                                          <h3>Relleno de cuadraditos de ${e.target.id} </h3><p>Bruto</p><p>Limpio</p><p>Cocido</p>
                                        </section> `;
                    recetaElegida.Ingredientes.forEach(ingrediente => {
                        let bruto = ingrediente.bruto;
                        let limpio = ingrediente.limpio;
                        let cocido = ingrediente.cocido;
                        let total = Number(bruto) * Number(cantidad);
                        hojaImpresionContainer.innerHTML += ` <section class="receta-item">
                                                   <label>${ingrediente.nombre}</label> 
                                                   <p>${total.toFixed(2)}</p>
                                                    <p>${(total - (total * ingrediente.limpio)).toFixed(2)}</p>
                                                    <p>${(total * ingrediente.cocido).toFixed(2)}</p>
                                                 </section>                
                                           `;
                    });
                    if(crumble){
                        hojaImpresionContainer.innerHTML += `  
                                        <section class="descripcion-producto-item">
                                          <h3>Crumble de cuadraditos de ${e.target.id} </h3><p>Bruto</p><p>Limpio</p><p>Cocido</p>
                                        </section> `;
                        crumble.forEach(ingrediente => {
                            let bruto = ingrediente.bruto;
                            let limpio = ingrediente.limpio;
                            let cocido = ingrediente.cocido;
                            let total = Number(bruto) * Number(cantidad);
                            hojaImpresionContainer.innerHTML += ` <section class="receta-item">
                                                       <label>${ingrediente.nombre}</label> 
                                                       <p>${total.toFixed(2)}</p>
                                                        <p>${(total - (total * ingrediente.limpio)).toFixed(2)}</p>
                                                        <p>${(total * ingrediente.cocido).toFixed(2)}</p>
                                                     </section>                
                                               `;
                        });
                    }
                    if(pastelera){
                        hojaImpresionContainer.innerHTML += `  
                                        <section class="descripcion-producto-item">
                                          <h3>Pastelera de cuadraditos de ${e.target.id} </h3><p>Bruto</p><p>Limpio</p><p>Cocido</p>
                                        </section> `;
                        pastelera.forEach(ingrediente => {
                            let bruto = ingrediente.bruto;
                            let limpio = ingrediente.limpio;
                            let cocido = ingrediente.cocido;
                            let total = Number(bruto) * Number(cantidad);
                            hojaImpresionContainer.innerHTML += ` <section class="receta-item">
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
