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

    }

    let string_continuar = prompt("Desea seguir agregando productos? (s/n)").toLowerCase();

    if (string_continuar === "n" || string_continuar === "no"){
        continuar = false;
    } else if (string_continuar != "s" && string_continuar !="n"){
        alert("Ingrese opcion correcta");
    }

} while (continuar === true);

alert("Gracias por su compra");

//clases

function Carrito(){
    this.productos = [];

    this.agregarProducto = function(producto){
        this.productos.push(producto);
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

    //funciones propias
    this.calcularTotal = function(){
        return this._precio * this._cantidad;
    }
}