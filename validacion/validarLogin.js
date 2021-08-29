export default function validarLogin(valores){
    let errores = {};
    let saludo = {};

    // Validación para el nombre de usuario
    if(!valores.usuario){
        errores.usuario = "Haz el favorcico de añadir algo, es que no sabes escribir?";
    }

    switch (valores.usuario.toLowerCase()) {
        case "jose":
            saludo.saludar = "Hombre josete";
            break;
    
        default:
            break;
    }

    if(!valores.password){
        errores.password = "No creo que la contraseña vacía sea la mejor opción, no?";
    }else if(valores.password.length < 6) {
        errores.password = "La contreña debe tener más de 5 caracteres";
    }

    return {errores, saludo};

}