import React from 'react';
import Navegacion from './Navegacion';
import styles from '../../styles/Header.module.css';

import Boton from '../ui/Boton';

const Header = () => {


    const usuario = true;

    return ( 
        <header className={styles.header}>
            <div className={styles.contenedorHeader}>
                <div>
                   <Navegacion></Navegacion>
                </div>
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
                        nombre="Inicia Sesión"
                        ruta = "/"
                        >
                    </Boton>
                    </>
                )}
                
                
                
                </div>
            </div>
        </header>
     );
}
 
export default Header;