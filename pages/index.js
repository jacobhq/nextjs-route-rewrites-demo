import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs rewrites demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the nextjs rewrites demo
        </h1>

        <p className={styles.description}>
        Rewrites act as a URL proxy and mask the destination path, making it appear the user hasn&apos;t changed their location on the site.
        </p>

        <div className={styles.grid}>
          <Link href="/es/nosotros">
            <a className={styles.card}>
              <h2>Go to rewrite &rarr;</h2>
              <p>Rewrites allow you to map an incoming request path to a different destination path.</p>
            </a>
          </Link>

          <Link href="/es/about-us">
            <a className={styles.card}>
              <h2>Go to original page &rarr;</h2>
              <p>The original page that the rewrite is mapped to.</p>
            </a>
          </Link>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
