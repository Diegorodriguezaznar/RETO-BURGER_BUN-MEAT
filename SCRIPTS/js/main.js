import { ProductoService } from "./api/movieService.js";
import { ProductoComponent } from "./components/movieComponent.js";

const appContainer = document.getElementById("app");

async function cargarProductosBM() {
  const productos = await ProductoService.listarPeliculas();
  productos.forEach((productoData) => {
    const productoComponent = new ProductoComponent(productoData);
    const productoElement = productoComponent.render();
    appContainer.appendChild(productoElement);
  });
}

window.addEventListener("load", cargarProductosBM);
