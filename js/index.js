import { header } from "./CONST.js";
import { Masa } from "../JSON/MASA.js";
import { MasaDeChocolate } from "../JSON/MASA_DE_CHOCOLATE.js";
import { MASA_DE_RAVIOLES } from "../JSON/MASA_PARA_PASTAS.js";
import { MASA_DE_PASCUALINA } from "../JSON/MASA_PARA_PASCUALINAS.js";
import { gelatinas } from "../JSON/GELATINAS.js";
import { postres } from "../JSON/POSTRES.js";
import { flanesReceta } from "../JSON/FLANES.js";
import { budines } from "../JSON/BUDINES.js";
import { recetas as cuadraditos } from "../JSON/CUADRADITOS.js";
import { rellenosParaPastas } from "../JSON/RELLENO_PARA_PASTAS.js";

// Función para extraer todos los ingredientes únicos
function obtenerIngredientesUnicos() {
    const datasets = [Masa, MasaDeChocolate, MASA_DE_RAVIOLES, MASA_DE_PASCUALINA, gelatinas, postres, flanesReceta, budines, cuadraditos, rellenosParaPastas];
    const ingredientsSet = new Set();

    function extract(obj) {
        if (Array.isArray(obj)) {
            obj.forEach(extract);
        } else if (typeof obj === 'object' && obj !== null) {
            if (obj.nombre && typeof obj.nombre === 'string') {
                ingredientsSet.add(obj.nombre.trim());
            }
            Object.entries(obj).forEach(([key, value]) => {
                // Ignorar el procedimiento o descripciones largas
                if (key !== 'Procedimiento' && key !== 'procedimiento') {
                    extract(value);
                }
            });
        }
    }

    datasets.forEach(extract);
    return Array.from(ingredientsSet).sort((a, b) => a.localeCompare(b));
}

const contenedorMain = document.getElementById('contenedor-main');
const btn = document.querySelectorAll('button');

