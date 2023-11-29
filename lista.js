let listaProductos = localStorage.getItem("Gastos")
listaProductos = JSON.parse(listaProductos)

let listaContainer = document.getElementById("listaContainer")



function crearTarjetas(productos){
    productos.forEach(gasto => {
        const card = document.createElement("div")
        card.innerHTML =`<h2>${gasto.nombre}</h2>
                        <p>El gasto es de $${gasto.monto}</p>
                        <p>Fecha: ${gasto.fecha}</p>`
        listaContainer.appendChild(card)
    });

}

crearTarjetas(listaProductos)