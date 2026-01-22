import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <span className={styles.brand}>ShieldTrust</span>
      </nav>
    </header>
  );
}
