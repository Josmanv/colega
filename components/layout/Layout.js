import React from 'react';
import styles from '../../styles/Layout.module.css';
import Header from './Header';

const Layout = props => {
    return ( 
        <>
        <Header></Header>
        <main className={styles.main}>
        <h1 className={styles.title}>Bienvenidos al día del colega 2021</h1>
            {props.children}  
        </main>
        </> 
        );
}
 
export default Layout;