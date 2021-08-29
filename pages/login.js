import LayoutLogin from '../components/layout/LayoutLogin';
import styles from '../styles/Login.module.css';
import Head from 'next/head';
import useValidation from '../hooks/useValidation';
import validarLogin from '../validacion/validarLogin';
import firebase from '../firebase';

export default function login() {

    const STATE_INICIAL = {
        usuario: "",
        password: ""
    }

    const { valores, error, saludo, handelSubmit, handelChange, handelBlur} = useValidation(STATE_INICIAL, validarLogin, loguear);

    const {usuario, password} = valores;


    function loguear(){
        console.log("logueando...");
        firebase.loguear(usuario, password);
    }

    return (
        <div>

        <Head>
            <title>Logueate anda</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link href="https://fonts.googleapis.com/css2?family=Kaisei+HarunoUmi:wght@400;500&display=swap" rel="stylesheet" />
        </Head>
            
            <LayoutLogin>
            
            <form 
                className={styles.formulario}
                onSubmit={handelSubmit}
                >
                <div>
                    <label htmlFor="usuario">Usuario</label>
                    <input 
                        type="text" 
                        id="usuario" 
                        placeholder="Usuario" 
                        name="usuario" 
                        value={usuario} 
                        onChange={handelChange}
                        onBlur={handelBlur} />
                </div>

                {error.usuario && <p className={styles.error}>{error.usuario}</p>}
                {saludo.saludar && <p className={styles.saludo}>{saludo.saludar}</p>}


                <div>
                    <label htmlFor="password">Santo y seña</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="password" 
                        name="password" 
                        value={password} 
                        onChange={handelChange} />
                </div>    

                {error.password && <p className={styles.error}>{error.password}</p>}
                <div>
                    <input type="submit" value="Llamoalguien?" />
                </div>
            </form>
            
            </LayoutLogin>
        </div>
        
        
        )
}