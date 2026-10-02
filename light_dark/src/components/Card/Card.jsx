import styles from "./Card.module.css";

function Card() {
    return (
        <div className={styles.card}>
            <h2>Painel Principal</h2>
            <p>Card principal para mudança de tema</p>
            <p>O tema atual é claro</p>
            <input type="text" placeholder="Digite algo" />
        </div>
    )
}

export default Card;