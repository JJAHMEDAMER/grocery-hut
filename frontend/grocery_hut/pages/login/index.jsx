import Link from "next/link"
import { useState } from "react"


//
import styles from "./login.module.css"
import { Navbar } from "../../comp"

const login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    console.log({
        email,
        password
    })

    return <div>
        <Navbar />
        <div className={styles.form_container}>
            <form className={styles.form}>
                <label className={styles.label}>
                    <p>Email/Username</p>
                    <input
                        className={styles.input}
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>
                <label className={styles.label}>
                    <p>Password</p>
                    <input
                        className={styles.input}
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </label>

                <button className={styles.button} type="submit">LogIn</button>
                <p className={styles.no_account}>Don't Have an account? <Link href="/signup">SignUp</Link></p>
            </form>
        </div>
    </div>
}

export default login