import styles from "./Navbar.module.css"

import Link from "next/link"

export const Navbar = () => {
    return <nav className={styles.nav}>
        <h1 className={styles.app_title}>Grocery Hut</h1>
        <ul className={styles.list}>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/login">SignUp</Link></li>
        </ul>
    </nav>
}