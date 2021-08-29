import styles from '../../styles/ui/Boton.module.css';
import Link from 'next/link';

const Boton = props => {

    return ( 
        <>
                {props.tipo === "botonNav" ?  
                (<button type="button" className={styles.botonNav}>      
                <Link href={props.ruta ? props.ruta : "/"}>{props.nombre}</Link>
                </button>) : 
                (<button type="button" className={styles.boton}>      
                <Link href={props.ruta ? props.ruta : "/"}>{props.nombre}</Link>
                </button>) 
                }
        </>
        );
}
 
export default Boton;