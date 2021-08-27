import styles from '../../styles/ui/Boton.module.css';
import Link from 'next/link';

const Boton = props => {

    console.log(props);

    return ( 
      <button type="button" className={styles.boton}>
        
            <Link href={props.ruta ? props.ruta : "/"}>{props.nombre}</Link>
        </button>
        );
}
 
export default Boton;