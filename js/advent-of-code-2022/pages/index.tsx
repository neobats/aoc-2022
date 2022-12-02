import Link from "next/link";
import { Layout } from "../components/templates/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout title="Advent of Code 2022">
    <div className={styles.container}>
        <p className={styles.description}>Get started by picking a day.</p>

        <div className={styles.grid}>
          <Link href="/1">
            <h2>Day 1 &rarr;</h2>
            <p>
              Find the elf carrying the most calories. How many calories is that
              elf carrying?
            </p>
          </Link>

          <Link href="/2" className={styles.card}>
            <h2>Day 2 &rarr;</h2>
            <p>description coming</p>
          </Link>

          <Link href="/3" className={styles.card}>
            <h2>Day 3 &rarr;</h2>
            <p>description coming</p>
          </Link>

          <Link href="/4" className={styles.card}>
            <h2>Day 4 &rarr;</h2>
            <p>description coming</p>
          </Link>

          <Link href="/5" className={styles.card}>
            <h2>Day 5 &rarr;</h2>
            <p>description coming</p>
          </Link>

          <Link href="/6" className={styles.card}>
            <h2>Day 6 &rarr;</h2>
            <p>description coming</p>
          </Link>

          <Link href="/7" className={styles.card}>
            <h2>Day 7 &rarr;</h2>
            <p>description coming</p>
          </Link>

          <Link href="/8" className={styles.card}>
            <h2>Day 8 &rarr;</h2>
            <p>description coming</p>
          </Link>
        </div>
    </div>
    </Layout>
  );
}
