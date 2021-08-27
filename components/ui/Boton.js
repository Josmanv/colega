import styles from '../../styles/ui/Boton.module.css';

const Boton = props => {

    console.log(props);

    return ( 
        <button type="button" className={styles.boton}>{props.nombre}</button>
        );
}
 
export default Boton;