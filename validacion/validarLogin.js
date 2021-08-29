export default function validarLogin(valores){
    let errores = {};
    let saludo = {};

    // Validación para el nombre de usuario
    if(!valores.usuario){
        errores.usuario = "Haz el favorcico de añadir algo, es que no sabes escribir?";
    }

    switch (valores.usuario.toLowerCase()) {
        case "jose":
            saludo.saludar = "Hombre Josete...";
            break;
        case "miguel":
            saludo.saludar = "Miguelete Miguelete...";
            break;
        case "peña":
            saludo.saludar = "Venga pa dentro pillín";
            break;
        case "hector":
            saludo.saludar = "Ay Huerta!! Tú por aquí?";
            break;
        case "bayona":
            saludo.saludar = "Venga Bayona, cierra la puerta al entrar";
            break;
        case "ivan":
            saludo.saludar = "Estás seguro iván?";
            break;
        case "oscar":
            saludo.saludar = "Acho pijo, si ya sabía yo que tú no podías faltar!";
            break;
        case "alfaro":
            saludo.saludar = "Venga Alfarete, deja un rato el fogón y dale un poco al porrón";
            break;
        case "fidel":
            saludo.saludar = "Espero que te hayas dejado el mechero en casa";
            break;  
        case "chapa":
            saludo.saludar = "Ahí tú! chapate ahí!";
            break; 
        case "moti":
            saludo.saludar = "Hombre, tú por aquí? entra pillín!";
            break;
        case "juanmi":
            saludo.saludar = "Hombre, tú por aquí? entra pillín!";
            break;
        case "coci":
            saludo.saludar = "Hombre, tú por aquí? pero te deja la novia?";
            break;
        case "dani":
            saludo.saludar = "Puto Dani...";
            break;
        case "barbas":
            saludo.saludar = "Hombre, tú por aquí? entra pillín!";
            break;
        case "tore":
            saludo.saludar = "Y tú quién chorras eres?";
            break;
        case "javi":
            saludo.saludar = "Hombre, tú por aquí? entra pillín!";
            break;
        case "fran":
            saludo.saludar = "Hombre, tú por aquí? entra pillín!";
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