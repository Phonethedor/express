function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

const productos = [];
productos.push(new Producto("Leche", 1000));
productos.push(new Producto("Pan de Molde", 2000));
productos.push(new Producto("Queso", 1200));
productos.push(new Producto("Mermelada", 890));
productos.push(new Producto("Azucar", 1300));

//TODO agregar inicio de ciclo para agregar productos

//TODO agregar ciclo para agregar productos al carrito

alert("Productos disponibles: \n1. Leche $1000\n2. Pan de Molde $2000\n3. Queso $1200\n4. Mermelada $890\n5. Azucar $1300");

let num_producto = promp("Ingrese el número del producto que desea agregar al carrito");

//TODO agregar validaciones

function Carrito(productos){
    this.productos = productos;

    this.agregarProducto = function( cantidad, producto, precio){
        for (let i = 0; i < cantidad; i++) {
            this.productos.push(new Producto(producto, precio));
        }
    }

    this.total = function(){
        let total = 0;
        this.productos.forEach(producto => {
            total += producto.precio;
        });
        return total;
    }

    this.detalle = function(){
        this.productos.forEach(producto => {
            console.log(producto.nombre + " $" + producto.precio);
        });
    }

}