import Head from 'next/head'
import Container from '../container/Container';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Santiago Portafolio | Full-stack Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>      

      <Container>
        <AboutMe />
        <Projects />
        <Contact />
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
          scroll-behavior: smooth;
        }

        *,
        *::before,
        *::after {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        :root {
          --head-font-fam: 'Paytone One', sans-serif;
          --font-fam: 'Poppins', sans-serif;
          --dark-color: #1C1B20;
          --main-color: #FC5957;
          --dark-gray-color: #959595;
        }

        .container {
          width: 100%;
          margin: auto;
          max-width: 1114px;
        }

        h2 {
          font-weight: 300;
        }
      `}</style>
    </div>
  )
}
