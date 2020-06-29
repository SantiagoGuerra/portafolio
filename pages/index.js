import Head from 'next/head'
import Container from '../container/Container';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Santiago Portafolio | Full-stack Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>      

      <Container>
        <h2>
          Index
        </h2>
      </Container>

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

        :root {
          --head-font-fam: 'Paytone One', sans-serif;
          --font-fam: 'Poppins', sans-serif;
          --dark-color: #1C1B20;
          --main-color: #FC5957;
        }
      `}</style>
    </div>
  )
}
