import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <h2>Sistema Light/Dark</h2>
            <button>Trocar Tema</button>
                
        </header>

        
    )
}

export default Header;