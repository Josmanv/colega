export default function validarLogin(valores){
    let errores = {};

    // Validación para el nombre de usuario
    if(!valores.usuario){
        errores.usuario = "Haz el favorcico de añadir algo, es que no sabes escribir?";
    }

    if(!valores.password){
        errores.password = "No creo que la contraseña vacía sea la mejor opción, no?";
    }else if(valores.password.length < 6) {
        errores.password = "La contreña debe tener más de 5 caracteres";
    }

    return errores;

}