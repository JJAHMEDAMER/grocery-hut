import styles from "./login.module.css"
import Link from "next/link"

const login = () => {
    return <div className={styles.form_container}>
        <form className={styles.form}>
            <div className={styles.section}>
                <label htmlFor="email" className={styles.label}>Email/Username</label>
                <input className={styles.input} type="email" name="email" placeholder="Enter your email or username" />
            </div>
            <div className={styles.section}>
                <label htmlFor="password" className={styles.label}>Password</label>
                <input className={styles.input} type="password" name="password" placeholder="Enter your password" />
            </div>

            <button className={styles.button} type="submit">LogIn</button>
            <p className={styles.no_account}>Don't Have an account? <Link href="/signup">SignUp</Link></p>
        </form>
    </div>
}

export default login