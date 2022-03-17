const btn_Enviar = document.getElementById("btn-enviar");

const validarNombre = (elemento, tipo) =>{
    const validar = /[A-Z]+/i;
    let nombre = elemento.value;
    if(validar.test(nombre)){
        nombre = nombre.toLowerCase();
        nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
        console.log(nombre);
    } else {
        alert(`Coloque un ${tipo} válido.`);
        elemento.focus();
    }
}

validarNumero = (elemento, atributo) =>{
    let validar;
    switch(atributo){
        case "dni": 
            validar = /\d{8}/;
            break;
        case "cuit":
            validar = /\d{2}-\d{8}-\d/;
            break;
        case "telefono":
             validar = /\d{3}\s\d{3}\s\d{4}/;
             break;
             default: valor = false;
    }
    if(validar.test(elemento.value)) console.log("Ok");
    else {
        alert(`Ingrese un ${atributo} válido`);
        elemento.focus();
    }
}


btn_Enviar.addEventListener("click",()=>{
    validarNombre(document.getElementById("form-nombre"), "nombre");
    validarNombre(document.getElementById("form-apellido"), "apellido");
    validarNumero(document.getElementById("form-dni"), "dni");
    validarNumero(document.getElementById("form-cuit"), "cuit");
    validarNumero(document.getElementById("form-celular"), "telefono");
});