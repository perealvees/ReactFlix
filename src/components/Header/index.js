import styles from "./Header.module.css"
function Header (){
    return (
        <header className={styles.header}>
            <span>ReactFlix</span>
            <nav>
                <a href="#">Início</a>
                <a href="#">Assistir</a>
            </nav>
        </header>
    )
}

export default Header;