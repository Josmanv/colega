import React, {useContext} from 'react';
import Navegacion from './Navegacion';
import styles from '../../styles/Header.module.css';
import stylesBoton from '../../styles/ui/Boton.module.css';

import Boton from '../ui/Boton';
import { FirebaseContext } from '../../firebase';

const Header = () => {

    async function cerrarSesion(e){
        await firebase.cerrarSesion();       
    }

    const {usuario, firebase} = useContext(FirebaseContext);

    return ( 
        <header className={styles.header}>
            <div className={styles.contenedorHeader}>
                <div>
                {usuario ? (
                    <>
                    <p>Hola {usuario.email}</p>

                    <button 
                    nombre="Cerrar Sesión" 
                    className={stylesBoton.boton}
                    onClick={cerrarSesion}>
                    Cerrar sesión
                   </button>
                    
                    </>
                ) : (
                    <>
                    <Boton 
                        nombre="Entra pa entro"
                        ruta = "/login"
                        >
                    </Boton>
                    </>
                )}
                </div>
                <div>
                <Navegacion></Navegacion>
             </div>
            </div>
        </header>
     );
}
 
export default Header;