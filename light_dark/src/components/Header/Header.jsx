import styles from "./Header.module.css";
import { FiSun, FiMoon } from "react-icons/fi";

function Header({ onToggleTheme, theme }) {
  return (
    <header className={styles.header}>
      <h2>Sistema Dark-Light</h2>
      <button onClick={onToggleTheme}>
        {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
        {theme === "dark" ? "Tema Claro" : "Tema Escuro"}
      </button>
    </header>
  );
}

export default Header;
