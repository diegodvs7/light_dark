import styles from "./Card.module.css";
import { useState } from "react";

function Card( { theme } ) {

    const [texto, setTexto] = useState('');

    
    return (
        <div className={styles.card}>
            <h2>Card Principal</h2>
            <p>Card para mudança de tema</p>
            <p>O tema atual é: {theme === 'dark' ? 'Escuro' : 'Claro'}</p>
            <input type="text" placeholder="Digite algo" value={texto} onChange={(e) => setTexto(e.target.value)} />
            { texto && <p>Você digitou: {texto}</p> }
        </div>
    )
}

export default Card;