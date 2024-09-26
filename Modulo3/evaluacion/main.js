let id_producto = 1;

const leche = new Producto("Leche", 1000);
const pan = new Producto("Pan de Molde", 2000);
const queso = new Producto("Queso", 1200);
const mermelada = new Producto("Mermelada", 890);
const azucar = new Producto("Azucar", 1300);

const carrito = new Carrito();
let continuar = true;

console.log(leche.id());
console.log(pan.id());
console.log(queso.id());
console.log(mermelada.id());
console.log(azucar.id());

do {
        
    alert("Productos disponibles: \n1. Leche $1000\n2. Pan de Molde $2000\n3. Queso $1200\n4. Mermelada $890\n5. Azucar $1300");

    let num_producto = prompt("Ingrese el número del producto que desea agregar al carrito");

    switch (num_producto) {
        case "1":
            let cantidad_leche = prompt("Ingrese la cantidad de leche que desea comprar");
            if (isNaN(cantidad_leche)){
                alert("Ingrese un número");
            } else if (cantidad_leche <= 0){
                alert("Ingrese una cantidad válida");
            } else if(leche.cantidad() > 0){
                leche.setCantidad(leche.cantidad() + cantidad_leche);
                alert(`ha agregado ${cantidad_leche} unidad/es de leche al carrito`);
                break;
            } else {
                leche.setCantidad(cantidad_leche);
                carrito.agregarProducto(leche);
                alert(`ha agregado ${cantidad_leche} unidad/es de leche al carrito`);
                break;
            }
        case "2":
            let cantidad_pan = prompt("Ingrese la cantidad de pan de molde que desea comprar");
            if (isNaN(cantidad_pan)){
                alert("Ingrese un número");
            } else if (cantidad_pan <= 0){
                alert("Ingrese una cantidad válida");
            } else if(pan.cantidad() > 0){
                pan.setCantidad(pan.cantidad() + cantidad_pan);
                alert(`ha agregado ${cantidad_pan} unidad/es de pan de molde al carrito`);
                break;
            } else {
                pan.setCantidad(cantidad_pan);
                carrito.agregarProducto(pan);
                alert(`ha agregado ${cantidad_pan} unidad/es de pan de molde al carrito`);
                break;
            }
        case "3":
            let cantidad_queso = prompt("Ingrese la cantidad de queso que desea comprar");
            if (isNaN(cantidad_queso)){
                alert("Ingrese un número");
            } else if (cantidad_queso <= 0){
                alert("Ingrese una cantidad válida");
            } else if(queso.cantidad() > 0){
                queso.setCantidad(queso.cantidad() + cantidad_queso);
                alert(`ha agregado ${cantidad_queso} unidad/es de queso al carrito`);
                break;
            } else {
                queso.setCantidad(cantidad_queso);
                carrito.agregarProducto(queso);
                alert(`ha agregado ${cantidad_queso} unidad/es de queso al carrito`);
                break;
            }
        case "4":
            let cantidad_mermelada = prompt("Ingrese la cantidad de mermelada que desea comprar");
            if (isNaN(cantidad_mermelada)){
                alert("Ingrese un número");
            } else if (cantidad_mermelada <= 0){
                alert("Ingrese una cantidad válida");
            } else if(mermelada.cantidad() > 0){
                mermelada.setCantidad(mermelada.cantidad() + cantidad_mermelada);
                alert(`ha agregado ${cantidad_mermelada} unidad/es de mermelada al carrito`);
                break;
            } else {
                mermelada.setCantidad(cantidad_mermelada);
                carrito.agregarProducto(mermelada);
                alert(`ha agregado ${cantidad_mermelada} unidad/es de mermelada al carrito`);
                break;
            }
        case "5":
            let cantidad_azucar = prompt("Ingrese la cantidad de azucar que desea comprar");
            if (isNaN(cantidad_azucar)){
                alert("Ingrese un número");
            } else if (cantidad_azucar <= 0){
                alert("Ingrese una cantidad válida");
            } else if(azucar.cantidad() > 0){
                azucar.setCantidad(azucar.cantidad() + cantidad_azucar);
                alert(`ha agregado ${cantidad_azucar} unidad/es de azucar al carrito`);
                break;
            } else {
                azucar.setCantidad(cantidad_azucar);
                carrito.agregarProducto(azucar);
                alert(`ha agregado ${cantidad_azucar} unidad/es de azucar al carrito`);
                break;
            }
        default:
            alert("Ingrese una opción válida");
    }

    let string_continuar = prompt("Desea seguir agregando productos? (s/n)").toLowerCase();

    if (string_continuar === "n"){
        continuar = false;
    } else if (string_continuar != "s" && string_continuar !="n"){
        alert("Ingrese opcion correcta");
    }

} while (continuar === true);

let total = "";
let id = 1;

while (id <= carrito.productos.length){
    total += `Producto ${carrito.productos[id-1].id()}: ${carrito.productos[id-1].nombre()} - Cantidad: ${carrito.productos[id-1].cantidad()} - Total: $${carrito.productos[id-1].calcularTotal()}\n`;
    id++;
}

total += `-----------------------------------------------------\n\nTotal final: $${carrito.productos.reduce((total, producto) => total + producto.calcularTotal(), 0)}`;

alert(total);
alert("Gracias por su compra");

//clases

function Carrito(){
    this.productos = [];

    this.agregarProducto = function(producto){
        this.productos.push(producto);
    }

    //funcion propia
    this.encontrarProducto = function(id){
        return this.productos.find(producto => producto.id() === id);
    }

}

function Producto(nombre, precio){
    this._id = id_producto++;
    this._nombre = nombre;
    this._precio = precio;
    this._cantidad = 0;

    //getters
    this.id = function(){
        return this._id;
    }

    this.nombre = function(){
        return this._nombre;
    }

    this.precio = function(){
        return this._precio;
    }

    this.cantidad = function(){
        return this._cantidad;
    }

    //setters
    this.setNombre = function(nombre){
        this._nombre = nombre;
    }

    this.setPrecio = function(precio){
        this._precio = precio;
    }

    this.setCantidad = function(cantidad){
        this._cantidad = cantidad;
    }

    //funcion propia
    this.calcularTotal = function(){
        return this._precio * this._cantidad;
    }
}