btn.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (button.id === 'Pasteleria') {
            contenedorMain.innerHTML = `
            <button id="recetas-container_Cuadraditos"><a href="hojaDeImpresion.html?sector=Cuadraditos" target="_blank">Cuadraditos</a></button></button>
            <button id="recetas-container_Budines"><a href="hojaDeImpresion.html?sector=Budines" target="_blank">Budines</a></button></button>
            <button id="recetas-container_Masa"><a href="hojaDeImpresion.html?sector=Masa" target="_blank">Masa</a></button>
            <button id="recetas-container_Masa de chocolate"><a href="hojaDeImpresion.html?sector=Masa de chocolate" target="_blank">Masa de chocolate</a></button></button>
            `;
            header.innerHTML += `<button id="btn-reinicio"><a href="index.html">Inicio</a></button>`;
        }
        if (button.id === 'Pastas') {
            contenedorMain.innerHTML = `
            <button id="recetas-container_Rellenos para pastas"><a href="hojaDeImpresion.html?sector=Rellenos para pastas" target="_blank">Rellenos para pastas</a></button></button>
            <button id="recetas-container_Masa_Ravioles"><a href="hojaDeImpresion.html?sector=Masa de Ravioles" target="_blank">Masa para ravioles</a></button>
            <button id="recetas-container_Masa_Pascualina"><a href="hojaDeImpresion.html?sector=Masa de Pascualina" target="_blank">Masa para pascualina</a></button>            
            `;
            header.innerHTML += `<button id="btn-reinicio"><a href="index.html">Inicio</a></button>`;
        }
        if (button.id === 'Flanes') {
            contenedorMain.innerHTML = `
            <button id="recetas-container_Flanes"><a href="hojaDeImpresion.html?sector=Flanes" target="_blank">Flanes</a></button>
            <button id="recetas-container_Gelatinas"><a href="hojaDeImpresion.html?sector=Gelatinas" target="_blank">Gelatinas</a></button>
            <button id="recetas-container_Postres"><a href="hojaDeImpresion.html?sector=Postres" target="_blank">Postres</a></button>
               
            `;
            header.innerHTML += `<button id="btn-reinicio"><a href="index.html">Inicio</a></button>`;
        }

        if (button.id === 'AgregarProducto') {
            const ingredientes = obtenerIngredientesUnicos();
            let optionsHTML = ingredientes.map(ing => `<option value="${ing}">${ing}</option>`).join('');

            contenedorMain.innerHTML = `
            <div id="form-agregar-producto" class="form-container">
                <h2 class="form-title">Agregar Nuevo Producto</h2>
                
                <div class="form-group">
                    <label class="form-label">Categoría:</label>
                    <select id="nueva-categoria" class="form-select">
                        <option value="">-- Elige una categoría --</option>
                        <option value="Pasteleria">Pastelería</option>
                        <option value="Pastas">Pastas</option>
                        <option value="Flanes y Postres">Flanes & Postres</option>
                        <option value="Sandwicheria">Sandwichería</option>
                    </select>
                </div>

                <div class="form-group">
                    <label class="form-label">Subcategoría:</label>
                    <select id="nueva-subcategoria" class="form-select" disabled>
                        <option value="">-- Primero elige una categoría --</option>
                    </select>
                </div>

                <div class="form-group">
                    <label class="form-label">Nombre del Producto:</label>
                    <input type="text" id="nuevo-nombre" class="form-input" placeholder="Ej: Tarta de Manzana">
                </div>
                
                <div class="form-group">
                    <label class="form-label">Seleccionar Ingredientes:</label>
                    <div class="input-group">
                        <select id="nuevo-ingrediente" class="form-select">
                            <option value="">-- Elige un ingrediente --</option>
                            ${optionsHTML}
                        </select>
                        <button id="btn-add-ingrediente" class="btn btn-success">Añadir</button>
                    </div>
                </div>

                <ul id="lista-ingredientes-nuevos" class="ingredientes-list">
                    <p class="ingredientes-empty">No hay ingredientes agregados</p>
                </ul>

                <button id="btn-guardar-producto" class="btn btn-primary">Guardar Producto en el Archivo js</button>
                <p id="msg-exito" class="msg-feedback msg-success" style="display:none;">¡Producto guardado exitosamente!</p>
                <p id="msg-error" class="msg-feedback msg-error" style="display:none;"></p>
            </div>
            `;
            header.innerHTML += `<button id="btn-reinicio" class="btn btn-success" style="margin-top:20px; font-size:1.2rem; cursor:pointer; text-decoration:none;"><a href="index.html" style="color:inherit;text-decoration:none;">⬅ Volver al Inicio</a></button>`;

            // Lógica para selects dependientes
            const subcategoriasMap = {
                "Pasteleria": ["Cuadraditos", "Budines", "Masa", "Masa de chocolate"],
                "Pastas": ["Rellenos para pastas", "Masa para ravioles", "Masa para pascualina"],
                "Flanes y Postres": ["Flanes", "Gelatinas", "Postres"],
                "Sandwicheria": ["Sandwicheria general"]
            };

            const selectCat = document.getElementById('nueva-categoria');
            const selectSub = document.getElementById('nueva-subcategoria');

            selectCat.addEventListener('change', () => {
                const cat = selectCat.value;
                if (cat && subcategoriasMap[cat]) {
                    selectSub.disabled = false;
                    selectSub.innerHTML = subcategoriasMap[cat].map(sub => `<option value="${sub}">${sub}</option>`).join('');
                } else {
                    selectSub.disabled = true;
                    selectSub.innerHTML = '<option value="">-- Primero elige una categoría --</option>';
                }
            });

            // Lógica para el formulario
            const btnAdd = document.getElementById('btn-add-ingrediente');
            const selectIng = document.getElementById('nuevo-ingrediente');
            const listaIng = document.getElementById('lista-ingredientes-nuevos');
            const inputNombre = document.getElementById('nuevo-nombre');
            const btnGuardar = document.getElementById('btn-guardar-producto');
            const msgExito = document.getElementById('msg-exito');
            const msgError = document.getElementById('msg-error');

            let ingredientesAgregados = [];

            btnAdd.addEventListener('click', (ev) => {
                ev.preventDefault();
                const ingVal = selectIng.value;
                if (ingVal && !ingredientesAgregados.includes(ingVal)) {
                    ingredientesAgregados.push(ingVal);
                    renderListaIngredientes();
                }
            });

            function renderListaIngredientes() {
                if (ingredientesAgregados.length === 0) {
                    listaIng.innerHTML = '<p class="ingredientes-empty">No hay ingredientes agregados</p>';
                    return;
                }
                listaIng.innerHTML = ingredientesAgregados.map((ing, idx) => `
                    <li class="ingrediente-item">
                        <span>${ing}</span>
                        <span data-idx="${idx}" class="remove-ing">✖</span>
                    </li>
                `).join('');

                document.querySelectorAll('.remove-ing').forEach(el => {
                    el.addEventListener('click', (ev) => {
                        const i = ev.target.getAttribute('data-idx');
                        ingredientesAgregados.splice(i, 1);
                        renderListaIngredientes();
                    });
                });
            }

            btnGuardar.addEventListener('click', async (ev) => {
                ev.preventDefault();
                const categoria = selectCat.value;
                const subcategoria = selectSub.value;
                const nombre = inputNombre.value.trim();

                if (!categoria || !subcategoria) {
                    alert("Por favor elige la Categoría y Subcategoría.");
                    return;
                }
                if (!nombre) {
                    alert("Por favor ingresa un nombre para el producto.");
                    return;
                }

                msgError.style.display = 'none';
                msgExito.style.display = 'none';

                // Determinar las keys con mayúsculas/minúsculas según la subcategoría
                const isUppercaseObj = subcategoria === "Cuadraditos"; // CUADRADITOS usa "Mercaderia" y "Ingredientes"

                const propMercaderia = isUppercaseObj ? "Mercaderia" : "mercaderia";
                const propIngredientes = isUppercaseObj ? "Ingredientes" : "ingredientes";

                const nuevoProducto = {
                    [propMercaderia]: nombre,
                    [propIngredientes]: ingredientesAgregados.map(ing => ({
                        nombre: ing,
                        // Estos campos son de ejemplo, dependiendo de la categoría varían, los inicializamos en cero.
                        bruto: 0,
                        limpio: 0,
                        cocido: 0,
                        cantidad: 0
                    }))
                };

                // Enviar a nuestro servidor local
                try {
                    const response = await fetch('http://localhost:3000/api/guardar_producto', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            categoria,
                            subcategoria,
                            producto: nuevoProducto
                        })
                    });

                    const data = await response.json();

                    if (response.ok) {
                        // Limpiar form
                        inputNombre.value = '';
                        ingredientesAgregados = [];
                        selectIng.value = '';
                        selectCat.value = '';
                        selectSub.innerHTML = '<option value="">-- Primero elige una categoría --</option>';
                        selectSub.disabled = true;
                        renderListaIngredientes();

                        msgExito.style.display = 'block';
                        setTimeout(() => { msgExito.style.display = 'none'; }, 3000);
                    } else {
                        throw new Error(data.error || "Error al guardar");
                    }
                } catch (error) {
                    console.error("Error al guardar:", error);
                    msgError.textContent = "Error de conexión o escritura. ¿Está el servidor corriendo en el puerto 3000? Detalles: " + error.message;
                    msgError.style.display = 'block';
                }
            });
        }
    });
});