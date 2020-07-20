import Head from 'next/head';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

const Container = (props) => {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link href="https://fonts.googleapis.com/css2?family=Paytone+One&family=Poppins:wght@400;600&display=swap" rel="stylesheet"></link>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      </Head>

      <NavigationBar />
        <main>
          {props.children}
        </main>

      <Footer/>

      
    </>
  )
}

export default Container