import React from 'react';
import styles from '../../styles/LayoutLogin.module.css';
import Header from './Header';

const LayoutLogin = props => {
    return ( 
        <>
        <Header></Header>
        <main className={styles.main}>
        <h1 className={styles.title}>Día del Colega 2021</h1>
            {props.children}  
        </main>
        <footer className={styles.footer}>Día del &copy;olega 2021 - Nos reservamos todos los derechos </footer>
        </> 
        );
}
 
export default LayoutLogin;