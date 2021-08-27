import Layout from '../components/layout/Layout';
import styles from '../styles/Layout.module.css';
import Head from 'next/head';

export default function votar() {
    return (
        <div>

        <Head>
            <title>Estás dentro del Día del Colega 2021</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link href="https://fonts.googleapis.com/css2?family=Kaisei+HarunoUmi:wght@400;500&display=swap" rel="stylesheet" />
        </Head>
            
            <Layout>
            <h2 className={styles.h2}>Votaciones al colega del año</h2>
            
            </Layout>
        </div>
        
        
        )
}