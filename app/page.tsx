import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>Ξ2T</h1>
      </div>

      <div className={styles.grid}>
        <h2>DAO Designer</h2>
        <h2>Token Engineer</h2>
        <h2>Protocol Specialist</h2>
      </div>

      <div className={styles.grid}>
        <a
          href="https://docs.earth2travis.com/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Mountains of Markdown may eventually end up here</p>
        </a>

        <a
          href="https://blog.earth2travis.com/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Blog <span>-&gt;</span>
          </h2>
          <p>There may be a day when I actually write some shit</p>
        </a>
      </div>
    </main>
  );
}
