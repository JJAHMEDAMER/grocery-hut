import styles from "./Navbar.module.css"

export const Navbar = () => {
    return <nav className={styles.nav}>
        <h1 className={styles.app_title}>Grocery Hut</h1>
        <ul className={styles.list}>
            <li>Login</li>
            <li>SignUp</li>
        </ul>
    </nav>
}