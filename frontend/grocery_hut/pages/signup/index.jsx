import Link from "next/link"
import { useState } from "react"

//
import styles from "./signup.module.css"
import { Navbar } from "../../comp"

const signup = () => {
    const [username, setUsername] = useState('')  // the value can't be undefined or null
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    console.log({
        username,
        email,
        password
    })

    return <div>
        <Navbar />
        <div className={styles.form_container}>
            <form className={styles.form}>
                <label className={styles.label}>
                    <p>Username</p>
                    <input
                        className={styles.input}
                        type="text"
                        name="username"
                        placeholder="Enter username"
                        value={username}  // ...force the input's value to match the state variable...
                        onChange={(event) => setUsername(event.target.value)}  // ... and update the state variable on any edits
                    />
                </label>
                <label className={styles.label}>
                    <p>Email</p>
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
                <button className={styles.button} type="submit">Sign Up</button>
                <p className={styles.no_account}>Already have an account? <Link href="/login">Login</Link></p>
            </form>
        </div>
    </div>
}

export default signup