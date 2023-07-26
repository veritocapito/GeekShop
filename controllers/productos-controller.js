const nuevoProducto = (id, nombre, precio, detalle, imagen) => {
    const card = document.createElement('div')
    card.classList.add('products__line-container')
    const contenido = `
    <div class="products__card">
        <figure><img src="./assets/img/cat1_1.png" alt="producto"></figure>
        <p>Producto XYZ</p>
        <p>$ 60,00</p>
        <a href="#">Ver producto</a>
    </div>
    `
}