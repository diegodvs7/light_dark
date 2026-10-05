import styles from "./Header.module.css";
import { FiSun } from 'react-icons/fi';

function Header() {
    return (
        <header className={styles.header}>
            <h2>Sistema Light/Dark</h2>
            <button> <FiSun size={16} /> Trocar Tema</button>
                
        </header>

        
    )
}

export default Header;