const BTN_ENVIAR = document.getElementById("btn_enviar");

BTN_ENVIAR.addEventListener("click", contacto_enviar);

function contacto_enviar(){
    let asunto = document.getElementById("asunto").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let contenido = document.getElementById("contenido").value.trim();
    
    let error_asunto = comprobar(asunto);
    let error_correo = comprobar(correo);
    let error_contenido = comprobar(contenido);

    let contiene_errores = false;

    if (error_asunto === true){
        alert("Problemas en apartado asunto");
        contiene_errores = true;
    }

    if (error_correo === true){
        alert("Problemas en apartado correo");
        contiene_errores = true;
    }   

    if (error_contenido === true){
        alert("Problemas en apartado mensaje");
        contiene_errores = true;
    }

    if (contiene_errores === false){
        alert("Mensaje enviado correctamente");
    }else{
        alert("Error al enviar mensaje");
    }
}

function comprobar(argumento){
    if (argumento === '' || argumento === null){
        return true;
    } else {
        return false;
    }
}
