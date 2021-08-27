import Head from 'next/head';
// import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Layout from '../components/layout/Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Día del Colega 2021</title>
        <meta name="description" content="App para la asistencia del día del Colega 2021" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link href="https://fonts.googleapis.com/css2?family=Kaisei+HarunoUmi:wght@400;500&display=swap" rel="stylesheet" />
      </Head>

      
      <Layout></Layout>
    </div>
  )
}
