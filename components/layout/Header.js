import React from 'react';
import Navegacion from './Navegacion';
import Link from 'next/link';
import styles from '../../styles/Header.module.css';
import Image from 'next/image';
import Boton from '../ui/Boton';

const Header = () => {
    return ( 
        <header className={styles.header}>
            <div className={styles.contenedorHeader}>
                <div>
                    <span className={styles.logo}>
                    <Link href="/"><Image src="/favicon.ico" alt="Beer" width={32} height={32} /></Link>
                        
                    </span>
                    {/* buscador aquí */}
                   <Navegacion>
                   
                   </Navegacion>
                </div>
                <div>
                
                <p>Hola Usuario</p>
                <Boton 
                    nombre="Cerrar Sesión" 
                    clase="botonMarron"
                    >
                </Boton>
                <Link href="/">Login</Link>
                </div>
            </div>
        </header>
     );
}
 
export default Header;