let id_producto = 0;

function Producto(nombre, precio){
    this._id = id_producto++;
    this._nombre = nombre;
    this._precio = precio;
    this._cantidad = 0;

    //getters
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