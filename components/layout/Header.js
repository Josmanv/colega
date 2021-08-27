import React from 'react';
import Navegacion from './Navegacion';
import styles from '../../styles/Header.module.css';

import Boton from '../ui/Boton';

const Header = () => {


    const usuario = false;

    return ( 
        <header className={styles.header}>
            <div className={styles.contenedorHeader}>
                <div>
                {usuario ? (
                    <>
                    <p>Hola Usuario</p>

                    <Boton 
                        nombre="Cerrar Sesión" 
                        >
                    </Boton>
                    
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