import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1>Protect your data everywhere</h1>
                <p>
                    ShieldTrust helps enterprises secure sensitive data across cloud,
                    endpoints, and users.
                </p>
                <button className={styles.cta}>Get Started</button>
            </div>
        </section>
    )
}