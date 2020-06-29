import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Santiago Portafolio | Full-stack Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>      

      <style jsx>{`
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
