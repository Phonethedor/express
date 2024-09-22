import { Producto } from "./producto.js";
import { Carrito } from "./carrito.js";

const productos = [];
productos.push(new Producto("Leche", 1000));
productos.push(new Producto("Pan de Molde", 2000));
productos.push(new Producto("Queso", 1200));
productos.push(new Producto("Mermelada", 890));
productos.push(new Producto("Azucar", 1300));

const carrito = new Carrito(productos);
console.log("test carrito")
console.log(carrito);
let continuar = true;


do {
        
    alert("Productos disponibles: \n1. Leche $1000\n2. Pan de Molde $2000\n3. Queso $1200\n4. Mermelada $890\n5. Azucar $1300");

    let num_producto = prompt("Ingrese el número del producto que desea agregar al carrito");

    if (num_producto != "1" || num_producto != "2" || num_producto != "3" || num_producto != "4" || num_producto != "5"){
        alert("Ingrese un número de producto válido");
    }else {
        let unidades = prompt("Ingrese la cantidad de unidades que desea agregar al carrito");

        if (isNaN(unidades)){
            alert("Ingrese un número válido");
        } else {
            let producto = productos[parseInt(num_producto) - 1];
            carrito.agregarProducto(parseInt(unidades), producto.nombre, producto.precio);
        }
    }

    let string_continuar = prompt("Desea seguir agregando productos? (s/n)");

    if (string_continuar === "n"){
        continuar = false;
        console.log(continuar);
    } else if (string_continuar != "s" && string_continuar !="n"){
        alert("Ingrese opcion correcta");
    }

} while (continuar === true);

alert("Gracias por su compra");