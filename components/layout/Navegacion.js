import React from 'react';
import Boton from '../ui/Boton';
import styles from '../../styles/Navegacion.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Navegacion = () => {

    const usuario = true;  

    return ( 
        
            <nav>
            {usuario ? (
                <>
                <span className={styles.logo}>
                <Link href="/"><Image src="/favicon.ico" alt="Beer" width={32} height={32} /></Link>
                    
                </span>
                <Boton nombre="Inicio" ruta = "/" tipo = "botonNav"></Boton>
                <Boton nombre="Votar" ruta = "/votar" ></Boton>
                </>
                ) : (
                <>
                    <h2 className={styles.h2}>Día del Colega 2021</h2>
                </>
                )}
            </nav>

       
     );
}
 
export default Navegacion;