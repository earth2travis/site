import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <h2>DAO Designer</h2>
        <h2>Token Engineer</h2>
        <h2>Protocol Specialist</h2>
      </div>
    </main>
  );
}
