import styles from "./Navbar.module.css"
import Link from "next/link"

export const Navbar = () => {
    return <nav className={styles.nav}>
        <Link href="/home"><h1 className={styles.app_title}>Grocery Hut</h1></Link>
        <ul className={styles.list}>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/signup">SignUp</Link></li>
        </ul>
    </nav>
}