import React from 'react';
import Navegacion from './Navegacion';
import Link from 'next/link';
import styles from '../../styles/Header.module.css';


const Header = () => {
    return ( 
        <header className={styles.header}>
            <div className={styles.contenedorHeader}>
                <div>
                    <p>P</p>
                    {/* buscador aquí */}
                   <Navegacion>
                   
                   </Navegacion>
                </div>
                <div>
                
                <p>Hola Usuario</p>
                <button type="button">Cerrar Sesión</button>
                <Link href="/">Login</Link>
                </div>
            </div>
        </header>
     );
}
 
export default Header;