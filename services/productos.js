//GET

const listaProductos = () =>{
    fetch('http://localhost:3000/productos')
    .then(response => response.json())
    .catch(error => console.log(error))
}

export const productosServicios = { listaProductos }   