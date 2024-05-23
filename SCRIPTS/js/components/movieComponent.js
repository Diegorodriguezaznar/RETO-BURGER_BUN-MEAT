export class ProductoComponent {
    constructor(producto) {
        this.producto = producto;
    }

    render() {
        const productoElement = document.createElement('div');
        productoElement.classList.add('Producto');
        productoElement.innerHTML = `
        <div class="menu-1">
                <img src="${this.producto.IMAGEN}" alt="menu1" class="menu-img">
                <p>${this.producto.NOMBRE}</p>
                <p class="precio">${this.producto.PRECIO}</p>
                <div class="descripcion">${this.producto.DESCRIPCION}</div>
                <button class="comprar-btn">Comprar</button>
        </div>
        `;
        return productoElement;
    }
}