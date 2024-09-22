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