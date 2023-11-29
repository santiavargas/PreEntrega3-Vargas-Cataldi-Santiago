
let botonGuardar = document.getElementById("buttonGuardar")
let gastosContainer = document.getElementById("gastosContainer")

let gastos
const gastosLS = localStorage.getItem("Gastos")

if(gastosLS){
    gastos = JSON.parse(gastosLS)
} else { 
    gastos = []
}

class gasto {
    constructor (nombre, fecha, monto){
        this.nombre = nombre
        this.fecha = fecha
        this. monto = monto
    }
}


botonGuardar.onclick = () => {
    const producto = new gasto(document.getElementById("inputText").value, document.getElementById("inputDate").value, document.getElementById("inputNumber").value)
    gastos.push(producto)
    console.log(gastos)
    localStorage.setItem("Gastos", JSON.stringify(gastos))
    
}




