import React from 'react';
import Navegacion from './Navegacion';
import Link from 'next/link';


const Header = () => {
    return ( 
        <header>
            <div>
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