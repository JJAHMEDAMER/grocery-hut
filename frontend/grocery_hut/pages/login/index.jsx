import styles from "./login.module.css"

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
        </form>
    </div>
}

export default login