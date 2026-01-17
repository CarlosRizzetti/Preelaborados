import { Masa } from "../JSON/MASA.js";
import { MasaDeChocolate } from "../JSON/MASA_DE_CHOCOLATE.js";
import { recetas } from "../JSON/CUADRADITOS.js";
import { header, hojaImpresionContainer, inputCantidadMasa, contenedorMain } from "./CONST.js";
import { mostrarRecetaDeMasa } from "./FUCIONES.js";


 let cantidadCuadraditos;

document.addEventListener("DOMContentLoaded", () => {    
    const params = new URLSearchParams(window.location.search);
    const sector = params.get("sector");   
    header.innerHTML = `<section id="titulo-receta">Receta de ${sector}</section    > 
    <button onclick="window.print()" id="btnImprimir">Imprimir</button> `;

     if (sector === "Masa") {
        Masa.forEach(ingrediente => {
            hojaImpresionContainer.innerHTML += `
                <section class="receta-item">
                    <label>${ingrediente.nombre}</label> 
                    <p>${ingrediente.cantidad}</p>
                </section>
                `;
        });
        mostrarRecetaDeMasa(inputCantidadMasa);
    }
    if (sector === "Masa de chocolate") {
        MasaDeChocolate.forEach(ingrediente => {
            hojaImpresionContainer.innerHTML += `
                <section class="receta-item">
                    <label>${ingrediente.nombre}</label> 
                    <p>${ingrediente.cantidad}</p>
                </section>
                `;
        });
        mostrarRecetaDeMasa(inputCantidadMasa);
    }
  

    if (sector === "Cuadraditos") {
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
                                  <h3>RELLENO PARA CUADRADITOS DE&nbsp ${e.target.id} </h3> &nbsp    <p> ${e.target.value}&nbspUnid </p>
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
});