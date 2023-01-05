import styles from "./signup.module.css"

const signup = () => {
    return <div className={styles.form_container}>
        <form className={styles.form}>
            <div className={styles.section}>
                <label htmlFor="username" className={styles.label}>Username</label>
                <input className={styles.input} type="text" name="username" placeholder="Enter username" />
            </div>
            <div className={styles.section}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input className={styles.input} type="email" name="email" placeholder="Enter your email" />
            </div>
            <div className={styles.section}>
                <label htmlFor="password" className={styles.label}>Password</label>
                <input className={styles.input} type="password" name="password" placeholder="Enter your password" />
            </div>
            <button className={styles.button} type="submit">Sign Up</button>
        </form>
    </div>
}

export default signup