import Head from "next/head"
import Link from "next/link"
import { ReactNode } from "react"
import styles from "../../styles/Layout.module.css"
import { Emoji } from "../atoms/Emoji"

type Props = {
  children: ReactNode
  title: string
}
export const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Solutions to Advent of Code 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.nav}>
        <ul>
          <li><Link href="/">Home</Link></li>
        </ul>
      </nav>
      <header className={styles.header}>
        <h1>{title}</h1>
      </header>
      <main className={styles.main}>
      {children}
      </main>
      <footer className={styles.footer}>
        <p>
          Made with{" "}
          <Emoji symbol="0️⃣" label="zero" />s{" "}
          and{" "}
          <Emoji symbol="1️⃣" label="one" />s{" "}
          in the JAX metro.
          </p>
      </footer>
    </>
  )
}