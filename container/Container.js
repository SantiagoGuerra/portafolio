import Head from 'next/head';
import NavigationBar from '../components/NavigationBar';

const Container = (props) => {

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Paytone+One&family=Poppins:wght@400;600&display=swap" rel="stylesheet"></link>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      </Head>

      <NavigationBar />
      <main>
        {props.children}
      </main>
      
    </>
  )
}

export default Container