import { useState, useEffect } from 'react';

export default function useValidation(stateInicial, validar, fn) {

    const [valores, guardarValores] = useState(stateInicial);
    const [error, guardarError] = useState({});
    const [submitForm, guardarSubmitForm] = useState(false);
    const [saludo, guardarSaludo] = useState({});

    useEffect(()=>{
        if(submitForm){
            const noErrores = Object.keys(error).length === 0;
            if(noErrores){
                fn(); // Fn = a la función que se jecuta en el componente
            }
            guardarSubmitForm(false);
        }
    }, [error]);

    // Función que se ejecuta conforme el usuario escribe algo
    const handelChange = e =>{
        guardarValores({
            ...valores,
            [e.target.name] : e.target.value
        });
    }

    // Función que se ejecuta cuando el usuario hae submit
    const handelSubmit = e =>{
        e.preventDefault();
        const erroresValidacion = validar(valores);
        guardarError(erroresValidacion.errores);
        guardarSubmitForm(true);
    }

    const handelBlur = () => {
        const reconocidos = validar(valores);
        guardarSaludo(reconocidos.saludo);
    }

    return {
        valores,
        error,
        saludo,
        handelSubmit,
        handelChange,
        handelBlur
    };
}